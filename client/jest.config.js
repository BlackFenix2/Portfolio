module.exports = {
  //transpile Typescript files
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },

  //modify test search regex to invlucde .ts and .tsx
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],

  //specify extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  //add module ALIAS to jest
  moduleNameMapper: {
    //src path
    '^src/(.*)': '<rootDir>/src/$1',

    //allow css Modules
    //TODO remove once css modules are replaced with emotion
    '\\.(css|less)$': 'identity-obj-proxy'
  },

  //configure Enzyme
  setupFiles: ['./tools/jest/jestSetup.ts'],

  //display tests with description
  verbose: true
};
