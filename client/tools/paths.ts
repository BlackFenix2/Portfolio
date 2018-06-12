import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  index: resolveApp('src/index.tsx'),
  buildDir: resolveApp('build'),
  Icon: resolveApp('src/lib/img/loading.png'),
  codeRoot: resolveApp('src')
};
