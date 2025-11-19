import CodeBlock from '../components/CodeBlock';

const CreatingAgents = () => {
  return (
    <div className="doc-page">
      <h1>Creating AI Agents</h1>

      <h2>Method 1: Manual Creation</h2>

      <h3>Step 1: Open Agent Form</h3>
      <ul>
        <li>Click <strong>"+ Create Agent"</strong> in sidebar</li>
        <li>OR click <strong>"Create New Agent"</strong> in empty state</li>
      </ul>

      <h3>Step 2: Fill Agent Details</h3>

      <h4>Basic Information</h4>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Required</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Agent Name</strong></td>
            <td><span className="badge required">Required</span></td>
            <td>Display name (min 3 chars)</td>
            <td>"Blog Post Writer"</td>
          </tr>
          <tr>
            <td><strong>Role</strong></td>
            <td><span className="badge required">Required</span></td>
            <td>Professional identity (min 5 chars)</td>
            <td>"Senior Content Strategist"</td>
          </tr>
          <tr>
            <td><strong>Goal</strong></td>
            <td><span className="badge required">Required</span></td>
            <td>What the agent achieves (min 10 chars)</td>
            <td>"Create SEO-optimized blog articles"</td>
          </tr>
        </tbody>
      </table>

      <h4>Task Configuration</h4>
      <div className="info-box">
        <h4>Task Description <span className="badge required">Required</span></h4>
        <p>Detailed, step-by-step instructions for the agent (min 20 chars)</p>
        <p><strong>Best Practices:</strong></p>
        <ul>
          <li>Be specific about format and structure</li>
          <li>Include tone and style requirements</li>
          <li>Define constraints (word count, etc.)</li>
          <li>Provide examples when possible</li>
        </ul>
      </div>

      <CodeBlock language="text">
{`Example Task Description:

Generate comprehensive blog posts following these steps:
1. Create an engaging title with the main keyword
2. Write an introduction that hooks the reader
3. Develop 3-5 main sections with subheadings
4. Include relevant examples and data
5. Add a conclusion with call-to-action
6. Maintain a professional yet conversational tone
7. Keep length between 800-1200 words`}
      </CodeBlock>

      <div className="info-box">
        <h4>Expected Output Format <span className="badge required">Required</span></h4>
        <p>Describe the output format (min 10 chars)</p>
      </div>

      <CodeBlock language="text">
{`Example Expected Output:

A well-structured article with:
- Clear title with keyword
- 3-4 paragraph introduction
- Multiple sections with H2/H3 headings
- Bullet points for lists
- Professional signature
- 800-1200 words total`}
      </CodeBlock>

      <h4>Model Selection</h4>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Icon</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gemini 2.5 Flash</td>
            <td></td>
            <td>Fast, efficient general tasks</td>
          </tr>
          <tr>
            <td>Gemini 2.5 Pro</td>
            <td></td>
            <td>Most capable, complex reasoning</td>
          </tr>
          <tr>
            <td>Gemini 2.5 Flash Lite</td>
            <td></td>
            <td>Ultra lightweight, quick responses</td>
          </tr>
          <tr>
            <td>Gemini 2.0 Flash</td>
            <td></td>
            <td>High throughput (default)</td>
          </tr>
          <tr>
            <td>Gemini 2.0 Flash Lite</td>
            <td></td>
            <td>Cost-efficient</td>
          </tr>
          <tr>
            <td>Gemini 2.0 Flash Experimental</td>
            <td>🧪</td>
            <td>Testing new features</td>
          </tr>
        </tbody>
      </table>

      <h4>Custom Parameters (Optional)</h4>
      <p>Add dynamic fields for runtime customization:</p>

      <div className="feature-list">
        <div className="feature-item">
          <h4>Text Parameter</h4>
          <CodeBlock language="json">
{`{
  "key": "target_audience",
  "value": "developers",
  "type": "text"
}`}
          </CodeBlock>
        </div>
        <div className="feature-item">
          <h4>Number Parameter</h4>
          <CodeBlock language="json">
{`{
  "key": "word_count",
  "value": "500",
  "type": "number"
}`}
          </CodeBlock>
        </div>
        <div className="feature-item">
          <h4>Select Parameter</h4>
          <CodeBlock language="json">
{`{
  "key": "tone",
  "value": "professional",
  "type": "select",
  "options": "professional, casual, friendly"
}`}
          </CodeBlock>
        </div>
      </div>

      <h3>Step 3: Save Agent</h3>
      <ul>
        <li>Click <strong>"Create Agent"</strong> button</li>
        <li>Agent appears in main grid immediately</li>
        <li>Stored in IndexedDB automatically</li>
      </ul>

      <h2>Method 2: Using AI Chatbot Helper</h2>

      <h3>Step 1: Open Chatbot</h3>
      <ul>
        <li>Click <strong> AI Helper</strong> in sidebar</li>
        <li>OR press floating chatbot button</li>
      </ul>

      <h3>Step 2: Describe Your Need</h3>
      <CodeBlock language="text">
{`Example Prompts:

"Create a social media content writer"
"I need an agent for code review"
"Build a customer email responder"
"Make an agent that generates product descriptions"
"Create 3 agents for content marketing"`}
      </CodeBlock>

      <h3>Step 3: Review Generated JSON</h3>
      <p>The chatbot returns importable JSON:</p>
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
    "taskDescription": "Create compelling posts...",
    "expectedOutput": "A complete social media post...",
    "customParameters": [
      {
        "key": "platform",
        "value": "twitter",
        "type": "select",
        "options": "twitter, linkedin, instagram"
      }
    ]
  }]
}`}
      </CodeBlock>

      <h3>Step 4: Import Agent</h3>
      <ol className="step-list">
        <li>Copy the JSON from chatbot</li>
        <li>Click <strong> Import Agents</strong> in sidebar</li>
        <li>Paste JSON into text area</li>
        <li>Click <strong>"Import Agents"</strong></li>
        <li>Agent appears in your collection</li>
      </ol>

      <h2>Default Agent: GenAgentX Assistant</h2>
      <div className="info-box warning">
        <h4>Special Agent Restrictions</h4>
        <p>The GenAgentX Assistant cannot be:</p>
        <ul>
          <li> Edited</li>
          <li> Deleted</li>
          <li> Exported</li>
        </ul>
        <p><strong>Purpose:</strong> Powers the AI Helper chatbot to generate agent configurations</p>
      </div>

      <h2>Best Practices</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h4> Do</h4>
          <ul>
            <li>Be specific in task descriptions</li>
            <li>Provide clear examples</li>
            <li>Use appropriate models</li>
            <li>Test with sample inputs</li>
            <li>Use custom parameters</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Don't</h4>
          <ul>
            <li>Make tasks too vague</li>
            <li>Skip expected output</li>
            <li>Overuse Pro models</li>
            <li>Forget validation</li>
            <li>Use special characters in keys</li>
          </ul>
        </div>
      </div>

      <div className="info-box success">
        <h4> Next Steps</h4>
        <p>Now that you know how to create agents, learn about <a href="/running-agents">Running Agents</a> to execute them!</p>
      </div>
    </div>
  );
};

export default CreatingAgents;
