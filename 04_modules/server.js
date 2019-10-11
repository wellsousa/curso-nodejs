const express = require('express');

const msg = require('./mensage_module');

const msg_function = require('./anonymous_function_module');

var result = msg_function();

const app = express();

app.listen(3000, function(req, res){
    console.log(msg);
    console.log(result);
});