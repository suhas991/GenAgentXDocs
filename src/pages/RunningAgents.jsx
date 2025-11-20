import CodeBlock from '../components/CodeBlock';

const RunningAgents = () => {
  return (
    <div className="doc-page">
      <h1>Running Your AI Agents</h1>

      <p>Once you've created an agent, running it is super simple! Just give it some input and watch the AI work its magic.</p>

      <h2>How to Run an Agent</h2>

      <h3>Step 1: Find Your Agent</h3>
      <ul>
        <li>Look at your dashboard - you'll see all your agents displayed as cards</li>
        <li>Find the agent you want to use</li>
        <li>Click the <strong>"Run"</strong> button on that agent's card</li>
      </ul>

      <h3>Step 2: Tell It What to Do</h3>
      <div className="info-box">
        <h4>📝 Your Input</h4>
        <p>In the text box that appears, type what you want the agent to work on.</p>
      </div>

      <CodeBlock language="text">
{`Examples:

For a Blog Writer:
"Write a blog about healthy eating habits"

For an Email Assistant:
"Write a professional email declining a meeting invitation"

For a Social Media Agent:
"Create a LinkedIn post about time management tips"`}
      </CodeBlock>

      <CodeBlock language="text">
{`Examples:

For a Blog Writer:
"Write a blog about healthy eating habits"

For an Email Assistant:
"Write a professional email declining a meeting invitation"

For a Social Media Agent:
"Create a LinkedIn post about time management tips"`}
      </CodeBlock>

      <h3>Step 3: Click "Run Agent"</h3>
      <p>What happens next:</p>
      <ol className="step-list">
        <li>
          <strong>⏳ Processing</strong>
          <p>You'll see a loading animation while the AI works</p>
        </li>
        <li>
          <strong>🤖 AI at Work</strong>
          <p>Your agent sends your request to Google's Gemini AI</p>
        </li>
        <li>
          <strong>✨ Results Appear</strong>
          <p>In just a few seconds, you'll see the output!</p>
        </li>
      </ol>

      <h3>Step 4: Use Your Results</h3>
      <div className="feature-list">
        <div className="feature-item">
          <h4>What You Can Do</h4>
          <ul>
            <li>📋 Copy the output to use elsewhere</li>
            <li>🔄 Run again with different input</li>
            <li>💾 Results are automatically saved to your history</li>
          </ul>
        </div>
      </div>
      <h2>What If Something Goes Wrong?</h2>

      <h3>✅ Success Signs</h3>
      <div className="info-box success">
        <ul>
          <li>✓ Green checkmark or success message</li>
          <li>✓ Your content appears clearly</li>
          <li>✓ Copy button is available</li>
          <li>✓ Saved automatically to your history</li>
        </ul>
      </div>

      <h3>❌ Common Problems & Solutions</h3>
      <table>
        <thead>
          <tr>
            <th>Problem</th>
            <th>What To Do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"Invalid API Key"</td>
            <td>Go to Settings and check your API key is correct</td>
          </tr>
          <tr>
            <td>"Rate limit exceeded"</td>
            <td>You've used your free quota - wait a bit or upgrade your Google plan</td>
          </tr>
          <tr>
            <td>"Network error"</td>
            <td>Check your internet connection</td>
          </tr>
          <tr>
            <td>Output is incomplete</td>
            <td>The response was too long - try asking for something shorter</td>
          </tr>
          <tr>
            <td>Very slow response</td>
            <td>The AI is busy - wait a moment or try again</td>
          </tr>
        </tbody>
      </table>

      <h2>Tips for Getting Better Results</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4>⚡ For Faster Results</h4>
          <ul>
            <li>Use the default Gemini 2.0 Flash model</li>
            <li>Keep your requests simple and clear</li>
            <li>Ask for shorter outputs when possible</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>✨ For Better Quality</h4>
          <ul>
            <li>Use Gemini 2.5 Pro for complex tasks</li>
            <li>Be very specific about what you want</li>
            <li>Give examples in your input</li>
            <li>Try running again if you're not happy with the result</li>
          </ul>
        </div>
      </div>

      <div className="info-box">
        <h4>💾 Your History is Saved</h4>
        <p>Every time you run an agent, the input and output are automatically saved. You can view all your past runs in the History section!</p>
      </div>

      <div className="info-box success">
        <h4>🔗 Next Steps</h4>
        <p>Want to chain multiple agents together? Learn about <a href="#/workflows">Building Workflows</a>!</p>
      </div>
    </div>
  );
};

export default RunningAgents;
