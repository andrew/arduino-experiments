var five = require("johnny-five"),
    board, potentiometer;

board = new five.Board();

board.on("ready", function() {

  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  // Inject the `sensor` hardware into the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  var led = new five.Led(13)
  

  // "read" get the current reading from the potentiometer
  potentiometer.on("read", function( err, value ) {
    led.strobe(value);
    console.log( value, this.normalized );
  });
});