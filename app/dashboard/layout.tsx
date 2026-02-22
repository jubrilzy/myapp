import Link from 'next/link';
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
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3 style={{ marginTop: 0 }}>Store Admin</h3>
        <nav>
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="side-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div>
        <header className="topbar">
          <div>
            <p className="muted" style={{ margin: 0 }}>Store Admin</p>
            <h2 style={{ margin: 0 }}>Nova Style</h2>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span className="badge">Basic Plan</span>
            <button className="btn btn-outline" type="button">Profile ▾</button>
          </div>
        </header>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
