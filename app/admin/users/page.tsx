export default function AdminUsersPage() {
  const users = [
    { name: 'Ada James', email: 'ada@novastyle.com', store: 'Nova Style', plan: 'Basic', status: 'Active' },
    { name: 'Ibrahim Musa', email: 'ibrahim@ora.com', store: 'Ora Fashion', plan: 'Basic', status: 'Past Due' },
    { name: 'Grace N.', email: 'grace@lane.com', store: 'Lane Goods', plan: 'Basic', status: 'Active' },
  ];

  return (
    <section>
      <h1 style={{ marginTop: 0 }}>Users</h1>
      <p className="muted">Manage store owners and account standing.</p>
      <section className="card panel-pad">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Store</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.store}</td>
                  <td>{user.plan}</td>
                  <td>{user.status}</td>
                  <td><button className="link-btn" type="button">Suspend</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
