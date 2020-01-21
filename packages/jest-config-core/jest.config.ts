import { pathsToModuleNameMapper } from 'ts-jest/utils';
import path from 'path';
import { compilerOptions } from '../../tsconfig.json';
// need module.exports because jest validator doesnt like export default syntax

const jestConfigObject = {
  // ts preset
  preset: 'ts-jest',

  // ignore node_modules and gatsby cache
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  // configure Enzyme
  // using __dirname to get path fo this current module
  setupFiles: [`${__dirname}/jest.setup.ts`],

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
module.exports = jestConfigObject;
