import CodeBlock from '../components/CodeBlock';

const Onboarding = () => {
  return (
    <div className="doc-page">
      <h1>First Time Setup & Onboarding</h1>

      <h2>Welcome Screen</h2>
      <p>When you first open GenAgentX, you'll see a friendly welcome page that shows you:</p>
      <ul>
        <li><strong>What GenAgentX can do</strong> - Overview of AI agent capabilities</li>
        <li><strong>Key Features</strong> - Interactive showcase of what you can build</li>
        <li><strong>Real Use Cases</strong> - Examples of how people use AI agents</li>
        <li><strong>How It Works</strong> - Simple 4-step process to get started</li>
        <li><strong>Get Started Button</strong> - Click to begin your setup</li>
      </ul>

      <div className="info-box">
        <h4>🎨 Personalize Your Experience</h4>
        <p>Look for the sun/moon icon in the top-right corner to switch between light and dark themes. Your choice will be remembered!</p>
      </div>

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

      <h2>What Happens After Setup</h2>

      <p>Once you complete the setup, GenAgentX automatically:</p>
      <ol className="step-list">
        <li>
          <strong>💾 Saves Your Settings</strong>
          <p>Your name, email, and API key are stored securely on your device</p>
        </li>
        <li>
          <strong>🛠️ Prepares the Workspace</strong>
          <p>Creates storage for your agents, workflows, and execution history</p>
        </li>
        <li>
          <strong>🤖 Creates Your AI Helper</strong>
          <p>A special built-in agent that helps you create new agents easily</p>
        </li>
        <li>
          <strong>✅ Takes You to Dashboard</strong>
          <p>You're now ready to start creating and running AI agents!</p>
        </li>
      </ol>

      <div className="info-box success">
        <h4>🔒 Your Privacy is Protected</h4>
        <p>Everything stays on your computer. Your API key and data are never sent to our servers - they're stored only in your browser.</p>
      </div>

      <h2>If You Need to Start Over</h2>
      <p>Don't worry if you need to log out or reset your settings:</p>
      <ul>
        <li>✅ Your AI agents will still be saved</li>
        <li>✅ Your workflows remain intact</li>
        <li>✅ Your execution history is preserved</li>
        <li>📝 You'll just need to enter your API key again</li>
      </ul>

      <div className="info-box success">
        <h4>🎉 You're All Set!</h4>
        <p>After setup, you'll be ready to create your first AI agent. Head to <a href="#/creating-agents">Creating AI Agents</a> to learn how!</p>
      </div>
    </div>
  );
};

export default Onboarding;
