$(document).ready(function() {
  // test function to ensure connection to CDN link
console.log("hello")

var min = 1;
var max = 11;
var button = $("#initiator");


function randomTile(min,max){
    var tile = Math.floor(Math.random() * (max - min) + min)
    console.log(tile)
}

button.on('click',function(){
  console.log("I work");
});


randomTile(min,max);

});
