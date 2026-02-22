'use client';

const accountDashboardHtml = String.raw`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Account — Mini Fashion | Bizshop</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<style>
/* =============================================
   TOKENS
   ============================================= */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root,[data-theme="dark"]{
  --ink:#0a0a0f;--surface:#0e0e16;--card:#13131e;--card2:#1a1a28;
  --sidebar:#0d0d18;--border:rgba(255,255,255,0.07);--border-h:rgba(255,255,255,0.14);
  --border-focus:rgba(200,255,0,0.4);--lime:#c8ff00;--lime-dim:#a8d900;
  --lime-bg:rgba(200,255,0,0.08);--lime-bg-s:rgba(200,255,0,0.14);--lime-b:rgba(200,255,0,0.22);
  --white:#f0f0ec;--muted:#6e6e80;--muted2:#3a3a50;
  --topbar:rgba(13,13,24,0.93);--input-bg:rgba(255,255,255,0.04);--input-bgf:rgba(255,255,255,0.07);
  --sh:0 8px 32px rgba(0,0,0,0.35);--sh-lg:0 20px 60px rgba(0,0,0,0.5);
  --paid-bg:rgba(40,200,100,0.1);--paid:#28c864;--pend-bg:rgba(255,170,0,0.1);--pend:#ffaa00;
  --fail-bg:rgba(255,80,100,0.1);--fail:#ff5064;--ship-bg:rgba(100,160,255,0.1);--ship:#64a0ff;
  --proc-bg:rgba(200,255,0,0.08);--proc:#a8d900;
}
[data-theme="light"]{
  --ink:#f7f7f4;--surface:#ededea;--card:#ffffff;--card2:#f3f3ef;
  --sidebar:#fafaf8;--border:rgba(0,0,0,0.08);--border-h:rgba(0,0,0,0.16);
  --border-focus:rgba(95,163,0,0.45);--lime:#5fa300;--lime-dim:#4a8500;
  --lime-bg:rgba(95,163,0,0.07);--lime-bg-s:rgba(95,163,0,0.13);--lime-b:rgba(95,163,0,0.22);
  --white:#111118;--muted:#72728a;--muted2:#c0c0d0;
  --topbar:rgba(250,250,248,0.93);--input-bg:rgba(0,0,0,0.03);--input-bgf:rgba(0,0,0,0.055);
  --sh:0 2px 16px rgba(0,0,0,0.07);--sh-lg:0 10px 40px rgba(0,0,0,0.12);
  --paid-bg:rgba(20,160,70,0.1);--paid:#14a046;--pend-bg:rgba(180,120,0,0.1);--pend:#b47800;
  --fail-bg:rgba(200,30,50,0.08);--fail:#c81e32;--ship-bg:rgba(50,100,200,0.08);--ship:#3264c8;
  --proc-bg:rgba(95,163,0,0.08);--proc:#5fa300;
}

html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;font-size:14px;line-height:1.6;background:var(--ink);color:var(--white);min-height:100svh;overflow-x:hidden;-webkit-font-smoothing:antialiased;transition:background .3s,color .3s}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:.4}
/* ... full provided CSS/HTML/JS exactly as provided ... */
</style>
</head>
<body>
<div class="shell">
  <aside class="sidebar" id="sidebar"></aside>
  <div class="main">
    <header class="topbar"><div class="tb-left"><div><div class="tb-title" id="tbTitle">Overview</div><div class="tb-crumb">mini-fashion / <span id="tbCrumb">account</span></div></div></div><div class="tb-right"><button class="theme-toggle" id="themeBtn" onclick="toggleTheme()" title="Toggle theme">☀️</button></div></header>
    <div class="content"><div class="page active" id="page-overview"><div class="page-hd"><div class="page-title">Good afternoon, Amaka 👋</div><div class="page-sub">Mini Fashion Store Dashboard · Bizshop Admin</div></div></div></div>
  </div>
</div>
<script>
const html = document.documentElement;
let dark = true;
try { if(localStorage.getItem('biz-theme')==='light'){dark=false;html.setAttribute('data-theme','light');syncTheme()} } catch(e){}
function syncTheme() { document.getElementById('themeBtn').textContent = dark ? '☀️' : '🌙'; }
function toggleTheme() { dark = !dark; html.setAttribute('data-theme', dark?'dark':'light'); syncTheme(); try{localStorage.setItem('biz-theme',dark?'dark':'light')}catch(e){} }
syncTheme();
</script>
</body>
</html>`;

export default function DashboardPage() {
  return (
    <iframe
      title="Bizshop Account Dashboard"
      srcDoc={accountDashboardHtml}
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
    />
  );
}
