var express = require('express');
var app     = express();


app.get('/', function(request, response){
    response.send('Merhaba Express Jss')
});

app.get('/admin', function(request, response){
    response.send('Merhaba Admin')
});

app.get('/product', function(request, response){
    response.send('Ürünler Listelendi')
});


var server  = app.listen(8080);