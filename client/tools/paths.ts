import * as fs from 'fs';
import * as path from 'path';

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

export default {
  index: resolveApp('src/index.tsx'),
  serverIndex: resolveApp('server/index.js'),
  buildDir: resolveApp('build'),
  Icon: resolveApp('src/lib/img/loading.png'),
  codeRoot: resolveApp('src')
};
