import { Viewer3D } from './components/Viewer3D'
import { SchematicsPanel } from './components/SchematicsPanel'
import { BomTable } from './components/BomTable'
import { MissionChecklist } from './components/MissionChecklist'
import { AnchorPlanner } from './components/AnchorPlanner'
import { LandingGearLoadChart } from './components/LandingGearLoadChart'
import './styles/layout.css'

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>Space Car</h1>
        <MissionChecklist />
        <AnchorPlanner />
        <LandingGearLoadChart />
      </aside>
      <main className="content">
        <Viewer3D />
        <SchematicsPanel />
        <BomTable />
      </main>
    </div>
  )
}