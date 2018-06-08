const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const port = process.env.PORT || 8080;
const directory = path.resolve(__dirname, '..', 'build');

//serve gzip files
app.use(expressStaticGzip(directory));

// serve static assets normally
app.use(express.static(directory));

// handle react-router routes in URL
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(directory, 'index.html'));
});

console.log(directory);

app.listen(port, () => console.log(`Server started on port: ${port}`));
