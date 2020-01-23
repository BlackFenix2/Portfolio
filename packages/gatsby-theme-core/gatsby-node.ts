import fs from 'fs';

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = 'static';
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
    fs.copyFileSync(`${contentPath}/icon.png`, contentPath);
  }
};
