var ctx = document.getElementById('myChart').getContext('2d');
var socket = io();

var updateTime;

socket.on('updatePrice', function(data){
  // Get current time
  var currentTime = new Date().getTime();
  currentTime = Math.floor(currentTime/1000);
  updateTime = data[5];
  
  // Update HTML fields
  document.getElementById('currentCryptoCurrency').innerHTML = data[0];
  document.getElementById('currentActualCurrency').innerHTML = data[1];
  document.getElementById('currentBid').innerHTML = data[2];
  document.getElementById('currentAsk').innerHTML = data[3];
  document.getElementById('currentLastPrice').innerHTML = data[4];
  document.getElementById('lastUpdateTime').innerHTML = currentTime - updateTime;


})
/*
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  }
});
*/