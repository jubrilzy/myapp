'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

const items = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Products', href: '/dashboard/products' },
  { label: 'Orders', href: '/dashboard/orders' },
  { label: 'Customers', href: '/dashboard/customers' },
  { label: 'Analytics', href: '/dashboard/analytics' },
  { label: 'Discounts', href: '/dashboard/discounts' },
  { label: 'Shipping', href: '/dashboard/shipping' },
  { label: 'Payments', href: '/dashboard/payments' },
  { label: 'Subscription', href: '/dashboard/subscription' },
  { label: 'Design (Templates)', href: '/dashboard/templates' },
  { label: 'Settings', href: '/dashboard/settings' },
  { label: 'Support', href: '/dashboard/support' },
  { label: 'Logout', href: '/login' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(href));

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${open ? 'open' : ''}`}>
        <h3 style={{ marginTop: 0 }}>Store Admin</h3>
        <nav>
          {items.map((item) => (
            <Link key={item.label} href={item.href} className={`side-link ${isActive(item.href) ? 'active' : ''}`} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      {open ? <button className="sidebar-overlay" onClick={() => setOpen(false)} aria-label="Close menu" /> : null}

      <div className="dashboard-content-wrap">
        <header className="dashboard-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="btn btn-outline mobile-only" onClick={() => setOpen(!open)} type="button">☰</button>
            <div>
              <p className="muted" style={{ margin: 0 }}>Store Admin</p>
              <h2 style={{ margin: 0 }}>Nova Style</h2>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span className="badge">Basic Plan</span>
            <Link className="btn btn-outline" href="/dashboard/profile">Profile ▾</Link>
          </div>
        </header>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
