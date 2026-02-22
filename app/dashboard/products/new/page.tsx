import Link from 'next/link';

export default function NewProductPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Create Product</h1>
      <form className="card panel-pad form-grid">
        <label className="field">Name<input placeholder="Product name" /></label>
        <label className="field">Description<textarea rows={4} /></label>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <label className="field">Price (₦)<input type="number" /></label>
          <label className="field">Compare-at Price (₦)<input type="number" /></label>
        </div>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <label className="field">SKU<input /></label>
          <label className="field">Stock<input type="number" /></label>
        </div>
        <label className="field">Image Upload<input type="file" /></label>
        <label className="field">Status<select><option>Active</option><option>Draft</option></select></label>
        <label className="field">Categories<input placeholder="Fashion, Shoes" /></label>
        <label className="field">Tags<input placeholder="summer,new" /></label>
        <article className="card panel-pad"><h3>Variants (UI only)</h3><button className="btn btn-outline" type="button">Add Variant</button></article>
        <article className="card panel-pad"><h3>Inventory Controls</h3><p className="muted">Low stock badge appears under 5 units.</p><label className="field">Out-of-stock auto-disable<select><option>Enabled</option><option>Disabled</option></select></label><label className="field">Manual stock adjustment<input type="number" placeholder="+/- quantity" /></label></article>
        <div style={{ display: 'flex', gap: 8 }}><Link className="btn btn-primary" href="/dashboard/products">Save</Link><Link className="btn btn-outline" href="/dashboard/products">Cancel</Link></div>
      </form>
    </section>
  );
}
