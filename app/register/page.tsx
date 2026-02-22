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
  const [showPassword, setShowPassword] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '',
    bizName: '', bizType: '', bizState: '', productCount: '',
    storeSlug: '', heardFrom: '', acceptUSD: false, terms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const cleanSlug = useMemo(() => form.storeSlug.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, ''), [form.storeSlug]);
  const pwdScore = useMemo(() => {
    const v = form.password;
    let s = 0;
    if (v.length >= 8) s++;
    if (/[A-Z]/.test(v)) s++;
    if (/[0-9]/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    return s;
  }, [form.password]);

  useEffect(() => {
    const saved = localStorage.getItem('biz-theme');
    if (saved === 'light' || saved === 'dark') setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('biz-theme', theme);
  }, [theme]);
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!drawerOpen) return;
      const t = e.target as Node;
      if (drawerRef.current?.contains(t)) return;
      if (hamburgerRef.current?.contains(t)) return;
      setDrawerOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [drawerOpen]);

  const updateField = (key: keyof typeof form, value: string | boolean) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((p) => {
      const n = { ...p };
      delete n[key];
      return n;
    });
  };

  const validateStep = (step: Step) => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = 'First name is required';
      if (!form.lastName.trim()) e.lastName = 'Last name is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address';
      if (form.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number';
      if (form.password.length < 8) e.password = 'Password must be at least 8 characters';
    }
    if (step === 2) {
      if (!form.bizName.trim()) e.bizName = 'Business name is required';
      if (!form.bizType) e.bizType = 'Please select a business type';
    }
    if (step === 3) {
      if (!cleanSlug) e.storeSlug = 'Please enter a store name';
      if (!form.terms) e.terms = 'You must agree to the terms to continue';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goToStep = (next: Step) => {
    if (next > currentStep && !validateStep(currentStep)) return;
    setGoingBack(next < currentStep);
    setCurrentStep(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="signup-root">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <nav>
        <Link href="/" className="nav-logo"><div className="nav-logo-icon">🛍️</div>Biz<span>shop</span></Link>
        <div className="nav-right-group">
          <Link href="/login" className="nav-link">Already have an account? <span>Log in →</span></Link>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
          <button ref={hamburgerRef} className="hamburger" aria-label="Open menu" onClick={() => setDrawerOpen((v) => !v)}>
            <span style={drawerOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : undefined} />
            <span style={drawerOpen ? { opacity: 0 } : undefined} />
            <span style={drawerOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : undefined} />
          </button>
        </div>
      </nav>

      <div ref={drawerRef} className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-drawer-link" onClick={() => setDrawerOpen(false)}>Back to Home</Link>
        <div className="drawer-cta">
          <Link href="/login" className="drawer-btn drawer-btn-outline" onClick={() => setDrawerOpen(false)}>Log in to Bizshop</Link>
          <Link href="/register" className="drawer-btn drawer-btn-lime" onClick={() => setDrawerOpen(false)}>Create Free Account</Link>
        </div>
      </div>

      <main>
        <div className="signup-wrap">
          <div className="progress-header">
            <div className="progress-step-info"><span className="progress-label">{STEP_LABELS[currentStep - 1]}</span><span className="progress-count">Step <span>{currentStep}</span> of <span>4</span></span></div>
            <div className="progress-bar-track"><div className="progress-bar-fill" style={{ width: `${currentStep * 25}%` }} /></div>
            <div className="step-dots">{['Account', 'Business', 'Your Store', 'Done'].map((lbl, i) => <div key={lbl} className={`step-dot ${i + 1 === currentStep ? 'active' : ''} ${i + 1 < currentStep ? 'done' : ''}`}>{i + 1 < currentStep ? '✓' : i + 1}<span className="step-dot-label">{lbl}</span></div>)}</div>
          </div>

          <div className="signup-card">
            <div className={`step-panel ${currentStep === 1 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header"><div className="step-badge">Step 1 of 4</div><h2>Create your account</h2><p>Start with your personal details. Takes less than a minute.</p></div>
              <div className="auth-divider">Quick sign up with</div>
              <a href="#" className="oauth-btn" style={{ marginBottom: 20 }}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </a>
              <div className="auth-divider">or fill in details</div>

              <div className="form-row">
                <div className="form-group"><label className="form-label">First name</label><div className="input-wrap"><span className="input-icon">👤</span><input className={`form-input ${errors.firstName ? 'has-error' : ''}`} placeholder="Amaka" value={form.firstName} onChange={(e) => updateField('firstName', e.target.value)} /></div>{errors.firstName ? <div className="form-error show">{errors.firstName}</div> : null}</div>
                <div className="form-group"><label className="form-label">Last name</label><div className="input-wrap"><span className="input-icon">👤</span><input className={`form-input ${errors.lastName ? 'has-error' : ''}`} placeholder="Okonkwo" value={form.lastName} onChange={(e) => updateField('lastName', e.target.value)} /></div>{errors.lastName ? <div className="form-error show">{errors.lastName}</div> : null}</div>
              </div>

              <div className="form-group"><label className="form-label">Email address</label><div className="input-wrap"><span className="input-icon">✉️</span><input className={`form-input ${errors.email ? 'has-error' : ''}`} placeholder="you@yourbusiness.com" value={form.email} onChange={(e) => updateField('email', e.target.value)} /></div>{errors.email ? <div className="form-error show">{errors.email}</div> : null}</div>

              <div className="form-group"><label className="form-label">Phone number</label><div className="phone-wrap"><div className="input-wrap"><span className="input-icon">🇳🇬</span><input className="form-input" value="+234" readOnly /></div><div className="input-wrap"><span className="input-icon">📞</span><input className={`form-input ${errors.phone ? 'has-error' : ''}`} placeholder="0801 234 5678" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} /></div></div>{errors.phone ? <div className="form-error show">{errors.phone}</div> : null}</div>

              <div className="form-group"><label className="form-label">Create password</label><div className="input-wrap"><span className="input-icon">🔒</span><input type={showPassword ? 'text' : 'password'} className={`form-input ${errors.password ? 'has-error' : ''}`} placeholder="Min. 8 characters" value={form.password} onChange={(e) => updateField('password', e.target.value)} /><button type="button" className="input-action" onClick={() => setShowPassword((v) => !v)}>{showPassword ? '🙈' : '👁️'}</button></div>{errors.password ? <div className="form-error show">{errors.password}</div> : null}</div>

              <div className="step-actions"><button className="btn-next" onClick={() => goToStep(2)}><span className="btn-text">Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></button></div>
            </div>

            <div className={`step-panel ${currentStep === 2 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header"><div className="step-badge">Step 2 of 4</div><h2>Tell us about your business</h2><p>Help us set up the right tools for how you sell.</p></div>
              <div className="form-group"><label className="form-label">Business name</label><div className="input-wrap"><span className="input-icon">🏢</span><input className={`form-input ${errors.bizName ? 'has-error' : ''}`} placeholder="e.g. Amaka’s Fashion House" value={form.bizName} onChange={(e) => updateField('bizName', e.target.value)} /></div>{errors.bizName ? <div className="form-error show">{errors.bizName}</div> : null}</div>

              <div className="form-group"><label className="form-label">What type of business do you run?</label><div className="option-grid">{[
                ['fashion', '👗', 'Fashion & Apparel', 'Clothing, shoes, accessories'],
                ['beauty', '💄', 'Beauty & Skincare', 'Cosmetics, skincare, haircare'],
                ['food', '🍱', 'Food & Drinks', 'Packaged food, beverages, snacks'],
                ['electronics', '📱', 'Electronics & Gadgets', 'Phones, gadgets, accessories'],
                ['home', '🏠', 'Home & Living', 'Furniture, décor, kitchenware'],
                ['other', '✨', 'Other', 'Something else entirely'],
              ].map(([val, icon, title, desc]) => <button key={val} type="button" className={`option-tile ${form.bizType === val ? 'selected' : ''}`} onClick={() => updateField('bizType', val)}><div className="tile-icon">{icon}</div><div className="tile-title">{title}</div><div className="tile-desc">{desc}</div></button>)}</div>{errors.bizType ? <div className="form-error show">{errors.bizType}</div> : null}</div>

              <div className="form-row">
                <div className="form-group"><label className="form-label">State / Location</label><div className="input-wrap"><span className="input-icon">📍</span><select className="form-select" value={form.bizState} onChange={(e) => updateField('bizState', e.target.value)}><option value="">Select your state</option><option>Lagos</option><option>Abuja (FCT)</option><option>Kano</option><option>Rivers</option><option>Oyo</option><option>Kaduna</option><option>Anambra</option><option>Delta</option><option>Edo</option><option>Ogun</option><option>Imo</option><option>Enugu</option><option>Cross River</option><option>Kwara</option><option>Borno</option><option>Akwa Ibom</option><option>Plateau</option><option>Osun</option><option>Bauchi</option><option>Ondo</option><option>Ekiti</option><option>Sokoto</option><option>Niger</option><option>Kogi</option><option>Nassarawa</option><option>Jigawa</option><option>Kebbi</option><option>Zamfara</option><option>Taraba</option><option>Adamawa</option><option>Gombe</option><option>Yobe</option><option>Bayelsa</option><option>Benue</option><option>Ebonyi</option><option>Abia</option><option>Outside Nigeria</option></select><span className="select-arrow">⌄</span></div></div>
                <div className="form-group"><label className="form-label">How many products do you sell? <span className="optional">(approx.)</span></label><div className="input-wrap"><span className="input-icon">📦</span><select className="form-select" value={form.productCount} onChange={(e) => updateField('productCount', e.target.value)}><option value="">Select range</option><option>1–10 products</option><option>11–50 products</option><option>51–200 products</option><option>200+ products</option></select><span className="select-arrow">⌄</span></div></div>
              </div>
              <div className="step-actions"><button className="btn-back" onClick={() => goToStep(1)}>Back</button><button className="btn-next" onClick={() => goToStep(3)}><span className="btn-text">Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span></button></div>
            </div>

            <div className={`step-panel ${currentStep === 3 ? 'active' : ''} ${goingBack ? 'back' : ''}`}>
              <div className="step-header"><div className="step-badge">Step 3 of 4</div><h2>Set up your online store</h2><p>Claim your unique store link and pick your preferred payment method.</p></div>
              <div className="form-group"><label className="form-label">Your store URL</label><div className="input-wrap"><span className="input-icon">🌐</span><input className={`form-input ${errors.storeSlug ? 'has-error' : ''}`} placeholder="yourstorename" value={form.storeSlug} onChange={(e) => updateField('storeSlug', e.target.value)} /></div><div className="slug-preview"><span className="base">bizshop.ng/</span><span className="slug-val">{cleanSlug || 'yourstorename'}</span></div>{errors.storeSlug ? <div className="form-error show">{errors.storeSlug}</div> : null}</div>
              <div className="terms-box"><input type="checkbox" checked={form.terms} onChange={(e) => updateField('terms', e.target.checked)} /><div>By continuing, you agree to the <a href="#">General Terms of Use</a>, <a href="#">Merchant Terms of Use</a> &amp; <a href="#">General Privacy Policy</a> of Bizshop.</div></div>
              {errors.terms ? <div className="form-error show">{errors.terms}</div> : null}
              <div className="step-actions"><button className="btn-back" onClick={() => goToStep(2)}>Back</button><button className="btn-next" onClick={() => goToStep(4)}><span className="btn-text">Create My Store 🎉</span></button></div>
            </div>

            <div className={`step-panel ${currentStep === 4 ? 'active' : ''}`}><div className="success-panel show"><div className="success-icon">🎉</div><h2>Your store is ready!</h2><p>Welcome to Bizshop! Your account has been created and your store is live. Let us get your first product up.</p><Link href="/dashboard" className="btn-go">Go to My Dashboard</Link></div></div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .signup-root{--ink:#0a0a0f;--card:#16161f;--card2:#1c1c28;--border:rgba(255,255,255,.07);--border-hover:rgba(255,255,255,.14);--border-selected:rgba(200,255,0,.6);--lime:#c8ff00;--lime-bg:rgba(200,255,0,.08);--lime-bg-strong:rgba(200,255,0,.14);--lime-border:rgba(200,255,0,.2);--white:#f4f4f0;--muted:#7a7a8a;--muted2:#44445a;--error:#ff5566;--error-bg:rgba(255,85,102,.08);--input-bg:rgba(255,255,255,.04);--progress-track:rgba(255,255,255,.06);background:var(--ink);color:var(--white);font-family:var(--font-dm-sans),'DM Sans',sans-serif;min-height:100svh}
        :global([data-theme='light']) .signup-root{--ink:#fafaf8;--card:#fff;--card2:#f7f7f4;--border:rgba(0,0,0,.09);--border-hover:rgba(0,0,0,.18);--lime:#5fa300;--lime-bg:rgba(95,163,0,.08);--lime-bg-strong:rgba(95,163,0,.14);--lime-border:rgba(95,163,0,.22);--white:#111118;--muted:#666678;--muted2:#9999aa;--input-bg:rgba(0,0,0,.03);--progress-track:rgba(0,0,0,.06)}
        .blob{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none}.blob-1{width:500px;height:500px;background:rgba(200,255,0,.07);top:-150px;right:-100px}.blob-2{width:350px;height:350px;background:rgba(80,60,255,.05);bottom:0;left:-100px}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 clamp(20px,5vw,60px);height:68px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);backdrop-filter:blur(20px);background:rgba(10,10,15,.8)}
        .nav-logo{font-family:var(--font-syne),'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--white);text-decoration:none;display:flex;align-items:center;gap:8px}.nav-logo span{color:var(--lime)}.nav-logo-icon{width:30px;height:30px;background:var(--lime);border-radius:8px;display:grid;place-items:center}
        .nav-right-group{display:flex;align-items:center;gap:12px}.nav-link{font-size:13px;color:var(--muted);text-decoration:none}.nav-link span{color:var(--lime);font-weight:700}.theme-toggle{width:36px;height:36px;border-radius:10px;background:var(--card);border:1px solid var(--border)}
        .hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none}.hamburger span{width:22px;height:2px;background:var(--white);transition:all .28s}
        .mobile-drawer{position:fixed;top:68px;left:0;right:0;bottom:0;background:rgba(10,10,15,.98);padding:28px 24px;transform:translateX(100%);transition:transform .3s}.mobile-drawer.open{transform:translateX(0)}
        .mobile-drawer-link{font-family:var(--font-syne),'Syne',sans-serif;color:var(--white);text-decoration:none;padding:16px 0;display:block;border-bottom:1px solid var(--border)}.drawer-cta{margin-top:28px;display:flex;flex-direction:column;gap:12px}
        .drawer-btn{padding:14px;border-radius:12px;font-family:var(--font-syne),'Syne',sans-serif;font-weight:700;text-align:center;text-decoration:none}.drawer-btn-outline{border:1.5px solid var(--border);color:var(--white)}.drawer-btn-lime{background:var(--lime);color:#0a0a0f}
        main{padding:100px 16px 60px}.signup-wrap{max-width:600px;margin:0 auto}.progress-step-info{display:flex;justify-content:space-between}.progress-label,.progress-count{font-size:12px;color:var(--muted)}.progress-count span{color:var(--lime)}
        .progress-bar-track{height:4px;background:var(--progress-track);border-radius:100px;overflow:hidden;margin-top:12px}.progress-bar-fill{height:100%;background:var(--lime)}
        .step-dots{display:flex;justify-content:space-between;position:relative;margin-top:16px}.step-dots:before{content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:var(--border)}
        .step-dot{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--border);background:var(--card);display:grid;place-items:center;font-size:11px;color:var(--muted);z-index:1;position:relative}.step-dot.active{border-color:var(--lime);color:var(--lime);background:var(--lime-bg)}.step-dot.done{background:var(--lime);border-color:var(--lime);color:#0a0a0f}.step-dot-label{position:absolute;top:36px;font-size:10px;color:var(--muted);white-space:nowrap}
        .signup-card{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:28px;margin-top:24px}.step-panel{display:none}.step-panel.active{display:block}
        .step-header h2{font-family:var(--font-syne),'Syne',sans-serif}.step-badge{display:inline-flex;background:var(--lime-bg);border:1px solid var(--lime-border);border-radius:100px;padding:4px 12px;font-size:11px;color:var(--lime);margin-bottom:10px}
        .auth-divider{display:flex;align-items:center;gap:12px;font-size:12px;color:var(--muted2);text-transform:uppercase;margin:14px 0}.auth-divider:before,.auth-divider:after{content:'';flex:1;height:1px;background:var(--border)}
        .oauth-btn{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px;border:1.5px solid var(--border);border-radius:12px;text-decoration:none;color:var(--white);background:var(--input-bg)}
        .form-group{margin-bottom:16px}.form-label{display:block;font-size:13px;font-weight:600;margin-bottom:7px}.optional{color:var(--muted);font-size:12px}
        .input-wrap{position:relative}.input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:14px;color:var(--muted)}.input-action{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none}
        .select-arrow{position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--muted)}.form-input,.form-select{width:100%;padding:12px 16px 12px 44px;border:1.5px solid var(--border);border-radius:12px;background:var(--input-bg);color:var(--white)}.form-select{padding-right:36px}
        .form-input.has-error{border-color:var(--error);box-shadow:0 0 0 3px var(--error-bg)}.form-error{display:none;color:var(--error);font-size:12px;margin-top:5px}.form-error.show{display:flex}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.phone-wrap{display:grid;grid-template-columns:100px 1fr;gap:8px}
        .option-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}.option-tile{padding:16px;border:1.5px solid var(--border);background:var(--input-bg);border-radius:14px;text-align:left}.option-tile.selected{border-color:var(--border-selected);background:var(--lime-bg-strong)}
        .tile-icon{font-size:22px}.tile-title{font-size:13px;font-weight:700}.tile-desc{font-size:11px;color:var(--muted)}
        .slug-preview{margin-top:8px;background:var(--card2);border:1px solid var(--border);padding:10px 16px;border-radius:10px;font-family:monospace}.slug-val{color:var(--lime);font-weight:700}
        .terms-box{background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px;padding:16px;display:flex;gap:12px;margin-bottom:12px}.terms-box a{color:var(--lime);text-decoration:none}
        .step-actions{display:flex;gap:10px;margin-top:24px}.btn-next{flex:1;padding:14px 24px;background:var(--lime);color:#0a0a0f;border:none;border-radius:12px;font-family:var(--font-syne),'Syne',sans-serif;font-weight:700;display:flex;justify-content:center;align-items:center}.btn-text{display:inline-flex;align-items:center;gap:8px}.btn-back{padding:14px 18px;background:var(--input-bg);color:var(--muted);border:1.5px solid var(--border);border-radius:12px}
        .success-panel{text-align:center}.success-icon{width:80px;height:80px;border-radius:50%;background:var(--lime-bg);border:2px solid var(--lime-border);display:grid;place-items:center;font-size:36px;margin:0 auto 24px}.btn-go{display:inline-flex;padding:14px 32px;background:var(--lime);color:#0a0a0f;border-radius:12px;text-decoration:none;font-family:var(--font-syne),'Syne',sans-serif;font-weight:700}
        @media(max-width:640px){nav .nav-link{display:none}.hamburger{display:flex}}
        @media(min-width:641px){.mobile-drawer{display:none !important}.hamburger{display:none !important}}
        @media(max-width:560px){.form-row{grid-template-columns:1fr}.phone-wrap{grid-template-columns:90px 1fr}.step-dots{display:none}}
      `}</style>
    </div>
  );
}
