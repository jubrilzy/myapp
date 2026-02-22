export default function DiscountsPage() {
  return <section><div className="row-between"><h1 style={{ marginTop: 0 }}>Discounts</h1><button className="btn btn-primary" type="button">Create Discount Code</button></div><article className="card panel-pad"><table className="table"><thead><tr><th>Code</th><th>Type</th><th>Value</th><th>Expiry</th><th>Usage</th><th>Status</th></tr></thead><tbody><tr><td>WELCOME10</td><td>Percent</td><td>10%</td><td>2026-12-31</td><td>100</td><td>Active</td></tr></tbody></table></article></section>;
}
