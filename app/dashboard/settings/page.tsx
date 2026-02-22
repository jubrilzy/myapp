import Link from 'next/link';

export default function DashboardSettingsPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Settings</h1>
      <p className="muted">Update store, payment, and activation controls.</p>

      <form className="card panel-pad form-grid">
        <h3>Store Settings</h3>
        <label className="field">Store Name<input defaultValue="Nova Style" /></label>
        <label className="field">Store Slug (readonly after creation)<input defaultValue="nova-style" readOnly /></label>
        <label className="field">Logo Upload<input type="file" /></label>
        <label className="field">Contact Email<input defaultValue="owner@novastyle.com" /></label>
        <label className="field">Currency<select defaultValue="USD"><option>USD</option><option>NGN</option></select></label>

        <h3>Payment Settings</h3>
        <label className="field">Paystack public key<input placeholder="pk_test_xxx" /></label>
        <label className="field">Flutterwave public key<input placeholder="FLWPUBK_TEST-xxx" /></label>

        <h3>Store Status</h3>
        <label className="field">Activate / Deactivate store<select defaultValue="Active"><option>Active</option><option>Locked</option></select></label>
        <Link className="btn btn-primary" href="/dashboard">Save Settings</Link>
      </form>
    </section>
  );
}
