var http    = require("http")
var log     = require('./log.js')

http.createServer(function(request,response){
    response.end('Hello NodeJS')
}).listen(8080)
