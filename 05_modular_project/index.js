const app = require('./config/server')


app.listen(3000, function(req, res){
    console.log('server running on port 3000')
})