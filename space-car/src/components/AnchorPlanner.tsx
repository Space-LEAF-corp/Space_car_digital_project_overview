import loads from '../assets/data/loads.json'

export function AnchorPlanner() {
  const lunar = loads.anchors.lunar
  const martian = loads.anchors.martian
  return (
    <div className="panel">
      <h2>Anchor Planner</h2>
      <div className="grid">
        <div>
          <h3>Lunar</h3>
          <p>Insertion depth: {lunar.insertionDepth_m} m</p>
          <p>Estimated pullout: {lunar.pullout_kN} kN</p>
        </div>
        <div>
          <h3>Martian</h3>
          <p>Insertion depth: {martian.insertionDepth_m} m</p>
          <p>Estimated pullout: {martian.pullout_kN} kN</p>
        </div>
      </div>
    </div>
  )
}