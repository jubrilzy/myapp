'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  badge?: string;
};

type NavGroup = {
  group: string;
  items: NavItem[];
};

const nav: NavGroup[] = [
  { group: 'Dashboard', items: [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/orders', label: 'Orders' },
    { href: '/dashboard/deliveries', label: 'Delivery Zones' },
    { href: '/dashboard/notifications', label: 'Notifications', badge: '2' },
    { href: '/dashboard/customers', label: 'Customers' },
  ]},
  { group: 'Store Management', items: [
    { href: '/dashboard/products', label: 'Products' },
    { href: '/dashboard/analytics', label: 'Sales Analytics' },
    { href: '/dashboard/payments', label: 'Payment Setup' },
    { href: '/dashboard/templates', label: 'Templates' },
  ]},
  { group: 'Account', items: [
    { href: '/dashboard/settings', label: 'Settings' },
    { href: '/dashboard/security', label: 'Security' },
    { href: '/dashboard/subscription', label: 'Subscription' },
    { href: '/dashboard/support', label: 'Support' },
  ]}
];

const mobileNav = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/orders', label: 'Orders' },
  { href: '/dashboard/products', label: 'Products' },
  { href: '/dashboard/customers', label: 'Customers' },
  { href: '/dashboard/notifications', label: 'Alerts' },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem('biz-theme');
    const isDark = storedTheme !== 'light';
    setDark(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  const pageTitle = useMemo(() => {
    for (const group of nav) {
      for (const item of group.items) {
        if (pathname === item.href) return item.label;
      }
    }
    return 'Overview';
  }, [pathname]);

  function toggleTheme() {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.setAttribute('data-theme', nextDark ? 'dark' : 'light');
    localStorage.setItem('biz-theme', nextDark ? 'dark' : 'light');
  }

  return (
    <div className="shell">
      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sb-header">
          <Link href="/dashboard" className="store-brand">
            <div className="store-avi">👗</div>
            <div>
              <div className="store-nm">Mini Fashion</div>
              <div className="store-url">bizshop.ng/mini-fashion</div>
            </div>
          </Link>
          <div className="cust-pill">
            <div className="cust-avi">A</div>
            <div>
              <div className="cust-name">Amaka Okonkwo</div>
              <div className="cust-tag">Store Owner</div>
            </div>
          </div>
        </div>

        <nav className="sb-nav">
          {nav.map((group) => (
            <div key={group.group}>
              <div className="nav-lbl">{group.group}</div>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} className={`ni ${pathname === item.href ? 'active' : ''}`} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                  {item.badge ? <span className="nb">{item.badge}</span> : null}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="sb-footer">
          <button className="ni" type="button">Log Out</button>
        </div>
      </aside>

      {open ? <button className="modal-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} /> : null}

      <div className="main">
        <header className="topbar">
          <div className="tb-left">
            <button className="tb-btn mob-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>
            <div>
              <div className="tb-title">{pageTitle}</div>
              <div className="tb-crumb">mini-fashion / account</div>
            </div>
          </div>
          <div className="tb-right">
            <button className="theme-toggle" id="themeBtn" onClick={toggleTheme} title="Toggle theme">{dark ? '☀️' : '🌙'}</button>
            <button className="tb-btn" aria-label="Notifications">🔔</button>
            <button className="tb-btn" aria-label="Profile">👤</button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>

      <nav className="bottom-nav">
        {mobileNav.map((item) => (
          <Link key={item.href} href={item.href} className={`bn-item ${pathname === item.href ? 'active' : ''}`}>{item.label}</Link>
        ))}
      </nav>
    </div>
  );
}
