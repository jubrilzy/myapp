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
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root,[data-theme="dark"]{--ink:#0a0a0f;--surface:#0e0e16;--card:#13131e;--card2:#1a1a28;--sidebar:#0d0d18;--border:rgba(255,255,255,.07);--border-h:rgba(255,255,255,.14);--lime:#c8ff00;--lime-bg:rgba(200,255,0,.08);--lime-b:rgba(200,255,0,.22);--white:#f0f0ec;--muted:#6e6e80;--muted2:#3a3a50;--topbar:rgba(13,13,24,.93);--paid-bg:rgba(40,200,100,.1);--paid:#28c864;--pend-bg:rgba(255,170,0,.1);--pend:#ffaa00;--fail-bg:rgba(255,80,100,.1);--fail:#ff5064;--ship-bg:rgba(100,160,255,.1);--ship:#64a0ff;--proc-bg:rgba(200,255,0,.08);--proc:#a8d900;--input-bg:rgba(255,255,255,.04)}
[data-theme="light"]{--ink:#f7f7f4;--surface:#ededea;--card:#fff;--card2:#f3f3ef;--sidebar:#fafaf8;--border:rgba(0,0,0,.08);--border-h:rgba(0,0,0,.16);--lime:#5fa300;--lime-bg:rgba(95,163,0,.07);--lime-b:rgba(95,163,0,.22);--white:#111118;--muted:#72728a;--muted2:#c0c0d0;--topbar:rgba(250,250,248,.93);--paid-bg:rgba(20,160,70,.1);--paid:#14a046;--pend-bg:rgba(180,120,0,.1);--pend:#b47800;--fail-bg:rgba(200,30,50,.08);--fail:#c81e32;--ship-bg:rgba(50,100,200,.08);--ship:#3264c8;--proc-bg:rgba(95,163,0,.08);--proc:#5fa300;--input-bg:rgba(0,0,0,.03)}
html{scroll-behavior:smooth}body{font-family:'DM Sans',sans-serif;background:var(--ink);color:var(--white);min-height:100svh;overflow-x:hidden}body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:9999}
.shell{display:flex;min-height:100svh}.sidebar{width:248px;background:var(--sidebar);border-right:1px solid var(--border);position:fixed;top:0;left:0;bottom:0;z-index:60;overflow:auto;transition:transform .3s}.sb-header{padding:20px 18px 16px;border-bottom:1px solid var(--border)}.store-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;margin-bottom:14px}.store-avi{width:38px;height:38px;border-radius:11px;background:var(--lime);display:grid;place-items:center}.store-nm{font-family:'Syne',sans-serif;font-weight:800}.store-url{font-size:10px;color:var(--muted)}.cust-pill{display:flex;align-items:center;gap:10px;background:var(--lime-bg);border:1px solid var(--lime-b);border-radius:12px;padding:9px 11px}.cust-avi{width:30px;height:30px;border-radius:50%;background:var(--lime);display:grid;place-items:center;color:#0a0a0f;font-family:'Syne',sans-serif;font-weight:800}.cust-tag{font-size:10px;color:var(--lime);font-weight:700}
.sb-nav{padding:14px 10px}.nav-lbl{font-size:9px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;color:var(--muted2);padding:14px 10px 5px}.ni{display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:10px;font-size:13px;color:var(--muted);text-decoration:none;border:1px solid transparent;cursor:pointer}.ni:hover{color:var(--white);background:var(--lime-bg)}.ni.active{color:var(--white);background:rgba(200,255,0,.14);border-color:var(--lime-b);font-weight:700}.nb{margin-left:auto;background:var(--lime);color:#0a0a0f;font-size:10px;padding:1px 7px;border-radius:99px;font-family:'Syne',sans-serif;font-weight:800}
.main{margin-left:248px;flex:1;display:flex;flex-direction:column}.topbar{position:sticky;top:0;z-index:40;height:58px;padding:0 24px;display:flex;align-items:center;justify-content:space-between;background:var(--topbar);border-bottom:1px solid var(--border)}.tb-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:800}.tb-crumb{font-size:11px;color:var(--muted)}.tb-crumb span{color:var(--lime);font-weight:700}.theme-toggle{width:36px;height:36px;border-radius:10px;background:var(--card);border:1px solid var(--border);cursor:pointer;color:var(--white)}
.content{padding:26px 24px}.page{display:none}.page.active{display:block}.page-title{font-family:'Syne',sans-serif;font-size:22px;font-weight:800}.page-sub{font-size:13px;color:var(--muted)}.stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:18px 0}.stat-card,.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:18px}.stat-val{font-family:'Syne',sans-serif;font-size:24px;font-weight:800}.stat-lbl{font-size:12px;color:var(--muted)}.stat-sub{font-size:10px;color:var(--lime);font-weight:700}.two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px}.sec-title{font-family:'Syne',sans-serif;font-size:15px;font-weight:800}.btn{display:inline-flex;align-items:center;gap:7px;padding:9px 18px;border-radius:10px;font-size:13px;font-weight:600;border:none;cursor:pointer}.btn-primary{background:var(--lime);color:#0a0a0f}.btn-ghost{background:var(--input-bg);color:var(--white);border:1px solid var(--border)}
.badge{display:inline-flex;padding:3px 9px;border-radius:99px;font-size:11px;font-weight:700}.badge-paid{background:var(--paid-bg);color:var(--paid)}.badge-pending{background:var(--pend-bg);color:var(--pend)}.badge-shipped{background:var(--ship-bg);color:var(--ship)}.badge-processing{background:var(--proc-bg);color:var(--proc)}.badge-failed{background:var(--fail-bg);color:var(--fail)}
.ir{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--border)}.ir:last-child{border-bottom:none}.ir-lbl{font-size:12px;color:var(--muted)}
.tbl-wrap{overflow:auto;border:1px solid var(--border);border-radius:14px}table{width:100%;border-collapse:collapse}thead th{padding:11px 15px;text-align:left;font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);background:var(--card2);border-bottom:1px solid var(--border)}tbody td{padding:13px 15px;border-bottom:1px solid var(--border)}
.inv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px}.inv-card{background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden}.inv-img{height:130px;background:var(--card2);display:grid;place-items:center;font-size:46px}.inv-body{padding:12px 14px}.inv-name{font-size:13px;font-weight:700}.inv-price{font-family:'Syne',sans-serif;font-size:15px;font-weight:800;color:var(--lime)}
.form-group{margin-bottom:14px}.form-label{display:block;font-size:12px;font-weight:700;margin-bottom:6px}.fi{width:100%;padding:10px 14px;background:var(--input-bg);border:1.5px solid var(--border);border-radius:10px;color:var(--white)}
.timeline{display:flex;flex-direction:column}.tl-item{display:flex;gap:13px;padding-bottom:18px}.tl-dot{width:30px;height:30px;border-radius:50%;display:grid;place-items:center}.tl-dot.done{background:var(--lime);color:#0a0a0f}.tl-dot.active{background:var(--lime-bg);border:2px solid var(--lime);color:var(--lime)}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:59}.bottom-nav{display:none}
@media(max-width:900px){.sidebar{transform:translateX(-100%)}.sidebar.open{transform:translateX(0)}.sb-overlay.show{display:block}.main{margin-left:0}.two-col{grid-template-columns:1fr}.bottom-nav{display:flex;position:fixed;bottom:0;left:0;right:0;background:var(--topbar);border-top:1px solid var(--border);padding:8px;z-index:55;justify-content:space-around}.bn-item{font-size:10px;color:var(--muted);background:none;border:none}.bn-item.active{color:var(--lime)}}
</style>
</head>
<body>
<div class="shell">
<aside class="sidebar" id="sidebar">
  <div class="sb-header">
    <a href="#" class="store-brand"><div class="store-avi">👗</div><div><div class="store-nm">Mini Fashion</div><div class="store-url">bizshop.ng/mini-fashion</div></div></a>
    <div class="cust-pill"><div class="cust-avi">A</div><div><div>Amaka Okonkwo</div><div class="cust-tag">Store Owner</div></div></div>
  </div>
  <nav class="sb-nav">
    <div class="nav-lbl">Dashboard</div>
    <a class="ni active" data-page="overview" onclick="go('overview')">Overview</a>
    <a class="ni" data-page="orders" onclick="go('orders')">Orders <span class="nb">3</span></a>
    <a class="ni" data-page="addresses" onclick="go('addresses')">Delivery Zones</a>
    <a class="ni" data-page="notifications" onclick="go('notifications')">Notifications <span class="nb" id="unreadBadge">2</span></a>
    <a class="ni" data-page="saved" onclick="go('saved')">Customers</a>
    <div class="nav-lbl">Store Management</div>
    <a class="ni" data-page="shop" onclick="go('shop')">Products</a>
    <a class="ni" data-page="inventory" onclick="go('inventory')">Inventory</a>
    <a class="ni" data-page="analytics" onclick="go('analytics')">Sales Analytics</a>
    <a class="ni" data-page="payments" onclick="go('payments')">Payment Setup</a>
    <div class="nav-lbl">Account</div>
    <a class="ni" data-page="settings" onclick="go('settings')">Settings</a>
    <a class="ni" data-page="security" onclick="go('security')">Security</a>
  </nav>
</aside>
<div class="sb-overlay" id="sbOverlay" onclick="closeSb()"></div>
<div class="main">
  <header class="topbar">
    <div><div class="tb-title" id="tbTitle">Overview</div><div class="tb-crumb">mini-fashion / <span id="tbCrumb">account</span></div></div>
    <button class="theme-toggle" id="themeBtn" onclick="toggleTheme()">☀️</button>
  </header>
  <div class="content">

    <div class="page active" id="page-overview">
      <div class="page-title">Good afternoon, Amaka 👋</div><div class="page-sub">Mini Fashion Store Dashboard · Bizshop Admin</div>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val">47</div><div class="stat-lbl">Total Orders</div><div class="stat-sub">+5 this week</div></div>
        <div class="stat-card"><div class="stat-val">₦842k</div><div class="stat-lbl">Total Revenue</div><div class="stat-sub">This month</div></div>
        <div class="stat-card"><div class="stat-val">8</div><div class="stat-lbl">Out for Delivery</div><div class="stat-sub">You're delivering today</div></div>
        <div class="stat-card"><div class="stat-val">4</div><div class="stat-lbl">Low Stock Items</div><div class="stat-sub">Needs restocking</div></div>
      </div>
      <div class="two-col">
        <div class="card"><div class="sec-title">Latest Order</div><div class="ir"><div class="ir-lbl">Order ID</div><div>#BSH-20240228</div></div><div class="ir"><div class="ir-lbl">Customer</div><div>Chidi Eze · Lagos</div></div><div class="ir"><div class="ir-lbl">Amount</div><div style="color:var(--lime);font-weight:800">₦22,000</div></div><button class="btn btn-primary" onclick="go('order-detail')">View Details</button></div>
        <div class="card"><div class="sec-title">Quick Actions</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:10px"><button class="btn btn-ghost" onclick="go('orders')">Manage Orders</button><button class="btn btn-ghost" onclick="go('inventory')">Check Inventory</button><button class="btn btn-ghost" onclick="go('analytics')">Sales Analytics</button><button class="btn btn-primary" onclick="go('shop')">Manage Products</button></div></div>
      </div>
    </div>

    <div class="page" id="page-orders"><div class="page-title">Orders</div><div class="page-sub">Manage and fulfil customer orders</div><div class="tbl-wrap" style="margin-top:12px"><table><thead><tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Payment</th><th>Delivery</th><th></th></tr></thead><tbody><tr><td>#BSH-20240228</td><td>Chidi Eze</td><td>₦22,000</td><td><span class="badge badge-paid">Paid</span></td><td><span class="badge badge-shipped">Out for Delivery</span></td><td><button class="btn btn-ghost" onclick="go('order-detail')">View</button></td></tr><tr><td>#BSH-20240118</td><td>Emeka Obi</td><td>₦8,500</td><td><span class="badge badge-pending">Pending</span></td><td><span class="badge badge-processing">Processing</span></td><td><button class="btn btn-ghost" onclick="go('order-detail')">View</button></td></tr></tbody></table></div></div>

    <div class="page" id="page-order-detail"><button class="btn btn-ghost" onclick="go('orders')">Back to Orders</button><div class="page-title" style="margin-top:10px">Order #BSH-20240228</div><div class="two-col" style="margin-top:12px"><div class="card"><div class="sec-title">Payment Info</div><div class="ir"><div class="ir-lbl">Method</div><div>Paystack</div></div><div class="ir"><div class="ir-lbl">Reference</div><div>PSK-7f3a9c2e1b</div></div></div><div class="card"><div class="sec-title">Shipping Address</div><p>12 Bode Thomas Street<br>Surulere, Lagos State, Nigeria</p></div></div><div class="card" style="margin-top:12px"><div class="sec-title">Order Timeline</div><div class="timeline" style="margin-top:8px"><div class="tl-item"><div class="tl-dot done">✓</div><div>Order Placed</div></div><div class="tl-item"><div class="tl-dot done">✓</div><div>Payment Confirmed</div></div><div class="tl-item"><div class="tl-dot active">🚚</div><div>In Transit</div></div></div></div></div>

    <div class="page" id="page-saved"><div class="page-title">Customers</div><div class="page-sub">Customers who have placed orders at your store</div><div class="tbl-wrap" style="margin-top:12px"><table><thead><tr><th>Name</th><th>Phone</th><th>Orders</th><th>Total Spent</th><th>Status</th></tr></thead><tbody><tr><td>Chidi Eze</td><td>+234 801 111 2222</td><td>4</td><td>₦58,000</td><td><span class="badge badge-paid">Active</span></td></tr><tr><td>Emeka Obi</td><td>+234 804 777 8888</td><td>1</td><td>₦8,500</td><td><span class="badge badge-pending">Pending</span></td></tr></tbody></table></div></div>

    <div class="page" id="page-addresses"><div class="page-title">Delivery Zones</div><div class="page-sub">Areas you deliver to and delivery fees</div><div class="two-col" style="margin-top:12px"><div class="card"><div class="sec-title">Lagos Mainland</div><p>₦1,000 · Same day delivery</p></div><div class="card"><div class="sec-title">Lagos Island</div><p>₦1,500 · 1–2 days</p></div></div></div>

    <div class="page" id="page-payments"><div class="page-title">Payment Setup</div><div class="page-sub">Configure how customers pay</div><div class="card" style="margin-top:12px"><div class="ir"><div class="ir-lbl">Paystack</div><div><span class="badge badge-paid">Connected</span></div></div><div class="ir"><div class="ir-lbl">Flutterwave</div><div><span class="badge badge-paid">Connected</span></div></div></div></div>

    <div class="page" id="page-notifications"><div class="page-title">Notifications</div><div class="page-sub">Order alerts and store activity</div><div class="card" style="margin-top:12px"><div class="ir"><div class="ir-lbl">New order received — ₦22,000</div><div>Today</div></div><div class="ir"><div class="ir-lbl">Low stock alert — Mini Leather Clutch</div><div>Today</div></div></div></div>

    <div class="page" id="page-shop"><div class="page-title">Products</div><div class="page-sub">Your store catalogue on Bizshop</div><div class="inv-grid" style="margin-top:12px"><div class="inv-card"><div class="inv-img">👗</div><div class="inv-body"><div class="inv-name">Ankara Maxi Dress</div><div class="inv-price">₦12,500</div></div></div><div class="inv-card"><div class="inv-img">👟</div><div class="inv-body"><div class="inv-name">Classic White Sneakers</div><div class="inv-price">₦8,000</div></div></div><div class="inv-card"><div class="inv-img">👜</div><div class="inv-body"><div class="inv-name">Mini Leather Clutch</div><div class="inv-price">₦6,500</div></div></div></div></div>

    <div class="page" id="page-inventory"><div class="page-title">Inventory</div><div class="page-sub">Track stock levels across all products</div><div class="tbl-wrap" style="margin-top:12px"><table><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead><tbody><tr><td>Ankara Maxi Dress</td><td>Dresses</td><td>₦12,500</td><td>15</td><td><span class="badge badge-paid">In Stock</span></td></tr><tr><td>Mini Leather Clutch</td><td>Bags</td><td>₦6,500</td><td>3</td><td><span class="badge badge-pending">Low</span></td></tr><tr><td>Classic White Sneakers</td><td>Shoes</td><td>₦8,000</td><td>0</td><td><span class="badge badge-failed">Out</span></td></tr></tbody></table></div></div>

    <div class="page" id="page-analytics"><div class="page-title">Sales Analytics</div><div class="page-sub">Your store revenue and performance insights</div><div class="stats-grid"><div class="stat-card"><div class="stat-val">₦842k</div><div class="stat-lbl">Total Revenue</div></div><div class="stat-card"><div class="stat-val">47</div><div class="stat-lbl">Total Orders</div></div><div class="stat-card"><div class="stat-val">₦17.9k</div><div class="stat-lbl">Avg Order Value</div></div></div></div>

    <div class="page" id="page-settings"><div class="page-title">Account Settings</div><div class="two-col" style="margin-top:12px"><div class="card"><div class="sec-title">Personal Info</div><div class="form-group"><label class="form-label">First Name</label><input class="fi" value="Amaka"></div><div class="form-group"><label class="form-label">Email</label><input class="fi" value="amaka@gmail.com"></div><button class="btn btn-primary">Save Changes</button></div><div class="card"><div class="sec-title">Notifications</div><p class="page-sub">Email updates, SMS alerts, and promotions preferences.</p></div></div></div>

    <div class="page" id="page-security"><div class="page-title">Security</div><div class="two-col" style="margin-top:12px"><div class="card"><div class="sec-title">Change Password</div><div class="form-group"><label class="form-label">Current Password</label><input class="fi" type="password"></div><div class="form-group"><label class="form-label">New Password</label><input class="fi" type="password"></div><button class="btn btn-primary">Update Password</button></div><div class="card"><div class="sec-title">Active Sessions</div><p>Chrome · MacOS (Current session)</p><p>Safari · iPhone (2 days ago)</p></div></div></div>

    <div class="page" id="page-invoice"><button class="btn btn-ghost" onclick="go('order-detail')">Back to Order</button><div class="card" style="max-width:600px;margin:12px auto 0"><div class="sec-title">Receipt</div><div class="ir"><div class="ir-lbl">Order</div><div>#BSH-20240228</div></div><div class="ir"><div class="ir-lbl">Payment Ref</div><div>PSK-7f3a9c2e1b</div></div><div class="ir"><div class="ir-lbl">Total Paid</div><div style="font-weight:800;color:var(--lime)">₦22,000</div></div><button class="btn btn-primary" onclick="window.print()">Print / PDF</button></div></div>

  </div>
</div>
</div>
<nav class="bottom-nav">
  <button class="bn-item active" data-bnpage="overview" onclick="go('overview')">Home</button>
  <button class="bn-item" data-bnpage="orders" onclick="go('orders')">Orders</button>
  <button class="bn-item" data-bnpage="shop" onclick="go('shop')">Products</button>
  <button class="bn-item" data-bnpage="saved" onclick="go('saved')">Customers</button>
  <button class="bn-item" data-bnpage="notifications" onclick="go('notifications')">Alerts</button>
</nav>
<script>
const html = document.documentElement;
let dark = true;
try { if(localStorage.getItem('biz-theme')==='light'){dark=false;html.setAttribute('data-theme','light');syncTheme()} } catch(e){}
function syncTheme(){ document.getElementById('themeBtn').textContent = dark ? '☀️' : '🌙'; }
function toggleTheme(){ dark=!dark; html.setAttribute('data-theme', dark?'dark':'light'); syncTheme(); try{localStorage.setItem('biz-theme', dark?'dark':'light')}catch(e){} }
const pageMeta={overview:['Overview','account'],orders:['My Orders','account/orders'], 'order-detail':['Order #BSH-20240228','account/orders/BSH-20240228'],saved:['Customers','account/customers'],addresses:['Delivery Zones','account/delivery-zones'],payments:['Payment Setup','account/payments'],notifications:['Notifications','account/notifications'],shop:['Products','mini-fashion/products'],inventory:['Inventory','account/inventory'],analytics:['Sales Analytics','account/analytics'],settings:['Settings','account/settings'],security:['Security','account/security'],invoice:['Receipt','account/orders/BSH-20240228/invoice']};
function go(page){ document.querySelectorAll('.page').forEach(p=>p.classList.remove('active')); document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active')); document.querySelectorAll('.bn-item').forEach(n=>n.classList.remove('active')); const t=document.getElementById('page-'+page); if(t)t.classList.add('active'); const ni=document.querySelector('[data-page="'+page+'"]'); if(ni)ni.classList.add('active'); const bn=document.querySelector('[data-bnpage="'+page+'"]'); if(bn)bn.classList.add('active'); if(pageMeta[page]){document.getElementById('tbTitle').textContent=pageMeta[page][0];document.getElementById('tbCrumb').textContent=pageMeta[page][1];} closeSb(); window.scrollTo({top:0,behavior:'smooth'}); }
function openSb(){document.getElementById('sidebar').classList.add('open');document.getElementById('sbOverlay').classList.add('show')}
function closeSb(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sbOverlay').classList.remove('show')}
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
