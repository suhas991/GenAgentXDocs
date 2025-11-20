import CodeBlock from '../components/CodeBlock';

const Workflows = () => {
  return (
    <div className="doc-page">
      <h1>Building Workflows</h1>

      <h2>What are Workflows?</h2>
      <p>
        A <strong>workflow</strong> is a sequence of agents that run one after another, where each agent's output 
        becomes the next agent's input. This enables complex, multi-step automation.
      </p>

      <h2>Use Cases</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4>Content Pipeline</h4>
          <ol>
            <li>Idea Generator → generates topic</li>
            <li>Outline Creator → creates structure</li>
            <li>Content Writer → writes full article</li>
            <li>SEO Optimizer → optimizes for search</li>
            <li>Editor → final polish</li>
          </ol>
        </div>
        <div className="feature-item">
          <h4>Research Workflow</h4>
          <ol>
            <li>Web Scraper Agent → collects data</li>
            <li>Summarizer → condenses info</li>
            <li>Analyzer → extracts insights</li>
            <li>Report Writer → generates report</li>
          </ol>
        </div>
        <div className="feature-item">
          <h4>Code Development</h4>
          <ol>
            <li>Requirements Analyst → defines specs</li>
            <li>Code Generator → writes code</li>
            <li>Code Reviewer → reviews quality</li>
            <li>Documentation Writer → creates docs</li>
          </ol>
        </div>
      </div>

      <h2>Creating a Workflow</h2>

      <h3>Step 1: Open Workflow Builder</h3>
      <ul>
        <li>Click <strong>" Workflows"</strong> in sidebar</li>
        <li>Click <strong>" Create Workflow"</strong> button</li>
        <li>Workflow Builder modal opens</li>
      </ul>

      <h3>Step 2: Name Your Workflow</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Workflow Name</td>
            <td><span className="badge required">Required</span></td>
            <td>Identify the workflow (e.g., "Blog Content Pipeline")</td>
          </tr>
          <tr>
            <td>Description</td>
            <td><span className="badge optional">Optional</span></td>
            <td>Explain the workflow purpose</td>
          </tr>
        </tbody>
      </table>

      <h3>Step 3: Add Agents to Workflow</h3>

      <h4>Available Agents Panel (Left)</h4>
      <ul>
        <li>Shows all your created agents</li>
        <li>Search bar to filter agents</li>
        <li>Agent cards with name and role</li>
        <li>"+" button to add to workflow</li>
      </ul>

      <h4>Selected Agents Panel (Right)</h4>
      <ul>
        <li>Shows workflow sequence (1, 2, 3...)</li>
        <li>Agent name and role</li>
        <li>Drag handles for reordering</li>
        <li>Up/Down arrows</li>
        <li>Remove button (X)</li>
      </ul>

      <h4>Adding Agents</h4>
      <div className="info-box">
        <h4>Three Methods:</h4>
        <ol>
          <li><strong>Click "+":</strong> Click the plus button on agent card</li>
          <li><strong>Drag & Drop:</strong> Drag agent from left to right panel</li>
          <li><strong>Search & Add:</strong> Search for agent, then add</li>
        </ol>
      </div>

      <h4>Reordering Agents</h4>
      <div className="info-box">
        <h4>Three Methods:</h4>
        <ol>
          <li><strong>Drag & Drop:</strong> Grab handle and drag to new position</li>
          <li><strong>Arrow Buttons:</strong> Click ↑ or ↓ to move</li>
          <li><strong>Keyboard:</strong> Focus and use Arrow Up/Down keys</li>
        </ol>
      </div>

      <h3>Step 4: Configure Workflow</h3>
      <table>
        <thead>
          <tr>
            <th>Constraint</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minimum agents</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Maximum agents (recommended)</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Duplicate agents</td>
            <td>Not allowed</td>
          </tr>
          <tr>
            <td>Execution order</td>
            <td>Sequential (top to bottom)</td>
          </tr>
        </tbody>
      </table>

      <h3>Step 5: Save Workflow</h3>
      <ul>
        <li>Click <strong>"Save Workflow"</strong> button</li>
        <li>Workflow appears in Workflows view</li>
        <li>Stored in IndexedDB automatically</li>
      </ul>

      <h2>Running a Workflow</h2>

      <h3>Step 1: Select Workflow</h3>
      <ul>
        <li>Go to Workflows View</li>
        <li>Find your workflow</li>
        <li>Click <strong>" Run"</strong> button</li>
        <li>Workflow Runner modal opens</li>
      </ul>

      <h3>Step 2: Provide Initial Input</h3>
      <div className="info-box">
        <h4>Input Field <span className="badge required">Required</span></h4>
        <ul>
          <li><strong>Purpose:</strong> Starting prompt for first agent</li>
          <li><strong>Example:</strong> "AI in healthcare"</li>
          <li><strong>Note:</strong> This input goes to Agent #1</li>
        </ul>
      </div>

      <h3>Step 3: Execute Workflow</h3>
      <ul>
        <li>Click <strong>"Run Workflow"</strong> button</li>
        <li>Visual flow diagram appears</li>
        <li>Progress indicators show current step</li>
      </ul>

      <h3>Step 4: Monitor Execution</h3>
      <p>The flow diagram shows:</p>
      <ul>
        <li>All agents in sequence</li>
        <li>Current agent (highlighted/animated)</li>
        <li>Completed agents (green checkmark )</li>
        <li>Pending agents (gray)</li>
        <li>Failed agents (red X )</li>
      </ul>

      <h3>Step 5: View Results</h3>
      <div className="feature-list">
        <div className="feature-item">
          <h4>Final Output</h4>
          <p>Last agent's result displayed prominently</p>
        </div>
        <div className="feature-item">
          <h4>Intermediate Results</h4>
          <ul>
            <li>Step 1: Agent Name → Output</li>
            <li>Step 2: Agent Name → Output</li>
            <li>Step N: Agent Name → Output</li>
            <li>Expandable/collapsible sections</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Actions</h4>
          <ul>
            <li>Copy buttons for each output</li>
            <li>Execution time display</li>
            <li>Success/error status</li>
          </ul>
        </div>
      </div>

      <h2>Workflow Execution Logic</h2>
      <CodeBlock language="javascript">
{`// Simplified workflow execution flow
initialInput = "User's prompt"

for each agent in workflow:
  1. Take input (previous agent's output OR initial input)
  2. Execute agent with that input
  3. Save result
  4. If error → STOP workflow and show error
  5. If success → pass output to next agent
  
finalOutput = last agent's output

// All results are logged to workflow_executions`}
      </CodeBlock>

      <h2>Managing Workflows</h2>

      <h3>Edit Workflow</h3>
      <ol className="step-list">
        <li>Click <strong>" Edit"</strong> on workflow card</li>
        <li>Workflow Builder opens with existing data</li>
        <li>Modify name, agents, or order</li>
        <li>Save to update</li>
      </ol>

      <h3>Delete Workflow</h3>
      <ol className="step-list">
        <li>Click <strong>" Delete"</strong> on workflow card</li>
        <li>Confirmation dialog appears</li>
        <li>Confirm to permanently delete</li>
        <li>Workflow removed from IndexedDB</li>
      </ol>

      <h3>Export/Import Workflows</h3>
      
      <h4>Export Workflow</h4>
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

      <h4>Import Workflow</h4>
      <ol>
        <li>Click <strong>" Import Workflow"</strong></li>
        <li>Upload JSON file or paste JSON</li>
        <li>Workflow is validated</li>
        <li>Added to your collection</li>
      </ol>

      <div className="info-box warning">
        <h4> Agent ID Mapping</h4>
        <p>When importing workflows, agent IDs may need to be remapped to match agents in your system. Ensure all referenced agents exist before importing.</p>
      </div>

      <h2>Best Practices</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4> Do</h4>
          <ul>
            <li>Keep workflows focused (3-7 agents)</li>
            <li>Test each agent individually first</li>
            <li>Name workflows descriptively</li>
            <li>Order agents logically</li>
            <li>Document workflow purpose</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Don't</h4>
          <ul>
            <li>Create overly long workflows</li>
            <li>Use incompatible agent outputs</li>
            <li>Forget to save changes</li>
            <li>Delete agents used in workflows</li>
            <li>Skip testing workflows</li>
          </ul>
        </div>
      </div>

      <h2>Example Workflows</h2>

      <h3>Blog Writing Pipeline</h3>
      <CodeBlock language="text">
{`1. Topic Generator
   Input: "AI trends"
   Output: "Top 10 AI Trends in 2025"

2. Outline Creator
   Input: "Top 10 AI Trends in 2025"
   Output: "I. Introduction\\nII. Trend 1...\\nIII. Conclusion"

3. Content Writer
   Input: [Outline]
   Output: Full 1500-word article

4. SEO Optimizer
   Input: [Article]
   Output: Optimized article with meta tags

5. Social Media Snippets
   Input: [Optimized Article]
   Output: Twitter/LinkedIn posts`}
      </CodeBlock>

      <h3>Code Development Workflow</h3>
      <CodeBlock language="text">
{`1. Requirements Analyzer
   Input: "Build a login system"
   Output: Detailed requirements specification

2. Code Generator
   Input: [Requirements]
   Output: Python Flask code

3. Code Reviewer
   Input: [Code]
   Output: Review comments and improvements

4. Documentation Writer
   Input: [Improved Code]
   Output: Complete API documentation`}
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
            <td>Workflow fails at step 2</td>
            <td>Check if agent 1's output is compatible with agent 2's input</td>
          </tr>
          <tr>
            <td>"Agent not found" error</td>
            <td>Agent was deleted; rebuild workflow with existing agents</td>
          </tr>
          <tr>
            <td>Can't reorder agents</td>
            <td>Use arrow buttons if drag-and-drop doesn't work</td>
          </tr>
          <tr>
            <td>Workflow too slow</td>
            <td>Use faster models or reduce number of agents</td>
          </tr>
          <tr>
            <td>Import fails</td>
            <td>Ensure all agent IDs exist in your database</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box success">
        <h4> Next Steps</h4>
        <p>Learn how to track all your executions in <a href="#/execution-history">Execution History</a>!</p>
      </div>
    </div>
  );
};

export default Workflows;
