import Link from 'next/link';

export default function DashboardSettingsPage() {
  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Settings</h1>
      <form className="card panel-pad form-grid">
        <h3>Store Info</h3>
        <label className="field">Store Name<input defaultValue="Nova Style" /></label>
        <label className="field">Slug (readonly)<input defaultValue="nova-style" readOnly /></label>
        <label className="field">Logo Upload<input type="file" /></label>
        <label className="field">Primary Brand Colour<input type="color" defaultValue="#c8ff00" /></label>
        <label className="field">Contact Email<input defaultValue="owner@novastyle.com" /></label>
        <label className="field">Contact Phone<input defaultValue="+2348012345678" /></label>
        <label className="field">Business Address<input defaultValue="12 Bode Thomas Street, Surulere, Lagos" /></label>
        <label className="field">Currency<select defaultValue="NGN"><option>NGN (₦)</option></select></label>

        <h3>Store Status</h3>
        <label className="field">Activate / Deactivate<select defaultValue="Active"><option>Active</option><option>Locked</option></select></label>
        <label className="field">Maintenance Mode<select defaultValue="Off"><option>Off</option><option>On</option></select></label>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" type="button">Save Changes</button>
          <Link className="btn btn-outline" href="/dashboard/settings/design">Design Settings</Link>
        </div>
      </form>
    </section>
  );
}
