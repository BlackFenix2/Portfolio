const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = process.env.PORT || 8080;
const directory = path.resolve(__dirname, '..', 'build') || '';

// path to Dev Certificate

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

app.listen(port, () => console.log(`Server started on port: ${port}`));
