export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Order Details: {params.id}</h1>
      <p className="muted">Review purchase, customer data, and payment details.</p>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <article className="card panel-pad">
          <h3 style={{ marginTop: 0 }}>Order Summary</h3>
          <p className="muted">2 items • Total: $120.00 • Status: Paid</p>
          <p>Placed on 2026-02-20</p>
        </article>
        <article className="card panel-pad">
          <h3 style={{ marginTop: 0 }}>Payment Info</h3>
          <p>Provider: Paystack</p>
          <p>Reference: PSTK_23KSS91</p>
          <p>Status: Successful</p>
        </article>
      </div>

      <article className="card panel-pad" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Items Purchased</h3>
        <ul>
          <li>Urban Tee x1 — $35.00</li>
          <li>Runner Max x1 — $85.00</li>
        </ul>
      </article>

      <article className="card panel-pad" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Customer & Shipping</h3>
        <p>Ada James • ada@mail.com</p>
        <p>12 Marina Street, Lagos, Nigeria.</p>
      </article>

      <button className="btn btn-primary" type="button" style={{ marginTop: 16 }}>
        Mark as Fulfilled
      </button>
    </section>
  );
}
