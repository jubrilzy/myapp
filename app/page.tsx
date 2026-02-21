import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="container">
      <nav className="nav">
        <strong>StoreBuilder</strong>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link className="btn btn-outline" href="/login">Login</Link>
          <Link className="btn btn-primary" href="/register">Register</Link>
        </div>
      </nav>

      <section className="hero">
        <h1>Launch your ecommerce store in days, not months.</h1>
        <p>
          Multi-tenant SaaS storefronts with secure payments, product catalogs, and subscription locking.
          Build once and scale each merchant at <code>/:slug</code>.
        </p>
        <Link className="btn btn-primary" href="/register">Create your store</Link>
      </section>

      <h2 className="section-title">Pricing</h2>
      <section className="grid pricing">
        <article className="card" style={{ padding: 20 }}>
          <h3>Basic</h3>
          <p style={{ fontSize: 28, margin: '8px 0' }}>$19 / month</p>
          <p style={{ color: 'var(--muted)' }}>1 store owner • Product management • Checkout • Paystack + Flutterwave</p>
          <Link className="btn btn-primary" style={{ marginTop: 12 }} href="/register">Start 7-day Trial</Link>
        </article>
      </section>
    </div>
  );
}
