var five = require("johnny-five"),
    board, red, green, blue, leds;

board = new five.Board();

board.on("ready", function() {

  red = new five.Led(9);
  green = new five.Led(10);
  blue = new five.Led(11);

  leds = new five.Leds();



  leds.pulse( 5000 );
});