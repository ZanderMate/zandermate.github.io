//show current date for each day
$("#currentDay").html(moment().format('dddd, MMMM Do'));

//for loop to determine color for each hour
for (var i = 9; i < 18; i++) {
    if (i < moment().hour()) {
        $("#" + i).addClass("past")
    }
    else if (i === moment().hour()) {
        $("#" + i).addClass("present")
    }
    else {
        $("#" + i).addClass("future")
    }
}

//click eventlistener to save info to local storage
$("button").on("click", function (event) {
    event.preventDefault();
    var textEvent = $("textarea#" + this.id).val();
    localStorage.setItem("calendarItem" + this.id, textEvent)
});

//add text values from localstorage into appropriate hour
$(document).ready(function () {
    for (i = 9; i < 18; i++) {
        var savedText = localStorage.getItem("calendarItem" + i);
        $("textarea#" + i).html(savedText);
    }
});