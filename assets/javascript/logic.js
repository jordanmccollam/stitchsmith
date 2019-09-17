$(document).ready(function() {

    var weatherServices = "off";
    var hot = false;
    var gender = "none";
    console.log("User gender is: " + gender);
    console.log("Weather Services are: " + weatherServices);

    // Prompt user
    // $("#switch").on('click', function() {
    //     $('#location-prompt').modal("show");
    //     weatherServices = "on";
    //     console.log("Weather Services are: " + weatherServices);
    // })

    $("#weather-on").on('click', function() {
        $('#location-prompt').modal("show");
        weatherServices = "on";
        console.log("Weather Services are now: " + weatherServices);
    })
    $("#weather-off").on('click', function() {
        weatherServices = "off";
        console.log("Weather Services are now: " + weatherServices);
    })

    $("#location-submit").on('click', function() {
        event.preventDefault();
        var city = $("#city").val();
        var country = $("#country").val();
        if (city.length > 0 && country.length > 0 && country.length <= 3) {
            weather(city, country);
            $('#location-prompt').modal("hide");
        }
        else {
            $("#validation").html("Please enter city and abbreviated country!");
        }
    })


    // INVENTORY
    var type ={
        outerwear: [
            "assets/icons/bomber.png",
            "assets/icons/peacoat.png",
            "assets/icons/letterman.png",
            "assets/icons/denim.png",
            "assets/icons/hoodie.png",
            "assets/icons/pullOvers.png",
            "assets/icons/formal.png",
        ],
        allTops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
               "assets/icons/buttonupShort.png",
               "assets/icons/buttonupLong.png",
               "assets/icons/tanks.png",
               "assets/icons/dress.png",
        ],
        maleTops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
               "assets/icons/buttonupShort.png",
               "assets/icons/buttonupLong.png",
               "assets/icons/tanks.png",
        ],
        coldTops: [
            "assets/icons/shortTs.png",
             "assets/icons/longTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
               "assets/icons/buttonupShort.png",
               "assets/icons/buttonupLong.png",
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
              "assets/icons/tanks.png",
              "assets/icons/dress.png",
        ],
        maleHotTops: [
            "assets/icons/shortTs.png",
              "assets/icons/baseballTs.png",
              "assets/icons/graphicTs.png",
              "assets/icons/buttonupShort.png",
              "assets/icons/tanks.png",
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
        allShoes: [
            "assets/icons/heels.png",
            "assets/icons/slippers.png",
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
            "assets/icons/formalshoes.png",
            "assets/icons/chelsea.png",
            "assets/icons/boots.png",
        ],
        femaleShoes: [
            "assets/icons/heels.png",
            "assets/icons/slippers.png",
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
            "assets/icons/chelsea.png",
        ],
        femaleHotShoes: [
            "assets/icons/heels.png",
            "assets/icons/slippers.png",
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
        ],
        hotShoes: [
            "assets/icons/heels.png",
            "assets/icons/slippers.png",
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
            "assets/icons/formalshoes.png",
        ],
        maleShoes: [
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
            "assets/icons/formalshoes.png",
            "assets/icons/chelsea.png",
            "assets/icons/boots.png",
        ],
        maleHotShoes: [
            "assets/icons/flipflop.png",
            "assets/icons/tennis.png",
            "assets/icons/formalshoes.png",
        ],
    };
    

    // Weather
    function weather(city, country) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=imperial&APPID=718adad55220d55bd05121a7873d51c6";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var temp = response.main.temp;
            console.log("Current Temp: " + temp);

            if (temp >= 72) {
                hot = true;
            } else {
                hot = false;
            }
            console.log("Hot = " + hot);
        })
    }


    // Gender BTNS
    $("#none").on('click', function() {
        gender = "none";
        console.log("User gender is: " + gender);
    })
    $("#male").on('click', function() {
        gender = "male";
        console.log("User gender is: " + gender);
    })
    $("#female").on('click', function() {
        gender = "female";
        console.log("User gender is: " + gender);
    })



    $("#generate-btn").on('click', function() {
        generateColors();
        if (gender === "none") {
            generateNone();
        } 
        else if (gender === "male") {
            generateMale();
        }
        else if (gender === "female") {
            generateFemale();
        }
    })


    // Generate clothes for gender none
    function generateNone() {
        // TOPS
        var randomAllTops = type.allTops[Math.floor(Math.random() * type.allTops.length)];
        var randomColdTop = type.coldTops[Math.floor(Math.random() * type.coldTops.length)];
        var randomHotTops = type.hotTops[Math.floor(Math.random() * type.hotTops.length)];
        // BOTTOMS
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];
        var randomHotBottom = type.hotBottoms[Math.floor(Math.random() * type.hotBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        // OUTERWEAR
        var randomOuterwear = type.outerwear[Math.floor(Math.random() * type.outerwear.length)];
        // SHOES
        var randomAllShoes = type.allShoes[Math.floor(Math.random() * type.allShoes.length)];
        var randomHotShoes = type.hotShoes[Math.floor(Math.random() * type.hotShoes.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomAllTops + "'>");
            $(".bottom-display").html("<img src='" + randomBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomAllShoes + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomHotBottom + "'>");
            $(".outerwear-display").html("");
            $(".shoes-display").html("<img src='" + randomHotShoes + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomColdTop + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomAllShoes + "'>");
        }
    };

    // Generate clothes for female
    function generateFemale() {
        // TOPS
        var randomAllTops = type.allTops[Math.floor(Math.random() * type.allTops.length)];
        var randomColdTop = type.coldTops[Math.floor(Math.random() * type.coldTops.length)];
        var randomHotTops = type.hotTops[Math.floor(Math.random() * type.hotTops.length)];
        // BOTTOMS
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];
        var randomHotBottom = type.hotBottoms[Math.floor(Math.random() * type.hotBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        // OUTERWEAR
        var randomOuterwear = type.outerwear[Math.floor(Math.random() * type.outerwear.length)];
        // SHOES
        var randomFemaleShoes = type.femaleShoes[Math.floor(Math.random() * type.femaleShoes.length)];
        var randomFemaleHotShoes = type.femaleHotShoes[Math.floor(Math.random() * type.femaleHotShoes.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomAllTops + "'>");
            $(".bottom-display").html("<img src='" + randomBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomFemaleShoes + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomHotBottom + "'>");
            $(".outerwear-display").html("");
            $(".shoes-display").html("<img src='" + randomFemaleHotShoes + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomColdTop + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomFemaleShoes + "'>");
        }
    };

    // Generate clothes for male
    function generateMale() {
        // TOPS
        var randomMaleTops = type.maleTops[Math.floor(Math.random() * type.maleTops.length)];
        var randomMaleHotTops = type.maleHotTops[Math.floor(Math.random() * type.maleHotTops.length)];
        var randomColdTop = type.coldTops[Math.floor(Math.random() * type.coldTops.length)];
        // BOTTOMS
        var randomMaleHotBottom = type.maleHotBottoms[Math.floor(Math.random() * type.maleHotBottoms.length)];
        var randomMaleBottom = type.maleBottoms[Math.floor(Math.random() * type.maleBottoms.length)];
        var randomColdBottom = type.coldBottoms[Math.floor(Math.random() * type.coldBottoms.length)];
        // OUTERWEAR
        var randomOuterwear = type.outerwear[Math.floor(Math.random() * type.outerwear.length)];
        // SHOES
        var randomMaleShoes = type.maleShoes[Math.floor(Math.random() * type.maleShoes.length)];
        var randomMaleHotShoes = type.maleHotShoes[Math.floor(Math.random() * type.maleHotShoes.length)];

        // NO weather services
        if (weatherServices === "off") {
            $(".top-display").html("<img src='" + randomMaleTops + "'>");
            $(".bottom-display").html("<img src='" + randomMaleBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomMaleShoes + "'>");
        }
        // If it's HOT
        else if (weatherServices === "on" && hot === true) {
            $(".top-display").html("<img src='" + randomMaleHotTops + "'>");
            $(".bottom-display").html("<img src='" + randomMaleHotBottom + "'>");
            $(".outerwear-display").html("");
            $(".shoes-display").html("<img src='" + randomMaleHotShoes + "'>");
        }
        // If it's NOT hot
        else if (weatherServices === "on" && hot === false) {
            $(".top-display").html("<img src='" + randomColdTop + "'>");
            $(".bottom-display").html("<img src='" + randomColdBottom + "'>");
            $(".outerwear-display").html("<img src='" + randomOuterwear + "'>");
            $(".shoes-display").html("<img src='" + randomMaleShoes + "'>");
        }
    }


    // COLOR SCHEME API
    generateColors();
    function generateColors() {
        var color = Math.floor(Math.random() * 100000);
        var url = "https://www.thecolorapi.com/scheme?hex=" + color;

        $.ajax ({
            url: url,
            method: "GET"
        }).then(function(response) {
            document.body.style.background = "url(" + response.image.bare + ")";
            document.body.style.backgroundSize = "contain";
        })
    }

// END of jQuery
})