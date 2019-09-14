$(document).ready(function() {

    // Prompt user
    $(".switch").on('click', function() {
        $('#location-prompt').modal("show");
    })

    $("#location-submit").on('click', function() {
        event.preventDefault();
        var city = $("#city").val();
        var state = $("#state").val();
        var country = $("#country").val();
        configureSettings(city, state, country);
        $('#location-prompt').modal("hide");
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
    };

    $("#generate-btn").on('click', function() {
        generateType();
    })
    function generateType() {
        var randomTop = type.outerwear[Math.floor(Math.random() * type.outerwear.length)];
        var randomBottom = type.bottoms[Math.floor(Math.random() * type.bottoms.length)];

        $(".top-display").html("<img src='" + randomTop + "'>");
        $(".bottom-display").html("<img src='" + randomBottom + "'>");
    };

    function configureSettings(city, state, country) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html&q=" + city + "%2C" + country,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "4787faa5b5msh72e3d4775f16583p105be1jsn032aa25876b7"
            }
        }
        
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }


// END of jQuery
})