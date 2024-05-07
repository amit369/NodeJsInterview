const http = require('http');

http.createServer(function(req,res) {
    res.write("Hello Amit");
    res.end();
}).listen(5000);