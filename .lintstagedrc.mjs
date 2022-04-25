export default {
  // '**/*.ts?(x)': () => 'tsc-files --noEmit --pretty',
  // '*.{js,jsx,ts,tsx}': (filenames) => [`eslint --cache --fix' ${filenames.join(' ')}`],
  "*": (filenames) => [
    `prettier --ignore-unknown --write ${filenames.join(" ")}`,
  ],
};
