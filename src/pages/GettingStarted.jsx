import CodeBlock from '../components/CodeBlock';

const GettingStarted = () => {
  return (
    <div className="doc-page">
      <h1>Getting Started</h1>

      <h2>Prerequisites</h2>
      <ul>
        <li><strong>Modern Web Browser</strong> - Chrome, Edge, Firefox, or Safari</li>
        <li><strong>Google Gemini API Key</strong> - Free tier available</li>
        <li><strong>Desktop/Laptop</strong> - 1024px+ screen width recommended</li>
        <li><strong>Internet Connection</strong> - Required for API calls to Gemini</li>
      </ul>

      <h2>Installation Options</h2>

      <h3>Option 1: Use Live Deployment</h3>
      <p>The easiest way to get started is to visit the live deployment:</p>
      <div className="info-box">
        <p><strong>Live URL:</strong> <a href="https://suhas991.github.io/GenAgentX/" target="_blank" rel="noopener noreferrer">https://suhas991.github.io/GenAgentX/</a></p>
      </div>

      <h3>Option 2: Local Development</h3>
      <p>If you want to run GenAgentX locally or contribute to development:</p>

      <CodeBlock language="bash">
{`# Clone repository
git clone https://github.com/suhas991/GenAgentX.git

# Navigate to project
cd GenAgentX

# Install dependencies
npm install

# Start development server
npm run dev

# Access at http://localhost:5173`}
      </CodeBlock>

      <h2>Getting Your API Key</h2>
      <ol className="step-list">
        <li>
          <strong>Visit Google AI Studio</strong>
          <p>Go to <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer">https://aistudio.google.com/apikey</a></p>
        </li>
        <li>
          <strong>Sign In</strong>
          <p>Sign in with your Google account</p>
        </li>
        <li>
          <strong>Create API Key</strong>
          <p>Click the "Create API Key" button</p>
        </li>
        <li>
          <strong>Copy Your Key</strong>
          <p>Copy the generated key (starts with <code>AIza...</code>)</p>
        </li>
        <li>
          <strong>Keep It Safe</strong>
          <p>Store it securely - you'll need it during onboarding</p>
        </li>
      </ol>

      <div className="info-box warning">
        <h4>Important</h4>
        <ul>
          <li>Never share your API key publicly</li>
          <li>Don't commit it to version control</li>
          <li>Monitor your usage in Google Cloud Console</li>
          <li>The free tier has generous limits for personal use</li>
        </ul>
      </div>

      <h2>Quick Start Guide</h2>
      <ol className="step-list">
        <li>
          <strong>Access GenAgentX</strong>
          <p>Open the application in your browser</p>
        </li>
        <li>
          <strong>Complete Onboarding</strong>
          <p>Enter your name, email, and API key in the 4-step setup</p>
        </li>
        <li>
          <strong>Explore the Dashboard</strong>
          <p>Familiarize yourself with the interface and navigation</p>
        </li>
        <li>
          <strong>Create Your First Agent</strong>
          <p>Use the AI Helper or manual form to create an agent</p>
        </li>
        <li>
          <strong>Run Your Agent</strong>
          <p>Test your agent with a sample input</p>
        </li>
        <li>
          <strong>Build a Workflow</strong>
          <p>Chain multiple agents together for complex tasks</p>
        </li>
      </ol>

      <h2>System Requirements</h2>
      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Minimum</th>
            <th>Recommended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Screen Width</td>
            <td>1024px</td>
            <td>1280px+</td>
          </tr>
          <tr>
            <td>Browser</td>
            <td>Chrome 90+</td>
            <td>Latest version</td>
          </tr>
          <tr>
            <td>RAM</td>
            <td>2GB</td>
            <td>4GB+</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>50MB free</td>
            <td>100MB+</td>
          </tr>
          <tr>
            <td>Internet</td>
            <td>1 Mbps</td>
            <td>5 Mbps+</td>
          </tr>
        </tbody>
      </table>

      <h2>What's Next?</h2>
      <p>Now that you're set up, continue to the <a href="/onboarding">Onboarding</a> guide to learn about the first-time setup process.</p>

      <div className="info-box success">
        <h4>Pro Tip</h4>
        <p>Start with the AI Helper chatbot to create your first agent - it's the easiest way to learn!</p>
      </div>
    </div>
  );
};

export default GettingStarted;
