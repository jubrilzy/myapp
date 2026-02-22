'use client';

const dashboardHtml = String.raw`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Store Admin — Mini Fashion | Bizshop</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root,[data-theme="dark"]{--ink:#0a0a0f;--surface:#0e0e16;--card:#13131e;--card2:#1a1a28;--sidebar:#0d0d18;--border:rgba(255,255,255,0.07);--border-h:rgba(255,255,255,0.14);--border-focus:rgba(200,255,0,0.4);--lime:#c8ff00;--lime-dim:#a8d900;--lime-bg:rgba(200,255,0,0.08);--lime-bg-s:rgba(200,255,0,0.14);--lime-b:rgba(200,255,0,0.22);--white:#f0f0ec;--muted:#6e6e80;--muted2:#3a3a50;--topbar:rgba(13,13,24,0.93);--input-bg:rgba(255,255,255,0.04);--input-bgf:rgba(255,255,255,0.07)}
[data-theme="light"]{--ink:#f7f7f4;--surface:#ededea;--card:#ffffff;--card2:#f3f3ef;--sidebar:#fafaf8;--border:rgba(0,0,0,0.08);--border-h:rgba(0,0,0,0.16);--border-focus:rgba(95,163,0,0.45);--lime:#5fa300;--lime-dim:#4a8500;--lime-bg:rgba(95,163,0,0.07);--lime-bg-s:rgba(95,163,0,0.13);--lime-b:rgba(95,163,0,0.22);--white:#111118;--muted:#72728a;--muted2:#c0c0d0;--topbar:rgba(250,250,248,0.93);--input-bg:rgba(0,0,0,0.03);--input-bgf:rgba(0,0,0,0.055)}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;font-size:14px;line-height:1.6;background:var(--ink);color:var(--white);min-height:100svh;overflow-x:hidden;-webkit-font-smoothing:antialiased;transition:background .3s,color .3s}
body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:.4}
.shell{display:flex;min-height:100svh}
.sidebar{width:248px;flex-shrink:0;background:var(--sidebar);border-right:1px solid var(--border);display:flex;flex-direction:column;position:fixed;top:0;left:0;bottom:0;z-index:60;transition:transform .32s cubic-bezier(.4,0,.2,1),background .3s;overflow-y:auto}
.sb-hd{padding:20px 18px 16px;border-bottom:1px solid var(--border)}
.store-brand{display:flex;align-items:center;gap:10px;text-decoration:none;margin-bottom:14px}
.store-avi{width:38px;height:38px;border-radius:11px;background:var(--lime);display:grid;place-items:center;font-size:19px}
.store-nm{font-family:'Syne',sans-serif;font-size:14px;font-weight:800;color:var(--white)}
.store-url{font-size:10px;color:var(--muted)}
.admin-pill{display:flex;align-items:center;gap:10px;background:var(--lime-bg);border:1px solid var(--lime-b);border-radius:12px;padding:9px 11px}
.admin-avi{width:30px;height:30px;border-radius:50%;background:var(--lime);display:grid;place-items:center;font-family:'Syne',sans-serif;font-size:12px;font-weight:800;color:#0a0a0f}
.admin-name{font-size:12px;font-weight:700;color:var(--white)}
.admin-tag{font-size:10px;color:var(--lime);font-weight:700;text-transform:uppercase}
.sb-nav{flex:1;padding:14px 10px;display:flex;flex-direction:column;gap:1px}
.nav-lbl{font-size:9px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--muted2);padding:14px 10px 5px}
.ni{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:10px;font-size:13px;font-weight:500;color:var(--muted);cursor:pointer;transition:all .16s;text-decoration:none;border:1px solid transparent}
.ni:hover{color:var(--white);background:var(--lime-bg)}
.ni.active{color:var(--white);background:var(--lime-bg-s);border-color:var(--lime-b);font-weight:700}
.main{margin-left:248px;flex:1;display:flex;flex-direction:column;min-height:100svh;padding-bottom:72px}
.topbar{position:sticky;top:0;z-index:40;height:58px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;background:var(--topbar);border-bottom:1px solid var(--border);backdrop-filter:blur(20px) saturate(180%)}
.tb-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:var(--white)}
.theme-toggle{width:36px;height:36px;border-radius:10px;background:var(--card);border:1px solid var(--border);cursor:pointer;display:grid;place-items:center;font-size:14px;transition:all .2s;color:var(--white)}
.theme-toggle:hover{border-color:var(--border-h);transform:scale(1.08)}
.content{flex:1;padding:26px 24px;width:100%}
.page-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800;color:var(--white);margin-bottom:3px}
.page-sub{font-size:13px;color:var(--muted);font-weight:300}
.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:18px 0}
.stat-card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:18px 20px}
.stat-val{font-family:'Syne',sans-serif;font-size:24px;font-weight:800;letter-spacing:-1px;color:var(--white)}
.stat-lbl{font-size:12px;color:var(--muted)}
.stat-sub{font-size:10px;color:var(--lime);font-weight:700;margin-top:4px}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:22px}
.sec-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:var(--white)}
.t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px}
.t-item{border:1px solid var(--border);background:var(--card2);border-radius:12px;padding:14px;cursor:pointer}
.t-item.active{border-color:var(--lime-b);background:var(--lime-bg)}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:700;background:var(--lime-bg);color:var(--lime);border:1px solid var(--lime-b)}
.btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;border:none}
.btn-primary{background:var(--lime);color:#0a0a0f}.btn-ghost{background:var(--input-bg);color:var(--white);border:1px solid var(--border)}
@media(max-width:900px){.sidebar{transform:translateX(-100%)}.main{margin-left:0}.t-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="shell">
<aside class="sidebar">
  <div class="sb-hd">
    <a href="#" class="store-brand"><div class="store-avi">👗</div><div><div class="store-nm">Mini Fashion</div><div class="store-url">bizshop.ng/mini-fashion</div></div></a>
    <div class="admin-pill"><div class="admin-avi">A</div><div><div class="admin-name">Amaka Okonkwo</div><div class="admin-tag">Store Admin</div></div></div>
  </div>
  <nav class="sb-nav">
    <div class="nav-lbl">Dashboard</div>
    <a class="ni active">Overview</a>
    <a class="ni">Orders</a>
    <a class="ni">Deliveries</a>
    <a class="ni">Products</a>
    <a class="ni">Customers</a>
    <div class="nav-lbl">Account</div>
    <a class="ni">Store Settings</a>
  </nav>
</aside>
<div class="main">
  <header class="topbar">
    <div class="tb-title">Overview</div>
    <button class="theme-toggle" id="themeBtn" onclick="toggleTheme()">☀️</button>
  </header>
  <div class="content">
    <div class="page-title">Good afternoon, Amaka 👋</div>
    <div class="page-sub">Here's your store performance for Mini Fashion today</div>

    <div class="stats-grid">
      <div class="stat-card"><div class="stat-val">7</div><div class="stat-lbl">Total Orders</div><div class="stat-sub">+2 this week</div></div>
      <div class="stat-card"><div class="stat-val">₦84.5k</div><div class="stat-lbl">Total Revenue</div><div class="stat-sub">This month</div></div>
      <div class="stat-card"><div class="stat-val">2</div><div class="stat-lbl">Out for Delivery</div><div class="stat-sub">You're delivering today</div></div>
      <div class="stat-card"><div class="stat-val">1</div><div class="stat-lbl">Pending Payment</div><div class="stat-sub">Awaiting confirmation</div></div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center">
        <div>
          <div class="sec-title">Store Template</div>
          <div class="page-sub">Select a template for your storefront. Bizshop Default is the default template.</div>
        </div>
        <span class="badge">Default: Bizshop Default</span>
      </div>

      <div class="t-grid" id="templates">
        <button class="t-item active" data-template="default" onclick="selectTemplate(this)"><strong>Bizshop Default</strong><div class="page-sub">Balanced layout for fashion, beauty and general stores.</div></button>
        <button class="t-item" data-template="minimal" onclick="selectTemplate(this)"><strong>Minimal Grid</strong><div class="page-sub">Clean, product-first store layout with lightweight sections.</div></button>
        <button class="t-item" data-template="editorial" onclick="selectTemplate(this)"><strong>Editorial</strong><div class="page-sub">Story-led homepage with large banners and campaign sections.</div></button>
      </div>

      <div class="card" style="margin-top:14px">
        <div class="page-sub">Active template</div>
        <div class="sec-title" id="activeName" style="margin-top:6px">Bizshop Default</div>
        <div class="page-sub" id="activeDesc" style="margin-top:6px">Balanced layout for fashion, beauty and general stores.</div>
        <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
          <button class="btn btn-primary">Save Template</button>
          <button class="btn btn-ghost">Preview Store</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<script>
const html = document.documentElement;
let dark = true;
try { if(localStorage.getItem('biz-theme')==='light'){dark=false;html.setAttribute('data-theme','light')} } catch(e){}
function syncTheme(){ document.getElementById('themeBtn').textContent = dark ? '☀️' : '🌙'; }
function toggleTheme(){ dark=!dark; html.setAttribute('data-theme', dark?'dark':'light'); syncTheme(); try{localStorage.setItem('biz-theme', dark?'dark':'light')}catch(e){} }

const templateMeta = {
  default: { name: 'Bizshop Default', desc: 'Balanced layout for fashion, beauty and general stores.' },
  minimal: { name: 'Minimal Grid', desc: 'Clean, product-first store layout with lightweight sections.' },
  editorial: { name: 'Editorial', desc: 'Story-led homepage with large banners and campaign sections.' }
};

function selectTemplate(el){
  document.querySelectorAll('.t-item').forEach(function(i){ i.classList.remove('active'); });
  el.classList.add('active');
  const key = el.getAttribute('data-template') || 'default';
  const data = templateMeta[key];
  document.getElementById('activeName').textContent = data.name;
  document.getElementById('activeDesc').textContent = data.desc;
}
syncTheme();
</script>
</body>
</html>`;

export default function DashboardPage() {
  return (
    <iframe
      title="Bizshop Dashboard"
      srcDoc={dashboardHtml}
      style={{ width: '100%', height: '100vh', border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
    />
  );
}
