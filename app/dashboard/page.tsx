import { Card, StatCard } from '@/components/dashboard/ui';
import { kpis, orders, store } from '@/lib/mock-data';

export default function Overview() {
  return <div>
    <h1 className="page-title">Overview</h1><p className="page-sub">{store.name} Store Dashboard · Bizshop Admin</p>
    <div className="grid stats">
      <StatCard icon="💰" value={`₦${(kpis.totalRevenue / 1000).toFixed(0)}k`} label="Total Revenue" />
      <StatCard icon="📦" value={`${kpis.orders}`} label="Total Orders" />
      <StatCard icon="📊" value={`₦${(kpis.avgOrder / 1000).toFixed(1)}k`} label="Avg Order Value" />
      <StatCard icon="👥" value={`${kpis.repeatCustomers}`} label="Repeat Customers" />
    </div>
    <div className="two-col">
      <Card><h3>Latest Order</h3><p>{orders[0].id} · {orders[0].customer}</p><span className="badge shipped">{orders[0].status}</span></Card>
      <Card><h3>Quick Actions</h3><div style={{ display: 'flex', gap: 8 }}><button className="btn btn-primary">Add Product</button><button className="btn btn-ghost">Create Discount</button></div></Card>
    </div>
  </div>;
}
