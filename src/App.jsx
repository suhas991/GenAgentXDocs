import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import GettingStarted from './pages/GettingStarted';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import CreatingAgents from './pages/CreatingAgents';
import RunningAgents from './pages/RunningAgents';
import AIHelper from './pages/AIHelper';
import Workflows from './pages/Workflows';
import ExecutionHistory from './pages/ExecutionHistory';
import ImportExport from './pages/ImportExport';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/creating-agents" element={<CreatingAgents />} />
          <Route path="/running-agents" element={<RunningAgents />} />
          <Route path="/ai-helper" element={<AIHelper />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/execution-history" element={<ExecutionHistory />} />
          <Route path="/import-export" element={<ImportExport />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
