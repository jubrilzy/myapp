import { Card, StatCard } from '@/components/dashboard/ui';
import { kpis, orders } from '@/lib/mock-data';

export default function OverviewPage() {
  return (
    <div>
      <div className="page-title">Good afternoon, Amaka 👋</div>
      <div className="page-sub">Mini Fashion Store Dashboard · Bizshop Admin</div>

      <div className="stats-grid" style={{ marginTop: 18 }}>
        <StatCard icon="📦" value={`${kpis.orders}`} label="Total Orders" sub="+5 this week" />
        <StatCard icon="💳" value="₦842k" label="Total Revenue" sub="This month" />
        <StatCard icon="🚚" value="8" label="Out for Delivery" sub="You're delivering today" />
        <StatCard icon="⚠️" value="4" label="Low Stock Items" sub="Needs restocking" />
      </div>

      <div className="two-col" style={{ marginBottom: 14 }}>
        <Card>
          <div className="sec-title" style={{ marginBottom: 10 }}>Latest Order</div>
          <div className="page-sub">{orders[0].id} · {orders[0].customer}</div>
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            <span className="badge badge-paid">Paid</span>
            <span className="badge badge-shipped">Out for delivery</span>
          </div>
        </Card>
        <Card>
          <div className="sec-title" style={{ marginBottom: 10 }}>Quick Actions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn btn-ghost">Manage Orders</button>
            <button className="btn btn-ghost">Check Inventory</button>
            <button className="btn btn-primary">Manage Products</button>
          </div>
        </Card>
      </div>

      <Card>
        <div className="sec-title" style={{ marginBottom: 8 }}>Store status</div>
        <div className="page-sub">Store active & verified · Payments enabled · Self-delivery mode</div>
      </Card>
    </div>
  );
}
