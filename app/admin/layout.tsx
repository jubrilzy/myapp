import Link from 'next/link';
import { ReactNode } from 'react';

const items = [
  { label: 'Platform Overview', href: '/admin' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Stores', href: '/admin/stores' },
  { label: 'Payments', href: '/admin/payments' },
  { label: 'Back to Store Admin', href: '/dashboard' },
];

export default function SuperAdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3 style={{ marginTop: 0 }}>Super Admin</h3>
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
            <p className="muted" style={{ margin: 0 }}>Platform</p>
            <h2 style={{ margin: 0 }}>StoreBuilder Control Center</h2>
          </div>
          <span className="badge">Platform Owner</span>
        </header>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
