import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from '../../tsconfig.json';

module.exports = {
  // ts preset
  preset: 'ts-jest',

  // ignore node_modules and gatsby cache
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  // configure Enzyme
  // directory is relative to the actual jest.config.js file
  setupFiles: ['./tools/jest/jest.setup.ts'],

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
