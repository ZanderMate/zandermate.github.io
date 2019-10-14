$("#currentDay").html(moment().format('dddd, MMMM Do'));

for (var i = 9; i < 18; i++) {
    //console.log(i);
    console.log(moment().hour());
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

$("button").on("click", function (event) {
    event.preventDefault();
    var textEvent = $("textarea#" + this.id).val();
    localStorage.setItem("calendarItem" + this.id, textEvent)
})

$(document).ready(function () {
    for (i = 9; i < 18; i++) {
        var savedText = localStorage.getItem("calendarItem" + i);
        $("textarea#" + i).html(savedText);
    }
})