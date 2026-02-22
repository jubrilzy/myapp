import { ToggleSwitch } from '@/components/dashboard/ui';
import { store } from '@/lib/mock-data';

export default function SettingsPage() {
  return <div><h1 className="page-title">Settings</h1><div className="two-col"><div className="card"><h3>Store settings</h3><input className="fi" defaultValue={store.name} /><input className="fi" value={store.slug} readOnly /><input className="fi" placeholder="Logo upload UI" /><div className="form-row"><input className="fi" placeholder="Primary colour" /><input className="fi" placeholder="Contact phone" /></div><input className="fi" placeholder="Address" /><button className="btn btn-primary">Save</button></div><div className="card"><h3>Notifications and status</h3><p>Email updates</p><ToggleSwitch defaultOn /><p>SMS alerts</p><ToggleSwitch defaultOn /><p>Store open</p><ToggleSwitch defaultOn /></div></div></div>;
}
