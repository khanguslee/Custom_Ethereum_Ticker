var request = require('request');
const url = 'https://api.cryptonator.com/api/ticker/eth-usd';

function sendRequest(){
    request(url, function (error, response, body) {
        body = JSON.parse(body);
        console.log("Crypto currency: ", body.ticker.base);
        console.log("Currency: ", body.ticker.target);
        console.log("Price: ", body.ticker.price);
        console.log("Change (%): ", body.ticker.change);
        console.log();
    });
}

setInterval(sendRequest, 1000);
    

