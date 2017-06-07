var socket = io();

var updateTime;

socket.on('updateEther', function(data){
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
  if (document.getElementById('outputValue').textContent != 'N/A'){
    submitValue();
  }

})

function submitValue(){
  var prevAmount, totalAmount;
  etherAmount = document.getElementById('inputValue').value;
  etherPrice = document.getElementById('currentLastPrice').textContent;
  totalAmount = (etherAmount*etherPrice).toFixed(2);
  document.getElementById('outputValue').innerHTML = totalAmount;
}
