const path = require('path')

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['flowtype', 'prettier'],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-console': 0,
    // 'no-console': ['error', {
    //   'allow': ['warn', 'error', 'info']
    // }],
    'no-confusing-arrow': 0,
    /** custom rules */
    'getter-return': 2, // 强制 getter 函数中出现 return 语句
    'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
    'no-return-await': 0,
    'standard/no-callback-literal': 0,
    // 'prettier/prettier': 1
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    },
  },
}
