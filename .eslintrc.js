module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
  }
};
