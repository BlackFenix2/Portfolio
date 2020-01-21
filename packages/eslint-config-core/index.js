// test eslint file for typescript/eslint combo
// https://github.com/typescript-eslint/typescript-eslint

module.exports = {
  env: {
    browser: true,
    node: true
  },

  parser: '@typescript-eslint/parser',

  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],

  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // opinion rule, no need to restrict syntax that works
    'no-restricted-syntax': 'off',

    // typescript already checks for undefined vars
    'no-undef': 'off',

    // code restriction, nested ternary operators are not that complicated
    'no-nested-ternary': 'off',

    'react/jsx-no-undef': 'off',

    // typescript already handles path resolution
    'import/no-unresolved': 'off',

    // devDependencies such as redux devtools are utilized in react app
    'import/no-extraneous-dependencies': 'off',

    // disabled, all types auto-fix to interface. rule would be redundant.
    '@typescript-eslint/interface-name-prefix': 'off',

    // established coding standards use a different naming convention
    '@typescript-eslint/camelcase': 'off',

    // Typescript compiler already warns aganist unused vars
    '@typescript-eslint/no-unused-vars': 'off',

    // turning off untill refactoring
    'react/no-array-index-key': 'off',

    // permit JSX in tsx files
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],

    // removes prop-types requirement because Typescript
    'react/prop-types': 'off',

    // destructuring props is not required
    'react/destructuring-assignment': 'off',

    // why is this needed?
    'react/button-has-type': 'off',

    // conflicts with prettier formatting (print limit)
    'react/jsx-one-expression-per-line': 'off',

    // not needed, node project supports esnext syntax
    'react/state-in-constructor': 'off',

    // TODO convert props spreading warning to error
    'react/jsx-props-no-spreading': 'warn',

    // not needed for certain React Functions
    '@typescript-eslint/explicit-function-return-type': 'off',

    // modified, removes code-bloat accessors in TS React.
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // deprecated
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
};
