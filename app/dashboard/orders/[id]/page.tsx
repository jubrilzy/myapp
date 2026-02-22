import Link from 'next/link';
import { orders } from '@/lib/mock-data';

export default function OrderDetail({ params }: { params: { id: string } }) {
  const order = orders.find(o => o.id === params.id) || orders[0];
  return <div><h1 className="page-title">Order {order.id}</h1><p className="page-sub">Items, payment and fulfilment timeline</p>
    <div className="two-col">
      <div className="card"><h3>Items</h3><p>Ankara Maxi Dress x1</p><p>White Sneakers x1</p><hr /><p>Total: ₦{order.total.toLocaleString()}</p></div>
      <div className="card"><h3>Delivery & Payment</h3><p>12 Bode Thomas Street, Surulere, Lagos</p><p>Paystack · PSK-7f3a9c2e1b</p><p>Timeline: Processing → Shipped → Delivered</p><Link className="btn btn-primary" href={`/dashboard/orders/${order.id}/invoice`}>Download Receipt</Link></div>
    </div>
  </div>;
}
