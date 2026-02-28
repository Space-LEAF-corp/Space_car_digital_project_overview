import { ReactNode } from 'react';

interface LayoutProps {
  sidebar: ReactNode;
  main: ReactNode;
}

export const Layout = ({ sidebar, main }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#050509', color: '#f5f5f5' }}>
      <aside style={{ width: 320, borderRight: '1px solid #222', padding: '1rem', overflowY: 'auto' }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1, position: 'relative' }}>{main}</main>
    </div>
  );
};
