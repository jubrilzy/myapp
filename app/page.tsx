import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '₦10k',
    cycle: '/ quarter',
    monthly: "That's ₦3,333 per month",
    description: 'Perfect for new businesses launching their first online store.',
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Pro',
    price: '₦25k',
    cycle: '/ quarter',
    monthly: "That's ₦8,333 per month",
    description: 'For growing businesses that need more power and customer tools.',
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '₦50k',
    cycle: '/ quarter',
    monthly: "That's ₦16,667 per month",
    description: 'For serious brands and scaling teams that demand the best.',
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
        <div className="nav-right">
          <Link className="btn btn-ghost" href="/login">Log in</Link>
          <Link className="btn btn-primary" href="/register">Start Free Trial</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="hero-inner">
          <div className="badge"><span className="badge-dot" />Built for Nigerian Businesses</div>
          <h1>Grow Your Business. <em>Sell Without Limits.</em></h1>
          <p className="hero-sub">
            One powerful platform to manage your inventory, process orders, accept Naira payments,
            and run your entire business — online and in-store.
          </p>
          <div className="hero-cta">
            <Link href="/register" className="btn btn-primary btn-lg">Start Free Trial</Link>
            <a href="#pricing" className="btn btn-outline-lime btn-lg">See Pricing</a>
          </div>
        </div>
      </section>

      <section className="why container-slim" id="features">
        <h2 className="section-title">Everything you need. Nothing you don&apos;t.</h2>
        <p className="section-desc">Stop doing business blindly. Bizshop gives you full visibility and tools to scale.</p>
        <div className="why-grid" style={{ marginTop: 28 }}>
          <article className="why-item"><h3>Sell Anytime, Anywhere</h3><p>Your store never sleeps. Customers browse and pay instantly.</p></article>
          <article className="why-item"><h3>One Powerful Dashboard</h3><p>Add products, manage orders, customers, and subscription from one interface.</p></article>
          <article className="why-item"><h3>Local & International Payments</h3><p>Accept Naira and global payments via Paystack and Flutterwave.</p></article>
          <article className="why-item"><h3>Mobile-first by default</h3><p>Fast pages and high conversion across mobile and desktop screens.</p></article>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container-slim">
          <h2 className="section-title" style={{ textAlign: 'center' }}>Clear, honest pricing.</h2>
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
          <h2 className="section-title">Your store is one click away.</h2>
          <p className="section-desc">Join Nigerian entrepreneurs already running smarter businesses on Bizshop.</p>
          <div className="cta-btns">
            <Link href="/register" className="btn btn-primary btn-lg">Create your store</Link>
            <Link href="/dashboard" className="btn btn-outline-lime btn-lg">Explore dashboard</Link>
          </div>
        </div>
      </section>
    </>
  );
}
