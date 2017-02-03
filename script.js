$(document).ready(function() {
  // test function to ensure connection to CDN link
console.log("hello")

var min;
var max;
var score = $('#score');
var scoreTotal = 0;
var roundCounter = 0;
var minusPoints = $('#minusPoint');
var startButton = $("#start");
var stopButton = $("#stop");
var clickledTile = $(".gameTile");
var timer ;


  function randomTile(){
    // there is a predefined min and max since we know the total tiles in gameboard
    min = 1;
    max = 11;
    var tilenumb = Math.floor(Math.random() * (max - min) + min);

    if (roundCounter > 5 && (tilenumb%2 == 0)){
          clickledTile.eq(parseInt(tilenumb)).toggleClass('bad');



        }
          clickledTile.eq(parseInt(tilenumb)).toggleClass('on');
          // clickledTile.eq(parseInt(tilenumb)).removeClass('bad')

      };

    // Initiates game and sets timer
    startButton.on('click', function(){

      clickledTile.addClass('off');
      timer= setInterval(randomTile, 500)

    });

    //Use the "this" keyword to identify the object in function
    clickledTile.on('click', function(){
      roundCounter += 1;
      if($(this).hasClass('on')){
      scoreTotal += 100
      score.text(parseInt(scoreTotal)).fadeOut().fadeIn()
      $(this).removeClass('on')
    }
    if($(this).hasClass('bad')){
    scoreTotal -= 50
    score.text(parseInt(scoreTotal)).fadeOut().fadeIn()
    $(this).removeClass('bad')
  }

    })

    // stops set interval and stops game
    stopButton.on('click', function(){
      clearInterval(timer);
      // scoreTotal = 0;
      score.text("Total" + " " +  parseInt(scoreTotal))
    })



});
