var five = require("johnny-five"),
    board, red, potentiometer;

board = new five.Board();

board.on("ready", function() {

  red = new five.Led(9);

  button = new five.Button(8);  

  button.on("down", function() {
    console.log("down");
    red.toggle()
  });

  button.on("up", function() {
    console.log("up");
    red.stop()
  });

  button.on("hold", function() {
    console.log("down");
    red.strobe()
  });
});