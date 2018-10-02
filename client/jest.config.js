module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    //src path
    '^src/(.*)': '<rootDir>/src/$1'
  },

  //configure Enzyme
  setupFiles: ['./tools/jestSetup.ts'],

  //display tests with description
  verbose: true
};
