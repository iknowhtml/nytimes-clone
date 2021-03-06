module.exports = {
  // parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'react-hooks', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    "react/prop-types":'off';
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    'cypress/globals': true,
    es2021: true
  },
  globals: {
    ENVIRONMENT: true,
  },
};
