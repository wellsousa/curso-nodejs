const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(rec, res){
    res.render('home/index');
});

app.get('/noticias', function(res, req){
    res.render('noticias/index');
});

app.get('/noticias/nova', function(res, req){
    res.render('noticias/store');
});

app.listen(3000, function(){
    console.log("server running at port 3000");
});