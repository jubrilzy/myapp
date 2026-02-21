export default function EditProductPage({ params }: { params: { id: string } }) {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Edit Product #{params.id}</h1>
      <p className="muted">Update catalog data, pricing, stock, and visibility.</p>

      <form className="card panel-pad form-grid">
        <label className="field">
          Product Name
          <input defaultValue="Urban Tee" />
        </label>
        <label className="field">
          Description
          <textarea defaultValue="Premium cotton tee for everyday wear." rows={4} />
        </label>
        <label className="field">
          Price
          <input defaultValue="35.00" />
        </label>
        <label className="field">
          Compare at price (optional)
          <input defaultValue="42.00" />
        </label>
        <label className="field">
          Stock quantity
          <input defaultValue="44" />
        </label>
        <label className="field">
          SKU
          <input defaultValue="NOVA-TEE-01" />
        </label>
        <label className="field">
          Product Images
          <input type="file" />
        </label>
        <label className="field">
          Status
          <select defaultValue="Active">
            <option>Active</option>
            <option>Draft</option>
          </select>
        </label>
        <button className="btn btn-primary" type="button">Update Product</button>
      </form>
    </section>
  );
}
