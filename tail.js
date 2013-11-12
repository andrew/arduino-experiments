var five = require("johnny-five"),
    XboxController = require('xbox-controller'),
    board = new five.Board()

var maxAngle = 32768
var range = 200


board.on("ready", function() {

  var servo = new five.Servo(9);

  val = 0
  board.loop(1000, function(){
      if (val){
        servo.move(30)
      } else {
        servo.move(150)
      }
      val = val ? 0 : 1;
  })

})
