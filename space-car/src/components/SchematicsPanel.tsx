import { useState } from 'react'

const files = [
  { label: 'Chassis', src: '/assets/schematics/chassis.svg' },
  { label: 'Landing Gear', src: '/assets/schematics/landing_gear.svg' },
  { label: 'Anchors (Lunar)', src: '/assets/schematics/anchors_lunar.svg' },
  { label: 'Anchors (Martian)', src: '/assets/schematics/anchors_martian.svg' },
  { label: 'Fan Module (AMB)', src: '/assets/schematics/fan_module_amb.svg' },
  { label: 'Morphing Wings', src: '/assets/schematics/wings_morph.svg' },
]

export function SchematicsPanel() {
  const [active, setActive] = useState(files[0].src)
  return (
    <div className="panel">
      <div className="tabs">
        {files.map(f => (
          <button key={f.src} onClick={() => setActive(f.src)}>{f.label}</button>
        ))}
      </div>
      <div className="schematic">
        <img src={active} alt="schematic" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  )
}