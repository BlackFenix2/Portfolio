module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    //src path
    '^src/(.*)': '<rootDir>/src/$1'
  },
  moduleDirectories: ['node_modules', 'src'],
  //tell ts-jest to skip babel since we have zero babel
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },

  //configure Enzyme
  setupFiles: ['./tools/jestSetup.ts'],

  //display tests with description
  verbose: true

  // collectCoverage: true
};
