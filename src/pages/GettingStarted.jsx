import CodeBlock from '../components/CodeBlock';

const GettingStarted = () => {
  return (
    <div className="doc-page">
      <h1>Getting Started</h1>

      <h2>What You Need</h2>
      <ul>
        <li><strong>A Computer</strong> - Works on Windows, Mac, or Linux</li>
        <li><strong>Web Browser</strong> - Chrome, Edge, Firefox, or Safari (recent version)</li>
        <li><strong>Google Account</strong> - To get your free API key</li>
        <li><strong>Internet Connection</strong> - Needed to connect to Google's AI</li>
      </ul>

      <div className="info-box">
        <h4>💡 Good to Know</h4>
        <p>GenAgentX works best on a desktop or laptop. Mobile support is coming soon!</p>
      </div>

      <h2>How to Access GenAgentX</h2>

      <h3>✨ Start Using Right Away</h3>
      <p>Simply open your web browser and visit:</p>
      <div className="info-box success">
        <h4>🌐 GenAgentX Web App</h4>
        <p><a href="https://suhas991.github.io/GenAgentX/" target="_blank" rel="noopener noreferrer">https://suhas991.github.io/GenAgentX/</a></p>
        <p><strong>That's it!</strong> No downloads or installations needed.</p>
      </div>

      <p>The app runs completely in your browser - your data stays private on your device.</p>

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
        <h4>🔐 Keep Your API Key Safe</h4>
        <ul>
          <li><strong>Never share your API key</strong> with anyone</li>
          <li><strong>It's like a password</strong> - keep it private and secure</li>
          <li><strong>Free tier included</strong> - Google provides generous free usage</li>
          <li><strong>Monitor usage</strong> in your Google account if needed</li>
        </ul>
      </div>

      <h2>Quick Start - 3 Simple Steps</h2>
      <ol className="step-list">
        <li>
          <strong>📝 Get Your Free API Key</strong>
          <p>Visit Google AI Studio and create a free API key (see instructions below)</p>
        </li>
        <li>
          <strong>🚀 Open GenAgentX</strong>
          <p>Go to the web app and complete the simple 4-step setup</p>
        </li>
        <li>
          <strong>✨ Create Your First AI Agent</strong>
          <p>Use the AI Helper or fill in a simple form - you'll be done in minutes!</p>
        </li>
      </ol>

      <h2>Computer Requirements</h2>
      <p>GenAgentX works on almost any modern computer:</p>
      <ul>
        <li><strong>Screen Size:</strong> Works best on laptop or desktop screens</li>
        <li><strong>Browser:</strong> Any recent version of Chrome, Edge, Firefox, or Safari</li>
        <li><strong>Internet:</strong> Stable connection for AI responses</li>
      </ul>

      <div className="info-box">
        <h4>💡 Tip</h4>
        <p>For the best experience, use a screen wider than 1024 pixels (most laptops and desktops).</p>
      </div>

      <h2>What's Next?</h2>
      <p>Now that you know how to get started, continue to the <a href="#/onboarding">Setup Guide</a> to learn about the first-time setup process.</p>

      <div className="info-box success">
        <h4>🎯 Pro Tip</h4>
        <p>Don't worry if you're not technical! The AI Helper chatbot will guide you through creating your first agent step-by-step.</p>
      </div>
    </div>
  );
};

export default GettingStarted;
