import CodeBlock from '../components/CodeBlock';

const ExecutionHistory = () => {
  return (
    <div className="doc-page">
      <h1>Execution History</h1>

      <h2>Viewing History</h2>

      <h3>Access Methods</h3>
      <ul>
        <li>Click <strong>" History"</strong> in sidebar</li>
        <li>Dedicated History page opens</li>
        <li>Shows all agent and workflow runs</li>
      </ul>

      <h2>History View Layout</h2>

      <h3>Filter Tabs</h3>
      <table>
        <thead>
          <tr>
            <th>Tab</th>
            <th>Shows</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All Executions</td>
            <td>Both agent and workflow runs (default)</td>
          </tr>
          <tr>
            <td>Agent Runs</td>
            <td>Only single agent executions</td>
          </tr>
          <tr>
            <td>Workflow Runs</td>
            <td>Only workflow executions</td>
          </tr>
        </tbody>
      </table>

      <h3>History Cards</h3>
      <p>Each execution entry displays:</p>
      <ul>
        <li>Agent/Workflow Name</li>
        <li>Execution Date & Time</li>
        <li>Input Used</li>
        <li>Output (expandable/collapsed)</li>
        <li>Status (Success  / Failed )</li>
        <li>Execution Duration (seconds)</li>
        <li>Copy Output Button</li>
      </ul>

      <h2>History Entry Details</h2>

      <h3>Agent Execution Log</h3>
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

      <h3>Workflow Execution Log</h3>
      <CodeBlock language="json">
{`{
  "id": "uuid",
  "workflowId": 456,
  "workflowName": "Content Pipeline",
  "initialInput": "AI in healthcare",
  "results": [
    {
      "step": 1,
      "agentId": 10,
      "agentName": "Idea Generator",
      "input": "AI in healthcare",
      "output": "Topic: AI Diagnostics",
      "status": "success"
    },
    {
      "step": 2,
      "agentId": 11,
      "agentName": "Content Writer",
      "input": "Topic: AI Diagnostics",
      "output": "Full article...",
      "status": "success"
    }
  ],
  "finalOutput": "Full article...",
  "status": "success",
  "runAt": "2025-11-19T11:00:00.000Z",
  "totalDuration": 8.5
}`}
      </CodeBlock>

      <h2>History Actions</h2>

      <h3>Individual Entry Actions</h3>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Copy Output</td>
            <td>Copy result to clipboard</td>
          </tr>
          <tr>
            <td> Expand/Collapse</td>
            <td>Show/hide full details</td>
          </tr>
          <tr>
            <td> Re-run</td>
            <td>Execute again with same input (if agent exists)</td>
          </tr>
          <tr>
            <td> Delete Entry</td>
            <td>Remove log (future feature)</td>
          </tr>
        </tbody>
      </table>

      <h3>Bulk Actions</h3>
      <ul>
        <li><strong>Clear All History:</strong> Delete all execution logs</li>
        <li><strong>Export History:</strong> Download as JSON (future feature)</li>
        <li><strong>Filter by Date:</strong> Date range selector (future feature)</li>
      </ul>

      <h2>Understanding Status Indicators</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4> Success</h4>
          <ul>
            <li>Green checkmark</li>
            <li>Full output available</li>
            <li>Duration recorded</li>
            <li>Can be copied/re-run</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Failed</h4>
          <ul>
            <li>Red X indicator</li>
            <li>Error message displayed</li>
            <li>Partial output (if any)</li>
            <li>Can be re-attempted</li>
          </ul>
        </div>
      </div>

      <h2>Viewing Workflow Results</h2>

      <h3>Expanded Workflow View</h3>
      <p>When you expand a workflow execution, you see:</p>

      <CodeBlock language="text">
{`Workflow: Content Pipeline
Status: Success 
Total Duration: 8.5s
Initial Input: "AI in healthcare"

Steps:

 Step 1: Idea Generator
 Input: "AI in healthcare"
 Output: "Topic: AI Diagnostics..."
 Duration: 2.1s
 Status: Success 



 Step 2: Outline Creator
 Input: "Topic: AI Diagnostics..."
 Output: "I. Introduction\\nII. ..."
 Duration: 3.2s
 Status: Success 



 Step 3: Content Writer
 Input: [Outline]
 Output: "Full article..."
 Duration: 3.2s
 Status: Success 


Final Output: [Full Article]
[Copy Button]`}
      </CodeBlock>

      <h2>History Storage</h2>

      <h3>IndexedDB Storage</h3>
      <p>All executions are stored in IndexedDB:</p>
      <ul>
        <li><strong>Object Store:</strong> <code>executions</code> (for agents)</li>
        <li><strong>Object Store:</strong> <code>workflow_executions</code> (for workflows)</li>
        <li><strong>Retention:</strong> Permanent (until manually cleared)</li>
        <li><strong>Limit:</strong> Browser storage limit (~50MB typically)</li>
      </ul>

      <div className="info-box warning">
        <h4> Storage Management</h4>
        <p>Large numbers of executions can consume browser storage. Regularly clear old logs to maintain performance.</p>
      </div>

      <h2>Searching and Filtering</h2>

      <h3>Current Features</h3>
      <ul>
        <li>Filter by type (All / Agents / Workflows)</li>
        <li>Chronological ordering (newest first)</li>
      </ul>

      <h3>Future Features</h3>
      <ul>
        <li>Search by agent name</li>
        <li>Filter by date range</li>
        <li>Filter by status (success/failed)</li>
        <li>Search in output content</li>
        <li>Sort by duration</li>
      </ul>

      <h2>Copying Outputs</h2>

      <h3>Single Output Copy</h3>
      <ol className="step-list">
        <li>Find the execution in history</li>
        <li>Expand if collapsed</li>
        <li>Click <strong>" Copy"</strong> button</li>
        <li>Output copied to clipboard</li>
        <li>Use anywhere (documents, emails, etc.)</li>
      </ol>

      <h3>Multiple Outputs</h3>
      <p>For workflow executions:</p>
      <ul>
        <li>Each step has its own copy button</li>
        <li>Copy individual step outputs</li>
        <li>Copy final output separately</li>
      </ul>

      <h2>Re-running from History</h2>

      <h3>Re-run Agent Execution</h3>
      <ol className="step-list">
        <li>Click <strong>" Re-run"</strong> on history entry</li>
        <li>Run Agent modal opens</li>
        <li>Input and parameters are pre-filled</li>
        <li>Modify if needed</li>
        <li>Click "Run Agent" to execute</li>
      </ol>

      <div className="info-box">
        <h4> Use Case</h4>
        <p>Re-running is perfect for:</p>
        <ul>
          <li>Testing prompt improvements</li>
          <li>Getting alternative outputs</li>
          <li>Debugging failed executions</li>
          <li>Comparing different parameter values</li>
        </ul>
      </div>

      <h2>Clearing History</h2>

      <h3>Clear All</h3>
      <ol className="step-list">
        <li>Go to Settings → Storage Management</li>
        <li>Click <strong>"Clear Execution History"</strong></li>
        <li>Confirm deletion</li>
        <li>All logs are permanently removed</li>
      </ol>

      <h3>Selective Deletion (Future)</h3>
      <ul>
        <li>Delete individual entries</li>
        <li>Delete by date range</li>
        <li>Delete failed executions only</li>
      </ul>

      <h2>Performance Tips</h2>

      <div className="feature-list">
        <div className="feature-item">
          <h4> Best Practices</h4>
          <ul>
            <li>Clear old logs monthly</li>
            <li>Keep 100-200 recent entries</li>
            <li>Export important results</li>
            <li>Monitor storage usage</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Performance</h4>
          <ul>
            <li>Fewer entries = faster loading</li>
            <li>Collapsed view by default</li>
            <li>Lazy loading (future)</li>
            <li>Pagination (future)</li>
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
            <td>History not loading</td>
            <td>Check IndexedDB in browser dev tools</td>
          </tr>
          <tr>
            <td>Missing executions</td>
            <td>Verify they completed successfully</td>
          </tr>
          <tr>
            <td>Can't copy output</td>
            <td>Check clipboard permissions</td>
          </tr>
          <tr>
            <td>Re-run not working</td>
            <td>Agent may have been deleted</td>
          </tr>
          <tr>
            <td>Storage full</td>
            <td>Clear old logs to free space</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box success">
        <h4> Analytics Insight</h4>
        <p>Use execution history to analyze:</p>
        <ul>
          <li>Which agents are most used</li>
          <li>Average execution times</li>
          <li>Success vs. failure rates</li>
          <li>Common input patterns</li>
        </ul>
      </div>
    </div>
  );
};

export default ExecutionHistory;
