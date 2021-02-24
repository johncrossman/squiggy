module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@vue/typescript',
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'eqeqeq': 2,
    'multiline-html-element-content-newline': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/eqeqeq': 2,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-self-closing': 0,
    'vue/attributes-order': 2,
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/no-v-html': 0,
    'vue/require-default-prop': 0,
    'vue/singleline-html-element-content-newline': 0
  },
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser')
  }
};
