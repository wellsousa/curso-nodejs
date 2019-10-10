var http = require('http');

const server = http.createServer(function(req, res){

    var greetings = req.url;
    console.log(greetings);

    if(greetings == '/portugues'){
        res.end('<html><body>Olá mundo!</body></html>');
    }else if(greetings == '/ingles'){
        res.end('<html><body>Hello World!</body></html>');
    }else if(greetings == '/alemao'){
        res.end('<html><body>Hallo Welt!</body></html>');
    }
});

server.listen(3000);