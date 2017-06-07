var socket = io();
var ctx = document.getElementById("etherChart");
var ctx1 = document.getElementById("LTCChart");
var updateTime_1, updateTime_2;

socket.on('updateEther', function(data){
  // Get current time
  var currentTime = new Date().getTime();
  currentTime = Math.floor(currentTime/1000);
  updateTime_1 = data[5];

  // Update HTML fields
  document.getElementById('currentCryptoCurrency_1').innerHTML = data[0];
  document.getElementById('currentActualCurrency_1').innerHTML = data[1];
  document.getElementById('currentBid_1').innerHTML = data[2];
  document.getElementById('currentAsk_1').innerHTML = data[3];
  document.getElementById('currentLastPrice_1').innerHTML = data[4];
  document.getElementById('lastUpdateTime_1').innerHTML = currentTime - updateTime_1;
  if (document.getElementById('outputValue_1').textContent != 'N/A'){
    submitValue_1();
  }
  addData(etherChart, new Date(), data[4]);
})

socket.on('updateLTC', function(data){
  // Get current time
  var currentTime = new Date().getTime();
  currentTime = Math.floor(currentTime/1000);
  updateTime_2 = data[5];

  // Update HTML fields
  document.getElementById('currentCryptoCurrency_2').innerHTML = data[0];
  document.getElementById('currentActualCurrency_2').innerHTML = data[1];
  document.getElementById('currentBid_2').innerHTML = data[2];
  document.getElementById('currentAsk_2').innerHTML = data[3];
  document.getElementById('currentLastPrice_2').innerHTML = data[4];
  document.getElementById('lastUpdateTime_2').innerHTML = currentTime - updateTime_2;
  if (document.getElementById('outputValue_2').textContent != 'N/A'){
    submitValue_2();
  }
  addData(LTCChart, new Date(), data[4]);
})

function submitValue_1(){
  var prevAmount, totalAmount;
  etherAmount = document.getElementById('inputValue_1').value;
  etherPrice = document.getElementById('currentLastPrice_1').textContent;
  totalAmount = (etherAmount*etherPrice).toFixed(2);
  document.getElementById('outputValue_1').innerHTML = totalAmount;
}

function submitValue_2(){
  var prevAmount, totalAmount;
  LTCAmount = document.getElementById('inputValue_2').value;
  LTCPrice = document.getElementById('currentLastPrice_2').textContent;
  totalAmount = (LTCAmount*LTCPrice).toFixed(2);
  document.getElementById('outputValue_2').innerHTML = totalAmount;
}

var etherChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Ethereum"],
        datasets: [{
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: 'Ethereum Graph'
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'second'
            }
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display:false
        }
    }
});

var LTCChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["Lite Coin"],
        datasets: [{
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: 'Lite Coin Graph'
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'second'
            }
          }]
        },
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display:false
        }
    }
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}