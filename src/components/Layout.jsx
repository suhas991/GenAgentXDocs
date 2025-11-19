import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Github,
  FileText,
  Rocket,
  UserCheck,
  LayoutDashboard,
  Bot,
  Play,
  MessageSquare,
  Workflow,
  History,
  Package,
  Settings
} from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const navItems = [
    { path: '/', label: 'Overview', icon: FileText },
    { path: '/getting-started', label: 'Getting Started', icon: Rocket },
    { path: '/onboarding', label: 'First Time Setup & Onboarding', icon: UserCheck },
    { path: '/dashboard', label: 'Dashboard Navigation', icon: LayoutDashboard },
    { path: '/creating-agents', label: 'Creating AI Agents', icon: Bot },
    { path: '/running-agents', label: 'Running Agents', icon: Play },
    { path: '/ai-helper', label: 'AI Chatbot Helper', icon: MessageSquare },
    { path: '/workflows', label: 'Building Workflows', icon: Workflow },
    { path: '/execution-history', label: 'Execution History', icon: History },
    { path: '/import-export', label: 'Import & Export', icon: Package },
    { path: '/settings', label: 'Settings & Configuration', icon: Settings }
  ];

  return (
    <div className={`docs-container ${theme}`}>
      {/* Header */}
      <header className="docs-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1>GenAgentX Documentation</h1>
        </div>
        <div className="header-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a 
            href="https://github.com/suhas991/GenAgentX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      <div className="docs-body">
        {/* Sidebar */}
        <aside className={`docs-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <IconComponent className="nav-icon" size={18} />
                  <span className="nav-label">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="docs-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
