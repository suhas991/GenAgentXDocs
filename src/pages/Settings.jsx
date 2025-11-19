import CodeBlock from '../components/CodeBlock';

const Settings = () => {
  return (
    <div className="doc-page">
      <h1>Settings & Configuration</h1>

      <h2>Opening Settings</h2>

      <h3>Access Methods</h3>
      <ul>
        <li>Click user avatar → <strong>" Settings"</strong></li>
        <li>Click <strong>" Settings"</strong> in sidebar</li>
        <li>Settings modal opens showing current configuration</li>
      </ul>

      <h2>Settings Sections</h2>

      <h3>1. User Profile</h3>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Editable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td> Yes</td>
            <td>Your display name</td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td> Yes</td>
            <td>Your email (not used for communication)</td>
          </tr>
          <tr>
            <td>Company/Organization</td>
            <td> Yes</td>
            <td>Optional organization name</td>
          </tr>
        </tbody>
      </table>

      <h4>Actions</h4>
      <ul>
        <li><strong>Update Profile:</strong> Save changes to localStorage</li>
        <li><strong>Cancel:</strong> Discard unsaved changes</li>
      </ul>

      <h3>2. API Configuration</h3>

      <h4>API Key Management</h4>
      <ul>
        <li><strong>View Masked Key:</strong> Displays as <code>AIza•••••••</code></li>
        <li><strong>Update API Key:</strong> Click edit to reveal input field</li>
        <li><strong>Test Connection:</strong> Validate key with Gemini API</li>
        <li><strong>Save New Key:</strong> Update and store in localStorage</li>
      </ul>

      <div className="info-box warning">
        <h4> Security Note</h4>
        <ul>
          <li>Key stored in localStorage only</li>
          <li>Never transmitted to external servers</li>
          <li>Used only for Gemini API calls</li>
          <li>Cleared on logout</li>
        </ul>
      </div>

      <h4>Testing Your API Key</h4>
      <CodeBlock language="text">
{`Steps:
1. Enter or update your API key
2. Click "Test API Connection" button
3. System makes a test call to Gemini
4. Success: Green checkmark + "Key is valid"
5. Failure: Red X + error message`}
      </CodeBlock>

      <h3>3. Default Model</h3>

      <h4>Model Selection</h4>
      <p>Choose the default Gemini model for new agents:</p>

      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>gemini-2.5-flash</td>
            <td>Fast, efficient general tasks</td>
          </tr>
          <tr>
            <td>gemini-2.5-pro</td>
            <td>Most capable, complex reasoning</td>
          </tr>
          <tr>
            <td>gemini-2.5-flash-lite</td>
            <td>Ultra lightweight, quick responses</td>
          </tr>
          <tr>
            <td>gemini-2.0-flash</td>
            <td>High throughput (default)</td>
          </tr>
          <tr>
            <td>gemini-2.0-flash-lite</td>
            <td>Cost-efficient</td>
          </tr>
          <tr>
            <td>gemini-2.0-flash-experimental</td>
            <td>Testing new features</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box">
        <h4> Note</h4>
        <ul>
          <li>Applies to newly created agents only</li>
          <li>Existing agents keep their configured model</li>
          <li>Can be changed per agent during creation</li>
        </ul>
      </div>

      <h3>4. Theme Preferences</h3>

      <h4>Theme Options</h4>
      <ul>
        <li><strong>Light Mode:</strong> Bright background, dark text</li>
        <li><strong>Dark Mode:</strong> Dark background, light text</li>
        <li><strong>Auto (Future):</strong> Follow system preference</li>
      </ul>

      <h4>Theme Persistence</h4>
      <ul>
        <li>Choice saved to localStorage</li>
        <li>Persists across sessions</li>
        <li>Independent of user config</li>
        <li>Remains after logout</li>
      </ul>

      <h3>5. Storage Management</h3>

      <h4>Storage Information</h4>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Agents</td>
            <td>Total agents created (excluding default)</td>
          </tr>
          <tr>
            <td>Number of Workflows</td>
            <td>Total workflows saved</td>
          </tr>
          <tr>
            <td>Number of Executions</td>
            <td>Total execution logs stored</td>
          </tr>
          <tr>
            <td>Storage Used</td>
            <td>Approximate IndexedDB usage</td>
          </tr>
        </tbody>
      </table>

      <h4>Clear Data Options</h4>
      <div className="feature-list">
        <div className="feature-item">
          <h4>Clear Execution History</h4>
          <ul>
            <li>Deletes all execution logs</li>
            <li>Agents and workflows preserved</li>
            <li>Cannot be undone</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Clear All Agents</h4>
          <ul>
            <li>Deletes all agents</li>
            <li>Default agent preserved</li>
            <li>Workflows may break</li>
            <li>Execution history preserved</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Clear All Workflows</h4>
          <ul>
            <li>Deletes all workflows</li>
            <li>Agents preserved</li>
            <li>Workflow execution history preserved</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4>Reset Entire App</h4>
          <ul>
            <li>Clears ALL data</li>
            <li>Requires re-onboarding</li>
            <li>Confirmation required</li>
            <li>Cannot be undone</li>
          </ul>
        </div>
      </div>

      <h3>6. Advanced Settings (Future)</h3>
      <ul>
        <li><strong>Export All Data:</strong> Complete backup as JSON</li>
        <li><strong>Import Data:</strong> Restore from backup</li>
        <li><strong>Auto-save Preferences:</strong> Automatic backup schedule</li>
        <li><strong>Keyboard Shortcuts:</strong> Configure custom shortcuts</li>
      </ul>

      <h2>Logout Process</h2>

      <h3>How to Logout</h3>
      <ol className="step-list">
        <li>
          <strong>Click User Avatar</strong>
          <p>In top-right corner</p>
        </li>
        <li>
          <strong>Select Logout</strong>
          <p>Click " Logout" option</p>
        </li>
        <li>
          <strong>Confirmation Dialog</strong>
          <p>"Are you sure? This will clear your configuration."</p>
        </li>
        <li>
          <strong>Confirm or Cancel</strong>
          <p>Proceed or return to dashboard</p>
        </li>
      </ol>

      <h3>What Happens on Logout</h3>

      <h4>Cleared Data</h4>
      <ul>
        <li> User configuration (name, email, API key)</li>
        <li> Session state</li>
      </ul>

      <h4>Preserved Data</h4>
      <ul>
        <li> All agents (in IndexedDB)</li>
        <li> All workflows</li>
        <li> Execution history</li>
        <li> Theme preference</li>
      </ul>

      <div className="info-box">
        <h4> Important</h4>
        <p>To use the app again after logout:</p>
        <ol>
          <li>Complete onboarding with your API key</li>
          <li>Your agents will still be there</li>
          <li>Workflows remain intact</li>
          <li>History is preserved</li>
        </ol>
      </div>

      <h2>Configuration Storage</h2>

      <h3>localStorage Structure</h3>
      <CodeBlock language="json">
{`{
  "userConfig": {
    "name": "Your Name",
    "email": "your@email.com",
    "company": "Your Company",
    "apiKey": "AIzaSy...",
    "defaultModel": "gemini-2.0-flash",
    "createdAt": "2025-11-19T10:00:00.000Z",
    "updatedAt": "2025-11-19T12:00:00.000Z"
  },
  "theme": "light",
  "preferences": {
    "sidebarOpen": true,
    "defaultView": "agents"
  }
}`}
      </CodeBlock>

      <h2>Updating Configuration</h2>

      <h3>Update User Profile</h3>
      <ol className="step-list">
        <li>Open Settings</li>
        <li>Edit name, email, or company</li>
        <li>Click "Update Profile"</li>
        <li>Changes saved to localStorage</li>
        <li>Modal closes automatically</li>
      </ol>

      <h3>Update API Key</h3>
      <ol className="step-list">
        <li>Open Settings → API Configuration</li>
        <li>Click "Update API Key"</li>
        <li>Enter new key</li>
        <li>Optionally test connection</li>
        <li>Click "Save"</li>
        <li>All future requests use new key</li>
      </ol>

      <h3>Change Default Model</h3>
      <ol className="step-list">
        <li>Open Settings</li>
        <li>Go to Default Model section</li>
        <li>Select new model from dropdown</li>
        <li>Click "Save"</li>
        <li>New agents will use this model</li>
      </ol>

      <h2>Storage Limits</h2>

      <h3>Browser Storage Quotas</h3>
      <table>
        <thead>
          <tr>
            <th>Storage Type</th>
            <th>Typical Limit</th>
            <th>Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>localStorage</td>
            <td>5-10 MB</td>
            <td>User config, theme, preferences</td>
          </tr>
          <tr>
            <td>IndexedDB</td>
            <td>50 MB+</td>
            <td>Agents, workflows, execution history</td>
          </tr>
        </tbody>
      </table>

      <div className="info-box warning">
        <h4> Storage Management Tips</h4>
        <ul>
          <li>Clear old execution logs regularly</li>
          <li>Export and delete unused agents</li>
          <li>Monitor storage usage in settings</li>
          <li>Backup before clearing data</li>
        </ul>
      </div>

      <h2>Privacy & Security</h2>

      <h3>Data Privacy</h3>
      <ul>
        <li><strong>Local Storage Only:</strong> All data stays in your browser</li>
        <li><strong>No Server Sync:</strong> No external server receives your data</li>
        <li><strong>API Calls:</strong> Only to Google Gemini API</li>
        <li><strong>No Analytics:</strong> No tracking or telemetry</li>
        <li><strong>No Cookies:</strong> Except essential browser storage</li>
      </ul>

      <h3>API Key Security</h3>
      <div className="feature-list">
        <div className="feature-item">
          <h4> Best Practices</h4>
          <ul>
            <li>Use dedicated key for GenAgentX</li>
            <li>Set usage quotas in Google Cloud</li>
            <li>Monitor API usage regularly</li>
            <li>Rotate keys monthly</li>
            <li>Revoke if compromised</li>
          </ul>
        </div>
        <div className="feature-item">
          <h4> Avoid</h4>
          <ul>
            <li>Sharing API key publicly</li>
            <li>Committing to version control</li>
            <li>Using same key across apps</li>
            <li>Leaving key on shared computers</li>
            <li>Ignoring usage alerts</li>
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
            <td>Settings won't save</td>
            <td>Check localStorage permissions, try incognito mode</td>
          </tr>
          <tr>
            <td>API key test fails</td>
            <td>Verify key format, check internet connection</td>
          </tr>
          <tr>
            <td>Can't update profile</td>
            <td>Clear browser cache, refresh page</td>
          </tr>
          <tr>
            <td>Theme won't persist</td>
            <td>Enable localStorage, disable private browsing</td>
          </tr>
          <tr>
            <td>Storage quota exceeded</td>
            <td>Clear execution history, delete old agents</td>
          </tr>
        </tbody>
      </table>

      <h2>Resetting GenAgentX</h2>

      <h3>Complete Reset</h3>
      <ol className="step-list">
        <li>
          <strong>Export Backup</strong>
          <p>Export all agents and workflows first</p>
        </li>
        <li>
          <strong>Open Settings</strong>
          <p>Go to Storage Management</p>
        </li>
        <li>
          <strong>Click "Reset Entire App"</strong>
          <p>Warning dialog appears</p>
        </li>
        <li>
          <strong>Confirm Reset</strong>
          <p>All data is cleared</p>
        </li>
        <li>
          <strong>Re-onboard</strong>
          <p>Complete onboarding process again</p>
        </li>
        <li>
          <strong>Import Backup</strong>
          <p>Restore agents from exported files</p>
        </li>
      </ol>

      <div className="info-box error">
        <h4> Warning</h4>
        <p>Complete reset is permanent and cannot be undone. Always backup before resetting!</p>
      </div>

      <div className="info-box success">
        <h4> Configuration Complete!</h4>
        <p>You now know how to configure GenAgentX. Start creating amazing AI agents!</p>
      </div>
    </div>
  );
};

export default Settings;
