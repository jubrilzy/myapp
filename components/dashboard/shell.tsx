'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const nav = [
  ['/dashboard', 'Overview'], ['/dashboard/orders', 'Orders'], ['/dashboard/deliveries', 'Deliveries'], ['/dashboard/products', 'Products'], ['/dashboard/customers', 'Customers'], ['/dashboard/payments', 'Payments'], ['/dashboard/analytics', 'Analytics'], ['/dashboard/notifications', 'Notifications'], ['/dashboard/settings', 'Settings'], ['/dashboard/security', 'Security'], ['/dashboard/subscription', 'Subscription'], ['/dashboard/templates', 'Templates'], ['/dashboard/settings/design', 'Design'], ['/dashboard/support', 'Support'],
] as const;

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const t = localStorage.getItem('biz-theme');
    const isDark = t !== 'light';
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);
  const toggleTheme = () => {
    const nxt = !dark;
    setDark(nxt);
    document.documentElement.setAttribute('data-theme', nxt ? 'dark' : 'light');
    localStorage.setItem('biz-theme', nxt ? 'dark' : 'light');
  };
  return <div className="d-shell">
    <aside className={`d-sidebar ${open ? 'open' : ''}`}>
      <div className="brand">Mini Fashion <small>bizshop.ng/mini-fashion</small></div>
      <div className="nav-lbl">Dashboard</div>
      {nav.map(([href, label]) => <Link key={href} href={href} className={`nav-item ${pathname === href ? 'active' : ''}`} onClick={() => setOpen(false)}>{label}</Link>)}
    </aside>
    {open && <div className="modal-backdrop" onClick={() => setOpen(false)} />}
    <div className="d-main">
      <header className="topbar"><div><div className="tb-title">{nav.find(([href]) => pathname === href)?.[1] || 'Dashboard'}</div><div className="tb-crumb">mini-fashion / account</div></div><div style={{ display: 'flex', gap: 8 }}><button className="icon-btn" onClick={() => setOpen(true)}>☰</button><button className="theme-toggle" id="themeBtn" onClick={toggleTheme}>{dark ? '☀️' : '🌙'}</button></div></header>
      <main className="content">{children}</main>
      <nav className="bottom-nav">{nav.slice(0, 5).map(([href, label]) => <Link className={`bn-item ${pathname === href ? 'active' : ''}`} key={href} href={href}>{label}</Link>)}</nav>
    </div>
  </div>;
}
