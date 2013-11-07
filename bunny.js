var five = require("johnny-five"),
    board = new five.Board();

function randomFromInterval(from,to){
  return Math.floor(Math.random()*(to-from+1)+from);
}

board.on("ready", function() {

  var servoX = new five.Servo(10);
  var servoY = new five.Servo(9);
  var laser = new five.Led(8);

  laser.on()


  setInterval(function(){
    x = randomFromInterval(80, 120)
    y = randomFromInterval(60, 110)
    console.log(x,y)
    servoX.move(x)
    servoY.move(y +35)
  }, 400)

  


})
