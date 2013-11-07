var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms

  var led = new five.Led(13)
  led.strobe();

  board.repl.inject({
    led: led
  });

});