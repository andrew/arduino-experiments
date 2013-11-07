var five = require("johnny-five"),
    board = new five.Board(),
    time = 0;


board.on("ready", function() {

  output = new five.Pin({
    addr: 4
  });
  
  input = new five.Pin({
    addr: 2
  });
    
  setInterval(function(){
    output.high()
    time = (new Date()).getTime()
    setTimeout(function(){
      output.low()
    },1000)
  }, 2000)

  input.on('low', function(d){
    console.log('low')
  })
  
  input.on('high', function(d){
    newTime = (new Date()).getTime()
    diff = newTime - time
    console.log('high', diff)
    
  })

});