var request = require('request');
var Chart = require('chart.js');
var app = require('express')();
var server = require('http').createServer(app);

// URL to query
const url = 'https://api.btcmarkets.net/market/ETH/AUD/tick';

function sendRequest(){
    request(url, function (error, response, body) {
        //console.log(body);    // Display body of return message
        body = JSON.parse(body);
        console.log("Crypto currency: ", body.instrument);
        console.log("Currency: ", body.currency);
        console.log("Best bid: ", body.bestBid);
        console.log("Best ask: ", body.bestAsk);
        console.log("Last price: ", body.lastPrice);
        console.log();
    });
}

setInterval(sendRequest, 1000);




server.listen(3000);

app.get('/', function (req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/script.js', function(req, res){
    res.sendFile(__dirname+'/script.js');
})