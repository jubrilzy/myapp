export default function CustomerDetailsPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Customer Profile: {params.id}</h1>
      <p className="muted">Customer details and lifetime order performance.</p>

      <article className="card panel-pad">
        <h3 style={{ marginTop: 0 }}>Contact Info</h3>
        <p>Name: Ada James</p>
        <p>Email: ada@mail.com</p>
        <p>Phone: +234 800 000 0000</p>
      </article>

      <article className="card panel-pad" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Shipping Address</h3>
        <p>12 Marina Street, Lagos, Nigeria.</p>
      </article>

      <article className="card panel-pad" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Order History</h3>
        <ul>
          <li>ORD-3021 — $120.00 — Paid</li>
          <li>ORD-2990 — $90.00 — Paid</li>
          <li>ORD-2880 — $270.00 — Paid</li>
        </ul>
        <p><strong>Total Lifetime Spend:</strong> $480.00</p>
      </article>
    </section>
  );
}
