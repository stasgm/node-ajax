/* eslint-disable no-alert, no-console */
const http = require('http');
const db = require('./db.json');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  for(let i of db.data){
    res.write(JSON.stringify(i));
  };
  
  // res.end(JSON.stringify(db));  
  
  //res.write(JSON.stringify({status: "ok"}));
  /*res.end(JSON.stringify({ 
    platform: process.platform,
	  nodeVersion: process.version,
	  uptime: Math.round(process.uptime()),
  }));
  */
  res.end();
});

const port = 8080;
server.listen(port, () => {
  console.log(`Ajax server started on port ${port}`);
});
