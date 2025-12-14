import loads from '../assets/data/loads.json'

export function LandingGearLoadChart() {
  const { landingGear, anchors } = loads

  return (
    <div className="panel">
      <h2>Landing Gear & Anchor Analysis</h2>

      <div className="load-section">
        <h3>Landing Gear Specifications</h3>
        <div className="spec-grid">
          <div className="spec-item">
            <span className="spec-label">Per Strut Max Load:</span>
            <span className="spec-value">{landingGear.perStrutMaxLoad_kN} kN</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Anchor Preload:</span>
            <span className="spec-value">{landingGear.anchorPreload_kN} kN</span>
          </div>
        </div>

        <h4>Normal Operations Loads (per strut)</h4>
        <div className="load-bars">
          {landingGear.normalOps_kN.map((load, idx) => {
            const percentage = (load / landingGear.perStrutMaxLoad_kN) * 100
            const isHighLoad = load > landingGear.perStrutMaxLoad_kN * 0.8
            return (
              <div key={idx} className="load-bar">
                <span className="bar-label">Strut {idx + 1}:</span>
                <div className="bar-container">
                  <div
                    className={`bar-fill ${isHighLoad ? 'bar-fill-high' : 'bar-fill-normal'}`}
                    data-width={percentage}
                  />
                  <span className="bar-value">{load} kN</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="anchor-section">
        <h3>Anchor Specifications</h3>
        <div className="anchor-grid">
          <div className="anchor-item">
            <h4>Lunar Surface</h4>
            <div className="anchor-specs">
              <div>Insertion Depth: {anchors.lunar.insertionDepth_m} m</div>
              <div>Pullout Strength: {anchors.lunar.pullout_kN} kN</div>
            </div>
          </div>
          <div className="anchor-item">
            <h4>Martian Surface</h4>
            <div className="anchor-specs">
              <div>Insertion Depth: {anchors.martian.insertionDepth_m} m</div>
              <div>Pullout Strength: {anchors.martian.pullout_kN} kN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}