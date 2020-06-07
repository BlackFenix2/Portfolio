#!/usr/bin/env node

/* eslint-disable no-console */

import chalk from 'chalk';
import figlet from 'figlet';
import program from 'commander';

const Options = {
  LINT: 'lint',
  TEST: 'test',
  BUILD: 'build',
  VERSION: 'version'
};

console.log(
  chalk.blue(figlet.textSync('scripts-cli', { horizontalLayout: 'full' }))
);

// override default error handling
program.exitOverride();

// build program with CLI options
program
  .name('scripts-cli')
  .description('react-scripts-like CLI for lint, test and build')
  .option('-l, --lint', 'run lint')
  .option('-t, --test', 'run test')
  .option('-b, --build', 'run build');
try {
  // parse arguments
  program.parse(process.argv);
} catch (error) {
  program.outputHelp();
}
// builder for CLI program

const keyValueOptions = program.opts();

// filter out undefined options (flagged as false)
const programOptions = Object.keys(keyValueOptions).filter(
  option => keyValueOptions[option]
);

programOptions.forEach(option => {
  switch (option) {
    case Options.LINT:
      console.log(`switch statement selected: ${Options.LINT}`);
      break;
    case Options.TEST:
      console.log(`switch statement selected: ${Options.TEST}`);
      break;
    case Options.BUILD:
      console.log(`switch statement selected: ${Options.BUILD}`);
      break;

    default:
      break;
  }
});
