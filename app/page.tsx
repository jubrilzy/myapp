import Link from 'next/link';

const highlights = [
  { title: 'Sell 24/7', text: 'Your store stays online all day, every day.' },
  { title: 'Get paid in Naira', text: 'Accept payments via Paystack and Flutterwave instantly.' },
  { title: 'Manage from one dashboard', text: 'Products, orders, customers, and subscription in one place.' },
  { title: 'Mobile-ready storefront', text: 'Fast shopping experience that converts on phones.' },
];

const plans = [
  {
    name: 'Starter',
    price: '₦10k',
    cycle: '/ quarter',
    monthly: "That’s ₦3,333 / month",
    description: 'Perfect for first-time sellers.',
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '₦25k',
    cycle: '/ quarter',
    monthly: "That’s ₦8,333 / month",
    description: 'Best for growing stores and teams.',
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '₦50k',
    cycle: '/ quarter',
    monthly: "That’s ₦16,667 / month",
    description: 'For scaling brands with bigger goals.',
    cta: 'Get Started',
    featured: false,
  },
];

export default function LandingPage() {
  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">🛍️</span> Biz<em>shop</em>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#how">How it works</a>
        </div>
        <div className="nav-right">
          <Link className="btn btn-ghost" href="/login">Log in</Link>
          <Link className="btn btn-primary" href="/register">Start Free Trial</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="hero-inner">
          <div className="badge"><span className="badge-dot" />Built for Nigerian businesses</div>
          <h1>Grow your business. <em>Sell without stress.</em></h1>
          <p className="hero-sub">
            Launch your store fast, upload products, receive payments, and manage everything from one clean dashboard.
          </p>
          <div className="hero-cta">
            <Link href="/register" className="btn btn-primary btn-lg">Create My Store</Link>
            <a href="#pricing" className="btn btn-outline-lime btn-lg">View Pricing</a>
          </div>
          <p className="muted" style={{ marginTop: 16 }}>No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      <section className="logos-strip">
        <span>Trusted payments:</span>
        <strong>Paystack</strong>
        <strong>Flutterwave</strong>
        <strong>Bank Transfer</strong>
      </section>

      <section className="container-slim" id="features">
        <h2 className="section-title">Everything you need to sell online.</h2>
        <p className="section-desc">No confusing setup. No extra tools. Just launch and start selling.</p>
        <div className="why-grid" style={{ marginTop: 28 }}>
          {highlights.map((item) => (
            <article key={item.title} className="why-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-slim" id="how">
        <h2 className="section-title">3 easy steps to your first sale.</h2>
        <div className="why-grid" style={{ marginTop: 28 }}>
          <article className="why-item"><h3>1) Create account</h3><p>Sign up and set your store name in minutes.</p></article>
          <article className="why-item"><h3>2) Add products</h3><p>Upload product images, set prices, and publish.</p></article>
          <article className="why-item"><h3>3) Share your link</h3><p>Start taking orders from Instagram, WhatsApp, and more.</p></article>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container-slim">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Simple pricing. No hidden fees.</h2>
          <div className="pricing-grid" style={{ marginTop: 28 }}>
            {plans.map((plan) => (
              <article key={plan.name} className={`pricing-card ${plan.featured ? 'popular' : ''}`}>
                {plan.featured ? <span className="popular-tag">Most Popular</span> : null}
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
                <div className="plan-price"><span className="amount">{plan.price}</span><span className="cycle">{plan.cycle}</span></div>
                <p className="plan-monthly">{plan.monthly}</p>
                <Link href="/register" className={plan.featured ? 'btn-popular' : 'btn btn-ghost'}>{plan.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="section-title">Ready to launch your store?</h2>
          <p className="section-desc">Join sellers using Bizshop to run smarter ecommerce businesses.</p>
          <div className="cta-btns">
            <Link href="/register" className="btn btn-primary btn-lg">Start Free Trial</Link>
            <Link href="/dashboard" className="btn btn-outline-lime btn-lg">See Dashboard</Link>
          </div>
        </div>
      </section>
    </>
  );
}
