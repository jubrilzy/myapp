import Link from 'next/link';
import { ngn } from '@/components/ui/format';
import { orders } from '@/lib/mock-data';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id) ?? orders[0];

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Order {order.id}</h1>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <article className="card panel-pad"><h3>Customer Info</h3><p>{order.customer}</p><p>+2348012345678</p></article>
        <article className="card panel-pad"><h3>Payment</h3><p>Method: Paystack</p><p>Reference: PSK-7f3a9c2e1b</p><p>Status: {order.payment}</p></article>
      </div>
      <article className="card panel-pad" style={{ marginTop: 12 }}>
        <h3>Order Items</h3>
        <table className="table"><thead><tr><th>Item</th><th>Qty</th><th>Total</th></tr></thead><tbody><tr><td>Ankara Maxi Dress</td><td>1</td><td>{ngn(order.total)}</td></tr></tbody></table>
      </article>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
        <article className="card panel-pad"><h3>Shipping Address</h3><p>12 Bode Thomas Street, Surulere, Lagos</p></article>
        <article className="card panel-pad"><h3>Billing Address</h3><p>12 Bode Thomas Street, Surulere, Lagos</p></article>
      </div>
      <article className="card panel-pad" style={{ marginTop: 12 }}>
        <h3>Fulfillment Update</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <select className="btn btn-outline"><option>Processing</option><option>Out for Delivery</option><option>Delivered</option></select>
          <button className="btn btn-primary" type="button">Update Status</button>
          <button className="btn btn-outline" type="button">Download Receipt</button>
          <Link className="btn btn-outline" href="/dashboard/orders">Back to Orders</Link>
        </div>
      </article>
    </section>
  );
}
