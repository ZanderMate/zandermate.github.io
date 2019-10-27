var apiKey = "7b3cad7968fd6399aa4f404b4c72f407";
var cityList;
if (localStorage.getItem("cityList")) {
    cityList = JSON.parse(localStorage.getItem("cityList"))
}
else {
    cityList = [];
}

//click eventlistener after entering a city name into search input
$(".search").click(function () {
    var cityName = $("input").val().trim();
    var newLi = $("<li>");
    newLi.text(cityName);
    newLi.addClass("btn btn-outline-dark line-item list-group-item").attr('id', "city-name-" + cityList.length);
    $(".list-buttons").append(newLi);
    var cityButtons = { name: cityName };
    cityList.push(cityButtons);
    localStorage.setItem("cityList", JSON.stringify(cityList));
    $(".button-row").show();
    $("input").val("");
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&apikey=" + apiKey;
    //ajax grab for city current weather info
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        $(".icon-here").remove();
        var iconCode = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&apikey=" + apiKey;
        var iconDiv = $("<img>").addClass("icon-here").attr('src', iconURL).attr('alt', "weather symbol");
        //adding weather info onto page
        $(".header").append(iconDiv);
        $(".city-name").text(response.name + " (" + moment().format('L') + ")");
        $(".temp").html("Tempurature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + ' &deg' + "F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed + " mph");
        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;
        //ajax grab for long and lat for uv-index
        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv-index").text("UV-Index: " + response.value);
            //ajax grab for five day forecast info
            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function (response) {
                $(".forecast").empty();
                $(".forecast-title").empty();
                var forecastTitle = $("<h4>").text("5-Day Forecast").addClass("pt-4");
                $(".forecast-title").append(forecastTitle);
                //loop to enter all the info for 5-day forecast
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

//clicking city name from list of previous cities searched
$(".list-buttons").on("click", "li", function () {
    event.preventDefault();
    var target = $(event.target);
    if (target.is("li")) {
        var cityButtonText = target.text();
    }
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonText + "&apikey=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        $(".icon-here").remove();
        var iconCode = response.weather[0].icon;
        var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityButtonText + "&apikey=" + apiKey;
        var iconDiv = $("<img>").addClass("icon-here").attr('src', iconURL).attr('alt', "weather symbol");
        //adding weather info onto page
        $(".header").append(iconDiv);
        $(".city-name").text(response.name + " (" + moment().format('L') + ")");
        $(".temp").html("Tempurature: " + ((response.main.temp - 273.15) * 1.80 + 32).toFixed(1) + ' &deg' + "F");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".wind-speed").text("Wind Speed: " + response.wind.speed + " mph");
        var uvIndexURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&apikey=" + apiKey;
        //ajax grab for long and lat for uv-index
        $.ajax({
            url: uvIndexURL,
            method: "GET"
        }).then(function (response) {
            $(".uv-index").text("UV-Index: " + response.value);
            //ajax grab for five day forecast info
            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function (response) {
                $(".forecast").empty();
                $(".forecast-title").empty();
                var forecastTitle = $("<h4>").text("5-Day Forecast").addClass("pt-4");
                $(".forecast-title").append(forecastTitle);
                //loop to enter all the info for 5-day forecast
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

//when pressing 'clear' button
$(".clear-button").click(function (event) {
    event.preventDefault();
    $(".list-buttons").empty();
    localStorage.removeItem('cityList');
})

//upon loading of page, checks to see if anything is stored in cityList localstorage and adds buttons with terms
//if there is
$(document).ready(function () {
    if (cityList !== []) {
        for (var i = 0; i < cityList.length; i++) {
            localStorage.getItem(cityList[i].name);
            var savedButton = $("<li>");
            savedButton.text(cityList[i].name).addClass("btn btn-outline-dark line-item list-group-item").attr('id', "city-name-" + i);
            $(".list-buttons").append(savedButton);
            $(".button-row").show();
        }
    }
})