$(document).ready(function() {

    var weatherServices = "off";
    var hot = false;
    var gender = "none";

    // Prompt user
    $("#switch").on('click', function() {
        $('#location-prompt').modal("show");
        $(".switch").removeClass("normal");
        $(".switch").addClass("toggled");
        // toggleOff();
    })

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
        allTops: [
            "assets/icons/bomber.png",
            "assets/icons/peacoat.png",
            "assets/icons/letterman.png",
            "assets/icons/denim.png",
            "assets/icons/hoodie.png",
            "assets/icons/bomber.png",
            "assets/icons/peacoat.png",
            "assets/icons/letterman.png",
            "assets/icons/denim.png",
            "assets/icons/pullOvers.png",
            "assets/icons/hoodie.png",
            "assets/icons/buttonupShort.png",
            "assets/icons/buttonupLong.png",
        ],
        coldTops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
               "assets/icons/pullOvers.png",
               "assets/icons/buttonupShort.png",
               "assets/icons/buttonupLong.png",
               "assets/icons/bomber.png",
            "assets/icons/peacoat.png",
            "assets/icons/letterman.png",
            "assets/icons/denim.png",
            "assets/icons/pullOvers.png",
            "assets/icons/hoodie.png",
            ],
        bottoms: [
            "assets/icons/shorts.png",
             "assets/icons/pants.png",
              "assets/icons/skirts.png",
            ],
        hotTops: [
            "assets/icons/shortTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
              "assets/icons/buttonupShort.png",
        ],
        hotBottoms: [
            "assets/icons/shorts.png",
              "assets/icons/skirts.png",
        ],
        coldBottoms: [
            "assets/icons/pants.png",
        ],
        maleBottoms: [
            "assets/icons/shorts.png",
             "assets/icons/pants.png",
        ],
        maleHotBottoms: [
            "assets/icons/shorts.png",
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

    $("#none").on('click', function() {
        gender = "none";
        console.log(gender);
    })
    $("#male").on('click', function() {
        gender = "male";
        console.log(gender);
    })
    $("#female").on('click', function() {
        gender = "female";
        console.log(gender);
    })

    $("#generate-btn").on('click', function() {
        if (gender === "none" || gender === "female") {
            generateFemale();
        } else {
            generateMale();
        }
    })

    function generateFemale() {
        var randomColdTop = type.coldTops[Math.floor(Math.random() * type.coldTops.length)];
        var randomAllTops = type.allTops[Math.floor(Math.random() * type.allTops.length)];
        var randomHotTops = type.hotTops[Math.floor(Math.random() * type.hotTops.length)];
        var randomHotBottom = type.hotBottoms[Math.floor(Math.random() * type.hotBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomAllTops + "'>");
            $(".bottom-display").html("<img src='" + randomBottom + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomHotBottom + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomColdTop + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
        }
    };

    function generateMale() {
        var randomColdTop = type.coldTops[Math.floor(Math.random() * type.coldTops.length)];
        var randomAllTops = type.allTops[Math.floor(Math.random() * type.allTops.length)];
        var randomHotTops = type.hotTops[Math.floor(Math.random() * type.hotTops.length)];
        var randomMaleHotBottom = type.maleHotBottoms[Math.floor(Math.random() * type.maleHotBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        var randomMaleBottom = type.maleBottoms[Math.floor(Math.random() * type.maleBottoms.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomAllTops + "'>");
            $(".bottom-display").html("<img src='" + randomMaleBottom + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomMaleHotBottom + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomColdTop + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
        }
    }


// END of jQuery
})