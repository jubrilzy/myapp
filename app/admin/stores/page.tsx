import Link from 'next/link';

export default function AdminStoresPage() {
  const stores = [
    { name: 'Nova Style', owner: 'Ada James', slug: 'nova-style', status: 'Active', subscription: 'Active' },
    { name: 'Ora Fashion', owner: 'Ibrahim Musa', slug: 'ora-fashion', status: 'Locked', subscription: 'Past Due' },
    { name: 'Lane Goods', owner: 'Grace N.', slug: 'lane-goods', status: 'Active', subscription: 'Active' },
  ];

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Stores</h1>
      <p className="muted">View store-level health and subscription state.</p>
      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Store Name</th>
                <th>Owner</th>
                <th>Slug</th>
                <th>Status</th>
                <th>Subscription</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store) => (
                <tr key={store.slug}>
                  <td>{store.name}</td>
                  <td>{store.owner}</td>
                  <td>/{store.slug}</td>
                  <td>{store.status}</td>
                  <td>{store.subscription}</td>
                  <td><Link href={`/${store.slug}`}>View store</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
