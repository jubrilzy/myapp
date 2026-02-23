# Multi-Tenant Ecommerce SaaS MVP Architecture

## 1) Backend Folder Structure (Node.js + Express)

```text
backend/
  src/
    app.js
    server.js
    config/
      env.js
      db.js
      cloudinary.js
      paystack.js
      flutterwave.js
    modules/
      auth/
        auth.controller.js
        auth.service.js
        auth.routes.js
        auth.validation.js
      stores/
        stores.controller.js
        stores.service.js
        stores.routes.js
        stores.validation.js
      products/
        products.controller.js
        products.service.js
        products.routes.js
        products.validation.js
      checkout/
        checkout.controller.js
        checkout.service.js
        checkout.routes.js
        checkout.validation.js
      orders/
        orders.controller.js
        orders.service.js
        orders.routes.js
      subscriptions/
        subscriptions.controller.js
        subscriptions.service.js
        subscriptions.routes.js
      webhooks/
        webhooks.controller.js
        webhooks.routes.js
      uploads/
        uploads.controller.js
        uploads.routes.js
    middleware/
      auth.middleware.js
      requireRole.middleware.js
      resolveStoreBySlug.middleware.js
      requireActiveSubscription.middleware.js
      storeOwnership.middleware.js
      rateLimit.middleware.js
      validate.middleware.js
      error.middleware.js
    lib/
      jwt.js
      password.js
      httpErrors.js
      logger.js
    repositories/
      user.repository.js
      store.repository.js
      product.repository.js
      order.repository.js
      subscription.repository.js
    routes/
      index.js
      platform.routes.js
      publicStore.routes.js
    db/
      migrations/
      sql/
        schema.sql
    jobs/
      subscriptionSync.job.js
  package.json
  ecosystem.config.js
  .env.example
```

---

## 2) PostgreSQL Schema SQL (Single DB, `store_id` Isolation)

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(120) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) NOT NULL CHECK (role IN ('platform_admin', 'store_owner')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(140) NOT NULL,
  slug VARCHAR(80) UNIQUE NOT NULL,
  logo_url TEXT,
  primary_color VARCHAR(20),
  subscription_status VARCHAR(20) NOT NULL DEFAULT 'trialing'
    CHECK (subscription_status IN ('trialing', 'active', 'past_due', 'cancelled')),
  trial_ends_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  name VARCHAR(180) NOT NULL,
  description TEXT,
  price NUMERIC(12,2) NOT NULL CHECK (price >= 0),
  image_url TEXT,
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_products_store_id ON products(store_id);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  customer_name VARCHAR(140) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  total_amount NUMERIC(12,2) NOT NULL CHECK (total_amount >= 0),
  payment_reference VARCHAR(120) UNIQUE,
  payment_provider VARCHAR(20) CHECK (payment_provider IN ('paystack', 'flutterwave')),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'failed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_orders_store_id ON orders(store_id);
CREATE INDEX idx_orders_reference ON orders(payment_reference);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  store_id UUID NOT NULL REFERENCES stores(id) ON DELETE CASCADE,
  provider VARCHAR(20) NOT NULL CHECK (provider IN ('paystack', 'flutterwave')),
  provider_subscription_id VARCHAR(140) NOT NULL,
  status VARCHAR(20) NOT NULL,
  renewal_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(provider, provider_subscription_id)
);
CREATE INDEX idx_subscriptions_store_id ON subscriptions(store_id);
```

---

## 3) Express Architecture and Tenant Isolation

- **Module boundary**: controller → service → repository.
- **All store-owned repository queries include `store_id` in `WHERE` clause**.
- **No controller accepts raw `store_id` from client body/query**.
- **Store context comes from**:
  - Authenticated owner routes: derived from `req.user.id -> stores.user_id`.
  - Public store routes: derived from slug via middleware.
- **Recommended query guard pattern**:
  - `UPDATE products SET ... WHERE id = $1 AND store_id = $2`
  - If row count is zero, return 404/403.

---

## 4) Middleware Structure

1. `rateLimit.middleware.js`
   - Applied to `/auth/register` and `/auth/login`.
2. `auth.middleware.js`
   - Verifies JWT and sets `req.user`.
3. `requireRole.middleware.js`
   - Restricts platform admin endpoints.
4. `resolveStoreBySlug.middleware.js`
   - Loads store by `/:slug`, sets `req.store`.
5. `storeOwnership.middleware.js`
   - Resolves owner store by `req.user.id`; sets `req.store`.
6. `requireActiveSubscription.middleware.js`
   - Blocks storefront and checkout if trial expired and not active.
7. `validate.middleware.js`
   - Zod request schema enforcement.
8. `error.middleware.js`
   - Standard API error mapping and logging.

---

## 5) Slug-Based Routing Logic

- Platform routes:
  - `/api/auth/*`
  - `/api/owner/*`
  - `/api/webhooks/*`
- Public store routes:
  - `GET /:slug` → store metadata + product listing.
  - `POST /:slug/checkout` → initialize payment.

Routing order:
1. Mount all `/api` routes first.
2. Mount public slug routes last to avoid collisions.

Pseudo-flow:
1. `/:slug` request enters `resolveStoreBySlug`.
2. Middleware fetches store by slug.
3. `requireActiveSubscription` validates status/trial.
4. Handler returns storefront data.

---

## 6) Subscription Locking Logic

`is_store_accessible` rule:
- Accessible if:
  - `subscription_status = 'active'`, OR
  - `subscription_status = 'trialing'` AND `trial_ends_at > NOW()`.
- Otherwise locked.

When locked:
- Public store endpoints return `402 Payment Required` with `STORE_SUBSCRIPTION_INACTIVE`.
- Owner dashboard remains accessible to allow payment/reactivation.
- Checkout endpoint disabled to prevent new unpaid fulfillment paths.

State updates:
- Webhook events and scheduled reconciliation job update `stores.subscription_status`.

---

## 7) Paystack Integration Structure

Config:
- `PAYSTACK_SECRET_KEY`
- `PAYSTACK_WEBHOOK_SECRET`

Service responsibilities:
1. Initialize transaction for order checkout.
2. Verify transaction server-side before marking order paid.
3. Create/manage recurring subscription plans.
4. Handle webhook events:
   - `charge.success`
   - subscription lifecycle events

Webhook security:
- Verify `x-paystack-signature` using raw request body + secret.
- Reject invalid signatures with 401.
- Ensure idempotency using payment reference uniqueness.

---

## 8) Flutterwave Integration Structure

Config:
- `FLW_SECRET_KEY`
- `FLW_WEBHOOK_SECRET_HASH`

Service responsibilities:
1. Initialize checkout payment link/session.
2. Verify transaction via Flutterwave verify endpoint.
3. Manage subscription status mapping.
4. Handle webhook events for payment/subscription updates.

Webhook security:
- Validate webhook signature/hash headers.
- Enforce idempotent processing by checking `payment_reference`.

---

## 9) Security Controls (MVP Required)

- JWT auth on owner/protected endpoints.
- Password hashing with bcrypt.
- Zod validation for all external payloads.
- Rate limiting on auth endpoints.
- No trust of frontend-provided `store_id`.
- Backend-level store ownership checks on every store-owned query.
- Secrets loaded from environment variables only.
- Webhook signature validation before processing.

---

## 10) VPS Deployment Outline (Linux + Nginx + PM2)

1. **Provision**
   - Ubuntu LTS VPS, non-root deploy user, firewall (UFW), fail2ban.
2. **Runtime**
   - Install Node LTS, PostgreSQL, Nginx, PM2.
3. **Build/Run**
   - Backend on `127.0.0.1:4000` via PM2.
   - Next.js on `127.0.0.1:3000` via PM2 (or `next start`).
4. **Nginx reverse proxy**
   - `location /api` -> backend.
   - `location /` -> Next.js frontend (including slug pages).
5. **TLS**
   - Certbot + auto-renew.
6. **Ops**
   - PM2 startup persistence, log rotation, daily DB backups.
7. **Webhook readiness**
   - Public HTTPS endpoints for `/api/webhooks/paystack` and `/api/webhooks/flutterwave`.

---

## 11) Minimal API Surface (MVP)

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/owner/store` (create one store per user)
- `GET /api/owner/store`
- `POST /api/owner/products`
- `GET /api/owner/products`
- `PATCH /api/owner/products/:productId`
- `GET /:slug`
- `POST /:slug/checkout`
- `POST /api/webhooks/paystack`
- `POST /api/webhooks/flutterwave`

Constraint enforcement:
- One user ↔ one store (`stores.user_id UNIQUE`).
- Single-tenant ownership at query level via `store_id`.
- Subscription lock enforced before storefront/checkout responses.
