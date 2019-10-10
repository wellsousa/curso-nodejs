const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<html><body>Passe um idioma como parametro pela url dessa página.</body></html>');
});

app.get('/portugues', function(req, res){
    res.send('<html><body>Olá Mundo!</body></html>');
});

app.get('/ingles', function(req, res){
    res.send('<html><body>Hello World!</body></html>');
});

app.get('/alemao', function(req, res){
    res.send('<html><body>Hallo Welt!</body></html>');
});

app.listen(3000, function(req, res){
    console.log('Server it\'s working on port 3000');
});