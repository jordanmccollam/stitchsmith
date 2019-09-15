$(document).ready(function() {

    var bgs = ["assets/images/pattern-1.jpg", "assets/images/pattern-2.jpg", "assets/images/pattern-3.jpg", "assets/images/pattern-4.jpg", "assets/images/pattern-5.jpg"];


    var randomBg = bgs[Math.floor(Math.random()*bgs.length)];
    console.log(randomBg);
    document.body.style.background = "url(" + randomBg + ") no-repeat";
    document.body.style.backgroundSize = "cover";

// END of jQuery
})