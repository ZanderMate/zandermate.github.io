$(".search").on("click", function (event) {
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
        console.log(response);
        $(".icon-here").remove();
        $("input").empty();
        var iconCode = response.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
        var iconDiv = $("<img>").addClass("icon-here").attr('src', iconURL);
        $(".heading").append(iconDiv);
        $(".city-name-header").text(response.name + " (" + moment().format('l') + ")");
        $(".temp").text("Tempurature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(0) + " Degrees Fahrenheit");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed + " mph");
        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;
        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv-index").text("UV-Index: " + response.value);
        })
    })
})