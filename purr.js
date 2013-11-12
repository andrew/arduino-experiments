var five = require("johnny-five"),
    Piezo = require("johnny-five/lib/piezo"),
    board, potentiometer;

board = new five.Board();

board.on("ready", function() {

  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  piezo = new Piezo(10);
  // piezo.tone(200, 1000)
  
  var purr = function(){
    purring = true
    var freq = 2
    beep()
  }
  
  var freq = 0
  var up = true
  var karma = 1000
  var purring = false
  
  setInterval(function(){
    karma = (karma -100)/1.1
    if (karma < 0){
      karma = 0
      purring = false
    } else {
      purring = true
    }
    console.log('karma',karma)
  }, 500)
  
  var beep = function(){
    // console.log('beep', freq)
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
      if (purring) {beep()} else {
        console.log('stop purring')
      }
      // console.log('status', purring)
    }, 100)
  }
  
  board.repl.inject({
    piezo: piezo
  });
  
  var servo = new five.Servo(9);

  val = 0
  board.loop(1000, function(){
    if (purring){
      
      if (val){
        servo.move(30)
      } else {
        servo.move(150)
      }
      val = val ? 0 : 1;
    }

  })

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    if (this.value < 140){
      purr()
      karma = (karma + 50) * 1.2
      console.log('pur')
    } else {
      
      // console.log('stop')
    }
  });
});