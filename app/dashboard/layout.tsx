import Link from 'next/link';

const items = ['Overview', 'Products', 'Orders', 'Settings', 'Subscription'];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3 style={{ marginTop: 0 }}>Merchant Panel</h3>
        <nav>
          {items.map((item, idx) => (
            <Link
              key={item}
              href="#"
              className={`side-link ${idx === 0 ? 'active' : ''}`}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
