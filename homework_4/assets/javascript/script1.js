//Upon loading page, it will have main title with instructions for the quiz and a button to begin quiz.
//When you press the "Begin" button, it will go to the first question and start the timer.
//If the correct answer is picked, then it will award points and move to next question.
//If the incorrect answer is picked, then it will subtract time from the timer and move to the next question.
//This will repeat until all questions are answered or the time runs down to zero.
//Once the timer is at zero, it will show the amount of points earned and ask for the name of the player in an input field.
//Once the input field is filled out and the "submit" button is pressed, it will add the name and score to the list of players 
//and their scores in order of highest score to lowest score.
//There also will be a button for clearing the high scores.

var questions = ["What is considered to be Akira Kurosawa's masterpiece film?", "What's the name of the nightclub in 'Casablanca'?", "What did Rosebud signify in Citizen Kane?", "What was Dorothy's last name from 'The Wizard of Oz'?", "What movie starring Gene Kelly, Debbie Reynolds, and Donald O'Coonor has an iconic song with the same name as the movie?", "What country made the first all-woman cast in 1931?", "For what movie did Sidney Poitier become the first African-American to win the Academy Award for Best Actor in 1963?", "How many of the jurors did Henry Fonda have to convince to change their minds in the movie '12 Angry Men' from guilty to not guilty?", "In 'Rear Window', who starred as the photographer with two broken legs and is convenced that his neighbor has murdered his own wife?", "What movie has Marlon Brando's character utter 'I could have been a contender. I could have been somebody...'?", "What is the name of the family that Maria goes to work for in 'The Sound of Music'?", "What musical based on 'Romeo and Juliet' involves rival gangs named the Jets and the Sharks?", "What is the name of the intelliigent supercomputer in '2001: A Space Odyessey'?", "What is so unique about James Dean being nominated for an Academy Award for Best Actor for 'East of Eden' and 'Giant' in 1956 and 1957 respectively?", "What is Alex's favorite movie all time?"];
var answerA = ["The Seven Samurai", "Sam's Place", "The main character's one true love", "Storm", "How the West was Won", "Germany (Madchen in Uniform)", "The Defiant Ones", "Nine", "Gary Cooper", "A Street Car Named Desire", "van Klacken", "Romeo + Juliet", "HAL 2001", "He was uncredited in both movies", "Star Wars: A New Hope"];
var answerB = ["Yojimbo", "The White House", "The main character remembering his hometown", "Gale", "Singin' in the Rain", "USA (The Women)", "A Raisin in the Sun", "Eleven", "Gregory Peck", "On the Waterfront", "von Hammerstein", "Rent", "HAL 5000", "He had died prior to either award ceremony", "The Court Jester"];
var answerC = ["The Hidden Fortress", "Rick's Cafe", "The dying word of a happy man", "Hale", "For Me and My Gal", "Sri Lanka (Seya)", "The Greatest Story Ever Told", "Ten", "James Stewart", "The Wild One", "van Hansens", "West Side Story", "HAL 9000", "Neither movie had much critical success", "Dead Poet's Society"];
var answerD = ["Throne of Blood", "The Nazi Club", "The memory of the main character's happy childhood", "Smith", "Give Out, Sisters", "France (Women's Club)", "Lillies of the Field", "Twelve", "Paul Newman", "Superman", "von Trapp", "Guys and Dolls", "HAROLD 1000", "He had publicly announced that he was ashamed of both movies", "Cinema Paradiso"];
var correctAnswers = ["The Seven Samurai", "Rick's Cafe", "The memory of the main character's happy childhood", "Gale", "Singin' in the Rain", "Germany (Madchen in Uniform)", "Lillies of the Field", "Eleven", "James Stewart", "On the Waterfront", "von Trapp", "West Side Story", "HAL 9000", "He had died prior to either award ceremony", "Dead Poet's Society"];
var i = 0;
var myTimer = (questions.length * 10);
var beginningOfQuest = 0;
var intervalTimer;
var rightAnswers = 0;
var pointsGained = 0;
var highScoreList;
var listScores = document.querySelector("#high-scores");
if (localStorage.getItem("highScoreList")) {
    highScoreList = JSON.parse(localStorage.getItem("highScoreList"))
}
else {
    highScoreList = [];
}



//what happens when choosing any answer button
document.querySelector("#quiz").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var userAnswer = document.getElementById(event.target.id).textContent;
        var endOfQuest = myTimer;
        if (userAnswer === correctAnswers[i]) {
            pointsGained = pointsGained + (10 - (beginningOfQuest - endOfQuest));
            rightAnswers = rightAnswers + 1;
            $(".correctness").text("Right");
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        }
        else {
            myTimer = myTimer - 10;
            $(".correctness").text("Wrong");
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        };
        i++;
        if (i === questions.length) {
            clearInterval(intervalTimer);
            $("#timeLeft").hide();
            handleResults();
        }
        else {
            changeQuestion(i);
            beginningOfQuest = myTimer;
        }
    }
}
)

//change questions and answer fields for current question based on index position
function changeQuestion(answerIndex) {
    $(".askQuestion").text(questions[answerIndex]);
    $("#buttonA").text(answerA[answerIndex]);
    $("#buttonB").text(answerB[answerIndex]);
    $("#buttonC").text(answerC[answerIndex]);
    $("#buttonD").text(answerD[answerIndex]);
}

//after time or questions run out, it gives score earned
function handleResults() {
    $("#quiz").hide();
    $("#results").show();
    $("#pointTotal").html("You got " + rightAnswers + " questions right and earned " + pointsGained + " points for your efforts!");
}

//running the timer from when we start the quiz
function setTimer() {
    myTimer--;
    console.log(myTimer);
    $("#timeLeft").html(myTimer + " seconds left");
    if (myTimer < 0) {
        clearInterval(intervalTimer);
        $("#timeLeft").hide();
        handleResults();
    }
}

//pressing button to restart movie quiz again
function pressRestart(event) {
    event.preventDefault();
    i = 0;
    myTimer = (questions.length * 10);
    pointsGained = 0;
    $("#sign-up").removeAttr('value');
    $("#rules").show();
    $("#high-scores").hide();
    rightAnswers = 0;
    $(".scores").empty();
}

//from main quiz page, this button goes to movie quiz start page
function quizTwo(event) {
    event.preventDefault();
    $(".opening-nav").hide();
    $(".opening-nav").hide();
    $("#opening-page").hide();
    $(".opening-movie").show();
    $("#rules").show();
}

//function to what happens when you press the 'Begin' button
function pressBegin(event) {
    event.preventDefault();
    document.querySelector("#rules").style.display = "none";
    document.querySelector("#quiz").style.display = "block";
    changeQuestion(i);
    $("#timeLeft").show();
    intervalTimer = setInterval(setTimer, 1000);
    beginningOfQuest = myTimer;
}

//When pressing 'Submit' button to add initials into High Score List
document.querySelector("#submit").addEventListener("click", function () {
    var userName = document.querySelector("#sign-up").value;
    var rank = { name: userName, points: pointsGained }
    highScoreList.push(rank);
    for (var i = 0; i < highScoreList.length; i++) {
        $(".scores").append("<br>" + highScoreList[i].name + " " + highScoreList[i].points);
    }
    $("#results").hide();
    document.getElementById("sign-up").value = "";
    document.querySelector("#high-scores").style.display = "block";
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
})

//create an event of clicking 'Restart' Button
$(".restart").click(function (event) {
    pressRestart(event);
})

//create an event for clicking 'Begin' button
$(".start").click(function (event) {
    pressBegin(event);
})

$(".choice-two").click(function (event) {
    quizTwo(event);
})