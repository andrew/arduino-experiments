var XboxController = require('xbox-controller')
var xbox = new XboxController

maxAngle = 32768



var five = require("johnny-five"),
    board, servo;

board = new five.Board();

board.on("ready", function() {

  // Create a new `servo` hardware instance.
  servoX = new five.Servo(10);
  servoY = new five.Servo(9);

  xbox.on('left:move', function(position){
    x = position.x / maxAngle 
    y = position.y / maxAngle 
    y = y*55 + 35
    console.log(y)
    servoX.move( (x*45)+45 )
    servoY.move( y )
  })
  
});
