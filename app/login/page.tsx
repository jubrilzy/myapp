'use client';

const loginHtml = String.raw`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Log In — Bizshop</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root, [data-theme="dark"] {
  --ink: #0a0a0f;
  --surface: #111118;
  --card: #16161f;
  --border: rgba(255,255,255,0.07);
  --border-hover: rgba(255,255,255,0.14);
  --border-focus: rgba(200,255,0,0.4);
  --lime: #c8ff00;
  --lime-dim: #a8d900;
  --lime-bg: rgba(200,255,0,0.08);
  --lime-border: rgba(200,255,0,0.2);
  --white: #f4f4f0;
  --muted: #7a7a8a;
  --muted2: #44445a;
  --error: #ff5566;
  --error-bg: rgba(255,85,102,0.08);
  --input-bg: rgba(255,255,255,0.04);
  --input-bg-focus: rgba(255,255,255,0.06);
}

[data-theme="light"] {
  --ink: #fafaf8;
  --surface: #f1f1ee;
  --card: #ffffff;
  --border: rgba(0,0,0,0.09);
  --border-hover: rgba(0,0,0,0.18);
  --border-focus: rgba(95,163,0,0.5);
  --lime: #5fa300;
  --lime-dim: #4a8500;
  --lime-bg: rgba(95,163,0,0.08);
  --lime-border: rgba(95,163,0,0.22);
  --white: #111118;
  --muted: #666678;
  --muted2: #9999aa;
  --error: #cc2233;
  --error-bg: rgba(204,34,51,0.07);
  --input-bg: rgba(0,0,0,0.03);
  --input-bg-focus: rgba(0,0,0,0.05);
}

html { scroll-behavior: smooth; }

body {
  background: var(--ink);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px; line-height: 1.6;
  min-height: 100svh;
  display: flex; flex-direction: column;
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
.blob-2 { width: 350px; height: 350px; background: rgba(80,60,255,0.05); bottom: 10%; left: -100px; }

nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 clamp(20px,5vw,60px); height: 68px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(10,10,15,0.80);
  transition: background .3s;
}
[data-theme="light"] nav { background: rgba(250,250,248,0.85); }

.nav-logo {
  font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800;
  letter-spacing: -0.5px; color: var(--white); text-decoration: none;
  display: flex; align-items: center; gap: 8px;
}
.nav-logo span { color: var(--lime); }
.nav-logo-icon { width: 30px; height: 30px; background: var(--lime); border-radius: 8px; display: grid; place-items: center; font-size: 15px; }
.theme-toggle { width: 36px; height: 36px; border-radius: 10px; background: var(--card); border: 1px solid var(--border); cursor: pointer; display: grid; place-items: center; font-size: 14px; transition: all .2s; }
.theme-toggle:hover { border-color: var(--border-hover); transform: scale(1.08); }
.nav-link { font-size: 13px; color: var(--muted); text-decoration: none; font-weight: 500; transition: color .2s; }
.nav-link:hover { color: var(--white); }
.nav-link span { color: var(--lime); font-weight: 700; }

.hamburger {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; padding: 4px; background: none; border: none; flex-shrink: 0;
}
.hamburger span { width: 22px; height: 2px; background: var(--white); border-radius: 2px; display: block; transition: all .28s; }
[data-theme="light"] .hamburger span { background: #111118; }

.mobile-drawer {
  position: fixed; top: 68px; left: 0; right: 0; bottom: 0; z-index: 98;
  background: rgba(10,10,15,0.98); backdrop-filter: blur(20px);
  display: flex; flex-direction: column; padding: 28px 24px 40px;
  transform: translateX(100%); transition: transform .3s cubic-bezier(.4,0,.2,1);
  border-top: 1px solid var(--border);
}
[data-theme="light"] .mobile-drawer { background: rgba(250,250,248,0.98); }
.mobile-drawer.open { transform: translateX(0); }
.mobile-drawer-link { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: var(--white); text-decoration: none; padding: 16px 0; border-bottom: 1px solid var(--border); letter-spacing: -0.4px; transition: color .2s; display: block; }
[data-theme="light"] .mobile-drawer-link { color: #111118; }
.mobile-drawer-link:hover { color: var(--lime); }
.drawer-cta { margin-top: 28px; display: flex; flex-direction: column; gap: 12px; }
.drawer-btn { width: 100%; padding: 14px; border-radius: 12px; font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700; text-align: center; text-decoration: none; display: block; transition: all .2s; }
.drawer-btn-outline { background: transparent; color: var(--white); border: 1.5px solid var(--border); }
[data-theme="light"] .drawer-btn-outline { color: #111118; }
.drawer-btn-lime { background: var(--lime); color: #0a0a0f; border: none; }
.nav-right-group { display: flex; align-items: center; gap: 12px; }

@media(max-width: 640px) {
  .nav-link { display: none; }
  .hamburger { display: flex; }
}
@media(min-width: 641px) {
  .mobile-drawer { display: none !important; }
  .hamburger { display: none !important; }
}

main {
  flex: 1; display: flex; align-items: center; justify-content: center;
  padding: 100px clamp(20px,5vw,40px) 60px;
  position: relative; z-index: 1;
}
.auth-wrap { width: 100%; max-width: 460px; animation: fadeUp .5s ease both; }
@keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

.auth-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: clamp(32px,5vw,48px);
  box-shadow: 0 40px 100px rgba(0,0,0,0.35);
}

.auth-header { text-align: center; margin-bottom: 36px; }
.auth-icon {
  width: 56px; height: 56px;
  background: var(--lime-bg); border: 1px solid var(--lime-border);
  border-radius: 16px; display: grid; place-items: center;
  font-size: 26px; margin: 0 auto 20px;
}
.auth-header h1 {
  font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800;
  letter-spacing: -0.8px; color: var(--white); margin-bottom: 6px;
}
.auth-header p { font-size: 14px; color: var(--muted); font-weight: 300; }

.form-group { margin-bottom: 18px; }
.form-label { display: block; font-size: 13px; font-weight: 600; color: var(--white); margin-bottom: 8px; letter-spacing: 0.1px; }
.input-wrap { position: relative; }
.form-input {
  width: 100%; padding: 12px 16px 12px 44px;
  background: var(--input-bg);
  border: 1.5px solid var(--border);
  border-radius: 12px; font-family: 'DM Sans', sans-serif;
  font-size: 14px; color: var(--white);
  outline: none; transition: all .2s;
  -webkit-appearance: none;
}
.form-input::placeholder { color: var(--muted); }
.form-input:hover { border-color: var(--border-hover); background: var(--input-bg-focus); }
.form-input:focus { border-color: var(--border-focus); background: var(--input-bg-focus); box-shadow: 0 0 0 3px var(--lime-bg); }
.form-input.has-error { border-color: var(--error); box-shadow: 0 0 0 3px var(--error-bg); }
.input-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--muted); pointer-events: none; line-height: 1; }
.input-icon svg { display: block; }
.input-action { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: var(--muted); cursor: pointer; background: none; border: none; padding: 0; display: flex; transition: color .2s; }
.input-action:hover { color: var(--white); }
.form-error { display: flex; align-items: center; gap: 6px; margin-top: 6px; font-size: 12px; color: var(--error); font-weight: 500; }
.form-error svg { flex-shrink: 0; }
.form-meta { display: flex; justify-content: flex-end; margin-top: -10px; margin-bottom: 18px; }
.link-subtle { font-size: 13px; color: var(--muted); text-decoration: none; transition: color .2s; }
.link-subtle:hover { color: var(--lime); }

.btn-submit {
  width: 100%; padding: 14px 24px;
  background: var(--lime); color: #0a0a0f;
  border: none; border-radius: 12px;
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all .2s; letter-spacing: -0.2px;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin-bottom: 20px;
}
.btn-submit:hover { filter: brightness(1.08); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(200,255,0,0.25); }
.btn-submit:active { transform: translateY(0); filter: none; }
.btn-submit.loading { opacity: .7; pointer-events: none; }

.auth-divider { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; font-size: 12px; color: var(--muted2); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
.auth-divider::before, .auth-divider::after { content:''; flex:1; height:1px; background:var(--border); }
.oauth-btn {
  width: 100%; padding: 12px;
  background: var(--input-bg); border: 1.5px solid var(--border);
  border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 10px;
  font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 500; color: var(--white);
  cursor: pointer; transition: all .2s; text-decoration: none;
}
.oauth-btn:hover { border-color: var(--border-hover); background: var(--input-bg-focus); }

.auth-footer { text-align: center; margin-top: 24px; font-size: 13px; color: var(--muted); }
.auth-footer a { color: var(--lime); font-weight: 600; text-decoration: none; }
.auth-footer a:hover { text-decoration: underline; }

.spinner {
  width: 16px; height: 16px; border: 2px solid rgba(10,10,15,0.3);
  border-top-color: #0a0a0f; border-radius: 50%;
  animation: spin .7s linear infinite; display: none;
}
.btn-submit.loading .spinner { display: block; }
.btn-submit.loading .btn-text { display: none; }
@keyframes spin { to { transform: rotate(360deg); } }

footer { text-align: center; padding: 20px; font-size: 12px; color: var(--muted2); border-top: 1px solid var(--border); position: relative; z-index: 1; }
footer a { color: var(--muted); text-decoration: none; }
footer a:hover { color: var(--white); }

@media(max-width:480px) {
  .auth-card { border-radius: 20px; padding: 28px 24px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<div class="blob blob-1"></div>
<div class="blob blob-2"></div>

<nav>
  <a href="/" class="nav-logo">
    <div class="nav-logo-icon">🛍️</div>
    Biz<span>shop</span>
  </a>
  <div class="nav-right-group">
    <a href="/register" class="nav-link">Don't have an account? <span>Sign up free →</span></a>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">☀️</button>
    <button class="hamburger" id="hamburger" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-drawer" id="mobileDrawer">
  <a href="/" class="mobile-drawer-link">Back to Home</a>
  <div class="drawer-cta">
    <a href="/register" class="drawer-btn drawer-btn-outline">Create Free Account</a>
    <a href="/login" class="drawer-btn drawer-btn-lime">Log in</a>
  </div>
</div>

<main>
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-icon">🔑</div>
        <h1>Welcome back</h1>
        <p>Log in to your Bizshop dashboard</p>
      </div>

      <form id="loginForm" novalidate>
        <div class="form-group">
          <label class="form-label" for="email">Email address</label>
          <div class="input-wrap">
            <span class="input-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 7l10 7 10-7"/></svg>
            </span>
            <input type="email" id="email" class="form-input" placeholder="you@yourbusiness.com" autocomplete="email">
          </div>
          <div class="form-error" id="emailError" style="display:none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            Please enter a valid email address
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <div class="input-wrap">
            <span class="input-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <input type="password" id="password" class="form-input" placeholder="Enter your password" autocomplete="current-password">
            <button type="button" class="input-action" id="togglePwd" aria-label="Show password">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
          </div>
          <div class="form-error" id="pwdError" style="display:none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
            Password is required
          </div>
        </div>

        <div class="form-meta">
          <a href="/forgot-password" class="link-subtle">Forgot password?</a>
        </div>

        <button type="submit" class="btn-submit" id="loginBtn">
          <span class="btn-text">Log in to Dashboard</span>
          <div class="spinner"></div>
        </button>
      </form>

      <div class="auth-divider">or continue with</div>
      <a href="#" class="oauth-btn">
        <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
        Continue with Google
      </a>

      <div class="auth-footer">
        New to Bizshop? <a href="/register">Create a free account →</a>
      </div>

    </div>
  </div>
</main>

<footer>
  <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Use</a> &nbsp;·&nbsp; © 2025 Bizshop
</footer>

<script>
const html = document.documentElement;
let isDark = true;
try { if (localStorage.getItem('biz-theme') === 'light') { isDark = false; html.setAttribute('data-theme','light'); document.getElementById('themeToggle').textContent = '🌙'; } } catch(e){}
document.getElementById('themeToggle').addEventListener('click', () => {
  isDark = !isDark;
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  try { localStorage.setItem('biz-theme', isDark ? 'dark' : 'light'); } catch(e){}
});

const hamburger = document.getElementById('hamburger');
const mobileDrawer = document.getElementById('mobileDrawer');
let drawerOpen = false;
if (hamburger && mobileDrawer) {
  hamburger.addEventListener('click', () => {
    drawerOpen = !drawerOpen;
    mobileDrawer.classList.toggle('open', drawerOpen);
    const spans = hamburger.querySelectorAll('span');
    if (drawerOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  document.addEventListener('click', (e) => {
    if (drawerOpen && !mobileDrawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawerOpen = false;
      mobileDrawer.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

const pwdInput = document.getElementById('password');
document.getElementById('togglePwd').addEventListener('click', () => {
  const isText = pwdInput.type === 'text';
  pwdInput.type = isText ? 'password' : 'text';
});

function validate() {
  let ok = true;
  const email = document.getElementById('email');
  const pwd = document.getElementById('password');
  const emailErr = document.getElementById('emailError');
  const pwdErr = document.getElementById('pwdError');

  if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('has-error'); emailErr.style.display = 'flex'; ok = false;
  } else { email.classList.remove('has-error'); emailErr.style.display = 'none'; }

  if (!pwd.value) {
    pwd.classList.add('has-error'); pwdErr.style.display = 'flex'; ok = false;
  } else { pwd.classList.remove('has-error'); pwdErr.style.display = 'none'; }

  return ok;
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;
  const btn = document.getElementById('loginBtn');
  btn.classList.add('loading');
  setTimeout(() => { btn.classList.remove('loading'); }, 2500);
});

['email','password'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById(id).classList.remove('has-error');
  });
});
</script>
</body>
</html>`;

export default function LoginPage() {
  return (
    <iframe
      title="Bizshop Login"
      srcDoc={loginHtml}
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
