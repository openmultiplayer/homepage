import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default ({ children, className }) => {
  return (
    <Highlight {...defaultProps} code={children} language={className.replace(/language-/, '')}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', overflowX: 'scroll' }}>
          {tokens.map((line, i) => (
            <div key={line} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={token} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
