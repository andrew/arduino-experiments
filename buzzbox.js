var five = require("johnny-five"),
    Piezo = require("johnny-five/lib/piezo")
    XboxController = require('xbox-controller'),
    board = new five.Board()
    xbox = new XboxController;

maxAngle = 32768
maxSpeed = 100

board.on("ready", function() {
  piezo = new Piezo(10);
  // piezo.tone(200, 1000)
  
  var purr = function(){
    var freq = 2
    beep()
  }
  
  var freq = 0
  var up = true
  var beep = function(){
    console.log('beep', freq)
    piezo.tone(freq, 100)
    
    if(up){
      if(freq > 40){
        up = false
      }
      freq = freq += (Math.random()*8)
    } else {
      if(freq < 1){
        up = true
        freq = 0
      } else {
        freq -= (Math.random()*8)
      }
    }

    setTimeout(function(){
      beep()
    }, 100)
  }
  
  xbox.on('a:press', function(){
    freq = 2
  })
});