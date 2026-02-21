import Link from 'next/link';
import { ReactNode } from 'react';

const items = [
  { label: 'Overview', href: '/dashboard' },
  { label: 'Products', href: '/dashboard/products' },
  { label: 'Orders', href: '/dashboard/orders' },
  { label: 'Settings', href: '/dashboard/settings' },
  { label: 'Subscription', href: '/dashboard/subscription' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3 style={{ marginTop: 0 }}>Merchant Panel</h3>
        <nav>
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="side-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
