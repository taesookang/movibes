module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    '@typescript-eslint/no-shadow': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-absolute-path': 0,
  },
};
