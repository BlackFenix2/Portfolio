import express from 'express';
import { resolve } from 'path';
import { realpathSync, existsSync } from 'fs';
import expressStaticGzip from 'express-static-gzip';

const app = express();
const port = process.env.PORT || 8080;

// juryrig untill i troubleshoot imports.
const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

// check for build folder on local production server
const directory = existsSync(resolveApp('build'))
  ? resolveApp('build')
  : resolveApp('');

// redirect to https in production
const env = process.env.NODE_ENV || 'production';

app.use((req, res, next) => {
  if (env === 'production') {
    next();
  } else if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.headers.host}${req.url}`);
  else next();
});

// serve static files and gzip files
app.use(
  expressStaticGzip(directory, {
    // use brothli
    enableBrotli: true,
    // fallback to gzip if browser does not support brothli
    orderPreference: ['br', 'gz'],
    // add response headers
    setHeaders(res, path) {
      // control cache age
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
);

// pass all relative URL requests to index.html to be handled by React-Router
app.get('/*', (request, response) => {
  response.sendFile(resolve(directory, 'index.html'));
});

// run app and listen on available port 80
app.listen(port, () =>
  console.log(
    `Server started on http://localhost:${port}
     serving files at ${directory}`
  )
);
