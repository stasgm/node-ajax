const http = require('http');
const db = require('./db.json');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.write(JSON.stringify(db));
  res.end();
});

const port = 8080;
server.listen(port, () => {
  console.log(`Ajax server started on port ${port}`);
});
