import Link from 'next/link';

const products = [
  { id: '101', image: '👕', name: 'Urban Tee', price: '$35.00', stock: 44, status: 'Active' },
  { id: '102', image: '👟', name: 'Runner Max', price: '$89.00', stock: 12, status: 'Active' },
  { id: '103', image: '🧢', name: 'Classic Cap', price: '$20.00', stock: 0, status: 'Draft' },
];

export default function DashboardProductsPage() {
  return (
    <section>
      <div className="row-between">
        <div>
          <h1 style={{ marginTop: 0 }}>Products</h1>
          <p className="muted">Manage inventory and product publishing status.</p>
        </div>
        <Link href="/dashboard/products/new" className="btn btn-primary">Add Product</Link>
      </div>

      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.image}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.status}</td>
                  <td>
                    <Link href={`/dashboard/products/${product.id}`}>Edit</Link> / <Link className="link-btn" href="/dashboard/products">Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
