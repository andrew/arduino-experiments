var five = require("johnny-five"),
    XboxController = require('xbox-controller'),
    board = new five.Board()
    xbox = new XboxController;

var Zumo = function(){
  this.leftMotor = new five.Motor({
    pins: {
      pwm: 10,
      dir: 8
    }
  });

  this.rightMotor = new five.Motor({
    pins: {
      pwm: 9,
      dir: 7
    }
  });

  this.move = function(x,y){
    var left =  y-x
    var right = y+x
    
    if(left > 0){
      this.leftMotor.reverse(left)
    } else {
      this.leftMotor.forward(-left)
    }
    
    if(right > 0){
      this.rightMotor.reverse(right)
    } else {
      this.rightMotor.forward(-right)
    }
  }
}

maxAngle = 32768
maxSpeed = 255

board.on("ready", function() {
  var zumo = new Zumo

  var x = 0
  var y = 0

  xbox.on('left:move', function(position){
    x = (position.x / maxAngle)*-maxSpeed
    // y = (position.y / maxAngle)*-maxSpeed
  
    zumo.move(x,y)
  })
  
  xbox.on('lefttrigger', function(position){
    console.log(position)
    y = -position
    zumo.move(x,y)
  })
  
  xbox.on('righttrigger', function(position){
    console.log(position)
    y = position
    zumo.move(x,y)
  })

  // zumo.move(0, 255)
  // setTimeout(function(){
  //   console.log('stop')
  //   zumo.move(0,0)
  // }, 2000)
})