import CodeBlock from '../components/CodeBlock';

const ImportExport = () => {
  return (
    <div className="doc-page">
      <h1>Import & Export</h1>

      <h2>Exporting Agents</h2>

      <h3>Export Single Agent</h3>
      <ol className="step-list">
        <li>
          <strong>Locate Agent</strong>
          <p>Find the agent in your dashboard</p>
        </li>
        <li>
          <strong>Click Export</strong>
          <p>Click the "" button on agent card</p>
        </li>
        <li>
          <strong>Download JSON</strong>
          <p>File downloads automatically</p>
        </li>
        <li>
          <strong>File Name</strong>
          <p>Format: <code>agent-[name]-[date].json</code></p>
        </li>
      </ol>

      <h3>Export All Agents</h3>
      <ol className="step-list">
        <li>
          <strong>Open Sidebar</strong>
          <p>Locate the sidebar menu</p>
        </li>
        <li>
          <strong>Click "Export All"</strong>
          <p>Click " Export All" button</p>
        </li>
        <li>
          <strong>Download Complete</strong>
          <p>File name: <code>agents-export-[date].json</code></p>
        </li>
        <li>
          <strong>Contains</strong>
          <p>All agents except the default GenAgentX Assistant</p>
        </li>
      </ol>

      <h3>Export File Format</h3>
      <CodeBlock language="json">
{`{
  "version": "1.0",
  "exportDate": "2025-11-19T10:00:00.000Z",
  "agentCount": 2,
  "agents": [
    {
      "name": "Blog Writer",
      "role": "Content Creator",
      "goal": "Write articles",
      "model": "gemini-2.5-flash",
      "taskDescription": "Generate blog posts...",
      "expectedOutput": "Well-structured article...",
      "customParameters": [
        {
          "key": "tone",
          "value": "professional",
          "type": "select",
          "options": "professional, casual, friendly"
        },
        {
          "key": "word_count",
          "value": "800",
          "type": "number"
        }
      ]
    },
    {
      "name": "Code Reviewer",
      "role": "Senior Developer",
      "goal": "Review code quality",
      "model": "gemini-2.5-pro",
      "taskDescription": "Analyze code...",
      "expectedOutput": "Detailed review...",
      "customParameters": []
    }
  ]
}`}
      </CodeBlock>

      <h2>Importing Agents</h2>

      <h3>Method 1: From AI Chatbot</h3>
      <ol className="step-list">
        <li>
          <strong>Open AI Helper</strong>
          <p>Click " AI Helper" in sidebar</p>
        </li>
        <li>
          <strong>Request Agent</strong>
          <p>Example: "Create a social media writer"</p>
        </li>
        <li>
          <strong>Copy JSON</strong>
          <p>Copy the generated JSON from chatbot</p>
        </li>
        <li>
          <strong>Open Import</strong>
          <p>Click " Import Agents" in sidebar</p>
        </li>
        <li>
          <strong>Paste JSON</strong>
          <p>Paste into the text area</p>
        </li>
        <li>
          <strong>Import</strong>
          <p>Click "Import Agents" button</p>
        </li>
      </ol>

      <h3>Method 2: From File</h3>
      <ol className="step-list">
        <li>
          <strong>Open Import Modal</strong>
          <p>Click " Import Agents" in sidebar</p>
        </li>
        <li>
          <strong>Choose File</strong>
          <p>Click "Choose File" button</p>
        </li>
        <li>
          <strong>Select JSON</strong>
          <p>Select your .json file</p>
        </li>
        <li>
          <strong>Auto-Load</strong>
          <p>File content loads automatically</p>
        </li>
        <li>
          <strong>Import</strong>
          <p>Click "Import Agents" button</p>
        </li>
      </ol>

      <h3>Method 3: Drag & Drop (Future)</h3>
      <ol className="step-list">
        <li>Open Import modal</li>
        <li>Drag .json file to drop zone</li>
        <li>File auto-loads</li>
        <li>Click "Import Agents"</li>
      </ol>

      <h2>Import Validation</h2>

      <h3>Required Fields Check</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Validation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>string</td>
            <td>Min 3 characters</td>
          </tr>
          <tr>
            <td>role</td>
            <td>string</td>
            <td>Min 3 characters</td>
          </tr>
          <tr>
            <td>goal</td>
            <td>string</td>
            <td>Min 5 characters</td>
          </tr>
          <tr>
            <td>model</td>
            <td>string</td>
            <td>Valid Gemini model ID</td>
          </tr>
          <tr>
            <td>taskDescription</td>
            <td>string</td>
            <td>Non-empty</td>
          </tr>
          <tr>
            <td>expectedOutput</td>
            <td>string</td>
            <td>Non-empty</td>
          </tr>
        </tbody>
      </table>

      <h3>Optional Fields</h3>
      <ul>
        <li><code>customParameters</code> (array) - Custom parameter definitions</li>
        <li><code>description</code> (string) - Agent description</li>
        <li><code>tags</code> (array) - Tags for categorization (future)</li>
      </ul>

      <h3>Validation Errors</h3>
      <div className="info-box error">
        <h4>Common Import Issues:</h4>
        <ul>
          <li><strong>Invalid JSON format:</strong> Syntax error in JSON structure</li>
          <li><strong>Missing required fields:</strong> One or more required fields absent</li>
          <li><strong>Invalid model ID:</strong> Model not in allowed list</li>
          <li><strong>Duplicate agent names:</strong> Agent with same name already exists</li>
          <li><strong>Exceeded parameter limits:</strong> Too many custom parameters</li>
        </ul>
      </div>

      <h2>Export/Import Workflows</h2>

      <h3>Export Workflow</h3>
      <CodeBlock language="json">
{`{
  "version": "1.0",
  "exportDate": "2025-11-19T10:00:00.000Z",
  "workflowCount": 1,
  "workflows": [{
    "name": "Content Pipeline",
    "description": "Full content creation flow",
    "agents": [
      {"agentId": 10, "order": 0},
      {"agentId": 11, "order": 1},
      {"agentId": 12, "order": 2}
    ]
  }]
}`}
      </CodeBlock>

      <div className="info-box warning">
        <h4> Agent ID Mapping</h4>
        <p>When importing workflows, agent IDs may need to be remapped to match agents in the target system. 
        Ensure all referenced agents exist before importing workflows.</p>
      </div>

      <h2>Sharing Agents</h2>

      <h3>Share with Team Members</h3>
      <ol className="step-list">
        <li>
          <strong>Export Agent</strong>
          <p>Export the agent as JSON</p>
        </li>
        <li>
          <strong>Share File</strong>
          <p>Send via email, Slack, or cloud storage</p>
        </li>
        <li>
          <strong>Team Imports</strong>
          <p>Team members import using the JSON file</p>
        </li>
        <li>
          <strong>Customize</strong>
          <p>Each user can modify the agent after import</p>
        </li>
      </ol>

      <h3>Create Agent Templates</h3>
      <CodeBlock language="text">
{`Best Practice:
1. Create a well-tested agent
2. Export as JSON
3. Store in shared drive/repo
4. Team imports as template
5. Customize for specific needs`}
      </CodeBlock>

      <h2>Backup & Restore</h2>

      <h3>Creating Backups</h3>
      <ol className="step-list">
        <li>
          <strong>Export All Agents</strong>
          <p>Click " Export All" in sidebar</p>
        </li>
        <li>
          <strong>Export Workflows</strong>
          <p>Export each workflow individually</p>
        </li>
        <li>
          <strong>Save Configuration</strong>
          <p>Screenshot settings/configuration</p>
        </li>
        <li>
          <strong>Store Securely</strong>
          <p>Save to cloud storage (Google Drive, Dropbox, etc.)</p>
        </li>
      </ol>

      <h3>Restoring from Backup</h3>
      <ol className="step-list">
        <li>
          <strong>Complete Onboarding</strong>
          <p>Enter your API key</p>
        </li>
        <li>
          <strong>Import Agents</strong>
          <p>Use backup JSON file</p>
        </li>
        <li>
          <strong>Import Workflows</strong>
          <p>Import workflow files</p>
        </li>
        <li>
          <strong>Verify</strong>
          <p>Test agents and workflows</p>
        </li>
      </ol>

      <div className="info-box">
        <h4> Backup Schedule</h4>
        <p>Recommended backup frequency:</p>
        <ul>
          <li><strong>Weekly:</strong> If actively creating/modifying agents</li>
          <li><strong>Monthly:</strong> For stable agent collections</li>
          <li><strong>Before major changes:</strong> Always backup before bulk edits</li>
        </ul>
      </div>

      <h2>Version Control</h2>

      <h3>Managing Agent Versions</h3>
      <CodeBlock language="text">
{`Best Practice:
1. Export agent as v1.0
2. Make changes
3. Export again as v1.1
4. Keep both versions
5. Document changes in filename or description

Example filenames:
- agent-blog-writer-v1.0-2025-11-19.json
- agent-blog-writer-v1.1-added-seo-2025-11-20.json`}
      </CodeBlock>

      <h2>Migration Scenarios</h2>

      <h3>Move to New Browser</h3>
      <ol className="step-list">
        <li>Export all agents from old browser</li>
        <li>Open GenAgentX in new browser</li>
        <li>Complete onboarding</li>
        <li>Import all agents</li>
        <li>Import workflows</li>
      </ol>

      <h3>Share Across Devices</h3>
      <ol className="step-list">
        <li>Export agents on Device A</li>
        <li>Save to cloud storage</li>
        <li>Access cloud file from Device B</li>
        <li>Import agents on Device B</li>
      </ol>

      <h2>Import Best Practices</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4> Before Importing</h4>
          <ul>
            <li>Validate JSON syntax</li>
            <li>Check required fields</li>
            <li>Verify model IDs</li>
            <li>Review agent names</li>
            <li>Backup existing data</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> After Importing</h4>
          <ul>
            <li>Verify all agents imported</li>
            <li>Test each agent</li>
            <li>Check custom parameters</li>
            <li>Update if needed</li>
            <li>Delete duplicates</li>
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
            <td>Export downloads empty file</td>
            <td>Check if agents exist, try different browser</td>
          </tr>
          <tr>
            <td>Import fails with syntax error</td>
            <td>Validate JSON using online validator</td>
          </tr>
          <tr>
            <td>Duplicate agent names</td>
            <td>Rename agents before importing</td>
          </tr>
          <tr>
            <td>Can't find exported file</td>
            <td>Check Downloads folder or browser settings</td>
          </tr>
          <tr>
            <td>Workflow import fails</td>
            <td>Import referenced agents first</td>
          </tr>
        </tbody>
      </table>

      <h2>Security Considerations</h2>

      <div className="info-box warning">
        <h4> Security Notes</h4>
        <ul>
          <li><strong>API Keys:</strong> Export files DO NOT contain your API key</li>
          <li><strong>Sensitive Data:</strong> Review task descriptions for sensitive info</li>
          <li><strong>Sharing:</strong> Only share with trusted team members</li>
          <li><strong>Public Sharing:</strong> Avoid sharing agents with proprietary instructions</li>
        </ul>
      </div>

      <div className="info-box success">
        <h4> Next Steps</h4>
        <p>Learn how to configure your application in <a href="/settings">Settings & Configuration</a>!</p>
      </div>
    </div>
  );
};

export default ImportExport;
