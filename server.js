var express = require('express');
const path = require('path')
const port = process.env.PORT || 8080 ;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('./node_modules/bootstrap/dist'));
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'index.html'))
})


app.listen(port);
//var io = require('socket.io').listen(server);
/*
io.sockets.on('connection', function (socket) {
    console.log("Connected: %s", socket.id);
});*/

console.log("server is running");