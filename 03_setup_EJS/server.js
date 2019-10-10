const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/language/portuguese', function(req, res){
    res.render('languages/portuguese');
});

app.listen(3000, function(req, res){
    console.log('Application running on port 3000.');
});