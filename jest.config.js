const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': '<rootDir>/jest.preprocess.js'
  },
  //ingore node_modules and gatsby cache
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  // configure Enzyme
  setupFiles: ['./jest.setup'],

  // add module ALIAS to jest
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),

  // display tests with description
  verbose: true
};
