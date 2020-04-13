import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Prism from 'prism-react-renderer/prism';

Prism.languages.pawn = Prism.languages.extend('clike', {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true,
  },
  'class-name': {
    pattern: /(\b(?:enum)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
    lookbehind: true,
  },
  keyword: /\b(?:inline|break|case|char|const|continue|default|using|do|else|enum|for|goto|if|return|sizeof|static|switch|while|stock|public|forward|hook|foreach|@|@emit|remotefunc|timerfunc|global|foreign|final|TEST__|HOOK__|FINAL__|GLOBAL__|FOREIGN__|REMOTE_FUNC__|TIMER_FUNC__|INLINE__|yield|YIELD__|tagof|__nameof|__emit|native|state|assert|exit|sleep|new|operator)\b/,
  function: /[a-z_]\w*(?=\s*\()/i,
  operator: />>=?|>>>=?|<<=?|([-+&|])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b0b[01]+)|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)*/i,
});

Prism.languages.insertBefore('pawn', 'string', {
  macro: {
    // allow for multiline macro definitions
    pattern: /(^\s*)#[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: 'property',
    inside: {
      // highlight the path of the include statement as a string
      string: {
        pattern: /(#include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true,
      },
      // highlight macro directives as keywords
      directive: {
        pattern: /(#)\b(?:define|defined|else|emit|endif|error|warning|if|include|line|pragma|undef|file|assert|endinput|endscript|elseif|section|tryinclude)\b/,
        lookbehind: true,
        alias: 'keyword',
      },
    },
  },
  // highlight predefined macros as constants
  constant: /\b(?:__Pawn|__PawnBuild|cellmin|callmax|cellbits|cellbytes|__line|__file|__date|__time|__compat|charbits|charmax|debug|ucharmax)\b/,
});

export default ({ children, className }) => (
  <Highlight
    {...defaultProps}
    Prism={Prism}
    code={children}
    language={className.replace(/language-/, '')}
    theme={undefined}
  >
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
