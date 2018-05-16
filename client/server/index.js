const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const directory = path.resolve(__dirname, '..', 'dist');

// serve static assets normally
app.use(express.static(directory));

// handle react-router routes in URL
app.get('/*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

console.log(directory);

app.listen(port, () => console.log(`Server started on port: ${port}`));
