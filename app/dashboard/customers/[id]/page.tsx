import { customers, orders } from '@/lib/mock-data';

export default function CustomerDetailsPage({ params }: { params: { id: string } }) {
  const customer = customers.find((c) => c.id === params.id) ?? customers[0];

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>{customer.name}</h1>
      <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <article className="card panel-pad"><h3>Contact Info</h3><p>{customer.email}</p><p>{customer.phone}</p></article>
        <article className="card panel-pad"><h3>Address</h3><p>12 Bode Thomas Street, Surulere, Lagos</p></article>
      </div>
      <article className="card panel-pad" style={{ marginTop: 12 }}><h3>Order History</h3><table className="table"><thead><tr><th>Order</th><th>Date</th><th>Total</th></tr></thead><tbody>{orders.map((o)=><tr key={o.id}><td>{o.id}</td><td>{o.date}</td><td>₦{o.total.toLocaleString()}</td></tr>)}</tbody></table></article>
      <article className="card panel-pad" style={{ marginTop: 12 }}><h3>Notes</h3><textarea rows={5} style={{ width: '100%', background: 'var(--surface)', color: 'var(--white)', border: '1px solid var(--border)', borderRadius: 10, padding: 12 }} placeholder="Add customer notes..." /><button className="btn btn-primary" type="button" style={{ marginTop: 8 }}>Save Note</button></article>
    </section>
  );
}
