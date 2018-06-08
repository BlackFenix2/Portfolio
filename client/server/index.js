const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = process.env.PORT || 8080;
const directory = path.resolve(__dirname, '..', 'build');

//serve static files and gzip files
app.use(expressStaticGzip(directory));

// handle react-router routes in URL
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(directory, 'index.html'));
});

console.log(directory);

app.listen(port, () => console.log(`Server started on port: ${port}`));
