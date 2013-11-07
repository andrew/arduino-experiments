var five = require("johnny-five"),
    XboxController = require('xbox-controller'),
    board = new five.Board(),
    xbox = new XboxController;

var maxAngle = 32768
var range = 200


board.on("ready", function() {

  var servoX = new five.Servo(10);
  var servoY = new five.Servo(9);
  var laser = new five.Led(8);

  laser.on()

  xbox.on('left:move', function(position){
    x = (position.x / maxAngle)*range/2 + 100
    y = (position.y / maxAngle)*range/2 + 130
    console.log(x, y)
    servoX.move( x );
    servoY.move( y );
  })

})
