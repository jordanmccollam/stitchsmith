$(document).ready(function() {

    var weatherServices = "off";
    var hot = false;

    // Prompt user

    $(".normal").on('click', function() {
        toggleOn();
    })
    function toggleOn() {
        $(".normal").on('click', function() {
            $('#location-prompt').modal("show");
            $(".switch").removeClass("normal");
            $(".switch").addClass("toggled");
            // toggleOff();
        })
    }

    $("#location-submit").on('click', function() {
        event.preventDefault();
        var city = $("#city").val();
        var country = $("#country").val();
        // configureSettings(city, state, country);
        weather(city, country);
        $('#location-prompt').modal("hide");
        weatherServices = "on";
    })

    var type ={
        outerwear: [
            "assets/icons/bomber.png",
            "assets/icons/peacoat.png",
            "assets/icons/letterman.png",
            "assets/icons/denim.png",
            "assets/icons/formal.png",
            "assets/icons/hoodie.png",
        ],
        tops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
               "assets/icons/pullOvers.png"
            ],
        bottoms: [
            "assets/icons/shorts.png",
             "assets/icons/pants.png",
              "assets/icons/skirts.png"
            ],
        hotTops: [
            "assets/icons/shortTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
        ],
        hotBottoms: [
            "assets/icons/shorts.png",
              "assets/icons/skirts.png"
        ],
        coldBottoms: [
            "assets/icons/pants.png",
        ],
    };

    function weather(city, country) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&APPID=718adad55220d55bd05121a7873d51c6";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var temp = response.main.temp;
            console.log("Current Temp: " + temp);

            if (temp >= 80) {
                hot = true;
            } else {
                hot = false;
            }
        })
    }

    $("#generate-btn").on('click', function() {
        generateType();
    })
    function generateType() {
        var randomTop = type.tops[Math.floor(Math.random() * type.tops.length)];
        var randomHotTops = type.hotTops[Math.floor(Math.random() * type.hotTops.length)];
        var randomOuterwear = type.outerwear[Math.floor(Math.random() * type.outerwear.length)];
        var randomHotBottom = type.hotBottoms[Math.floor(Math.random() * type.hotBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomTop + "'>");
            $(".bottom-display").html("<img src='" + randomBottom + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomHotBottom + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomOuterwear + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
        }
    };



// END of jQuery
})