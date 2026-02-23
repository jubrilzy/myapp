export default function ProfilePage() {
  return <section><h1 style={{ marginTop: 0 }}>Profile</h1><article className="card panel-pad form-grid"><label className="field">Name<input defaultValue="Amaka Okonkwo" /></label><label className="field">Email<input defaultValue="owner@novastyle.com" /></label><label className="field">Current Password<input type="password" /></label><label className="field">New Password<input type="password" /></label><button className="btn btn-primary" type="button">Save</button></article></section>;
}
