module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-vars': "warn",
    'no-undef': "warn",
    'max-len': ["error", { "code": 300 }],
    'no-empty-function': ["error", {"allow": ["constructors"]}],
    'no-multi-spaces': ["warn", {"ignoreEOLComments": true}]
  },
  plugins: [
    'import'
]
};
