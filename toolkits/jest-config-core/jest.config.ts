import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from '../../tsconfig.json';
// need module.exports because jest validator doesnt like export default syntax

const jestConfigObject = {
  // ts preset
  preset: 'ts-jest',

  // ignore node_modules and gatsby cache
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  // configure Enzyme
  // using __dirname to get path for this current module
  setupFiles: [`${__dirname}/jest.setup.ts`],

  moduleNameMapper: {
    // mock non js/ts imports
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    // add module ALIAS to jest
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>'
    })
  },

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
