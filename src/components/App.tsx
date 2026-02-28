import { Layout } from './components/Layout';
import { Sidebar } from './components/Sidebar';
import { BikeConfigurator } from './components/BikeConfigurator';

function App() {
  return (
    <Layout
      sidebar={<Sidebar />}
      main={<BikeConfigurator />}
    />
  );
}

export default App;
