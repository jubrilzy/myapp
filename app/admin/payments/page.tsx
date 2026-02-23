const paymentRows = [
  { id: 'TXN-9921', provider: 'Paystack', type: 'Subscription', amount: '$29.00', status: 'Successful' },
  { id: 'TXN-9911', provider: 'Flutterwave', type: 'Order', amount: '$120.00', status: 'Successful' },
  { id: 'TXN-9894', provider: 'Paystack', type: 'Order', amount: '$65.00', status: 'Failed' },
];

export default function AdminPaymentsPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Payments</h1>
      <p className="muted">Paystack and Flutterwave transactions overview.</p>
      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Provider</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.provider}</td>
                  <td>{row.type}</td>
                  <td>{row.amount}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
