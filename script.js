$(document).ready(function() {
  // test function to ensure connection to CDN link
console.log("hello")

var min;
var max;
var startButton = $("#start");
var stopButton = $("#stop")
var clickledTile = $(".gameTile")
var timer ;


  function randomTile(){
    // there is a predefined min and max since we know the total tiles in gameboard
    min = 1;
    max = 11;
    var tilenumb = Math.floor(Math.random() * (max - min) + min);
        clickledTile.eq(parseInt(tilenumb)).addClass('on');
      };

    // Initiates game and sets timer
    startButton.on('click', function(){
        timer= setInterval(randomTile, 1000)

    });

    //Use the "this" keyword to identify the object in function
    clickledTile.on('click', function(){
      $(this).removeClass('on')
    })

    // stops set interval and stops game
    stopButton.on('click', function(){
      clearInterval(timer);
    })



});
