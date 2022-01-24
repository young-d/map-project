module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['./craco.config.js'],
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'object-shorthand': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': ['error', { beforeColon: false }],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'newline-before-return': 'error',
    'prefer-template': 'error',
    'no-multiple-empty-lines': 'error',
    'comma-spacing': 'error',
    'no-multi-spaces': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
