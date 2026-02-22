import Link from 'next/link';

export default function NewProductPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Create Product</h1>
      <p className="muted">Add a new product to your catalog.</p>

      <form className="card panel-pad form-grid">
        <label className="field">
          Product Name
          <input placeholder="e.g. Nova Linen Shirt" />
        </label>
        <label className="field">
          Description
          <textarea placeholder="Short product description" rows={4} />
        </label>
        <label className="field">
          Price
          <input placeholder="0.00" />
        </label>
        <label className="field">
          Compare at price (optional)
          <input placeholder="0.00" />
        </label>
        <label className="field">
          Stock quantity
          <input placeholder="0" />
        </label>
        <label className="field">
          SKU
          <input placeholder="SKU-001" />
        </label>
        <label className="field">
          Product Images
          <input type="file" />
        </label>
        <label className="field">
          Status
          <select>
            <option>Active</option>
            <option>Draft</option>
          </select>
        </label>
        <Link className="btn btn-primary" href="/dashboard/products">Save Product</Link>
      </form>
    </section>
  );
}
