import Link from 'next/link';
import { Timeline } from '@/components/dashboard/ui';
import { orders } from '@/lib/mock-data';

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = orders.find((item) => item.id === params.id) ?? orders[0];

  return <div>
    <Link href="/dashboard/orders" className="btn btn-ghost btn-sm" style={{ marginBottom: 12 }}>Back to Orders</Link>
    <div className="page-title">Order {order.id}</div>
    <div className="page-sub">Placed {order.date} · Paystack</div>

    <div className="two-col" style={{ marginTop: 12 }}>
      <div className="card">
        <div className="sec-title" style={{ marginBottom: 10 }}>Items Ordered</div>
        <div className="page-sub">Ankara Maxi Dress × 1</div>
        <div className="page-sub">Classic White Sneakers × 1</div>
        <div className="page-sub">Mini Leather Clutch × 2</div>
        <hr style={{ borderColor: 'var(--border)', margin: '12px 0' }} />
        <div style={{ fontWeight: 700 }}>Total: ₦{order.total.toLocaleString()}</div>
      </div>
      <div className="card">
        <div className="sec-title" style={{ marginBottom: 10 }}>Payment & Shipping</div>
        <div className="page-sub">Payment: {order.payment}</div>
        <div className="page-sub">Address: 12 Bode Thomas Street, Surulere, Lagos</div>
        <Link href={`/dashboard/orders/${order.id}/invoice`} className="btn btn-primary btn-sm" style={{ marginTop: 10 }}>Download receipt</Link>
      </div>
    </div>

    <div className="card" style={{ marginTop: 12 }}>
      <div className="sec-title" style={{ marginBottom: 10 }}>Order timeline</div>
      <Timeline items={[
        { title: 'Order placed', time: '24 Feb · 2:14 PM', state: 'done' },
        { title: 'Payment confirmed', time: '24 Feb · 2:15 PM', state: 'done' },
        { title: 'In transit', time: '26 Feb · 11:30 AM', state: 'active' },
        { title: 'Delivered', time: 'Expected soon', state: 'pend' },
      ]} />
    </div>
  </div>;
}
