module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parser: '@typescript-eslint/parser',
  env: { es6: true, browser: true },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // importをeslintでソートするために設定する
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    // arrow-functionにする
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
  parserOptions: { sourceType: 'module', ecmaFeatures: { jsx: true } },
}
