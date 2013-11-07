var five = require("johnny-five"),
    board, laser;

board = new five.Board();

board.on("ready", function() {

  pin = new five.Pin(3);
  pin.high()
  
});
