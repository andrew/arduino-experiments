var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  buzzer = new five.Pin({
    addr: 6
  });
  
  board.repl.inject({
    buzzer: buzzer
  });
  
});