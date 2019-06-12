const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',

  // transpile Typescript files using babel
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },

  // add module ALIAS to jest
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),

  // configure Enzyme
  setupFiles: ['./tools/jest/jestSetup.ts'],

  // display tests with description
  verbose: true
};
