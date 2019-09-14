$(document).ready(function() {

    var type ={
        outerwear: [

        ],
        tops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
               "assets/icons/pullOvers.png"
            ],
        bottoms: [
            "assets/icons/shorts.png",
             "assets/icons/pants.png",
              "assets/icons/skirts.png"
            ],
    };

    $("#generate-btn").on('click', function() {
        generateType();
    })
    function generateType() {
        var randomTop = type.tops[Math.floor(Math.random() * type.tops.length)];
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];

        console.log(type.bottoms[1]);

        $(".top-display").html("<img src='" + randomTop + "'>");
        $(".bottom-display").html("<img src='" + randomBottom + "'>");
    }

// END of jQuery
})