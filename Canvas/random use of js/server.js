const http = require ("http");
const fs = require("fs")

// create a server object:
http.createServer(function(req,res){
    fs.readFile("./index.html", function(err, data){
        res.writeHead(200, {"Content-Type":"text"})
    res.write(data) // write a response to the client
    res.end() // end the response
    })
    
}).listen(8080)

