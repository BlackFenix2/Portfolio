/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig');

module.exports = {
  // ts preset
  preset: 'ts-jest',

  // ignore node_modules and gatsby cache
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  // configure Enzyme
  setupFiles: ['./tools/jest/jest.setup'],

  // add module ALIAS to jest
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>'
  }),

  // display tests with description
  verbose: true,

  // allow typescript config
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
        esModuleInterop: true
      }
    }
  }
};
