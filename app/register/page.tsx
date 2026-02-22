'use client';

const signupHtml = String.raw`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Create Your Store — Bizshop</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root, [data-theme="dark"] {
  --ink: #0a0a0f;
  --surface: #111118;
  --card: #16161f;
  --card2: #1c1c28;
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(255,255,255,0.14);
  --border-focus: rgba(200,255,0,0.4);
  --border-selected: rgba(200,255,0,0.6);
  --lime: #c8ff00;
  --lime-dim: #a8d900;
  --lime-bg: rgba(200,255,0,0.08);
  --lime-bg-strong: rgba(200,255,0,0.14);
  --lime-border: rgba(200,255,0,0.2);
  --white: #f4f4f0;
  --muted: #7a7a8a;
  --muted2: #44445a;
  --error: #ff5566;
  --error-bg: rgba(255,85,102,0.08);
  --input-bg: rgba(255,255,255,0.04);
  --input-bg-focus: rgba(255,255,255,0.06);
  --progress-track: rgba(255,255,255,0.06);
}

[data-theme="light"] {
  --ink: #fafaf8;
  --surface: #f1f1ee;
  --card: #ffffff;
  --card2: #f7f7f4;
  --border: rgba(0,0,0,0.09);
  --border-hover: rgba(0,0,0,0.18);
  --border-focus: rgba(95,163,0,0.5);
  --border-selected: rgba(95,163,0,0.7);
  --lime: #5fa300;
  --lime-dim: #4a8500;
  --lime-bg: rgba(95,163,0,0.08);
  --lime-bg-strong: rgba(95,163,0,0.14);
  --lime-border: rgba(95,163,0,0.22);
  --white: #111118;
  --muted: #666678;
  --muted2: #9999aa;
  --error: #cc2233;
  --error-bg: rgba(204,34,51,0.07);
  --input-bg: rgba(0,0,0,0.03);
  --input-bg-focus: rgba(0,0,0,0.05);
  --progress-track: rgba(0,0,0,0.06);
}

[data-theme="light"] nav { background: rgba(250,250,248,0.85); }
[data-theme="light"] .step-dot.done { background: var(--lime); }
[data-theme="light"] .step-dot.active { border-color: var(--lime); color: var(--lime); }

html { scroll-behavior: smooth; }
body {
  background: var(--ink);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px; line-height: 1.6;
  min-height: 100svh; display: flex; flex-direction: column;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  transition: background .3s, color .3s;
}

body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 9999; opacity: .4;
}

.blob { position: fixed; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
.blob-1 { width: 500px; height: 500px; background: rgba(200,255,0,0.07); top: -150px; right: -100px; }
.blob-2 { width: 350px; height: 350px; background: rgba(80,60,255,0.05); bottom: 0; left: -100px; }

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 clamp(20px,5vw,60px); height: 68px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(10,10,15,0.80);
  transition: background .3s;
}
.nav-logo { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: var(--white); text-decoration: none; display: flex; align-items: center; gap: 8px; }
.nav-logo span { color: var(--lime); }
.nav-logo-icon { width: 30px; height: 30px; background: var(--lime); border-radius: 8px; display: grid; place-items: center; font-size: 15px; }
.theme-toggle { width: 36px; height: 36px; border-radius: 10px; background: var(--card); border: 1px solid var(--border); cursor: pointer; display: grid; place-items: center; font-size: 14px; transition: all .2s; }
.theme-toggle:hover { border-color: var(--border-hover); transform: scale(1.08); }
.nav-link { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 500; transition: color .2s; }
.nav-link span { color: var(--lime); font-weight: 700; }
.nav-link:hover { color: var(--white); }

/* ── HAMBURGER ── */
.hamburger {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 4px; background: none; border: none; flex-shrink: 0;
}
.hamburger span { width: 22px; height: 2px; background: var(--white); border-radius: 2px; display: block; transition: all .28s; }
[data-theme="light"] .hamburger span { background: #111118; }

/* ── MOBILE DRAWER ── */
.mobile-drawer {
  position: fixed; top: 68px; left: 0; right: 0; bottom: 0; z-index: 98;
  background: rgba(10,10,15,0.98);
  backdrop-filter: blur(20px);
  display: flex; flex-direction: column;
  padding: 28px 24px 40px;
  transform: translateX(100%);
  transition: transform .3s cubic-bezier(.4,0,.2,1);
  border-top: 1px solid var(--border);
}
[data-theme="light"] .mobile-drawer { background: rgba(250,250,248,0.98); }
.mobile-drawer.open { transform: translateX(0); }

.mobile-drawer-link {
  font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700;
  color: var(--white); text-decoration: none; padding: 16px 0;
  border-bottom: 1px solid var(--border); letter-spacing: -0.4px;
  transition: color .2s; display: block;
}
[data-theme="light"] .mobile-drawer-link { color: #111118; }
.mobile-drawer-link:hover { color: var(--lime); }

.mobile-drawer .drawer-cta {
  margin-top: 28px; display: flex; flex-direction: column; gap: 12px;
}
.drawer-btn {
  width: 100%; padding: 14px; border-radius: 12px;
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  text-align: center; text-decoration: none; display: block;
  transition: all .2s; letter-spacing: -0.2px;
}
.drawer-btn-outline { background: transparent; color: var(--white); border: 1.5px solid var(--border); }
[data-theme="light"] .drawer-btn-outline { color: #111118; }
.drawer-btn-outline:hover { border-color: var(--border-hover); }
.drawer-btn-lime { background: var(--lime); color: #0a0a0f; border: none; }
.drawer-btn-lime:hover { filter: brightness(1.08); }

/* ── NAV RIGHT RESPONSIVE ── */
.nav-right-group { display: flex; align-items: center; gap: 12px; }

@media(max-width: 640px) {
  .nav-link { display: none; }
  .hamburger { display: flex; }
}
@media(min-width: 641px) {
  .mobile-drawer { display: none !important; }
  .hamburger { display: none !important; }
}

/* ── LAYOUT ── */
main {
  flex: 1; display: flex; align-items: flex-start; justify-content: center;
  padding: 100px clamp(16px,4vw,40px) 60px;
  position: relative; z-index: 1;
}

.signup-wrap { width: 100%; max-width: 600px; }

/* ── PROGRESS ── */
.progress-header {
  margin-bottom: 32px;
  animation: fadeUp .4s ease both;
}
.progress-step-info {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 12px;
}
.progress-label { font-size: 12px; color: var(--muted); font-weight: 500; letter-spacing: 0.3px; }
.progress-count { font-size: 12px; color: var(--muted); font-weight: 600; }
.progress-count span { color: var(--lime); }

.progress-bar-track {
  width: 100%; height: 4px; background: var(--progress-track);
  border-radius: 100px; overflow: hidden;
}
.progress-bar-fill {
  height: 100%; background: var(--lime); border-radius: 100px;
  transition: width .5s cubic-bezier(.4,0,.2,1);
}

.step-dots {
  display: flex; align-items: center; gap: 0; margin-top: 16px;
  justify-content: space-between; position: relative;
}
.step-dots::before {
  content: '';
  position: absolute; top: 50%; left: 0; right: 0; height: 1px;
  background: var(--border); transform: translateY(-50%); z-index: 0;
}
.step-dot {
  position: relative; z-index: 1;
  width: 28px; height: 28px; border-radius: 50%;
  border: 1.5px solid var(--border);
  background: var(--card); color: var(--muted);
  display: grid; place-items: center;
  font-size: 11px; font-weight: 700;
  transition: all .3s;
}
.step-dot.active { border-color: var(--lime); color: var(--lime); background: var(--lime-bg); }
.step-dot.done { background: var(--lime); border-color: var(--lime); color: #0a0a0f; }
.step-dot-label {
  position: absolute; top: 36px; left: 50%; transform: translateX(-50%);
  font-size: 10px; color: var(--muted); white-space: nowrap; font-weight: 500;
  transition: color .3s;
}
.step-dot.active .step-dot-label, .step-dot.done .step-dot-label { color: var(--white); }

/* ── CARD ── */
.signup-card {
  background: var(--card); border: 1px solid var(--border);
  border-radius: 24px; padding: clamp(28px,5vw,44px);
  box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  margin-top: 24px;
  position: relative; overflow: hidden;
}

/* ── STEP PANELS ── */
.step-panel { display: none; animation: slideIn .35s ease both; }
.step-panel.active { display: block; }
@keyframes slideIn { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
@keyframes slideBack { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
.step-panel.back { animation: slideBack .35s ease both; }

.step-header { margin-bottom: 28px; }
.step-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--lime-bg); border: 1px solid var(--lime-border);
  border-radius: 100px; padding: 4px 12px;
  font-size: 11px; font-weight: 700; color: var(--lime);
  letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 12px;
}
.step-header h2 { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.6px; color: var(--white); margin-bottom: 6px; }
.step-header p { font-size: 14px; color: var(--muted); font-weight: 300; line-height: 1.6; }

/* ── FORM ── */
.form-group { margin-bottom: 16px; }
.form-label { display: block; font-size: 13px; font-weight: 600; color: var(--white); margin-bottom: 7px; }
.form-label .optional { color: var(--muted); font-weight: 400; font-size: 12px; margin-left: 4px; }
.form-hint { font-size: 12px; color: var(--muted); margin-top: 5px; }

.input-wrap { position: relative; }
.form-input {
  width: 100%; padding: 12px 16px 12px 44px;
  background: var(--input-bg); border: 1.5px solid var(--border);
  border-radius: 12px; font-family: 'DM Sans', sans-serif;
  font-size: 14px; color: var(--white);
  outline: none; transition: all .2s; -webkit-appearance: none;
}
.form-input.no-icon { padding-left: 16px; }
.form-input::placeholder { color: var(--muted); }
.form-input:hover { border-color: var(--border-hover); }
.form-input:focus { border-color: var(--border-focus); background: var(--input-bg-focus); box-shadow: 0 0 0 3px var(--lime-bg); }
.form-input.has-error { border-color: var(--error); box-shadow: 0 0 0 3px var(--error-bg); }
.form-input.valid { border-color: rgba(40,200,90,0.4); }

.input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--muted); pointer-events: none; }
.input-suffix { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); font-size: 12px; color: var(--muted); font-weight: 500; pointer-events: none; }
.input-check { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #28c840; display: none; }
.form-input.valid ~ .input-check { display: block; }

.input-action { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--muted); cursor: pointer; background: none; border: none; padding: 0; display: flex; transition: color .2s; }
.input-action:hover { color: var(--white); }

.form-error { display: flex; align-items: center; gap: 6px; margin-top: 5px; font-size: 12px; color: var(--error); font-weight: 500; display: none; }
.form-error.show { display: flex; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ── SELECT ── */
.form-select {
  width: 100%; padding: 12px 36px 12px 44px;
  background: var(--input-bg); border: 1.5px solid var(--border);
  border-radius: 12px; font-family: 'DM Sans', sans-serif;
  font-size: 14px; color: var(--white);
  outline: none; transition: all .2s;
  -webkit-appearance: none; cursor: pointer;
}
.form-select:focus { border-color: var(--border-focus); background: var(--input-bg-focus); box-shadow: 0 0 0 3px var(--lime-bg); }
.form-select option { background: var(--card); color: var(--white); }
[data-theme="light"] .form-select option { background: #fff; color: #111; }
.select-arrow { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--muted); }

/* ── PHONE ── */
.phone-wrap { display: grid; grid-template-columns: 100px 1fr; gap: 8px; }

/* ── PASSWORD STRENGTH ── */
.pwd-strength { margin-top: 8px; }
.pwd-strength-bars { display: flex; gap: 4px; margin-bottom: 4px; }
.pwd-bar { height: 3px; flex: 1; border-radius: 100px; background: var(--border); transition: background .3s; }
.pwd-bar.weak { background: #ff5566; }
.pwd-bar.fair { background: #ffaa00; }
.pwd-bar.good { background: #00cc66; }
.pwd-bar.strong { background: var(--lime); }
.pwd-strength-label { font-size: 11px; color: var(--muted); }

/* ── OPTION TILES (business type) ── */
.option-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 10px; }
.option-tile {
  padding: 16px; background: var(--input-bg);
  border: 1.5px solid var(--border); border-radius: 14px;
  cursor: pointer; transition: all .2s; text-align: left;
  display: flex; flex-direction: column; gap: 6px;
}
.option-tile:hover { border-color: var(--border-hover); background: var(--input-bg-focus); }
.option-tile.selected { border-color: var(--border-selected); background: var(--lime-bg-strong); }
.option-tile .tile-icon { font-size: 22px; margin-bottom: 2px; }
.option-tile .tile-title { font-size: 13px; font-weight: 700; color: var(--white); }
.option-tile .tile-desc { font-size: 11px; color: var(--muted); line-height: 1.4; }

/* ── CHECKBOX ── */
.check-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 12px; cursor: pointer; transition: border-color .2s; }
.check-item:hover { border-color: var(--border-hover); }
.check-item input[type=checkbox] { width: 18px; height: 18px; flex-shrink: 0; accent-color: var(--lime); margin-top: 1px; cursor: pointer; }
.check-item-label { font-size: 13px; color: var(--white); font-weight: 500; }
.check-item-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }

/* ── SLUG PREVIEW ── */
.slug-preview {
  background: var(--card2); border: 1px solid var(--border);
  border-radius: 10px; padding: 10px 16px;
  font-family: 'Courier New', monospace; font-size: 13px;
  color: var(--muted); margin-top: 8px; display: flex; align-items: center; gap: 0;
  overflow: hidden;
}
.slug-preview .base { color: var(--muted); }
.slug-preview .slug-val { color: var(--lime); font-weight: 700; }

/* ── TERMS ── */
.terms-box {
  background: var(--input-bg); border: 1.5px solid var(--border);
  border-radius: 12px; padding: 16px; margin-bottom: 20px;
  font-size: 13px; color: var(--muted); line-height: 1.65;
  display: flex; align-items: flex-start; gap: 12px;
}
.terms-box input[type=checkbox] { width: 18px; height: 18px; flex-shrink: 0; accent-color: var(--lime); margin-top: 2px; cursor: pointer; }
.terms-box a { color: var(--lime); text-decoration: none; font-weight: 600; }
.terms-box a:hover { text-decoration: underline; }

/* ── ACTIONS ── */
.step-actions { display: flex; align-items: center; gap: 10px; margin-top: 24px; }
.btn-next {
  flex: 1; padding: 14px 24px;
  background: var(--lime); color: #0a0a0f;
  border: none; border-radius: 12px;
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all .2s; letter-spacing: -0.2px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.btn-next:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(200,255,0,0.25); }
.btn-next:active { transform: translateY(0); }
.btn-next:disabled { opacity: .5; pointer-events: none; }
.btn-next.loading { opacity: .7; pointer-events: none; }

.btn-back {
  padding: 14px 18px;
  background: var(--input-bg); color: var(--muted);
  border: 1.5px solid var(--border); border-radius: 12px;
  font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500;
  cursor: pointer; transition: all .2s; display: flex; align-items: center; gap: 6px;
}
.btn-back:hover { border-color: var(--border-hover); color: var(--white); }

/* ── OAUTH ── */
.auth-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; font-size: 12px; color: var(--muted2); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
.auth-divider::before, .auth-divider::after { content:''; flex:1; height:1px; background:var(--border); }
.oauth-btn { width: 100%; padding: 12px; background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 10px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: var(--white); cursor: pointer; transition: all .2s; text-decoration: none; }
.oauth-btn:hover { border-color: var(--border-hover); background: var(--input-bg-focus); }

/* ── SUCCESS ── */
.success-panel {
  text-align: center; padding: 20px 0;
  display: none; animation: fadeUp .5s ease both;
}
.success-panel.show { display: block; }
.success-icon {
  width: 80px; height: 80px; border-radius: 50%;
  background: var(--lime-bg); border: 2px solid var(--lime-border);
  display: grid; place-items: center; font-size: 36px;
  margin: 0 auto 24px;
  animation: popIn .5s .1s cubic-bezier(.175,.885,.32,1.275) both;
}
@keyframes popIn { from{opacity:0;transform:scale(.6)} to{opacity:1;transform:scale(1)} }
.success-panel h2 { font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 800; letter-spacing: -0.6px; margin-bottom: 8px; }
.success-panel p { color: var(--muted); font-size: 14px; max-width: 340px; margin: 0 auto 28px; line-height: 1.7; }
.success-checklist { text-align: left; background: var(--card2); border: 1px solid var(--border); border-radius: 14px; padding: 20px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 12px; }
.success-check { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--muted); }
.success-check svg { color: var(--lime); flex-shrink: 0; }
.success-check span { color: var(--white); font-weight: 500; }
.btn-go { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: var(--lime); color: #0a0a0f; border: none; border-radius: 12px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; transition: all .2s; text-decoration: none; }
.btn-go:hover { filter: brightness(1.08); transform: translateY(-2px); box-shadow: 0 10px 30px rgba(200,255,0,0.3); }

/* ── FOOTER ── */
.auth-footer-note {
  text-align: center; margin-top: 20px; font-size: 13px; color: var(--muted);
  animation: fadeUp .4s .1s ease both;
  transition: opacity .35s ease, transform .35s ease, max-height .4s ease;
  max-height: 60px; overflow: hidden;
}
.auth-footer-note.hidden {
  opacity: 0; transform: translateY(-8px); max-height: 0; pointer-events: none; margin-top: 0;
}

footer { text-align: center; padding: 20px; font-size: 12px; color: var(--muted2); border-top: 1px solid var(--border); position: relative; z-index: 1; }
footer a { color: var(--muted); text-decoration: none; }
footer a:hover { color: var(--white); }

/* ── SPINNER ── */
.spinner { width: 16px; height: 16px; border: 2px solid rgba(10,10,15,0.3); border-top-color: #0a0a0f; border-radius: 50%; animation: spin .7s linear infinite; display: none; }
.btn-next.loading .spinner { display: block; }
.btn-next.loading .btn-text { display: none; }
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

@media(max-width:560px) {
  .option-grid { grid-template-columns: 1fr 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .phone-wrap { grid-template-columns: 90px 1fr; }
  .signup-card { padding: 24px 20px; }
  .step-dots { display: none; }
}
@media(max-width:360px) {
  .option-grid { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<div class="blob blob-1"></div>
<div class="blob blob-2"></div>

<!-- NAV -->
<nav>
  <a href="bizshop-homepage.html" class="nav-logo">
    <div class="nav-logo-icon">🛍️</div>
    Biz<span>shop</span>
  </a>
  <div class="nav-right-group">
    <a href="bizshop-login.html" class="nav-link" id="navLoginLink">Already have an account? <span>Log in →</span></a>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">☀️</button>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- MOBILE DRAWER -->
<div class="mobile-drawer" id="mobileDrawer">
  <a href="bizshop-homepage.html" class="mobile-drawer-link">Back to Home</a>
  <div class="drawer-cta">
    <a href="bizshop-login.html" class="drawer-btn drawer-btn-outline">Log in to Bizshop</a>
    <a href="bizshop-signup.html" class="drawer-btn drawer-btn-lime">Create Free Account</a>
  </div>
</div>

<!-- MAIN -->
<main>
  <div class="signup-wrap">

    <!-- PROGRESS HEADER -->
    <div class="progress-header">
      <div class="progress-step-info">
        <span class="progress-label" id="stepLabel">Account Details</span>
        <span class="progress-count">Step <span id="stepNum">1</span> of <span>4</span></span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" id="progressBar" style="width:25%"></div>
      </div>
      <div class="step-dots">
        <div class="step-dot active" id="dot1">1<span class="step-dot-label">Account</span></div>
        <div class="step-dot" id="dot2">2<span class="step-dot-label">Business</span></div>
        <div class="step-dot" id="dot3">3<span class="step-dot-label">Your Store</span></div>
        <div class="step-dot" id="dot4">4<span class="step-dot-label">Done</span></div>
      </div>
    </div>

    <!-- CARD -->
    <div class="signup-card">

      <!-- ── STEP 1: Account Details ── -->
      <div class="step-panel active" id="step1">
        <div class="step-header">
          <div class="step-badge">Step 1 of 4</div>
          <h2>Create your account</h2>
          <p>Start with your personal details. Takes less than a minute.</p>
        </div>

        <div class="auth-divider">Quick sign up with</div>
        <a href="#" class="oauth-btn" style="margin-bottom:20px">
          <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
          Continue with Google
        </a>
        <div class="auth-divider">or fill in details</div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="firstName">First name</label>
            <div class="input-wrap">
              <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <input type="text" id="firstName" class="form-input" placeholder="Amaka" autocomplete="given-name">
            </div>
            <div class="form-error" id="firstNameError">First name is required</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="lastName">Last name</label>
            <div class="input-wrap">
              <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
              <input type="text" id="lastName" class="form-input" placeholder="Okonkwo" autocomplete="family-name">
            </div>
            <div class="form-error" id="lastNameError">Last name is required</div>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="s1email">Email address</label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/></svg></span>
            <input type="email" id="s1email" class="form-input" placeholder="you@yourbusiness.com" autocomplete="email">
            <span class="input-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg></span>
          </div>
          <div class="form-error" id="s1emailError">Please enter a valid email address</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="s1phone">Phone number</label>
          <div class="phone-wrap">
            <div class="input-wrap">
              <span class="input-icon" style="font-size:13px;font-weight:600">🇳🇬</span>
              <input type="text" class="form-input" value="+234" style="padding-left:40px;font-weight:600" readonly>
            </div>
            <div class="input-wrap">
              <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg></span>
              <input type="tel" id="s1phone" class="form-input" placeholder="0801 234 5678" autocomplete="tel">
            </div>
          </div>
          <div class="form-error" id="s1phoneError">Please enter a valid phone number</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="s1pwd">Create password</label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
            <input type="password" id="s1pwd" class="form-input" placeholder="Min. 8 characters" autocomplete="new-password">
            <button type="button" class="input-action" id="toggleS1Pwd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg></button>
          </div>
          <div class="pwd-strength" id="pwdStrength" style="display:none">
            <div class="pwd-strength-bars">
              <div class="pwd-bar" id="bar1"></div>
              <div class="pwd-bar" id="bar2"></div>
              <div class="pwd-bar" id="bar3"></div>
              <div class="pwd-bar" id="bar4"></div>
            </div>
            <div class="pwd-strength-label" id="pwdStrengthLabel">Enter a password</div>
          </div>
          <div class="form-error" id="s1pwdError">Password must be at least 8 characters</div>
        </div>

        <div class="step-actions">
          <button class="btn-next" id="nextBtn1" onclick="goToStep(2)">
            <span class="btn-text">Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            <div class="spinner"></div>
          </button>
        </div>

        <div style="text-align:center;margin-top:16px;font-size:13px;color:var(--muted)">
          Already have an account? <a href="bizshop-login.html" style="color:var(--lime);font-weight:600">Log in →</a>
        </div>
      </div>

      <!-- ── STEP 2: Business Info ── -->
      <div class="step-panel" id="step2">
        <div class="step-header">
          <div class="step-badge">Step 2 of 4</div>
          <h2>Tell us about your business</h2>
          <p>Help us set up the right tools for how you sell.</p>
        </div>

        <div class="form-group">
          <label class="form-label" for="bizName">Business name</label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
            <input type="text" id="bizName" class="form-input" placeholder="e.g. Amaka's Fashion House">
          </div>
          <div class="form-error" id="bizNameError">Business name is required</div>
        </div>

        <div class="form-group">
          <label class="form-label">What type of business do you run?</label>
          <div class="option-grid" id="bizTypeGrid">
            <div class="option-tile" data-val="fashion" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">👗</div>
              <div class="tile-title">Fashion & Apparel</div>
              <div class="tile-desc">Clothing, shoes, accessories</div>
            </div>
            <div class="option-tile" data-val="beauty" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">💄</div>
              <div class="tile-title">Beauty & Skincare</div>
              <div class="tile-desc">Cosmetics, skincare, haircare</div>
            </div>
            <div class="option-tile" data-val="food" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">🍱</div>
              <div class="tile-title">Food & Drinks</div>
              <div class="tile-desc">Packaged food, beverages, snacks</div>
            </div>
            <div class="option-tile" data-val="electronics" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">📱</div>
              <div class="tile-title">Electronics & Gadgets</div>
              <div class="tile-desc">Phones, gadgets, accessories</div>
            </div>
            <div class="option-tile" data-val="home" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">🏠</div>
              <div class="tile-title">Home & Living</div>
              <div class="tile-desc">Furniture, décor, kitchenware</div>
            </div>
            <div class="option-tile" data-val="other" onclick="selectTile(this,'bizTypeGrid')">
              <div class="tile-icon">✨</div>
              <div class="tile-title">Other</div>
              <div class="tile-desc">Something else entirely</div>
            </div>
          </div>
          <div class="form-error" id="bizTypeError" style="margin-top:8px">Please select a business type</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="bizState">State / Location</label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <select id="bizState" class="form-select">
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
            <span class="select-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">How many products do you sell? <span class="optional">(approx.)</span></label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span>
            <select id="productCount" class="form-select">
              <option value="">Select range</option>
              <option>1–10 products</option>
              <option>11–50 products</option>
              <option>51–200 products</option>
              <option>200+ products</option>
            </select>
            <span class="select-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></span>
          </div>
        </div>

        <div class="step-actions">
          <button class="btn-back" onclick="goToStep(1)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
          <button class="btn-next" id="nextBtn2" onclick="goToStep(3)">
            <span class="btn-text">Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
            <div class="spinner"></div>
          </button>
        </div>
      </div>

      <!-- ── STEP 3: Store Setup ── -->
      <div class="step-panel" id="step3">
        <div class="step-header">
          <div class="step-badge">Step 3 of 4</div>
          <h2>Set up your online store</h2>
          <p>Claim your unique store link and pick your preferred payment method.</p>
        </div>

        <div class="form-group">
          <label class="form-label" for="storeSlug">Your store URL</label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
            <input type="text" id="storeSlug" class="form-input" placeholder="yourstorename" oninput="updateSlug(this.value)">
          </div>
          <div class="slug-preview" id="slugPreview">
            <span class="base">bizshop.ng/</span><span class="slug-val" id="slugVal">yourstorename</span>
          </div>
          <div class="form-hint">Only lowercase letters, numbers, and hyphens. E.g. amaka-fashion</div>
          <div class="form-error" id="slugError">Please enter a store name</div>
        </div>

        <div class="form-group">
          <label class="form-label">Preferred payment methods</label>
          <div style="display:flex;flex-direction:column;gap:8px">
            <label class="check-item">
              <input type="checkbox" checked>
              <div>
                <div class="check-item-label">💳 Paystack — Card & Bank Transfer</div>
                <div class="check-item-sub">Debit cards, bank transfer, USSD</div>
              </div>
            </label>
            <label class="check-item">
              <input type="checkbox" checked>
              <div>
                <div class="check-item-label">🔀 Flutterwave — Multi-channel</div>
                <div class="check-item-sub">Cards, mobile money, bank transfers, USD</div>
              </div>
            </label>
            <label class="check-item">
              <input type="checkbox">
              <div>
                <div class="check-item-label">💵 Accept USD payments</div>
                <div class="check-item-sub">For international customers (Pro plan & above)</div>
              </div>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="heardFrom">How did you hear about Bizshop? <span class="optional">optional</span></label>
          <div class="input-wrap">
            <span class="input-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
            <select id="heardFrom" class="form-select">
              <option value="">Select an option</option>
              <option>Instagram / Social Media</option>
              <option>WhatsApp</option>
              <option>Google Search</option>
              <option>Friend or Colleague</option>
              <option>Twitter / X</option>
              <option>TikTok</option>
              <option>Online Ad</option>
              <option>Other</option>
            </select>
            <span class="select-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></span>
          </div>
        </div>

        <!-- TERMS -->
        <div class="terms-box">
          <input type="checkbox" id="termsCheck">
          <div style="font-size:13px;color:var(--muted);line-height:1.7">
            By continuing, you agree to the <a href="#">General Terms of Use</a>, <a href="#">Merchant Terms of Use</a> &amp; <a href="#">General Privacy Policy</a> of Bizshop.
          </div>
        </div>
        <div class="form-error" id="termsError" style="margin-top:-12px;margin-bottom:16px">You must agree to the terms to continue</div>

        <div class="step-actions">
          <button class="btn-back" onclick="goToStep(2)">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back
          </button>
          <button class="btn-next" id="nextBtn3" onclick="goToStep(4)">
            <span class="btn-text">Create My Store 🎉</span>
            <div class="spinner"></div>
          </button>
        </div>
      </div>

      <!-- ── STEP 4: Success ── -->
      <div class="step-panel" id="step4">
        <div class="success-panel show">
          <div class="success-icon">🎉</div>
          <h2>Your store is ready!</h2>
          <p>Welcome to Bizshop! Your account has been created and your store is live. Let's get your first product up.</p>
          <div class="success-checklist">
            <div class="success-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>Account created successfully</span></div>
            <div class="success-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>Your store URL is live</span></div>
            <div class="success-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>Payment methods connected</span></div>
            <div class="success-check"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg><span>14-day free trial started</span></div>
          </div>
          <a href="#" class="btn-go">
            Go to My Dashboard
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <div style="margin-top:16px;font-size:13px;color:var(--muted)">Check your email — we sent you a confirmation with your store link.</div>
        </div>
      </div>

    </div><!-- /signup-card -->

    <div class="auth-footer-note" id="footerNote">
      Already have an account? <a href="bizshop-login.html" style="color:var(--lime);font-weight:600;text-decoration:none">Log in →</a>
    </div>

  </div>
</main>

<footer>
  <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Use</a> &nbsp;·&nbsp; <a href="#">Merchant Terms</a> &nbsp;·&nbsp; © 2025 Bizshop
</footer>

<script>
/* ── THEME ── */
const html = document.documentElement;
let isDark = true;
try { if (localStorage.getItem('biz-theme') === 'light') { isDark = false; html.setAttribute('data-theme','light'); document.getElementById('themeToggle').textContent = '🌙'; } } catch(e){}
document.getElementById('themeToggle').addEventListener('click', () => {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  try { localStorage.setItem('biz-theme', isDark ? 'dark' : 'light'); } catch(e){}
});

/* ── HAMBURGER / MOBILE DRAWER ── */
const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
let drawerOpen = false;

hamburger.addEventListener('click', () => {
  drawerOpen = !drawerOpen;
  mobileDrawer.classList.toggle('open', drawerOpen);
  const spans = hamburger.querySelectorAll('span');
  if (drawerOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close drawer on outside click
document.addEventListener('click', (e) => {
  if (drawerOpen && !mobileDrawer.contains(e.target) && !hamburger.contains(e.target)) {
    drawerOpen = false;
    mobileDrawer.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

/* ── STEP LOGIC ── */
const stepLabels = ['Account Details', 'Business Info', 'Store Setup', 'All Done!'];
const stepProgress = ['25%', '50%', '75%', '100%'];
let currentStep = 1;
let goingBack = false;

function goToStep(n) {
  if (n > currentStep) {
    if (!validateStep(currentStep)) return;
  }

  goingBack = n < currentStep;

  // Remove active from old panel
  const oldPanel = document.getElementById('step' + currentStep);
  oldPanel.classList.remove('active', 'back');

  currentStep = n;

  // Add active to new panel with direction animation
  const panel = document.getElementById('step' + currentStep);
  panel.classList.remove('back');
  if (goingBack) panel.classList.add('back');
  panel.classList.add('active');

  // Update progress bar + label
  document.getElementById('stepLabel').textContent = stepLabels[currentStep - 1];
  document.getElementById('stepNum').textContent = currentStep;
  document.getElementById('progressBar').style.width = stepProgress[currentStep - 1];

  // Update step dots
  for (let i = 1; i <= 4; i++) {
    const dot = document.getElementById('dot' + i);
    const labels = ['Account', 'Business', 'Store', 'Done'];
    dot.classList.remove('active', 'done');
    if (i < currentStep) {
      dot.classList.add('done');
      dot.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg><span class="step-dot-label">' + labels[i - 1] + '</span>';
    } else {
      dot.innerHTML = i + '<span class="step-dot-label">' + labels[i - 1] + '</span>';
      if (i === currentStep) dot.classList.add('active');
    }
  }

  // "Already have an account?" — only show on step 1, hide from step 2 onwards
  const footerNote = document.getElementById('footerNote');
  const navLoginLink = document.getElementById('navLoginLink');
  if (currentStep === 1) {
    footerNote.classList.remove('hidden');
    if (navLoginLink) navLoginLink.style.display = '';
  } else {
    footerNote.classList.add('hidden');
    if (navLoginLink) navLoginLink.style.display = 'none';
  }

  // Simulate loading on final step
  if (n === 4) {
    const btn = document.getElementById('nextBtn3');
    if (btn) {
      btn.classList.add('loading');
      setTimeout(() => { btn.classList.remove('loading'); }, 1600);
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── VALIDATION ── */
function showErr(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? 'flex' : 'none';
}
function setErr(inputId, errId, hasErr) {
  const inp = document.getElementById(inputId);
  if (inp) { hasErr ? inp.classList.add('has-error') : inp.classList.remove('has-error'); }
  showErr(errId, hasErr);
}

function validateStep(step) {
  if (step === 1) {
    let ok = true;
    const fn = document.getElementById('firstName').value.trim();
    const ln = document.getElementById('lastName').value.trim();
    const em = document.getElementById('s1email').value.trim();
    const ph = document.getElementById('s1phone').value.trim();
    const pw = document.getElementById('s1pwd').value;
    if (!fn) { setErr('firstName','firstNameError',true); ok=false; } else setErr('firstName','firstNameError',false);
    if (!ln) { setErr('lastName','lastNameError',true); ok=false; } else setErr('lastName','lastNameError',false);
    if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setErr('s1email','s1emailError',true); ok=false; } else setErr('s1email','s1emailError',false);
    if (!ph || ph.replace(/\D/g,'').length < 7) { setErr('s1phone','s1phoneError',true); ok=false; } else setErr('s1phone','s1phoneError',false);
    if (!pw || pw.length < 8) { setErr('s1pwd','s1pwdError',true); ok=false; } else setErr('s1pwd','s1pwdError',false);
    return ok;
  }
  if (step === 2) {
    let ok = true;
    const bn = document.getElementById('bizName').value.trim();
    const bt = document.querySelector('#bizTypeGrid .selected');
    if (!bn) { setErr('bizName','bizNameError',true); ok=false; } else setErr('bizName','bizNameError',false);
    if (!bt) { showErr('bizTypeError',true); ok=false; } else showErr('bizTypeError',false);
    return ok;
  }
  if (step === 3) {
    let ok = true;
    const slug = document.getElementById('storeSlug').value.trim();
    const terms = document.getElementById('termsCheck').checked;
    if (!slug) { setErr('storeSlug','slugError',true); ok=false; } else setErr('storeSlug','slugError',false);
    if (!terms) { showErr('termsError',true); ok=false; } else showErr('termsError',false);
    return ok;
  }
  return true;
}

/* ── TILE SELECT ── */
function selectTile(el, gridId) {
  document.querySelectorAll('#' + gridId + ' .option-tile').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
  showErr('bizTypeError', false);
}

/* ── SLUG ── */
function updateSlug(val) {
  const clean = val.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  document.getElementById('slugVal').textContent = clean || 'yourstorename';
}

/* ── PASSWORD STRENGTH ── */
document.getElementById('s1pwd').addEventListener('input', function () {
  const v = this.value;
  const strength = document.getElementById('pwdStrength');
  if (!v) { strength.style.display = 'none'; return; }
  strength.style.display = 'block';
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const classes = ['', 'weak', 'fair', 'good', 'strong'];
  ['bar1','bar2','bar3','bar4'].forEach((id, i) => {
    const bar = document.getElementById(id);
    bar.className = 'pwd-bar';
    if (i < score) bar.classList.add(classes[score]);
  });
  document.getElementById('pwdStrengthLabel').textContent = labels[score] || 'Too short';
});

/* ── SHOW/HIDE PASSWORD ── */
document.getElementById('toggleS1Pwd').addEventListener('click', function () {
  const inp = document.getElementById('s1pwd');
  inp.type = inp.type === 'password' ? 'text' : 'password';
});

/* ── EMAIL VALID ON BLUR ── */
document.getElementById('s1email').addEventListener('blur', function () {
  if (this.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
    this.classList.add('valid'); this.classList.remove('has-error');
    showErr('s1emailError', false);
  }
});

/* ── TERMS ── */
document.getElementById('termsCheck').addEventListener('change', function () {
  if (this.checked) showErr('termsError', false);
});

/* ── CLEAR ERRORS ON INPUT ── */
['firstName','lastName','s1email','s1phone','s1pwd','bizName','storeSlug'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', () => el.classList.remove('has-error'));
});
</script>
</body>
</html>`;

export default function RegisterPage() {
  return (
    <iframe
      title="Bizshop Signup"
      srcDoc={signupHtml}
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
