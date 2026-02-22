'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

type Step = 1 | 2 | 3 | 4;
type Theme = 'dark' | 'light';

const STEP_LABELS = ['Account Details', 'Business Info', 'Store Setup', 'All Done!'];

export default function RegisterPage() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [goingBack, setGoingBack] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    bizName: '',
    bizType: '',
    bizState: '',
    productCount: '',
    storeSlug: '',
    heardFrom: '',
    acceptUSD: false,
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const cleanSlug = useMemo(
    () =>
      form.storeSlug
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, ''),
    [form.storeSlug],
  );

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('biz-theme') : null;
    if (saved === 'light' || saved === 'dark') setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biz-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!drawerOpen) return;
      const target = e.target as Node;
      if (drawerRef.current?.contains(target)) return;
      if (hamburgerRef.current?.contains(target)) return;
      setDrawerOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [drawerOpen]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const pwdScore = useMemo(() => {
    const v = form.password;
    let s = 0;
    if (v.length >= 8) s++;
    if (/[A-Z]/.test(v)) s++;
    if (/[0-9]/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    return s;
  }, [form.password]);

  const passwordLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][pwdScore] || 'Too short';

  const validateStep = (step: Step) => {
    const nextErrors: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) nextErrors.firstName = 'First name is required';
      if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Please enter a valid email address';
      if (form.phone.replace(/\D/g, '').length < 7) nextErrors.phone = 'Please enter a valid phone number';
      if (form.password.length < 8) nextErrors.password = 'Password must be at least 8 characters';
    }
    if (step === 2) {
      if (!form.bizName.trim()) nextErrors.bizName = 'Business name is required';
      if (!form.bizType) nextErrors.bizType = 'Please select a business type';
    }
    if (step === 3) {
      if (!cleanSlug) nextErrors.storeSlug = 'Please enter a store name';
      if (!form.terms) nextErrors.terms = 'You must agree to the terms to continue';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goToStep = (next: Step) => {
    if (next > currentStep && !validateStep(currentStep)) return;
    setGoingBack(next < currentStep);
    setCurrentStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateField = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const progress = `${(currentStep / 4) * 100}%`;

  return (
    <div className="signup-root">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <nav>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">🛍️</div>
          Biz<span>shop</span>
        </Link>
        <div className="nav-right-group">
          {currentStep === 1 ? (
            <Link href="/login" className="nav-link" id="navLoginLink">
              Already have an account? <span>Log in →</span>
            </Link>
          ) : null}
          <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            ref={hamburgerRef}
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span style={drawerOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined} />
            <span style={drawerOpen ? { opacity: 0 } : undefined} />
            <span style={drawerOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined} />
          </button>
        </div>
      </nav>

      <div ref={drawerRef} className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-drawer-link" onClick={() => setDrawerOpen(false)}>
          Back to Home
        </Link>
        <div className="drawer-cta">
          <Link href="/login" className="drawer-btn drawer-btn-outline" onClick={() => setDrawerOpen(false)}>
            Log in to Bizshop
          </Link>
          <Link href="/register" className="drawer-btn drawer-btn-lime" onClick={() => setDrawerOpen(false)}>
            Create Free Account
          </Link>
        </div>
      </div>

      <main>
        <div className="signup-wrap">
          <div className="progress-header">
            <div className="progress-step-info">
              <span className="progress-label">{STEP_LABELS[currentStep - 1]}</span>
              <span className="progress-count">
                Step <span>{currentStep}</span> of <span>4</span>
              </span>
            </div>
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: progress }} />
            </div>
            <div className="step-dots">
              {['Account', 'Business', 'Store', 'Done'].map((lbl, idx) => {
                const n = idx + 1;
                const done = n < currentStep;
                const active = n === currentStep;
                return (
                  <div key={lbl} className={`step-dot ${done ? 'done' : ''} ${active ? 'active' : ''}`}>
                    {done ? '✓' : n}
                    <span className="step-dot-label">{lbl}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="signup-card">
            <div className={`step-panel ${currentStep === 1 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header">
                <div className="step-badge">Step 1 of 4</div>
                <h2>Create your account</h2>
                <p>Start with your personal details. Takes less than a minute.</p>
              </div>

              <div className="auth-divider">Quick sign up with</div>
              <a href="#" className="oauth-btn" style={{ marginBottom: 20 }}>
                Continue with Google
              </a>
              <div className="auth-divider">or fill in details</div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First name</label>
                  <div className="input-wrap">
                    <input className={`form-input no-icon ${errors.firstName ? 'has-error' : ''}`} placeholder="Amaka" value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} />
                  </div>
                  {errors.firstName ? <div className="form-error show">{errors.firstName}</div> : null}
                </div>
                <div className="form-group">
                  <label className="form-label">Last name</label>
                  <div className="input-wrap">
                    <input className={`form-input no-icon ${errors.lastName ? 'has-error' : ''}`} placeholder="Okonkwo" value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} />
                  </div>
                  {errors.lastName ? <div className="form-error show">{errors.lastName}</div> : null}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email address</label>
                <input className={`form-input no-icon ${errors.email ? 'has-error' : ''}`} placeholder="you@yourbusiness.com" value={form.email} onChange={(e) => updateField('email', e.target.value)} />
                {errors.email ? <div className="form-error show">{errors.email}</div> : null}
              </div>

              <div className="form-group">
                <label className="form-label">Phone number</label>
                <input className={`form-input no-icon ${errors.phone ? 'has-error' : ''}`} placeholder="0801 234 5678" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} />
                {errors.phone ? <div className="form-error show">{errors.phone}</div> : null}
              </div>

              <div className="form-group">
                <label className="form-label">Create password</label>
                <input type="password" className={`form-input no-icon ${errors.password ? 'has-error' : ''}`} placeholder="Min. 8 characters" value={form.password} onChange={(e) => updateField('password', e.target.value)} />
                {form.password ? (
                  <div className="pwd-strength">
                    <div className="pwd-strength-bars">
                      {[1, 2, 3, 4].map((n) => (
                        <div key={n} className={`pwd-bar ${n <= pwdScore ? ['weak', 'fair', 'good', 'strong'][Math.max(0, pwdScore - 1)] : ''}`} />
                      ))}
                    </div>
                    <div className="pwd-strength-label">{passwordLabel}</div>
                  </div>
                ) : null}
                {errors.password ? <div className="form-error show">{errors.password}</div> : null}
              </div>

              <div className="step-actions">
                <button className="btn-next" onClick={() => goToStep(2)}>
                  Continue
                </button>
              </div>

              <div style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--muted)' }}>
                Already have an account?{' '}
                <Link href="/login" style={{ color: 'var(--lime)', fontWeight: 600 }}>
                  Log in →
                </Link>
              </div>
            </div>

            <div className={`step-panel ${currentStep === 2 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header">
                <div className="step-badge">Step 2 of 4</div>
                <h2>Tell us about your business</h2>
                <p>Help us set up the right tools for how you sell.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Business name</label>
                <div className="input-wrap">
                  <span className="input-icon">🏢</span>
                  <input className={`form-input ${errors.bizName ? 'has-error' : ''}`} placeholder="e.g. Amaka Fashion House" value={form.bizName} onChange={(e) => updateField('bizName', e.target.value)} />
                </div>
                {errors.bizName ? <div className="form-error show">{errors.bizName}</div> : null}
              </div>

              <div className="form-group">
                <label className="form-label">What type of business do you run?</label>
                <div className="option-grid">
                  {[
                    ['fashion', '👗', 'Fashion & Apparel', 'Clothing, shoes, accessories'],
                    ['beauty', '💄', 'Beauty & Skincare', 'Cosmetics, skincare, haircare'],
                    ['food', '🍱', 'Food & Drinks', 'Packaged food, beverages, snacks'],
                    ['electronics', '📱', 'Electronics & Gadgets', 'Phones, gadgets, accessories'],
                    ['home', '🏠', 'Home & Living', 'Furniture, décor, kitchenware'],
                    ['other', '✨', 'Other', 'Something else entirely'],
                  ].map(([val, icon, title, desc]) => (
                    <button key={val} type="button" className={`option-tile ${form.bizType === val ? 'selected' : ''}`} onClick={() => updateField('bizType', val)}>
                      <div className="tile-icon">{icon}</div>
                      <div className="tile-title">{title}</div>
                      <div className="tile-desc">{desc}</div>
                    </button>
                  ))}
                </div>
                {errors.bizType ? <div className="form-error show">{errors.bizType}</div> : null}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">State / Location</label>
                  <div className="input-wrap">
                    <span className="input-icon">📍</span>
                    <select className="form-select" value={form.bizState} onChange={(e) => updateField('bizState', e.target.value)}>
                      <option value="">Select your state</option>
                      <option>Lagos</option><option>Abuja (FCT)</option><option>Kano</option>
                      <option>Rivers</option><option>Oyo</option><option>Kaduna</option>
                      <option>Anambra</option><option>Delta</option><option>Edo</option>
                      <option>Ogun</option><option>Imo</option><option>Enugu</option>
                      <option>Cross River</option><option>Kwara</option><option>Borno</option>
                      <option>Akwa Ibom</option><option>Plateau</option><option>Osun</option>
                      <option>Bauchi</option><option>Ondo</option><option>Ekiti</option>
                      <option>Sokoto</option><option>Niger</option><option>Kogi</option>
                      <option>Nassarawa</option><option>Jigawa</option><option>Kebbi</option>
                      <option>Zamfara</option><option>Taraba</option><option>Adamawa</option>
                      <option>Gombe</option><option>Yobe</option><option>Bayelsa</option>
                      <option>Benue</option><option>Ebonyi</option><option>Abia</option>
                      <option>Outside Nigeria</option>
                    </select>
                    <span className="select-arrow">⌄</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">How many products do you sell? <span className="optional">(approx.)</span></label>
                  <div className="input-wrap">
                    <span className="input-icon">📦</span>
                    <select className="form-select" value={form.productCount} onChange={(e) => updateField('productCount', e.target.value)}>
                      <option value="">Select range</option>
                      <option>1–10 products</option>
                      <option>11–50 products</option>
                      <option>51–200 products</option>
                      <option>200+ products</option>
                    </select>
                    <span className="select-arrow">⌄</span>
                  </div>
                </div>
              </div>

              <div className="step-actions">
                <button className="btn-back" onClick={() => goToStep(1)}>
                  Back
                </button>
                <button className="btn-next" onClick={() => goToStep(3)}>
                  Continue
                </button>
              </div>
            </div>

            <div className={`step-panel ${currentStep === 3 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header">
                <div className="step-badge">Step 3 of 4</div>
                <h2>Set up your online store</h2>
                <p>Claim your unique store link and pick your preferred payment method.</p>
              </div>

              <div className="form-group">
                <label className="form-label">Your store URL</label>
                <input className={`form-input no-icon ${errors.storeSlug ? 'has-error' : ''}`} placeholder="yourstorename" value={form.storeSlug} onChange={(e) => updateField('storeSlug', e.target.value)} />
                <div className="slug-preview">
                  <span className="base">bizshop.ng/</span>
                  <span className="slug-val">{cleanSlug || 'yourstorename'}</span>
                </div>
                <div className="form-hint">Only lowercase letters, numbers, and hyphens. E.g. amaka-fashion</div>
                {errors.storeSlug ? <div className="form-error show">{errors.storeSlug}</div> : null}
              </div>

              <div className="form-group">
                <label className="form-label">Preferred payment methods</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <label className="check-item">
                    <input type="checkbox" checked readOnly />
                    <div>
                      <div className="check-item-label">💳 Paystack — Card &amp; Bank Transfer</div>
                      <div className="check-item-sub">Debit cards, bank transfer, USSD</div>
                    </div>
                  </label>
                  <label className="check-item">
                    <input type="checkbox" checked readOnly />
                    <div>
                      <div className="check-item-label">🔀 Flutterwave — Multi-channel</div>
                      <div className="check-item-sub">Cards, mobile money, bank transfers, USD</div>
                    </div>
                  </label>
                  <label className="check-item">
                    <input type="checkbox" checked={form.acceptUSD} onChange={(e) => updateField('acceptUSD', e.target.checked)} />
                    <div>
                      <div className="check-item-label">💵 Accept USD payments</div>
                      <div className="check-item-sub">For international customers (Pro plan &amp; above)</div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">How did you hear about Bizshop? <span className="optional">optional</span></label>
                <select className="form-select" value={form.heardFrom} onChange={(e) => updateField('heardFrom', e.target.value)}>
                  <option value="">Select an option</option>
                  <option>Instagram / Social Media</option>
                  <option>WhatsApp</option>
                  <option>Google Search</option>
                  <option>Friend or Colleague</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="terms-box">
                <input type="checkbox" checked={form.terms} onChange={(e) => updateField('terms', e.target.checked)} />
                <div>
                  By continuing, you agree to the <a href="#">General Terms of Use</a>, <a href="#">Merchant Terms of Use</a> &amp;{' '}
                  <a href="#">General Privacy Policy</a> of Bizshop.
                </div>
              </div>
              {errors.terms ? <div className="form-error show" style={{ marginTop: -12, marginBottom: 16 }}>{errors.terms}</div> : null}

              <div className="step-actions">
                <button className="btn-back" onClick={() => goToStep(2)}>
                  Back
                </button>
                <button className="btn-next" onClick={() => goToStep(4)}>
                  Create My Store 🎉
                </button>
              </div>
            </div>

            <div className={`step-panel ${currentStep === 4 ? 'active' : ''}`}>
              <div className="success-panel show">
                <div className="success-icon">🎉</div>
                <h2>Your store is ready!</h2>
                <p>Welcome to Bizshop! Your account has been created and your store is live. Let us get your first product up.</p>
                <div className="success-checklist">
                  <div className="success-check"><span>✓</span><span>Account created successfully</span></div>
                  <div className="success-check"><span>✓</span><span>Your store URL is live</span></div>
                  <div className="success-check"><span>✓</span><span>Payment methods connected</span></div>
                  <div className="success-check"><span>✓</span><span>14-day free trial started</span></div>
                </div>
                <Link href="/dashboard" className="btn-go">
                  Go to My Dashboard
                </Link>
              </div>
            </div>
          </div>

          <div className={`auth-footer-note ${currentStep === 1 ? '' : 'hidden'}`}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: 'var(--lime)', fontWeight: 600, textDecoration: 'none' }}>
              Log in →
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a> · <a href="#">Merchant Terms</a> · © 2025 Bizshop
      </footer>

      <style jsx>{`
        .signup-root { --ink:#0a0a0f; --surface:#111118; --card:#16161f; --card2:#1c1c28; --border:rgba(255,255,255,.07); --border-hover:rgba(255,255,255,.14); --border-focus:rgba(200,255,0,.4); --border-selected:rgba(200,255,0,.6); --lime:#c8ff00; --lime-dim:#a8d900; --lime-bg:rgba(200,255,0,.08); --lime-bg-strong:rgba(200,255,0,.14); --lime-border:rgba(200,255,0,.2); --white:#f4f4f0; --muted:#7a7a8a; --muted2:#44445a; --error:#ff5566; --error-bg:rgba(255,85,102,.08); --input-bg:rgba(255,255,255,.04); --input-bg-focus:rgba(255,255,255,.06); --progress-track:rgba(255,255,255,.06); background:var(--ink); color:var(--white); font-family:var(--font-dm-sans),'DM Sans',sans-serif; min-height:100svh; position:relative; overflow:hidden; }
        :global([data-theme='light']) .signup-root { --ink:#fafaf8; --surface:#f1f1ee; --card:#fff; --card2:#f7f7f4; --border:rgba(0,0,0,.09); --border-hover:rgba(0,0,0,.18); --border-focus:rgba(95,163,0,.5); --border-selected:rgba(95,163,0,.7); --lime:#5fa300; --lime-dim:#4a8500; --lime-bg:rgba(95,163,0,.08); --lime-bg-strong:rgba(95,163,0,.14); --lime-border:rgba(95,163,0,.22); --white:#111118; --muted:#666678; --muted2:#9999aa; --input-bg:rgba(0,0,0,.03); --input-bg-focus:rgba(0,0,0,.05); --progress-track:rgba(0,0,0,.06); }
        .blob { position:fixed; border-radius:50%; filter:blur(100px); pointer-events:none; z-index:0; }
        .blob-1 { width:500px; height:500px; background:rgba(200,255,0,.07); top:-150px; right:-100px; }
        .blob-2 { width:350px; height:350px; background:rgba(80,60,255,.05); bottom:0; left:-100px; }
        nav { position:fixed; top:0; left:0; right:0; z-index:100; padding:0 clamp(20px,5vw,60px); height:68px; display:flex; align-items:center; justify-content:space-between; border-bottom:1px solid var(--border); backdrop-filter:blur(20px) saturate(180%); background:rgba(10,10,15,.8); }
        :global([data-theme='light']) nav { background:rgba(250,250,248,.85); }
        .nav-logo{font-family:var(--font-syne),'Syne',sans-serif;font-size:20px;font-weight:800;letter-spacing:-.5px;color:var(--white);text-decoration:none;display:flex;align-items:center;gap:8px}
        .nav-logo span{color:var(--lime)} .nav-logo-icon{width:30px;height:30px;background:var(--lime);border-radius:8px;display:grid;place-items:center}
        .theme-toggle{width:36px;height:36px;border-radius:10px;background:var(--card);border:1px solid var(--border);cursor:pointer}
        .nav-link{font-size:13px;color:var(--muted);text-decoration:none} .nav-link span{color:var(--lime);font-weight:700}
        .nav-right-group{display:flex;align-items:center;gap:12px}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}
        .hamburger span{width:22px;height:2px;background:var(--white);border-radius:2px;display:block;transition:all .28s}
        .mobile-drawer{position:fixed;top:68px;left:0;right:0;bottom:0;z-index:98;background:rgba(10,10,15,.98);backdrop-filter:blur(20px);display:flex;flex-direction:column;padding:28px 24px 40px;transform:translateX(100%);transition:transform .3s;border-top:1px solid var(--border)}
        :global([data-theme='light']) .mobile-drawer{background:rgba(250,250,248,.98)} .mobile-drawer.open{transform:translateX(0)}
        .mobile-drawer-link{font-family:'Syne',sans-serif;font-size:20px;font-weight:700;color:var(--white);text-decoration:none;padding:16px 0;border-bottom:1px solid var(--border)}
        .drawer-cta{margin-top:28px;display:flex;flex-direction:column;gap:12px}
        .drawer-btn{width:100%;padding:14px;border-radius:12px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;text-align:center;text-decoration:none}
        .drawer-btn-outline{background:transparent;color:var(--white);border:1.5px solid var(--border)} .drawer-btn-lime{background:var(--lime);color:#0a0a0f}
        main{display:flex;justify-content:center;padding:100px clamp(16px,4vw,40px) 60px;position:relative;z-index:1}
        .signup-wrap{width:100%;max-width:600px}.progress-header{margin-bottom:32px}.progress-step-info{display:flex;justify-content:space-between;margin-bottom:12px}
        .progress-label,.progress-count{font-size:12px;color:var(--muted)} .progress-count span{color:var(--lime)} .progress-bar-track{height:4px;background:var(--progress-track);border-radius:99px;overflow:hidden}
        .progress-bar-fill{height:100%;background:var(--lime)} .step-dots{display:flex;justify-content:space-between;position:relative;margin-top:16px}
        .step-dots::before{content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border)}
        .step-dot{z-index:1;width:28px;height:28px;border-radius:50%;border:1.5px solid var(--border);background:var(--card);display:grid;place-items:center;font-size:11px;font-weight:700;color:var(--muted);position:relative}
        .step-dot.active{border-color:var(--lime);color:var(--lime);background:var(--lime-bg)} .step-dot.done{background:var(--lime);border-color:var(--lime);color:#0a0a0f}
        .step-dot-label{position:absolute;top:36px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--muted)}
        .signup-card{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:clamp(28px,5vw,44px);box-shadow:0 40px 100px rgba(0,0,0,.3)}
        .step-panel{display:none}.step-panel.active{display:block;animation:slideIn .35s ease both}.step-panel.back.active{animation:slideBack .35s ease both}
        @keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}} @keyframes slideBack{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}
        .step-header{margin-bottom:28px}.step-badge{display:inline-flex;background:var(--lime-bg);border:1px solid var(--lime-border);border-radius:99px;padding:4px 12px;font-size:11px;font-weight:700;color:var(--lime);margin-bottom:12px}
        .step-header h2{font-family:var(--font-syne),'Syne',sans-serif;font-size:22px;font-weight:800;margin-bottom:6px}.step-header p{font-size:14px;color:var(--muted)}
        .auth-divider{display:flex;align-items:center;gap:12px;margin-bottom:14px;font-size:12px;color:var(--muted2);text-transform:uppercase}.auth-divider::before,.auth-divider::after{content:'';flex:1;height:1px;background:var(--border)}
        .oauth-btn{width:100%;padding:12px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px;display:flex;justify-content:center;color:var(--white);text-decoration:none}
        .form-group{margin-bottom:16px}.form-label{display:block;font-size:13px;font-weight:600;margin-bottom:7px}.optional{color:var(--muted);font-size:12px}
        .input-wrap{position:relative}.input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--muted);font-size:14px;pointer-events:none}.select-arrow{position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--muted);pointer-events:none;font-size:14px}.form-input,.form-select{width:100%;padding:12px 16px 12px 44px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px;font-size:14px;color:var(--white);outline:none}
        .form-input.has-error{border-color:var(--error);box-shadow:0 0 0 3px var(--error-bg)} .form-input.no-icon{padding-left:16px}.form-select{padding-right:36px}.form-hint{font-size:12px;color:var(--muted);margin-top:5px}
        .form-error{display:none;font-size:12px;color:var(--error);margin-top:5px}.form-error.show{display:flex}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.pwd-strength{margin-top:8px}.pwd-strength-bars{display:flex;gap:4px;margin-bottom:4px}
        .pwd-bar{height:3px;flex:1;border-radius:99px;background:var(--border)} .pwd-bar.weak{background:#ff5566}.pwd-bar.fair{background:#ffaa00}.pwd-bar.good{background:#00cc66}.pwd-bar.strong{background:var(--lime)}
        .pwd-strength-label{font-size:11px;color:var(--muted)} .option-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
        .option-tile{padding:16px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:14px;cursor:pointer;text-align:left}
        .option-tile.selected{border-color:var(--border-selected);background:var(--lime-bg-strong)} .tile-title{font-size:13px;font-weight:700}.tile-desc{font-size:11px;color:var(--muted)}
        .check-item{display:flex;align-items:flex-start;gap:12px;padding:14px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px}.check-item-label{font-size:13px;font-weight:500}.check-item-sub{font-size:12px;color:var(--muted)}
        .slug-preview{background:var(--card2);border:1px solid var(--border);border-radius:10px;padding:10px 16px;font-family:'Courier New',monospace;font-size:13px;color:var(--muted);margin-top:8px}
        .slug-val{color:var(--lime);font-weight:700} .terms-box{background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px;padding:16px;margin-bottom:20px;font-size:13px;color:var(--muted);display:flex;gap:12px}
        .terms-box a{color:var(--lime);text-decoration:none;font-weight:600} .step-actions{display:flex;align-items:center;gap:10px;margin-top:24px}
        .btn-next{flex:1;padding:14px 24px;background:var(--lime);color:#0a0a0f;border:none;border-radius:12px;font-family:var(--font-syne),'Syne',sans-serif;font-size:15px;font-weight:700;cursor:pointer}
        .btn-back{padding:14px 18px;background:var(--input-bg);color:var(--muted);border:1.5px solid var(--border);border-radius:12px;cursor:pointer}
        .success-panel{text-align:center;padding:20px 0}.success-icon{width:80px;height:80px;border-radius:50%;background:var(--lime-bg);border:2px solid var(--lime-border);display:grid;place-items:center;font-size:36px;margin:0 auto 24px}
        .success-panel h2{font-family:var(--font-syne),'Syne',sans-serif;font-size:24px;font-weight:800;margin-bottom:8px}.success-panel p{color:var(--muted);font-size:14px;max-width:340px;margin:0 auto 28px}
        .success-checklist{text-align:left;background:var(--card2);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:24px;display:flex;flex-direction:column;gap:12px}
        .success-check{display:flex;gap:10px;font-size:13px;color:var(--muted)} .btn-go{display:inline-flex;padding:14px 32px;background:var(--lime);color:#0a0a0f;border-radius:12px;font-family:var(--font-syne),'Syne',sans-serif;font-weight:700;text-decoration:none}
        .auth-footer-note{text-align:center;margin-top:20px;font-size:13px;color:var(--muted)} .auth-footer-note.hidden{display:none}
        footer{text-align:center;padding:20px;font-size:12px;color:var(--muted2);border-top:1px solid var(--border);position:relative;z-index:1} footer a{color:var(--muted);text-decoration:none}
        @media(max-width:640px){.nav-link{display:none}.hamburger{display:flex}}
        @media(min-width:641px){.mobile-drawer{display:none !important}.hamburger{display:none !important}}
        @media(max-width:560px){.form-row{grid-template-columns:1fr}.signup-card{padding:24px 20px}.step-dots{display:none}}
      `}</style>
    </div>
  );
}
