module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    //parse css files without breaking
    '\\.css$': 'jest-css',
    '^(?!.*\\.(js|css|json)$)': 'jest-file'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/'],
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
  }

  // collectCoverage: true
};
