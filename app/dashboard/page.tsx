import Link from 'next/link';
import { ngn } from '@/components/ui/format';
import { kpis, orders, store } from '@/lib/mock-data';

const templates = [
  { id: 'default', name: 'Bizshop Default', desc: 'Balanced layout for fashion, beauty and general stores.' },
  { id: 'minimal', name: 'Minimal Classic', desc: 'Clean and elegant storefront for lifestyle brands.' },
  { id: 'bold', name: 'Bold Commerce', desc: 'High-contrast layout for electronics and wholesale.' },
];

export default function DashboardPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Dashboard Overview</h1>
      <p className="muted">Welcome back, {store.owner}. Here is your store performance.</p>

      <div className="grid stat-grid" style={{ marginTop: 20 }}>
        <article className="card panel-pad"><p className="muted">Total Revenue</p><h3>{ngn(kpis.totalRevenue)}</h3></article>
        <article className="card panel-pad"><p className="muted">Orders Today</p><h3>{kpis.ordersToday}</h3></article>
        <article className="card panel-pad"><p className="muted">Orders This Month</p><h3>{kpis.ordersMonth}</h3></article>
        <article className="card panel-pad"><p className="muted">Total Products</p><h3>{kpis.totalProducts}</h3></article>
        <article className="card panel-pad"><p className="muted">Low Stock Alerts</p><h3>{kpis.lowStock}</h3></article>
        <article className="card panel-pad"><p className="muted">Subscription Status</p><span className="badge">{store.subscriptionStatus}</span></article>
        <article className="card panel-pad"><p className="muted">Store Status</p><span className="badge">{store.status}</span></article>
      </div>

      <article className="card panel-pad">
        <div className="row-between"><h3 style={{ marginTop: 0 }}>Recent Orders</h3><Link href="/dashboard/orders" className="btn btn-outline">View Orders</Link></div>
        <table className="table"><thead><tr><th>Order ID</th><th>Customer</th><th>Amount</th><th>Payment</th><th>Status</th></tr></thead><tbody>{orders.slice(0,5).map(o=><tr key={o.id}><td>{o.id}</td><td>{o.customer}</td><td>{ngn(o.total)}</td><td>{o.payment}</td><td>{o.fulfillment}</td></tr>)}</tbody></table>
      </article>

      <article className="card panel-pad" style={{ marginTop: 12 }}>
        <h3 style={{ marginTop: 0 }}>Quick Actions</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link href="/dashboard/products/new" className="btn btn-primary">Add Product</Link>
          <Link href="/dashboard/orders" className="btn btn-outline">View Orders</Link>
          <Link href="/dashboard/subscription" className="btn btn-outline">Upgrade Plan</Link>
        </div>
      </article>

      <section className="card panel-pad" style={{ marginTop: 20 }}>
        <div className="row-between">
          <div>
            <h3 style={{ marginTop: 0 }}>Store Template</h3>
            <p className="muted" style={{ marginTop: 6 }}>Select a template for your storefront.</p>
          </div>
          <span className="badge">Default: Bizshop Default</span>
        </div>
        <div className="template-grid" style={{ marginTop: 12 }}>
          {templates.map((template) => <article key={template.id} className={`template-card ${template.id === 'default' ? 'active' : ''}`}><strong>{template.name}</strong><p className="muted" style={{ marginTop: 8 }}>{template.desc}</p></article>)}
        </div>
      </section>
    </section>
  );
}
