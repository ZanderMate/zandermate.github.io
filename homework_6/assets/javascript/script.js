var cityList;
if (localStorage.getItem("cityList")) {
    cityList = JSON.parse(localStorage.getItem("highScoreList"))
}
else {
    cityList = [];
}

$(".search").on("click", function () {
    var cityName = $("input").val().trim();
    var newLi = $("<li>");
    newLi.text(cityName);
    newLi.addClass("btn btn-outline-dark list-group-item")
    $(".list-buttons").append(newLi);
    var cityButtons = { name: cityName };
    cityList.push(cityButtons);
    localStorage.setItem("cityButtons", JSON.stringify(cityList));
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
        $(".city-name").text(response.name + " (" + moment().format('L') + ")");
        $(".temp").html("Tempurature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + ' &deg' + "F");
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
                $(".forecast").empty();
                $(".forecast-title").empty();
                var forecastTitle = $("<h4>").text("5-Day Forecast").addClass("pt-4");
                $(".forecast-title").append(forecastTitle);
                for (var i = 0; i < 5; i++) {
                    var newDiv = $("<div>").addClass("bg-primary text-white p-3 m-2").attr('id', i);
                    var newRow = $("<div>").addClass("next-line" + [i]);
                    var newTemp = $("<div>").addClass("text-white");
                    var newHumidity = $("<div>").addClass("text-white");
                    iconCode = response.list[i].weather[0].icon;
                    iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
                    iconDiv = $("<img>").addClass("").attr('src', iconURL).attr('alt', "another weather symbol");
                    newDiv.html(moment().add((i + 1), 'days').format('L'));
                    $(".forecast").append(newDiv);
                    $(newDiv).append(newRow);
                    $(".next-line" + i).append(iconDiv);
                    $(newTemp).html("Temp: " + ((response.list[i].main.temp - 273.15) * 1.8 + 32).toFixed(1) + ' &deg' + "F");
                    $("#" + i).append(newTemp);
                    $(newHumidity).text("Humidity: " + response.list[i].main.humidity + "%");
                    $("#" + i).append(newHumidity);

                }
            })
        })
    })
})