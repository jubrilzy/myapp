'use client';

import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('biz-theme') : null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biz-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    const nav = document.getElementById('mainNav');
    const onScroll = () => {
      if (!nav) return;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      nav.style.background =
        window.scrollY > 10 ? (isDark ? 'rgba(10,10,15,0.96)' : 'rgba(248,248,245,0.96)') : '';
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      revealObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <nav id="mainNav">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">🛍️</div>
          Biz<em>shop</em>
        </a>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#spotlight">Solutions</a></li>
          <li><a href="#how">How it Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
          <a href="/login" className="btn btn-ghost">Log in</a>
          <a href="/register" className="btn btn-primary">Start Free Trial</a>
        </div>
        <button className="hamburger" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          <span style={open ? { transform: 'rotate(45deg) translate(5px,5px)' } : undefined} />
          <span style={open ? { opacity: 0 } : undefined} />
          <span style={open ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : undefined} />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a href="#features" onClick={() => setOpen(false)}>Features</a>
        <a href="#spotlight" onClick={() => setOpen(false)}>Solutions</a>
        <a href="#how" onClick={() => setOpen(false)}>How it Works</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <div className="mobile-cta">
          <a href="/login" className="btn btn-ghost btn-lg">Log in</a>
          <a href="/register" className="btn btn-primary btn-lg" style={{ justifyContent: 'center' }}>Start Free Trial</a>
        </div>
      </div>

      <section className="hero">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div style={{ width: '100%' }}>
          <div className="hero-inner">
            <div className="badge"><span className="badge-dot" />Built for Nigerian Businesses</div>
            <h1>Grow Your Business.<br /><em>Sell Without Limits.</em></h1>
            <p className="hero-sub">One powerful platform to manage your inventory, process orders, accept Naira payments, and run your entire business — online and in-store.</p>
            <div className="hero-cta">
              <a href="/register" className="btn btn-primary btn-lg">Start Free Trial</a>
              <a href="#pricing" className="btn btn-outline-lime btn-lg">See Pricing</a>
            </div>
            <div className="hero-trust">No credit card required · Free 14-day trial · Cancel anytime</div>
          </div>
          <div className="store-preview">
            <div className="preview-browser">
              <div className="browser-bar">
                <div className="browser-dots"><span /><span /><span /></div>
                <div className="browser-url">bizshop.ng/fashionbyamaka</div>
              </div>
              <div className="browser-content">
                <div className="product-card"><div className="product-img c1">👗</div><div className="product-info"><div className="product-name">Ankara Maxi Dress</div><div className="product-price">₦12,500</div><div className="product-badge">🔥 12 sold</div></div></div>
                <div className="product-card"><div className="product-img c2">👟</div><div className="product-info"><div className="product-name">Classic Sneakers</div><div className="product-price">₦22,000</div><div className="product-badge">✅ In stock</div></div></div>
                <div className="product-card"><div className="product-img c3">👜</div><div className="product-info"><div className="product-name">Leather Handbag</div><div className="product-price">₦35,000</div><div className="product-badge">⚡ 4 left</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="logos-strip">
        <span className="logos-strip-label">Trusted payments via</span>
        <div className="logo-pill"><div className="logo-pill-icon" style={{ background: '#0066cc', color: 'white', borderRadius: '50%' }}>P</div>Paystack</div>
        <div className="logo-pill"><div className="logo-pill-icon" style={{ background: '#f5a623', color: 'white' }}>F</div>Flutterwave</div>
        <div className="logo-pill"><div className="logo-pill-icon" style={{ background: '#1e8449', color: 'white', borderRadius: '50%' }}>🏦</div>Bank Transfer</div>
        <div className="logo-pill"><div className="logo-pill-icon" style={{ background: '#333', color: 'white', borderRadius: '50%' }}>📱</div>Mobile Banking</div>
      </div>

      <section className="why" id="features">
        <div className="why-inner">
          <div className="why-header reveal">
            <div className="section-label">Why Bizshop</div>
            <h2 className="section-title">Everything you need.<br />Nothing you don&apos;t.</h2>
            <p className="section-desc">Stop doing business blindly. Bizshop gives you full visibility, powerful tools, and the confidence to scale.</p>
          </div>
          <div className="stats-row reveal">
            <div className="stat-item"><span className="stat-num">24/7</span><div className="stat-label">Your store stays open — always</div></div>
            <div className="stat-item"><span className="stat-num">∞</span><div className="stat-label">Unlimited products, no caps</div></div>
            <div className="stat-item"><span className="stat-num">₦+$</span><div className="stat-label">Naira & Dollar payments</div></div>
            <div className="stat-item"><span className="stat-num">1 app</span><div className="stat-label">Online store + physical store</div></div>
          </div>
          <div className="why-grid">
            <div className="why-item reveal"><div className="why-icon">🌐</div><h3>Sell Anytime, Anywhere</h3><p>Your store never sleeps. Customers browse, add to cart, and pay — without a single WhatsApp message from you.</p></div>
            <div className="why-item reveal reveal-delay-1"><div className="why-icon">⚡</div><h3>One Powerful Dashboard</h3><p>Add products, process orders, manage customers, and track sales — all from one clean, intuitive interface built for speed.</p></div>
            <div className="why-item reveal reveal-delay-2"><div className="why-icon">₦</div><h3>Local & International Payments</h3><p>Get paid in Naira or US Dollars. Set up payment alerts for your team. Inventory auto-updates on every order.</p></div>
            <div className="why-item reveal reveal-delay-3"><div className="why-icon">📱</div><h3>Built for Mobile, Made to Convert</h3><p>Every Bizshop store loads fast and looks stunning on any screen — driving more sales with less friction.</p></div>
          </div>
        </div>
      </section>

      <section className="spotlight" id="spotlight">
        <div className="spotlight-inner">
          <div className="spotlight-row reveal"><div className="spotlight-text"><div className="section-label">Online Store</div><h3>Your business deserves<br />a real website.</h3><p>Launch a professional ecommerce store built to sell. Add products in minutes, run discount campaigns, connect shipping, and plug in ad pixels and analytics — all without writing a single line of code.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>🛍️</span><div className="visual-tag">Your store is live</div></div></div></div>
          <div className="spotlight-row reverse reveal"><div className="spotlight-text"><div className="section-label">Invoicing & Records</div><h3>Never lose a sale record again.</h3><p>Create professional invoices, send instant receipts, log every sale, and track your expenses — all inside Bizshop. No more messy notebooks, scattered spreadsheets, or missing payment confirmations.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>🧾</span><div className="visual-tag">Invoice sent ✓</div></div></div></div>
          <div className="spotlight-row reveal"><div className="spotlight-text"><div className="section-label">Analytics</div><h3>Know your numbers.<br />Beat your competition.</h3><p>Bizshop Analytics surfaces data your competitors can&apos;t see — your profit margins, average spend per customer, best-selling products, website traffic, and exactly what&apos;s driving your growth.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>📊</span><div className="visual-tag">Growth metrics live</div></div></div></div>
          <div className="spotlight-row reverse reveal"><div className="spotlight-text"><div className="section-label">Customer Management</div><h3>Keep your customers<br />coming back.</h3><p>Store every customer&apos;s purchase history, shipping address, and contact details in one organised place. Use that data for targeted marketing and loyalty offers.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>👥</span><div className="visual-tag">156 loyal customers</div></div></div></div>
          <div className="spotlight-row reveal"><div className="spotlight-text"><div className="section-label">Physical Store</div><h3>Turn your shop into<br />a smart store.</h3><p>Generate barcodes, enable in-store checkout, and keep your online and physical inventory perfectly synced.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>🏪</span><div className="visual-tag">Online + In-store synced</div></div></div></div>
          <div className="spotlight-row reverse reveal"><div className="spotlight-text"><div className="section-label">Multi-Location</div><h3>Run multiple stores.<br />One dashboard.</h3><p>Monitor staff activity, track sales, manage inventory, and review analytics across all your locations in real time.</p><a href="#" className="btn btn-outline-lime">Learn More →</a></div><div className="spotlight-visual"><div className="visual-inner"><span>🗺️</span><div className="visual-tag">3 stores. 1 dashboard.</div></div></div></div>
        </div>
      </section>

      <section className="features">
        <div className="features-inner">
          <div className="features-header">
            <div className="reveal"><div className="section-label">All Features</div><h2 className="section-title">One app.<br />Every tool you need.</h2></div>
            <p className="section-desc reveal" style={{ maxWidth: 300 }}>Built specifically for Nigerian businesses that are serious about growth.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal"><span className="feat-icon">🚀</span><h3>Store Ready in Minutes</h3><p>No coding. No agency fees. Sign up, add your products, and start selling the same day.</p><div className="feat-check">Zero setup required</div></div>
            <div className="feature-card reveal reveal-delay-1"><span className="feat-icon">📦</span><h3>Unlimited Products</h3><p>List everything you sell — no caps, no extra charges.</p><div className="feat-check">No listing limits ever</div></div>
            <div className="feature-card reveal reveal-delay-2"><span className="feat-icon">📋</span><h3>Smart Order Management</h3><p>Track every order in real time from placement to delivery.</p><div className="feat-check">Real-time tracking</div></div>
            <div className="feature-card reveal"><span className="feat-icon">🔒</span><h3>Secure, Trusted Checkout</h3><p>Powered by Paystack and Flutterwave — Nigeria&apos;s reliable payments.</p><div className="feat-check">Bank-level security</div></div>
            <div className="feature-card reveal reveal-delay-1"><span className="feat-icon">🎨</span><h3>Full Brand Customisation</h3><p>Upload your logo, set your colours, and build your brand experience.</p><div className="feat-check">Your brand, your identity</div></div>
            <div className="feature-card reveal reveal-delay-2"><span className="feat-icon">⚙️</span><h3>Automated Order Processing</h3><p>Order confirmations, stock deductions, and payment alerts run smoothly.</p><div className="feat-check">Work smarter, not harder</div></div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="how-inner">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }} className="reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="section-title">Three steps to your<br />first sale.</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>Simple enough for anyone. Powerful enough for serious businesses.</p>
          </div>
          <div className="how-steps">
            <div className="how-step reveal"><div className="step-num">1</div><h3>Sign Up & Build Your Store</h3><p>Create your account in seconds, choose your store name, and you&apos;re live.</p></div>
            <div className="how-step reveal reveal-delay-1"><div className="step-num">2</div><h3>Add Products & Set Prices</h3><p>Upload photos, write descriptions, and set your prices in Naira.</p></div>
            <div className="how-step reveal reveal-delay-2"><div className="step-num">3</div><h3>Share Your Link & Get Paid</h3><p>Post your store URL. Customers visit, shop, and pay.</p></div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-inner">
          <div className="pricing-header reveal">
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Clear, honest pricing.</h2>
            <p className="section-desc">Billed in Naira. No hidden fees. Upgrade or cancel whenever you want.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal"><span className="plan-icon">🏁</span><div className="plan-name">Starter</div><div className="plan-desc">Perfect for new businesses launching their first online store.</div><div className="plan-price"><span className="amount">₦10k</span><span className="cycle">/ quarter</span></div><div className="plan-monthly">That&apos;s ₦3,333 per month</div><a href="/register" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: 13 }}>Get Started</a></div>
            <div className="pricing-card popular reveal reveal-delay-1"><span className="popular-tag">Most Popular</span><span className="plan-icon">📈</span><div className="plan-name">Pro</div><div className="plan-desc">For growing businesses that need more power and customer tools.</div><div className="plan-price"><span className="amount">₦25k</span><span className="cycle">/ quarter</span></div><div className="plan-monthly">That&apos;s ₦8,333 per month</div><a href="/register" className="btn-popular">Get Started</a></div>
            <div className="pricing-card reveal reveal-delay-2"><span className="plan-icon">🚀</span><div className="plan-name">Business</div><div className="plan-desc">For serious brands and scaling teams that demand the best.</div><div className="plan-price"><span className="amount">₦50k</span><span className="cycle">/ quarter</span></div><div className="plan-monthly">That&apos;s ₦16,667 per month</div><a href="/register" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: 13 }}>Get Started</a></div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="testimonials-inner">
          <div className="testimonials-header">
            <div className="reveal"><div className="section-label">Testimonials</div><h2 className="section-title">Nigerian business owners<br />are already winning.</h2></div>
          </div>
          <div className="testimonials-grid">
            <div className="testi-card reveal"><div className="stars">★★★★★</div><blockquote>&quot;Bizshop helped me launch my fashion store in less than a week.&quot;</blockquote></div>
            <div className="testi-card reveal reveal-delay-1"><div className="stars">★★★★★</div><blockquote>&quot;Simple, clean, and does exactly what I need.&quot;</blockquote></div>
            <div className="testi-card reveal reveal-delay-2"><div className="stars">★★★★★</div><blockquote>&quot;The analytics alone are worth every kobo.&quot;</blockquote></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner reveal">
          <div className="section-label">Get Started</div>
          <h2 className="section-title">Your store is<br />one click away.</h2>
          <p className="section-desc">Join thousands of Nigerian entrepreneurs already running smarter businesses on Bizshop.</p>
          <div className="cta-btns">
            <a href="/register" className="btn btn-primary btn-lg">Start Free Trial</a>
            <a href="#pricing" className="btn btn-outline-lime btn-lg">View Pricing</a>
          </div>
          <p className="cta-note">No credit card required · Free 14-day trial · Cancel anytime</p>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-logo">🛍️ Biz<em>shop</em></div>
          <div className="footer-links"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#">Support</a></div>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>🇳🇬 Made for Nigeria</div>
        </div>
        <div className="footer-copy">© 2025 Bizshop. All rights reserved. Powering Nigerian ecommerce, one store at a time.</div>
      </footer>
    </>
  );
}
