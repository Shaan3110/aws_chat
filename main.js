const connecttomongo = require('./database/database');
const connect = require('./connect')
const disconnect = require('./disconnect')
const sendMessage = require('./sendMessage')
const onIdentity = require('./onIdentity')
var http = require('http');

connecttomongo();

  
// Create a server object
http.createServer(function (req, res) {
      
    // http header
    res.writeHead(200, {'Content-Type': 'text/html'}); 
      
    var url = req.url;
      
    if(url ==='/connection') {

        connect();
        res.end(); 
    }
    else if(url ==='/disconnect') {
        disconnect()
        res.end(); 
    }
    else if(url ==='/sendMessage') {
        sendMessage()
        res.end(); 
    }
    else if(url ==='/onIdentity') {
        onIdentity()
        res.end(); 
    }
}).listen(3000, function() {
      
    // The server object listens on port 3000
    console.log("server start at port 3000");
});