import Link from 'next/link';
import { products } from '@/lib/mock-data';

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) ?? products[0];
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Edit Product</h1>
      <form className="card panel-pad form-grid">
        <label className="field">Name<input defaultValue={product.name} /></label>
        <label className="field">Description<textarea rows={4} defaultValue="Premium quality product description" /></label>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <label className="field">Price (₦)<input type="number" defaultValue={product.price} /></label>
          <label className="field">Compare-at Price (₦)<input type="number" defaultValue={product.price + 2000} /></label>
        </div>
        <label className="field">SKU<input defaultValue={product.sku} /></label>
        <label className="field">Stock<input type="number" defaultValue={product.stock} /></label>
        <p className="badge">{product.stock <= 5 ? 'Low Stock' : 'Stock Healthy'}</p>
        <label className="field">Out-of-stock auto-disable<select defaultValue="Enabled"><option>Enabled</option><option>Disabled</option></select></label>
        <label className="field">Manual stock adjustment<input type="number" placeholder="+/- quantity" /></label>
        <div style={{ display: 'flex', gap: 8 }}><Link className="btn btn-primary" href="/dashboard/products">Update</Link><Link className="btn btn-outline" href="/dashboard/products">Cancel</Link></div>
      </form>
    </section>
  );
}
