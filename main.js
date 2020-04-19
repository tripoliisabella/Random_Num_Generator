
var randomNum = 0;

$(document).ready(function(){

    var mainDiv = $(".main-content");
    var button = $(".button");

    button.on("click", function(){
        
        randomNum = Math.floor(Math.random()*1000000000) + 1;

        mainDiv.prepend("<div>" + randomNum + "</div>");


    });


});