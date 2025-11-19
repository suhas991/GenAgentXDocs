import CodeBlock from '../components/CodeBlock';

const AIHelper = () => {
  return (
    <div className="doc-page">
      <h1>Using the AI Chatbot Helper</h1>

      <h2>Opening the Chatbot</h2>
      <ul>
        <li>Click <strong>" AI Helper"</strong> in sidebar</li>
        <li>Click floating chat button (bottom-right corner)</li>
        <li>Future: Keyboard shortcut (Ctrl/Cmd + K)</li>
      </ul>

      <h2>Chatbot Interface</h2>

      <h3>Components</h3>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Header</td>
            <td>"AI Helper - GenAgentX Assistant"</td>
          </tr>
          <tr>
            <td>Close Button</td>
            <td>X icon to hide chatbot</td>
          </tr>
          <tr>
            <td>Message History</td>
            <td>Scrollable conversation view</td>
          </tr>
          <tr>
            <td>Input Field</td>
            <td>Type your requests here</td>
          </tr>
          <tr>
            <td>Send Button</td>
            <td>Submit message (or press Enter)</td>
          </tr>
        </tbody>
      </table>

      <h3>Message Types</h3>
      <div className="feature-list">
        <div className="feature-item">
          <h4>User Message</h4>
          <ul>
            <li>Aligned right</li>
            <li>Blue/purple bubble</li>
            <li>Your text input</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Assistant Message</h4>
          <ul>
            <li>Aligned left</li>
            <li>Gray bubble</li>
            <li>Markdown rendered</li>
            <li>Code blocks with syntax highlighting</li>
          </ul>
        </div>
      </div>

      <h2>How to Use</h2>

      <h3>1. Ask for Agent Creation</h3>
      <CodeBlock language="text">
{`Input: "Create a technical blog writer"

Output: JSON configuration ready to import`}
      </CodeBlock>

      <h3>2. Ask for Parameter Suggestions</h3>
      <CodeBlock language="text">
{`Input: "What parameters should a translator agent have?"

Output: Suggestions with types and options`}
      </CodeBlock>

      <h3>3. Ask for Best Practices</h3>
      <CodeBlock language="text">
{`Input: "How should I structure a code reviewer agent?"

Output: Task description examples and tips`}
      </CodeBlock>

      <h3>4. Request Multiple Agents</h3>
      <CodeBlock language="text">
{`Input: "Create 3 agents for content marketing: writer, editor, SEO optimizer"

Output: JSON with 3 agents in one export`}
      </CodeBlock>

      <h2>Example Prompts</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4>Content Creation</h4>
          <ul>
            <li>"Create a social media content writer"</li>
            <li>"Build a newsletter composer agent"</li>
            <li>"Make a product description generator"</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Development</h4>
          <ul>
            <li>"I need an agent for code review"</li>
            <li>"Create a documentation writer"</li>
            <li>"Build a bug report analyzer"</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Business</h4>
          <ul>
            <li>"Build a customer email responder"</li>
            <li>"Create a meeting notes summarizer"</li>
            <li>"Make a report generator"</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Creative</h4>
          <ul>
            <li>"Create a story writer agent"</li>
            <li>"Build an idea generator"</li>
            <li>"Make a slogan creator"</li>
          </ul>
        </div>
      </div>

      <h2>Understanding the Response</h2>

      <h3>Generated JSON Structure</h3>
      <CodeBlock language="json">
{`{
  "version": "1.0",
  "exportDate": "2025-11-19T10:00:00.000Z",
  "agentCount": 1,
  "agents": [{
    "name": "Social Media Content Creator",
    "role": "Professional Social Media Strategist",
    "goal": "Generate engaging social media posts",
    "model": "gemini-2.5-flash",
    "taskDescription": "Create compelling social media posts...",
    "expectedOutput": "A complete social media post...",
    "customParameters": [
      {
        "key": "platform",
        "value": "twitter",
        "type": "select",
        "options": "twitter, linkedin, instagram"
      },
      {
        "key": "tone",
        "value": "professional",
        "type": "select",
        "options": "professional, casual, humorous"
      },
      {
        "key": "include_hashtags",
        "value": "true",
        "type": "checkbox"
      }
    ]
  }]
}`}
      </CodeBlock>

      <h2>Important Rules</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4> Chatbot WILL</h4>
          <ul>
            <li>Generate valid GenAgentX JSON</li>
            <li>Output only JSON in code blocks</li>
            <li>Follow exact export format</li>
            <li>Include all required fields</li>
            <li>Provide reasonable defaults</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Chatbot WON'T</h4>
          <ul>
            <li>Provide explanations (JSON only)</li>
            <li>Execute agents itself</li>
            <li>Store conversations</li>
            <li>Access your existing agents</li>
            <li>Modify your data</li>
          </ul>
        </div>
      </div>

      <h2>Copying from Chatbot</h2>
      <ol className="step-list">
        <li>
          <strong>Wait for JSON Response</strong>
          <p>Chatbot outputs JSON in a code block</p>
        </li>
        <li>
          <strong>Select Code Block</strong>
          <p>Click inside the code block to select all</p>
        </li>
        <li>
          <strong>Copy to Clipboard</strong>
          <p>Use Ctrl+C (Windows) or Cmd+C (Mac)</p>
        </li>
        <li>
          <strong>Open Import Feature</strong>
          <p>Click " Import Agents" in sidebar</p>
        </li>
        <li>
          <strong>Paste and Import</strong>
          <p>Paste JSON and click "Import Agents"</p>
        </li>
      </ol>

      <h2>Best Practices</h2>

      <div className="info-box">
        <h4> For Best Results</h4>
        <ul>
          <li><strong>Be Specific:</strong> "Create a technical blog writer for developers" vs "Create a writer"</li>
          <li><strong>Mention Details:</strong> Include tone, audience, format requirements</li>
          <li><strong>Request Parameters:</strong> Ask for specific custom parameters you need</li>
          <li><strong>Use Examples:</strong> "Like a LinkedIn post generator" helps the AI understand</li>
          <li><strong>Ask for Multiple:</strong> Request related agents together for consistency</li>
        </ul>
      </div>

      <h2>Advanced Usage</h2>

      <h3>Creating Agent Families</h3>
      <CodeBlock language="text">
{`Prompt: "Create 4 agents for a blog writing workflow:
1. Topic researcher
2. Outline creator
3. Content writer
4. SEO optimizer"

Result: 4 coordinated agents ready to work together`}
      </CodeBlock>

      <h3>Requesting Specific Parameters</h3>
      <CodeBlock language="text">
{`Prompt: "Create an email responder with parameters for:
- tone (formal/casual)
- urgency level
- recipient type
- include signature (yes/no)"

Result: Agent with exact parameter configuration`}
      </CodeBlock>

      <h3>Industry-Specific Agents</h3>
      <CodeBlock language="text">
{`Prompt: "Create a real estate listing generator for luxury properties 
with parameters for property type, location, and price range"

Result: Specialized agent with industry-specific configuration`}
      </CodeBlock>

      <h2>Troubleshooting</h2>

      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chatbot not responding</td>
            <td>Check API key in settings, refresh page</td>
          </tr>
          <tr>
            <td>Invalid JSON output</td>
            <td>Try rephrasing request, be more specific</td>
          </tr>
          <tr>
            <td>Missing parameters</td>
            <td>Explicitly request needed parameters</td>
          </tr>
          <tr>
            <td>Can't copy JSON</td>
            <td>Use browser dev tools or manual selection</td>
          </tr>
          <tr>
            <td>Import fails</td>
            <td>Validate JSON format, check required fields</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box warning">
        <h4> Remember</h4>
        <ul>
          <li>The chatbot uses your API key (counts toward quota)</li>
          <li>Conversations are not saved (stateless)</li>
          <li>Each request is independent</li>
          <li>The chatbot cannot edit existing agents</li>
        </ul>
      </div>

      <div className="info-box success">
        <h4> Pro Tip</h4>
        <p>Save frequently used agent configurations as templates by exporting them. You can modify and re-import later!</p>
      </div>
    </div>
  );
};

export default AIHelper;
