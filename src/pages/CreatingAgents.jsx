import CodeBlock from '../components/CodeBlock';

const CreatingAgents = () => {
  return (
    <div className="doc-page">
      <h1>Creating AI Agents</h1>

      <p>Creating an AI agent is easy! Think of it like hiring a virtual assistant - you just need to tell it who it is, what it should do, and how it should do it.</p>

      <h2>Two Ways to Create Agents</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4>🤖 AI Helper (Easiest!)</h4>
          <p>Just chat with our AI and describe what you need. It creates the agent for you!</p>
          <p><strong>Best for:</strong> Beginners or quick agent creation</p>
        </div>
        <div className="feature-item">
          <h4>📝 Manual Form</h4>
          <p>Fill out a simple form with details about your agent</p>
          <p><strong>Best for:</strong> When you want full control over every detail</p>
        </div>
      </div>

      <h2>Method 1: Using AI Helper (Recommended for Beginners)</h2>

      <h2>Method 1: Using AI Helper (Recommended for Beginners)</h2>

      <h3>Step 1: Open the AI Helper</h3>
      <ul>
        <li>Click the <strong>💬 AI Helper</strong> button in the sidebar</li>
        <li>Or look for the floating chat icon</li>
      </ul>

      <h3>Step 2: Tell It What You Need</h3>
      <p>Just describe what kind of agent you want in plain English:</p>
      <CodeBlock language="text">
{`Example Requests:

"Create a social media content writer"
"I need someone to help write professional emails"  
"Make an agent that writes blog posts about technology"
"Create an agent for product descriptions"`}
      </CodeBlock>

      <h3>Step 3: Copy the Generated Configuration</h3>
      <p>The AI Helper will create a ready-to-use agent configuration for you. Just copy it!</p>

      <h3>Step 4: Import Your Agent</h3>
      <ol className="step-list">
        <li>Click <strong>📥 Import Agents</strong> in the sidebar</li>
        <li>Paste the configuration you copied</li>
        <li>Click <strong>"Import Agents"</strong></li>
        <li>Your agent appears instantly - ready to use!</li>
      </ol>

      <div className="info-box success">
        <h4>🎯 That's It!</h4>
        <p>Your agent is created and ready to run. No coding, no complexity!</p>
      </div>

      <h2>Method 2: Create Manually (For More Control)</h2>
      <ul>
        <li>Click <strong>"+ Create Agent"</strong> in sidebar</li>
        <li>OR click <strong>"Create New Agent"</strong> in empty state</li>
      </ul>

      <h2>Method 2: Create Manually (For More Control)</h2>

      <h3>Step 1: Open the Creation Form</h3>
      <ul>
        <li>Click <strong>"+ Create Agent"</strong> button in the sidebar</li>
        <li>Or click <strong>"Create New Agent"</strong> if you don't have any agents yet</li>
      </ul>

      <h3>Step 2: Fill in the Basic Information</h3>

      <h4>What You Need to Provide</h4>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>What It Means</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent Name</strong> ⭐</td>
            <td>What you'll call this agent</td>
            <td>"Blog Writer" or "Email Assistant"</td>
          </tr>
          <tr>
            <td><strong>Role</strong> ⭐</td>
            <td>What profession this agent acts as</td>
            <td>"Professional Content Writer"</td>
          </tr>
          <tr>
            <td><strong>Goal</strong> ⭐</td>
            <td>What this agent helps you achieve</td>
            <td>"Write engaging blog articles"</td>
          </tr>
        </tbody>
      </table>
      <p><small>⭐ = Required field</small></p>
      <h4>What You Need to Provide</h4>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>What It Means</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent Name</strong> ⭐</td>
            <td>What you'll call this agent</td>
            <td>"Blog Writer" or "Email Assistant"</td>
          </tr>
          <tr>
            <td><strong>Role</strong> ⭐</td>
            <td>What profession this agent acts as</td>
            <td>"Professional Content Writer"</td>
          </tr>
          <tr>
            <td><strong>Goal</strong> ⭐</td>
            <td>What this agent helps you achieve</td>
            <td>"Write engaging blog articles"</td>
          </tr>
        </tbody>
      </table>
      <p><small>⭐ = Required field</small></p>

      <h3>Step 3: Describe the Task</h3>
      <div className="info-box">
        <h4>Task Description ⭐</h4>
        <p>Tell the agent exactly what steps to follow. Be as detailed as possible!</p>
      </div>

      <CodeBlock language="text">
{`Good Example:

Write a blog post by doing the following:
1. Start with an attention-grabbing title
2. Write a friendly introduction (2-3 paragraphs)
3. Create 3-4 main sections with clear headings
4. Use examples to explain your points
5. End with a helpful conclusion
6. Keep it between 800-1000 words
7. Use a professional but friendly tone`}
      </CodeBlock>

      <h3>Step 4: Describe the Output Format</h3>
      <div className="info-box">
        <h4>Expected Output ⭐</h4>
        <p>Explain what the final result should look like</p>
      </div>

      <CodeBlock language="text">
{`Good Example:

A complete blog article with:
- Eye-catching title
- Introduction that hooks the reader
- Well-organized sections with headings
- Easy-to-read paragraphs
- A strong conclusion
- Around 800-1000 words`}
      </CodeBlock>

      <h3>Step 5: Choose Your AI Model</h3>
      <p>Pick the AI model that fits your needs:</p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>When to Use It</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Gemini 2.0 Flash</strong> (Default)</td>
            <td>✅ Best for most tasks - fast and reliable</td>
          </tr>
          <tr>
            <td>Gemini 2.5 Flash</td>
            <td>Faster for simple tasks</td>
          </tr>
          <tr>
            <td>Gemini 2.5 Pro</td>
            <td>Complex tasks that need deep thinking</td>
          </tr>
          <tr>
            <td>Flash Lite models</td>
            <td>Very quick, simple responses</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box">
        <h4>💡 Tip</h4>
        <p>Start with the default model (Gemini 2.0 Flash). It works great for most tasks!</p>
      </div>

      <h3>Step 6: Save Your Agent</h3>
      <ul>
        <li>Click <strong>"Create Agent"</strong> button</li>
        <li>Your agent appears immediately and is ready to use!</li>
      </ul>

      <h2>About the GenAgentX Assistant</h2>
      <div className="info-box warning">
        <h4>🤖 Special Built-in Agent</h4>
        <p>You'll notice one agent called "GenAgentX Assistant" - this is special:</p>
        <ul>
          <li>❌ You can't edit or delete it</li>
          <li>❌ You can't export it</li>
          <li>✅ It powers the AI Helper to create new agents for you</li>
        </ul>
        <p><strong>Why?</strong> This agent is what makes the AI Helper so smart at creating other agents!</p>
      </div>

      <h2>Tips for Creating Great Agents</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4>✅ Do This</h4>
          <ul>
            <li>Be specific about what you want</li>
            <li>Give clear examples</li>
            <li>Explain the tone (professional, friendly, etc.)</li>
            <li>Test your agent after creating it</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>❌ Avoid This</h4>
          <ul>
            <li>Vague descriptions like "write stuff"</li>
            <li>Skipping the output format</li>
            <li>Making instructions too complicated</li>
            <li>Forgetting to save your work</li>
          </ul>
        </div>
      </div>

      <div className="info-box success">
        <h4>🚀 Next Steps</h4>
        <p>Ready to use your agents? Learn about <a href="#/running-agents">Running Agents</a> to see them in action!</p>
      </div>
    </div>
  );
};

export default CreatingAgents;
