var request = require('request');
var Chart = require('chart.js');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

// URL to query
const urlETH = 'https://api.btcmarkets.net/market/ETH/AUD/tick';
const urlLTC = 'https://api.btcmarkets.net/market/LTC/AUD/tick';

io.sockets.on('connection', function(socket){
    function sendRequest(){
        request(urlETH, function (error, response, body) {
            //console.log(body);    // Display body of return message
            body = JSON.parse(body);
            // console.log("Crypto currency: ", body.instrument);
            // console.log("Currency: ", body.currency);
            // console.log("Best bid: ", body.bestBid);
            // console.log("Best ask: ", body.bestAsk);
            // console.log("Last price: ", body.lastPrice);
            // console.log();
            var data = [body.instrument, body.currency, body.bestBid, body.bestAsk, body.lastPrice, body.timestamp];
            socket.emit('updateEther', data);
        });

        request(urlLTC, function (error, response, body){
            console.log(body);
            body = JSON.parse(body);

        });
    }
    setInterval(sendRequest, 1000);
})

// Host webpage
server.listen(3000, function(){
    console.log('Webpage running at http://localhost:3000');
});

app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/script.js', function(req, res){
    res.sendFile(__dirname+'/script.js');
})

app.use(function(req, res){
        res.status(404).send("Webpage does not exist.");
    });
