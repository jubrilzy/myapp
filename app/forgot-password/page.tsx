'use client';

const forgotHtml = String.raw`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Forgot Password — Bizshop</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root, [data-theme="dark"] { --ink:#0a0a0f; --card:#16161f; --border:rgba(255,255,255,.07); --border-hover:rgba(255,255,255,.14); --border-focus:rgba(200,255,0,.4); --lime:#c8ff00; --lime-bg:rgba(200,255,0,.08); --lime-border:rgba(200,255,0,.2); --white:#f4f4f0; --muted:#7a7a8a; --muted2:#44445a; --error:#ff5566; --error-bg:rgba(255,85,102,.08); --input-bg:rgba(255,255,255,.04); --input-bg-focus:rgba(255,255,255,.06); }
[data-theme="light"] { --ink:#fafaf8; --card:#fff; --border:rgba(0,0,0,.09); --border-hover:rgba(0,0,0,.18); --border-focus:rgba(95,163,0,.5); --lime:#5fa300; --lime-bg:rgba(95,163,0,.08); --lime-border:rgba(95,163,0,.22); --white:#111118; --muted:#666678; --muted2:#9999aa; --error:#cc2233; --error-bg:rgba(204,34,51,.07); --input-bg:rgba(0,0,0,.03); --input-bg-focus:rgba(0,0,0,.05); }
body{background:var(--ink);color:var(--white);font-family:'DM Sans',sans-serif;min-height:100svh;display:flex;flex-direction:column}
nav{position:fixed;top:0;left:0;right:0;height:68px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,5vw,60px);border-bottom:1px solid var(--border);backdrop-filter:blur(20px);background:rgba(10,10,15,.8)}
.nav-logo{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;color:var(--white);text-decoration:none;display:flex;align-items:center;gap:8px}.nav-logo span{color:var(--lime)}.nav-logo-icon{width:30px;height:30px;background:var(--lime);border-radius:8px;display:grid;place-items:center}
.theme-toggle{width:36px;height:36px;border-radius:10px;background:var(--card);border:1px solid var(--border)}
main{flex:1;display:flex;align-items:center;justify-content:center;padding:100px 20px 60px}
.auth-wrap{width:100%;max-width:460px}
.auth-card{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:clamp(32px,5vw,48px);box-shadow:0 40px 100px rgba(0,0,0,.35)}
.auth-header{text-align:center;margin-bottom:28px}.auth-icon{width:56px;height:56px;background:var(--lime-bg);border:1px solid var(--lime-border);border-radius:16px;display:grid;place-items:center;font-size:24px;margin:0 auto 20px}
.auth-header h1{font-family:'Syne',sans-serif;font-size:26px;font-weight:800;margin-bottom:6px}.auth-header p{font-size:14px;color:var(--muted)}
.form-label{display:block;font-size:13px;font-weight:600;margin-bottom:8px}.input-wrap{position:relative}.input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--muted)}
.form-input{width:100%;padding:12px 16px 12px 44px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:12px;color:var(--white)}
.form-input:focus{outline:none;border-color:var(--border-focus);background:var(--input-bg-focus);box-shadow:0 0 0 3px var(--lime-bg)}
.form-input.has-error{border-color:var(--error);box-shadow:0 0 0 3px var(--error-bg)}
.form-error{display:none;margin-top:6px;font-size:12px;color:var(--error)}.form-error.show{display:block}
.btn-submit{width:100%;padding:14px 24px;background:var(--lime);color:#0a0a0f;border:none;border-radius:12px;font-family:'Syne',sans-serif;font-size:15px;font-weight:700;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:18px}
.auth-footer{text-align:center;margin-top:20px;font-size:13px;color:var(--muted)}.auth-footer a{color:var(--lime);font-weight:600;text-decoration:none}
</style>
</head>
<body>
<nav>
  <a href="/" target="_top" class="nav-logo"><div class="nav-logo-icon">🛍️</div>Biz<span>shop</span></a>
  <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">☀️</button>
</nav>
<main>
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-icon">📨</div>
        <h1>Forgot password?</h1>
        <p>Enter your email and we will send you a reset link.</p>
      </div>
      <form id="forgotForm" novalidate>
        <label class="form-label" for="email">Email address</label>
        <div class="input-wrap">
          <span class="input-icon">✉️</span>
          <input type="email" id="email" class="form-input" placeholder="you@yourbusiness.com" autocomplete="email">
        </div>
        <div class="form-error" id="emailError">Please enter a valid email address</div>
        <button type="submit" class="btn-submit">Send reset link</button>
      </form>
      <div class="auth-footer">Remember password? <a href="/login" target="_top">Back to login →</a></div>
    </div>
  </div>
</main>
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
document.getElementById('forgotForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const error = document.getElementById('emailError');
  if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add('has-error');
    error.classList.add('show');
    return;
  }
  email.classList.remove('has-error');
  error.classList.remove('show');
  alert('Reset link sent (UI demo).');
});
</script>
</body>
</html>`;

export default function ForgotPasswordPage() {
  return (
    <iframe
      title="Bizshop Forgot Password"
      srcDoc={forgotHtml}
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
    />
  );
}
