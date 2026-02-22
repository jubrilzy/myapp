export default function SupportPage() {
  return <section><h1 style={{ marginTop: 0 }}>Support</h1><article className="card panel-pad form-grid"><label className="field">Subject<input /></label><label className="field">Message<textarea rows={5} /></label><button className="btn btn-primary" type="button">Send</button></article><article className="card panel-pad" style={{ marginTop: 12 }}><h3>FAQ</h3><details><summary>How do I add products?</summary><p className="muted">Go to Products and click Add Product.</p></details></article></section>;
}
