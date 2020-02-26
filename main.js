$(document).ready(function(){

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.src="banner.png";

    img.onload= function(){
        drawText();
      }

    function drawText() {
        ctx.font = "bold 100px Open Sans";
        ctx.fillStyle = ctx.createPattern(img, 'repeat');
        ctx.textAlign = 'center';
        var x = canvas.width / 2;
        ctx.fillText("WATER", x, 400);
        ctx.fill();
    }  

});