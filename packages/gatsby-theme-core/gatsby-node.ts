import fs from 'fs';

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const iconPath = 'static';
  const layoutPath = 'layouts';

  // check for static folder and icon.png
  if (!fs.existsSync(iconPath)) {
    reporter.info(`creating the ${iconPath} directory`);
    fs.mkdirSync(iconPath);
    fs.copyFileSync(
      `${__dirname}/${iconPath}/icon.png`,
      `${process.cwd()}/${iconPath}/icon.png`
    );
  }

  // check for layouts folder and index.tsx
  if (!fs.existsSync(`src/${layoutPath}`)) {
    reporter.info(`creating the ${layoutPath} directory`);
    fs.mkdirSync(`src/${layoutPath}`);
    fs.copyFileSync(
      `${__dirname}/${layoutPath}/index.tsx`,
      `${process.cwd()}/src/${layoutPath}/index.tsx`
    );
  }
};
