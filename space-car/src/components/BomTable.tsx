import bom from '../assets/data/bom.json'

export function BomTable() {
  return (
    <div className="panel">
      <h2>Bill of Materials</h2>
      {bom.assemblies.map(group => (
        <div key={group.name} className="bom-group">
          <h3>{group.name}</h3>
          <table>
            <thead>
              <tr><th>Part</th><th>Qty</th><th>Spec</th></tr>
            </thead>
            <tbody>
              {group.items.map((i, idx) => (
                <tr key={idx}>
                  <td>{i.part}</td>
                  <td>{i.qty}</td>
                  <td>{i.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}