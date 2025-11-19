import CodeBlock from '../components/CodeBlock';

const Onboarding = () => {
  return (
    <div className="doc-page">
      <h1>First Time Setup & Onboarding</h1>

      <h2>Landing Page</h2>
      <p>When you first visit GenAgentX, you'll see the landing page featuring:</p>
      <ul>
        <li><strong>Hero Section</strong> - Overview of features and main value proposition</li>
        <li><strong>Features Carousel</strong> - 12 key features showcased in an interactive carousel</li>
        <li><strong>Use Cases</strong> - 6 practical applications for GenAgentX</li>
        <li><strong>How It Works</strong> - 4-step process explanation</li>
        <li><strong>CTA Buttons</strong> - "Get Started Free" or "Try It Free" to begin onboarding</li>
      </ul>

      <h2>Theme Toggle</h2>
      <ul>
        <li><strong>Location:</strong> Top-right navigation bar</li>
        <li><strong>Icon:</strong> Sun for light mode, Moon for dark mode</li>
        <li><strong>Default:</strong> Light mode (preference is saved in localStorage)</li>
        <li><strong>Persistence:</strong> Theme choice is remembered across sessions</li>
      </ul>

      <h2>Onboarding Modal (4-Step Process)</h2>

      <h3>Step 1: Personal Information</h3>
      <div className="info-box">
        <h4>Required Fields:</h4>
        <ul>
          <li><span className="badge required">Required</span> Full Name (text, min 3 characters)</li>
          <li><span className="badge required">Required</span> Email Address (valid email format)</li>
          <li><span className="badge optional">Optional</span> Company/Organization (text)</li>
        </ul>
      </div>

      <h3>Step 2: API Configuration</h3>
      <div className="info-box">
        <h4>Required Fields:</h4>
        <ul>
          <li><span className="badge required">Required</span> Google Gemini API Key (text, starts with "AIza")</li>
          <li>Link to get API key (opens Google AI Studio in new tab)</li>
        </ul>
      </div>

      <CodeBlock language="text">
{`Example API Key Format:
AIzaSyABCDEFGH1234567890abcdefghijklmno`}
      </CodeBlock>

      <h3>Step 3: Configuration Review</h3>
      <p>This step displays a summary of your entered information:</p>
      <ul>
        <li>Full name and email confirmation</li>
        <li>Company name (if provided)</li>
        <li>Masked API key (e.g., <code>AIza•••••••</code>)</li>
        <li>Default model confirmation (<code>gemini-2.0-flash</code>)</li>
      </ul>

      <h3>Step 4: Completion</h3>
      <p>Upon completing the onboarding:</p>
      <ol className="step-list">
        <li>
          <strong>Configuration Saved</strong>
          <p>Your details are saved to localStorage</p>
        </li>
        <li>
          <strong>Database Initialized</strong>
          <p>IndexedDB is created with 4 object stores</p>
        </li>
        <li>
          <strong>Default Agent Seeded</strong>
          <p>GenAgentX Assistant is automatically created</p>
        </li>
        <li>
          <strong>Dashboard Redirect</strong>
          <p>You're taken to the main dashboard to start creating agents</p>
        </li>
      </ol>

      <h2>What Happens During Initialization</h2>

      <h3>1. localStorage Configuration</h3>
      <CodeBlock language="json">
{`{
  "name": "Your Name",
  "email": "your@email.com",
  "company": "Company Name",
  "apiKey": "AIza***",
  "createdAt": "2025-11-19T10:00:00.000Z"
}`}
      </CodeBlock>

      <h3>2. IndexedDB Creation</h3>
      <p>Four object stores are created:</p>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Purpose</th>
            <th>Key Path</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>agents</code></td>
            <td>Stores all AI agents</td>
            <td>id (auto-increment)</td>
          </tr>
          <tr>
            <td><code>executions</code></td>
            <td>Logs agent runs</td>
            <td>id (UUID)</td>
          </tr>
          <tr>
            <td><code>workflows</code></td>
            <td>Stores workflow configs</td>
            <td>id (UUID)</td>
          </tr>
          <tr>
            <td><code>workflow_executions</code></td>
            <td>Logs workflow runs</td>
            <td>id (UUID)</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Default Agent: GenAgentX Assistant</h3>
      <CodeBlock language="json">
{`{
  "name": "GenAgentX Assistant",
  "role": "AI Agent Configuration Generator",
  "goal": "Help users create new AI agents",
  "model": "gemini-2.0-flash",
  "taskDescription": "Generate importable agent configurations...",
  "expectedOutput": "Valid JSON configuration",
  "isDefault": true
}`}
      </CodeBlock>

      <div className="info-box warning">
        <h4>Important Notes</h4>
        <ul>
          <li>The default agent cannot be edited or deleted</li>
          <li>It powers the AI Helper chatbot feature</li>
          <li>Your API key is stored locally and never transmitted to external servers</li>
          <li>All data remains in your browser's storage</li>
        </ul>
      </div>

      <h2>Re-onboarding</h2>
      <p>If you log out or clear your configuration, you'll need to complete onboarding again. However:</p>
      <ul>
        <li>Your agents will still be saved in IndexedDB</li>
        <li>Workflows and execution history remain intact</li>
        <li>You just need to re-enter your API key</li>
      </ul>

      <div className="info-box success">
        <h4>You're All Set!</h4>
        <p>After onboarding, you'll be ready to create your first AI agent. Head to <a href="/creating-agents">Creating AI Agents</a> to learn how!</p>
      </div>
    </div>
  );
};

export default Onboarding;
