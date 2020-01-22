// test eslint file for typescript/eslint combo
// https://github.com/typescript-eslint/typescript-eslint

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

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
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': WARN, // Checks effect dependencies

    // opinion rule, no need to restrict syntax that works
    'no-restricted-syntax': OFF,

    // typescript already checks for undefined vars
    'no-undef': OFF,

    // code restriction, nested ternary operators are not that complicated
    'no-nested-ternary': OFF,

    'react/jsx-no-undef': OFF,

    // you dont import extensions
    'import/extensions': OFF,

    // typescript already handles path resolution
    'import/no-unresolved': OFF,

    // devDependencies such as redux devtools are utilized in react app
    'import/no-extraneous-dependencies': OFF,

    // disabled, all types auto-fix to interface. rule would be redundant.
    '@typescript-eslint/interface-name-prefix': OFF,

    // established coding standards use a different naming convention
    '@typescript-eslint/camelcase': OFF,

    // Typescript compiler already warns aganist unused vars
    '@typescript-eslint/no-unused-vars': OFF,

    // turning off untill refactoring
    'react/no-array-index-key': OFF,

    // permit JSX in tsx files
    'react/jsx-filename-extension': [1, { extensions: ['tsx'] }],

    // removes prop-types requirement because Typescript
    'react/prop-types': OFF,

    // destructuring props is not required
    'react/destructuring-assignment': OFF,

    // why is this needed?
    'react/button-has-type': OFF,

    // conflicts with prettier formatting (print limit)
    'react/jsx-one-expression-per-line': OFF,

    // not needed, node project supports esnext syntax
    'react/state-in-constructor': OFF,

    // TODO convert props spreading warning to error
    'react/jsx-props-no-spreading': WARN,

    // not needed for certain React Functions
    '@typescript-eslint/explicit-function-return-type': OFF,

    // modified, removes code-bloat accessors in TS React.
    '@typescript-eslint/explicit-member-accessibility': OFF,

    // deprecated
    'jsx-a11y/label-has-for': OFF,
    'jsx-a11y/label-has-associated-control': OFF
  }
};
