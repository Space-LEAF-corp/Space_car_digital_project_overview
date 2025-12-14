interface SidebarProps {
  activeView: string
  onViewChange: (view: 'viewer' | 'schematics' | 'bom' | 'mission' | 'anchors' | 'loads') => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'viewer', label: '3D Viewer', icon: '👁️' },
    { id: 'schematics', label: 'Schematics', icon: '📐' },
    { id: 'bom', label: 'Bill of Materials', icon: '📋' },
    { id: 'mission', label: 'Mission', icon: '🚀' },
    { id: 'anchors', label: 'Anchors', icon: '⚓' },
    { id: 'loads', label: 'Load Analysis', icon: '📊' }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Space Car</h1>
        <p>Digital Design System</p>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as any)}
            className={`nav-item ${activeView === item.id ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Version 1.0.0</p>
      </div>
    </aside>
  )
}

export default Sidebar