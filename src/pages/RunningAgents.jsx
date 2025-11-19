import CodeBlock from '../components/CodeBlock';

const RunningAgents = () => {
  return (
    <div className="doc-page">
      <h1>Running Agents</h1>

      <h2>Single Agent Execution</h2>

      <h3>Step 1: Select Agent</h3>
      <ul>
        <li>Click <strong>"Run"</strong> button on any agent card</li>
        <li>Run Agent Modal opens</li>
      </ul>

      <h3>Step 2: Provide Input</h3>
      <div className="info-box">
        <h4>Input Textarea <span className="badge required">Required</span></h4>
        <ul>
          <li><strong>Purpose:</strong> Main prompt for the agent</li>
          <li><strong>Example:</strong> "Write a blog about AI in healthcare"</li>
          <li><strong>Validation:</strong> Cannot be empty</li>
        </ul>
      </div>

      <h3>Step 3: Configure Custom Parameters</h3>
      <p>If your agent has custom parameters, fill them out:</p>

      <CodeBlock language="text">
{`Example Configuration:

Tone: [Select: professional ]
Word Count: [500]
Target Audience: [healthcare professionals]
Include Examples: []`}
      </CodeBlock>

      <h3>Step 4: Execute</h3>
      <ol className="step-list">
        <li>
          <strong>Click "Run Agent"</strong>
          <p>Button triggers execution</p>
        </li>
        <li>
          <strong>Loading State</strong>
          <p>Spinner appears while calling Gemini API</p>
        </li>
        <li>
          <strong>API Processing</strong>
          <p>Agent configuration is sent to Gemini</p>
        </li>
        <li>
          <strong>Results Display</strong>
          <p>Output appears in the modal</p>
        </li>
      </ol>

      <h3>Step 5: View Output</h3>
      <div className="feature-list">
        <div className="feature-item">
          <h4>Output Features</h4>
          <ul>
            <li>Markdown rendered content</li>
            <li>Syntax highlighting for code</li>
            <li>Copy button (top-right)</li>
            <li>Success/Error status indicator</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Available Actions</h4>
          <ul>
            <li> Copy Output</li>
            <li> Run Again (same input)</li>
            <li> Close modal</li>
            <li>Auto-logged to History</li>
          </ul>
        </div>
      </div>

      <h2>Execution Flow</h2>
      <CodeBlock language="text">
{`User Input
    ↓
Agent Configuration
    ↓
Build System Prompt
    ↓
Extract Gemini Parameters
    ↓
Get API Key (localStorage)
    ↓
POST to Gemini API
    ↓
Parse Response
    ↓
Display Output
    ↓
Save to History (IndexedDB)`}
      </CodeBlock>

      <h2>System Prompt Construction</h2>
      <p>GenAgentX builds a comprehensive system prompt from your agent configuration:</p>

      <CodeBlock language="text">
{`# ROLE
[Agent Role]

# GOAL
[Agent Goal]

# TASK
[Task Description]

# EXPECTED OUTPUT
[Expected Output Format]

# CUSTOM PARAMETERS
[If provided]
- Parameter 1: Value 1
- Parameter 2: Value 2

# USER INPUT
[Your provided input]

Please complete the task following all instructions above.`}
      </CodeBlock>

      <h2>Gemini API Parameters</h2>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Default Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>temperature</td>
            <td>0.7</td>
            <td>Creativity level (0.0-2.0)</td>
          </tr>
          <tr>
            <td>topK</td>
            <td>40</td>
            <td>Token selection diversity</td>
          </tr>
          <tr>
            <td>topP</td>
            <td>0.95</td>
            <td>Cumulative probability threshold</td>
          </tr>
          <tr>
            <td>maxOutputTokens</td>
            <td>8000</td>
            <td>Maximum response length</td>
          </tr>
        </tbody>
      </table>

      <h2>Understanding Output</h2>

      <h3>Successful Execution</h3>
      <div className="info-box success">
        <h4> Success Indicators</h4>
        <ul>
          <li>Green checkmark or success badge</li>
          <li>Full output displayed</li>
          <li>Copy button available</li>
          <li>Execution time shown</li>
          <li>Logged to history</li>
        </ul>
      </div>

      <h3>Failed Execution</h3>
      <div className="info-box error">
        <h4> Common Errors</h4>
        <ul>
          <li><strong>API Key Invalid:</strong> Check settings and update key</li>
          <li><strong>Rate Limit Exceeded:</strong> Wait and try again</li>
          <li><strong>Network Error:</strong> Check internet connection</li>
          <li><strong>Invalid Model:</strong> Model may be deprecated</li>
          <li><strong>Timeout:</strong> Request took too long</li>
        </ul>
      </div>

      <h2>Copying Output</h2>
      <p>Two ways to copy the generated output:</p>
      <ol className="step-list">
        <li>
          <strong>Click Copy Button</strong>
          <p>Located in top-right of output section</p>
        </li>
        <li>
          <strong>Manual Selection</strong>
          <p>Highlight text and use Ctrl+C / Cmd+C</p>
        </li>
      </ol>

      <h2>Re-running Agents</h2>
      <div className="info-box">
        <h4>Run Again Feature</h4>
        <p>After execution, you can:</p>
        <ul>
          <li>Click "Run Again" to use the same input</li>
          <li>Modify input and re-run</li>
          <li>Change custom parameters</li>
          <li>Close and run from agent card later</li>
        </ul>
      </div>

      <h2>Execution History Logging</h2>
      <p>Every execution is automatically logged with:</p>

      <CodeBlock language="json">
{`{
  "id": "uuid",
  "agentId": 123,
  "agentName": "Blog Writer",
  "input": "Write about AI",
  "output": "Generated content...",
  "customParams": {
    "tone": "professional",
    "word_count": 500
  },
  "status": "success",
  "runAt": "2025-11-19T10:30:00.000Z",
  "duration": 3.2
}`}
      </CodeBlock>

      <h2>Performance Tips</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4> Faster Execution</h4>
          <ul>
            <li>Use Flash models for speed</li>
            <li>Reduce maxOutputTokens</li>
            <li>Simplify task descriptions</li>
            <li>Use cached parameters</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Better Quality</h4>
          <ul>
            <li>Use Pro models for complex tasks</li>
            <li>Be specific in instructions</li>
            <li>Provide clear examples</li>
            <li>Test different temperatures</li>
          </ul>
        </div>
      </div>

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
            <td>No output displayed</td>
            <td>Check console for errors, verify API key</td>
          </tr>
          <tr>
            <td>Partial/incomplete output</td>
            <td>Increase maxOutputTokens limit</td>
          </tr>
          <tr>
            <td>Unexpected results</td>
            <td>Review task description, adjust temperature</td>
          </tr>
          <tr>
            <td>Slow response</td>
            <td>Use faster model or reduce complexity</td>
          </tr>
          <tr>
            <td>Error after error</td>
            <td>Check API quota in Google Cloud Console</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box success">
        <h4> Next Steps</h4>
        <p>Want to automate multi-step processes? Learn about <a href="/workflows">Building Workflows</a>!</p>
      </div>
    </div>
  );
};

export default RunningAgents;
