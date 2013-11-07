var five = require("johnny-five"),
    board, ping;

board = new five.Board();

board.on("ready", function() {

  ping = new five.Ping(7);

  motor = new five.Pin(3);
  motor.high()

  on = false

  average = []

  ping.on("change", function( err, value ) {
    average.push(this.cm)
    if (average.length > 10){
      average.shift()
    }

    sum = average.reduce(function(a, b) { return a + b });
    distance = sum / average.length;

    console.log( "Object is " + distance + "cm away" );
    if (distance > 0 && distance < 30){
      if(!on){
        console.log('close!')
        motor.high()
        on = true
      }
    } else {
      if(on){
        console.log('far!')
        motor.low()
        on = false
      }
    }
  });
});
