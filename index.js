const http = require('http');
const db = require("./db.json");

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  for(let i of db.data){
    res.write(JSON.stringify(i));
  };
  
  
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
server.listen(port, function() {
  console.log(`Ajax server started on port ${port}`);
});