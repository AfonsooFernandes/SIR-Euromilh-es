var http = require('http');

var server = http.createServer();

server.on('request', function(req,res) {
  res.statusCode = 200;                         
  res.setHeader('Content-Type','text/html');    
  res.write('Hello!');                          
  res.end();                                    
  console.log('Hello sent')
})
server.on('listening', function() {            
  console.log('Server running and listening')
})

server.listen(3000);