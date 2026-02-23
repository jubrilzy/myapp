import { ToggleSwitch } from '@/components/dashboard/ui';
import { store } from '@/lib/mock-data';

export default function SettingsPage() {
  return <div>
    <div className="page-title">Settings</div>
    <div className="page-sub">Update your store information and preferences</div>

    <div className="two-col" style={{ marginTop: 12 }}>
      <div className="card">
        <div className="sec-title" style={{ marginBottom: 10 }}>Store settings</div>
        <div className="form-group"><label className="form-label">Store name</label><input className="fi" defaultValue={store.name} /></div>
        <div className="form-group"><label className="form-label">Store slug</label><input className="fi" readOnly value={store.slug} /></div>
        <div className="form-group"><label className="form-label">Contact</label><input className="fi" defaultValue="+234 801 234 5678" /></div>
        <div className="form-group"><label className="form-label">Address</label><textarea rows={3} defaultValue="12 Bode Thomas Street, Surulere, Lagos" /></div>
        <button className="btn btn-primary">Save changes</button>
      </div>

      <div className="card">
        <div className="sec-title" style={{ marginBottom: 10 }}>Notifications & status</div>
        <div style={{ display: 'grid', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Email updates</span><ToggleSwitch checkedDefault /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>SMS alerts</span><ToggleSwitch checkedDefault /></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Store open</span><ToggleSwitch checkedDefault /></div>
        </div>
      </div>
    </div>
  </div>;
}
