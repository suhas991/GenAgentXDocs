const Overview = () => {
  return (
    <div className="doc-page">
      <h1>Overview</h1>
      
      <p>
        <strong>GenAgentX</strong> is a visual, no-code platform for creating, managing, and deploying AI agents powered by Google Gemini. 
        Build intelligent assistants for content creation, coding, data analysis, and more—all from your browser.
      </p>

      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4>No Code Required</h4>
          <p>Visual interface for agent creation</p>
        </div>
        <div className="feature-item">
          <h4>Google Gemini Powered</h4>
          <p>Multiple AI models (Flash, Pro, Lite)</p>
        </div>
        <div className="feature-item">
          <h4>100% Browser-Based</h4>
          <p>All data stored locally (IndexedDB)</p>
        </div>
        <div className="feature-item">
          <h4>Workflow Builder</h4>
          <p>Chain multiple agents together</p>
        </div>
        <div className="feature-item">
          <h4>AI Assistant Helper</h4>
          <p>Built-in chatbot to guide agent creation</p>
        </div>
        <div className="feature-item">
          <h4>Full Privacy</h4>
          <p>Your API key never leaves your device</p>
        </div>
        <div className="feature-item">
          <h4>Import/Export</h4>
          <p>Share agents with your team</p>
        </div>
        <div className="feature-item">
          <h4>Execution History</h4>
          <p>Track all agent runs with full logs</p>
        </div>
        <div className="feature-item">
          <h4>Theme Support</h4>
          <p>Dark and Light modes</p>
        </div>
      </div>

      <h2>What You Can Build</h2>
      <ul>
        <li><strong>Content Creation Agents</strong> - Blog writers, social media creators, email composers</li>
        <li><strong>Code Assistants</strong> - Code reviewers, generators, documentation writers</li>
        <li><strong>Data Analysis Agents</strong> - Report generators, summarizers, insight extractors</li>
        <li><strong>Customer Service Bots</strong> - Email responders, FAQ assistants, support agents</li>
        <li><strong>Research Assistants</strong> - Information gatherers, summarizers, analysts</li>
        <li><strong>Creative Tools</strong> - Story writers, idea generators, brainstormers</li>
      </ul>

      <h2>How It Works</h2>
      <ol className="step-list">
        <li>
          <strong>Get Your API Key</strong>
          <p>Sign up for a free Google Gemini API key from Google AI Studio</p>
        </li>
        <li>
          <strong>Complete Onboarding</strong>
          <p>Enter your details and API key in the simple 4-step setup process</p>
        </li>
        <li>
          <strong>Create AI Agents</strong>
          <p>Use the visual form or AI chatbot helper to design your agents</p>
        </li>
        <li>
          <strong>Build Workflows</strong>
          <p>Chain agents together for complex multi-step automation</p>
        </li>
        <li>
          <strong>Execute & Monitor</strong>
          <p>Run your agents and track all executions in the history log</p>
        </li>
      </ol>

      <div className="info-box">
        <h4>Perfect For</h4>
        <ul>
          <li>Content creators and marketers</li>
          <li>Developers and technical writers</li>
          <li>Business analysts and researchers</li>
          <li>Product managers and entrepreneurs</li>
          <li>Anyone who wants to automate tasks with AI</li>
        </ul>
      </div>

      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React 19, React Router</li>
        <li><strong>State Management:</strong> Zustand</li>
        <li><strong>AI Integration:</strong> Google Gemini API</li>
        <li><strong>Storage:</strong> IndexedDB (browser-based)</li>
        <li><strong>Build Tool:</strong> Vite</li>
        <li><strong>Styling:</strong> Custom CSS with theme support</li>
      </ul>

      <div className="info-box success">
        <h4>Ready to Get Started?</h4>
        <p>Head over to the <a href="/getting-started">Getting Started</a> guide to begin your journey!</p>
      </div>
    </div>
  );
};

export default Overview;
