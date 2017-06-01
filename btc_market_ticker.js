var request = require('request');
const url = 'https://api.btcmarkets.net/market/ETH/AUD/tick';

function sendRequest(){
    request(url, function (error, response, body) {
        console.log(body);
        body = JSON.parse(body);
        
    });
}

setInterval(sendRequest, 1000);
    

