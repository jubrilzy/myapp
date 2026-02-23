export default function ShippingPage() {
  return <section><h1 style={{ marginTop: 0 }}>Shipping</h1><article className="card panel-pad form-grid"><label className="field">Flat Rate<input defaultValue="2500" /></label><label className="field">Free Shipping Threshold<input defaultValue="50000" /></label><button className="btn btn-primary" type="button">Save</button></article></section>;
}
