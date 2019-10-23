$(".search").on("click", function () {
    var cityName = $("input").val().trim();
    var newLi = $("<li>");
    newLi.text(cityName);
    newLi.addClass("btn btn-outline-dark list-group-item")
    $(".list-buttons").append(newLi);
    apiKey = "7b3cad7968fd6399aa4f404b4c72f407";
    queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&apikey=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $(".icon-here").remove();
        var iconCode = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&apikey=" + apiKey;
        var iconDiv = $("<img>").addClass("icon-here").attr('src', iconURL).attr('alt', "weather symbol");
        $(".header").append(iconDiv);
        $(".city-name").text(response.name + " (" + moment().format('l') + ")");
        $(".temp").text("Tempurature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + " degrees Fahrenheit");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed + " mph");
        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;
        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv-index").text("UV-Index: " + response.value);
            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i < 5; i++) {
                    var newDiv = $("<div>").addClass("bg-primary text-white p-1 m-3");
                    var newBreak = $("<br>");
                    newDiv.html(moment().format('l'));
                    $(".forecast").append(newDiv);
                    $(".forecast").append(newBreak);
                    
                }
            })
        })
    })
})