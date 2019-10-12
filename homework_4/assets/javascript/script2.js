var questionsTwo = ["What does Alex call his sibling?", "Where did Alex live for two years teaching Oral English to college age students?"];
var answerATwo = ["Peter", "Japan"];
var answerBTwo = ["Bro", "France"];
var answerCTwo = ["Pete", "Mexico"];
var answerDTwo = ["Petey", "China"];
var correctAnswersTwo = ["Petey", "China"];
var i = 0;
var rightOtherAnswers = 0;
var pointsGainedOther = 0;
var secondHighScoreList;
var listScores = $("#high-scores");
if (localStorage.getItem("secondHighScoreList")) {
    secondHighScoreList = JSON.parse(localStorage.getItem("secondHighScoreList"))
}
else {
    secondHighScoreList = [];
}

//what happens when choosing any answer button
document.querySelector("#quiz-two").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var userAnswer = document.getElementById(event.target.id).textContent;
        if (userAnswer === correctAnswersTwo[i]) {
            pointsGainedOther++;
            console.log(pointsGainedOther);
            rightAnswers = rightAnswers + 1;
            $(".correctness").text("You got it!");
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        }
        else {
            $(".correctness").text("Nope...");
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        };
        i++;
        if (i === questionsTwo.length) {
            handleResults();
        }
        else {
            changeQuestionTwo(i);
        }
    }
}
)

//change questions and answer fields for current question based on index position
function changeQuestionTwo(answerIndex) {
    $(".askQuestion-two").text(questionsTwo[answerIndex]);
    $("#button1").text(answerATwo[answerIndex]);
    $("#button2").text(answerBTwo[answerIndex]);
    $("#button3").text(answerCTwo[answerIndex]);
    $("#button4").text(answerDTwo[answerIndex]);
}

//after questions run out, it gives score earned
function handleResults() {
    $("#quiz-two").hide();
    $("#results").show();
    $("#pointTotal").html("You got " + rightAnswers + " questions right and earned " + pointsGainedOther + " points for your efforts!");
}

//pressing button to restart alex quiz again
function pressRestartAgain(event) {
    event.preventDefault();
    i = 0;
    pointsGainedOther = 0;
    $("#rules-two").show();
    $("#high-scores").hide();
    rightAnswers = 0;
    $(".scores").empty();
}

//from main quiz page, this button goes to alex quiz start page
function quizOne(event) {
    event.preventDefault();
    $(".opening-nav").hide();
    $("#opening-page").hide();
    $(".opening-alex").show();
    $("#rules-two").show();
}

//function to what happens when you press the 'Begin' button
function pressStart(event) {
    event.preventDefault();
    $("#rules-two").hide();
    $("#quiz-two").show();
    changeQuestionTwo(i);
}

//When pressing 'Submit' button to add initials into High Score List
document.querySelector("#submit").addEventListener("click", function () {
    var userNameTwo = document.querySelector("#sign-up").value;
    var rankTwo = { name: userNameTwo, points: pointsGainedOther }
    secondHighScoreList.push(rank);
    for (var i = 0; i < secondHighScoreList.length; i++) {
        $(".scores").append("<br>" + secondHighScoreList[i].name + " " + secondHighScoreList[i].points);
    }
    $("#results").hide();
    document.getElementById("sign-up").value = "";
    $("#high-scores").show();
    localStorage.setItem("secondHighScoreList", JSON.stringify(secondHighScoreList));
})

//create an event of clicking 'Restart' Button
$(".restart").click(function (event) {
    pressRestartAgain(event);
})

//create an event for clicking 'Begin' button
$(".start-two").click(function (event) {
    pressStart(event);
})

$(".choice-one").click(function (event) {
    quizOne(event);
})

