const express = require('express');

const path = require('path');
const app = express();
const basePath = process.env['PUBLIC_URL'] || '/linos-automation-packstation';
const appPort = process.env['PORT'] || 3001;

app.use(basePath, express.static(path.join(__dirname, 'build')));

app.get('/*', function sendIndex(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(appPort);
