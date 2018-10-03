const express = require('express');
const path = require('path');
const fs = require('fs');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = process.env.PORT || 8080;

//juryrig untill i troubleshoot imports.
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

//check for build folder on local production server
const directory = fs.existsSync(resolveApp('build'))
  ? resolveApp('build')
  : resolveApp('');

console.log(directory);
// redirect to https in production
var env = process.env.NODE_ENV || 'production';

app.use((req, res, next) => {
  if ('production' == env) {
    next();
  } else if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.headers.host}${req.url}`);
  else next();
});

//serve static files and gzip files
app.use(expressStaticGzip(directory));

// pass all relative URL requests to index.html to be handled by React-Router
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(directory, 'index.html'));
});

// run app and listen on available port 80
app.listen(port, () =>
  console.log(`Server started on port: ${port}, serving files at ${directory}`)
);
