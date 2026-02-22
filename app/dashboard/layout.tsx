'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const items = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Products', href: '/dashboard/products' },
  { label: 'Orders', href: '/dashboard/orders' },
  { label: 'Customers', href: '/dashboard/customers' },
  { label: 'Settings', href: '/dashboard/settings' },
  { label: 'Subscription', href: '/dashboard/subscription' },
  { label: 'Logout', href: '/login' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard';
    return pathname.startsWith(href);
  };

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <h3 style={{ marginTop: 0 }}>Store Admin</h3>
        <nav>
          {items.map((item) => (
            <Link key={item.label} href={item.href} className={`side-link ${isActive(item.href) ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="dashboard-content-wrap">
        <header className="dashboard-topbar">
          <div>
            <p className="muted" style={{ margin: 0 }}>Store Admin</p>
            <h2 style={{ margin: 0 }}>Nova Style</h2>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span className="badge">Basic Plan</span>
            <Link className="btn btn-outline" href="/dashboard/settings">Profile ▾</Link>
          </div>
        </header>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
