//Upon loading page, it will have main title with instructions for the quiz and a button to begin quiz.
//When you press the "Begin" button, it will go to the first question and start the timer.
//If the correct answer is picked, then it will award points and move to next question.
//If the incorrect answer is picked, then it will subtract time from the timer and move to the next question.
//This will repeat until all questions are answered or the time runs down to zero.
//Once the timer is at zero, it will show the amount of points earned and ask for the name of the player in an input field.
//Once the input field is filled out and the "submit" button is pressed, it will add the name and score to the list of players 
//and their scores in order of highest score to lowest score.
//There also will be a button for clearing the high scores.

var booleans = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
var questions = ["What is considered to be Akira Kurosawa's masterpiece film?", "What's the name of the nightclub in 'Casablanca'?", "What did Rosebud signify in Citizen Kane?", "What was Dorothy's last name from 'The Wizard of Oz'?", "What movie starring Gene Kelly, Debbie Reynolds, and Donald O'Coonor has an iconic song with the same name as the movie?", "What country made the first all-woman cast in 1931?", "For what movie did Sidney Poitier become the first African-American to win the Academy Award for Best Actor in 1963?", "How many of the jurors did Henry Fonda have to convince to change their minds in the movie '12 Angry Men' from guilty to not guilty?", "In 'Rear Window', who starred as the photographer with two broken legs and is convenced that his neighbor has murdered his own wife?", "What movie has Marlon Brando's character utter 'I could have been a contender. I could have been somebody...'?", "What is the name of the family that Maria goes to work for in 'The Sound of Music'?", "What musical based on 'Romeo and Juliet' involves rival gangs named the Jets and the Sharks?", "What is the name of the intelliigent supercomputer in '2001: A Space Odyessey'?", "What is so unique about James Dean being nominated for an Academy Award for Best Actor for 'East of Eden' and 'Giant' in 1956 and 1957 respectively?", "What is Alex's favorite movie all time?"];
var answerA = ["The Seven Samurai", "Sam's Place", "The main character's one true love", "Storm", "How the West was Won", "Germany (Madchen in Uniform)", "The Defiant Ones", "Nine", "Gary Cooper", "A Street Car Named Desire", "van Klacken", "Romeo + Juliet", "HAL 2001", "He was uncredited in both movies", "Star Wars: A New Hope"];
var answerB = ["Yojimbo", "The White House", "The main character remembering his hometown", "Gale", "Singin' in the Rain", "USA (The Women)", "A Raisin in the Sun", "Eleven", "Gregory Peck", "On the Waterfront", "von Hammerstein", "Rent", "HAL 5000", "He had died prior to either award ceremony", "The Court Jester"];
var answerC = ["The Hidden Fortress", "Rick's Cafe", "The dying word of a happy man", "Hale", "For Me and My Gal", "Sri Lanka (Seya)", "The Greatest Story Ever Told", "Ten", "James Stewart", "The Wild One", "van Hansens", "West Side Story", "HAL 9000", "Neither movie had much critical success", "Dead Poet's Society"];
var answerD = ["Throne of Blood", "The Nazi Club", "The memory of the main character's happy childhood", "Smith", "Give Out, Sisters", "France (Women's Club)", "Lillies of the Field", "Twelve", "Paul Newman", "Superman", "von Trapp", "Guys and Dolls", "HAROLD 1000", "He had publicly announced that he was ashamed of both movies", "Cinema Paradiso"];
var correctAnswers = ["The Seven Samurai", "Rick's Cafe", "The memory of the main character's happy childhood", "Gale", "Singin' in the Rain", "Germany (Madchen in Uniform)", "Lillies of the Field", "Eleven", "James Stewart", "On the Waterfront", "von Trapp", "West Side Story", "HAL 9000", "He had died prior to either award ceremony", "Dead Poet's Society"];
var questionsTwo = ["What does Alex call his sibling?", "Where did Alex live for two years teaching Oral English to college age students?", "What board game does Alex like to play more than any other?", "What is the name of Alex's wife?", "Waht is Alex's middle name?"];
var answerATwo = ["Peter", "Japan", "Settlers of Catan", "Kathryn", "James"];
var answerBTwo = ["Bro", "France", "Takenoko", "Catherine", "Jacob",];
var answerCTwo = ["Pete", "Mexico", "Betrayal at the House on the Hill", "Katherine", "Julian"];
var answerDTwo = ["Petey", "China", "Super Party Battle", "Cathleen", "Jeremiah"];
var correctAnswersTwo = ["Petey", "China", "Betrayal at the House on the Hill", "Catherine", "Julian"];
var i = 0;
var myTimer = 50;
var beginningOfQuest = 0;
var intervalTimer;
var rightAnswers = 0;
var pointsGained = 0;
var highScoreList;
var totalQuestions = 0;
var otherHighScoreList;
if (localStorage.getItem("highScoreList")) {
    highScoreList = JSON.parse(localStorage.getItem("highScoreList"))
}
else {
    highScoreList = [];
}
if (localStorage.getItem("otherHighScoreList")) {
    otherHighScoreList = JSON.parse(localStorage.getItem("otherHighScoreList"))
}
else {
    otherHighScoreList = [];
}



//what happens when choosing any answer button (movie)
document.querySelector("#quiz").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var userAnswer = document.getElementById(event.target.id).textContent;
        var endOfQuest = myTimer;
        if (userAnswer === correctAnswers[i]) {
            pointsGained = pointsGained + (10 - (beginningOfQuest - endOfQuest));
            rightAnswers = rightAnswers + 1;
            $("audio#right")[0].play();
            $(".correctness").text("Right");
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        }
        else {
            myTimer = myTimer - 10;
            $(".correctness").text("Wrong");
            $("audio#wrong")[0].play();
            setTimeout(function () {
                $(".correctness").empty();
            }
                , 500)
        };
        totalQuestions++;
        if (totalQuestions === 5) {
            clearInterval(intervalTimer);
            $("#timeLeft").hide();
            handleResults();
        }
        else {
            i = noDuplicates();
            changeQuestion(i);
            beginningOfQuest = myTimer;
        }
    }
}
)

//what happens when choosing any answer button (alex quiz)
document.querySelector("#quiz-two").addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        var userAnswer = document.getElementById(event.target.id).textContent;
        if (userAnswer === correctAnswersTwo[i]) {
            pointsGained++;
            console.log(pointsGained);
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
            handleMoreResults();
        }
        else {
            changeQuestionTwo(i);
        }
    }
}
)

//change questions and answer fields for current question based on index position (movie quiz)
function changeQuestion(answerIndex) {
    $(".askQuestion").text(questions[answerIndex]);
    $("#buttonA").text(answerA[answerIndex]);
    $("#buttonB").text(answerB[answerIndex]);
    $("#buttonC").text(answerC[answerIndex]);
    $("#buttonD").text(answerD[answerIndex]);
}

//change questions and answer fields for current question based on index position (Alex quiz)
function changeQuestionTwo(answerIndex) {
    $(".askQuestion-two").text(questionsTwo[answerIndex]);
    $("#button1").text(answerATwo[answerIndex]);
    $("#button2").text(answerBTwo[answerIndex]);
    $("#button3").text(answerCTwo[answerIndex]);
    $("#button4").text(answerDTwo[answerIndex]);
}

//after time or questions run out, it gives score earned (movie quiz)
function handleResults() {
    $("#quiz").hide();
    $("#results").show();
    $("#submit-two").hide();
    $("#pointTotal").html("You got " + rightAnswers + " questions right and earned " + pointsGained + " points for your efforts!");
}

//after questions run out, it gives score earned (alex quiz)
function handleMoreResults(){
    $("#quiz-two").hide();
    $("#results").show();
    $("#submit").hide();
    $("#pointTotal").html("You got a know Alex. Did you learn anything with your " + pointsGained + " points?");
}

//running the timer from when we start the quiz
function setTimer() {
    myTimer--;
    //console.log(myTimer);
    $("#timeLeft").html(myTimer + " seconds left");
    if (myTimer < 0) {
        clearInterval(intervalTimer);
        $("#timeLeft").hide();
        handleResults();
    }
}

//stops duplicates from occurring when choosing the random questions for movie quiz
function noDuplicates(){
    var j = Math.floor(Math.random() * questions.length);
    console.log(j);
    while(booleans[j] === true){
        j = Math.floor(Math.random() * questions.length);
    }
    booleans[j] = true;
    return j;
}

//from main quiz page, this button goes to alex quiz start page
function quizOne(event) {
    event.preventDefault();
    $(".opening-nav").hide();
    $("#opening-page").hide();
    $(".opening-alex").show();
    $("#rules-two").show();
}

//from main quiz page, this button goes to movie quiz start page
function quizTwo(event) {
    event.preventDefault();
    $(".opening-nav").hide();
    $("#opening-page").hide();
    $(".opening-movie").show();
    $("#rules").show();
}

//pressing button to restart quiz again (movie quiz)
function pressRestart(event) {
    event.preventDefault();
    i = 0;
    myTimer = 50;
    pointsGained = 0;
    $("#sign-up").removeAttr('value');
    $("#rules").show();
    $("#high-scores").hide();
    rightAnswers = 0;
    $(".scores").empty();
    totalQuestions = 0;
    booleans = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

}

//pressing button to restart quiz again (alex quiz)
function pressRestartAgain(event) {
    event.preventDefault();
    i = 0;
    pointsGained = 0;
    $("#rules-two").show();
    $("#high-scores").hide();
    rightAnswers = 0;
    $(".scores").empty();
}

//function to what happens when you press the 'Begin' button (movie quiz)
function pressBegin(event) {
    event.preventDefault();
    document.querySelector("#rules").style.display = "none";
    document.querySelector("#quiz").style.display = "block";
    i = noDuplicates();
    changeQuestion(i);
    $("#timeLeft").show();
    intervalTimer = setInterval(setTimer, 1000);
    beginningOfQuest = myTimer;
}

//function to what happens when you press the 'Begin' button (alex quiz)
function pressStart(event) {
    event.preventDefault();
    $("#rules-two").hide();
    $("#quiz-two").show();
    changeQuestionTwo(i);
}

//When pressing 'Submit' button to add initials into High Score List (movie quiz)
document.querySelector("#submit").addEventListener("click", function () {
    var userName = document.querySelector("#sign-up").value;
    var rank = { name: userName, points: pointsGained }
    highScoreList.push(rank);
    highScoreList.sort(function(a, b){return b.points - a.points})
    for (var i = 0; i < highScoreList.length; i++) {
        $(".scores").append("<br>" + highScoreList[i].name + " " + highScoreList[i].points);
    }
    $("#results").hide();
    document.getElementById("sign-up").value = "";
    document.querySelector("#high-scores").style.display = "block";
    $(".restart-again").hide();
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
})

//When pressing 'Submit' button to add initials into High Score List (alex quiz)
document.querySelector("#submit-two").addEventListener("click", function () {
    var userName = document.querySelector("#sign-up").value;
    var rank = { name: userName, points: pointsGained }
    otherHighScoreList.push(rank);
    otherHighScoreList.sort(function(a, b){return b.points - a.points})
    for (var i = 0; i < otherHighScoreList.length; i++) {
        $(".scores").append("<br>" + otherHighScoreList[i].name + " " + otherHighScoreList[i].points);
    }
    $("#results").hide();
    document.getElementById("sign-up").value = "";
    document.querySelector("#high-scores").style.display = "block";
    $(".restart").hide();
    localStorage.setItem("otherHighScoreList", JSON.stringify(otherHighScoreList));
})

//create an event of clicking 'Restart' Button
$(".restart").click(function (event) {
    pressRestart(event);
})

//create an event of clicking 'Restart' Button on Alex quiz
$(".restart-again").click(function (event) {
    pressRestartAgain(event);
})

//create an event for clicking 'Begin' button (movie quiz)
$(".start").click(function (event) {
    pressBegin(event);
})

//create an event for clicking 'Begin' button (alex quiz)
$(".start-two").click(function (event) {
    pressStart(event);
})

//go to movies quiz rules
$(".choice-two").click(function (event) {
    quizTwo(event);
})

//go to alex quiz rules
$(".choice-one").click(function (event) {
    quizOne(event);
})

$(".clear-hs").click(function(event){
    localStorage.removeItem("highScoreList");
    localStorage.removeItem("otherHighScoreList")
    $(".scores").empty();
    
})