var request = require('request');
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
    

