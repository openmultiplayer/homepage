module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // disabled for next.js <Link> usage
    'react/jsx-one-expression-per-line': 'off'
  }
};
