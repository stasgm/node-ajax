/* eslint-disable no-alert, no-console */
const http = require('http');
const db = require('./db.json');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(db));
  /*
  res.end(JSON.stringify({
    data: {
      platform: process.platform,
      nodeVersion: process.version,
      uptime: Math.round(process.uptime()),
    },
  }));
  */
});

const port = 8080;
server.listen(port, () => {
  console.log(`Ajax server started on port ${port}`);
});
