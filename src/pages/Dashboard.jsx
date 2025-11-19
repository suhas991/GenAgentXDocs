const Dashboard = () => {
  return (
    <div className="doc-page">
      <h1>Dashboard Navigation</h1>

      <h2>Top Navigation Bar</h2>
      
      <h3>Left Side</h3>
      <ul>
        <li><strong>Logo & App Name:</strong> GenAgentX branding</li>
        <li><strong>Theme Toggle:</strong> Switch between dark and light modes</li>
      </ul>

      <h3>Right Side</h3>
      <div className="info-box">
        <h4>User Menu Dropdown (Avatar Icon)</h4>
        <ul>
          <li>User Name & Email display</li>
          <li>Settings option</li>
          <li>Logout option</li>
        </ul>
      </div>

      <h2>Sidebar Navigation</h2>

      <h3>Main Menu</h3>
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Section</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Agents</td>
            <td>Main view - displays all created agents (default view)</td>
          </tr>
          <tr>
            <td></td>
            <td>Workflows</td>
            <td>Chain multiple agents together</td>
          </tr>
          <tr>
            <td></td>
            <td>History</td>
            <td>View execution logs and results</td>
          </tr>
          <tr>
            <td></td>
            <td>AI Helper</td>
            <td>Toggle floating chatbot for assistance</td>
          </tr>
        </tbody>
      </table>

      <h3>Bottom Actions</h3>
      <ul>
        <li><strong>Create Agent:</strong> Open the agent creation form</li>
        <li><strong>Import Agents:</strong> Import agents from JSON files</li>
        <li><strong>Export All:</strong> Export all agents as JSON</li>
        <li><strong>Settings:</strong> Open settings modal</li>
      </ul>

      <h2>View States</h2>

      <h3>1. Agents View (Default)</h3>
      <p>Displays a grid of all created agents with the following information:</p>
      <ul>
        <li>Agent name and role</li>
        <li>Goal description</li>
        <li>Model being used</li>
        <li>Action buttons (Run, Edit, Export, Delete)</li>
      </ul>

      <div className="info-box">
        <h4>Empty State</h4>
        <p>When no agents exist, you'll see:</p>
        <ul>
          <li>Welcome message</li>
          <li>"Create New Agent" call-to-action button</li>
          <li>Quick tips for getting started</li>
        </ul>
      </div>

      <h3>2. Workflows View</h3>
      <p>Shows a list of saved workflows including:</p>
      <ul>
        <li>Workflow name and description</li>
        <li>Number of agents in the workflow</li>
        <li>Creation date</li>
        <li>Action buttons (Run, Edit, Export, Delete)</li>
      </ul>

      <h3>3. History View</h3>
      <p>Displays execution logs with:</p>
      <ul>
        <li>Filter tabs (All, Agent Runs, Workflow Runs)</li>
        <li>Execution date and time</li>
        <li>Agent/Workflow name</li>
        <li>Status (Success / Failed)</li>
        <li>Input and output (expandable)</li>
        <li>Copy output button</li>
      </ul>

      <h3>4. Modal States</h3>
      <p>Various modals can overlay the dashboard:</p>
      <ul>
        <li><strong>Agent Form Modal:</strong> Create/edit agents</li>
        <li><strong>Run Agent Modal:</strong> Execute a single agent</li>
        <li><strong>Workflow Builder:</strong> Create/edit workflows</li>
        <li><strong>Workflow Runner:</strong> Execute workflows</li>
        <li><strong>Settings Modal:</strong> Configure application settings</li>
        <li><strong>Import Modal:</strong> Import agents from JSON</li>
        <li><strong>AI Helper Chatbot:</strong> Floating chat interface</li>
      </ul>

      <h2>Agent Cards</h2>
      <p>Each agent is displayed in a card with the following structure:</p>
      
      <div className="feature-list">
        <div className="feature-item">
          <h4>Header</h4>
          <ul>
            <li>Agent name (bold)</li>
            <li>Role (subtitle)</li>
            <li>Model badge</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Body</h4>
          <ul>
            <li>Goal description</li>
            <li>Custom parameters count</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Footer</h4>
          <ul>
            <li>Run button</li>
            <li>Edit button</li>
            <li>Export button</li>
            <li>Delete button</li>
          </ul>
        </div>
      </div>

      <h2>Responsive Behavior</h2>
      <ul>
        <li><strong>Desktop (1280px+):</strong> Full sidebar + 3-column agent grid</li>
        <li><strong>Tablet (1024-1279px):</strong> Collapsible sidebar + 2-column grid</li>
        <li><strong>Mobile (&lt;1024px):</strong> Mobile blocker message (app requires desktop)</li>
      </ul>

      <div className="info-box warning">
        <h4>Mobile Notice</h4>
        <p>GenAgentX currently requires a minimum screen width of 1024px for optimal experience. Mobile support is planned for future releases.</p>
      </div>

      <h2>Keyboard Navigation</h2>
      <p>Future enhancement will include keyboard shortcuts such as:</p>
      <ul>
        <li><strong>Ctrl/Cmd + K:</strong> Open AI Helper chatbot</li>
        <li><strong>Ctrl/Cmd + N:</strong> Create new agent</li>
        <li><strong>Ctrl/Cmd + ,:</strong> Open settings</li>
        <li><strong>Esc:</strong> Close modals</li>
      </ul>

      <div className="info-box success">
        <h4>Pro Tip</h4>
        <p>Hover over agent cards to see quick actions. Click directly on the card to view full details!</p>
      </div>
    </div>
  );
};

export default Dashboard;
