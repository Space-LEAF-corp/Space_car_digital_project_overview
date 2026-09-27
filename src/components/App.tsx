import { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Viewer3D } from './components/Viewer3D'
import { SchematicsPanel } from './components/SchematicsPanel'
import { BomTable } from './components/BomTable'
import { LandingGearLoadChart } from './components/LandingGearLoadChart'
import { MissionChecklist } from './components/MissionChecklist'
import { AnchorPlanner } from './components/AnchorPlanner'
import './App.css'

type ViewType = 'viewer' | 'schematics' | 'bom' | 'mission' | 'anchors' | 'loads'

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('viewer')

  const renderView = () => {
    switch (activeView) {
      case 'viewer':
        return <Viewer3D />
      case 'schematics':
        return <SchematicsPanel />
      case 'bom':
        return <BomTable />
      case 'mission':
        return <MissionChecklist />
      case 'anchors':
        return <AnchorPlanner />
      case 'loads':
        return <LandingGearLoadChart />
      default:
        return <Viewer3D />
    }
  }

  return (
    <div className="app-layout">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  )
}
