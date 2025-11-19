import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ children, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block">
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
      <button 
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy code'}
      >
        {copied ? (
          <>
            <Check size={14} />
            <span style={{ marginLeft: '6px' }}>Copied!</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span style={{ marginLeft: '6px' }}>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
