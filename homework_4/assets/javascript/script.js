//Upon loading page, it will have main title with instructions for the quiz and a button to begin quiz.
//When you press the "Begin" button, it will go to the first question and start the timer.
    //If the correct answer is picked, then it will award points and move to next question.
    //If the incorrect answer is picked, then it will subtract time from the timer and move to the next question.
    //This will repeat until all questions are answered or the time runs down to zero.
//Once the timer is at zero, it will show the amount of points earned and ask for the name of the player in an input field.
    //Once the input field is filled out and the "submit" button is pressed, it will add the name and score to the list of players 
        //and their scores in order of highest score to lowest score.
    //There also will be a button for clearing the high scores.

var questions = ["What is considered to be Akira Kurosawa's masterpiece film?","What's the name of the nightclub in Casablanca?"];
var answerA = ["The Seven Samurai", "Sam's Place"];
var answerB = ["Yojimbo","The White House"];
var answerC = ["The Hidden Fortress","Rick's Cafe"];
var answerD = ["Throne of Blood","The Nazi Club"];
var correctAnswers = ["The Seven Samurai", "Rick's Cafe"];
var i = 0;
var myTimer = 8;
var intervalTimer;
var pointsGained = 0;
var highScoreList;
    if(localStorage.getItem("highScoreList")) {
    highScoreList = JSON.parse(localStorage.getItem("highScoreList"))
}   else{
    highScoreList = [];
}

var listScores = document.querySelector("#high-scores");


//what happens when choosing any answer button
document.querySelector("#quiz").addEventListener("click", function(event){
    if(event.target.matches("button")){
        var userAnswer = document.getElementById(event.target.id).textContent;
        if(userAnswer === correctAnswers[i]){
            pointsGained = pointsGained + 2;
            //console.log(pointsGained);
        }
        else{
            myTimer = myTimer - 10;
        };
        i++;
        if(i === questions.length){
            clearInterval(intervalTimer);
            document.querySelector(".timeLeft").style.display = "none"; 
            handleResults();
        }
        else{changeQuestion(i);}
    }
    }
)

//change questions and answer fields for current question based on index position
function changeQuestion(answerIndex){
    document.querySelector(".askQuestion").textContent = questions[answerIndex];
    document.querySelector("#buttonA").textContent = answerA[answerIndex];
    document.querySelector("#buttonB").textContent = answerB[answerIndex];
    document.querySelector("#buttonC").textContent = answerC[answerIndex];
    document.querySelector("#buttonD").textContent = answerD[answerIndex];
}

//after time or questions run out it gives score earned
function handleResults(){
    document.querySelector("#quiz").style.display = "none";
    document.querySelector("#results").style.display = "block";
    document.querySelector("#pointTotal").textContent = "You have earned " + pointsGained + " points for your efforts!";
}

function setTimer(){
    myTimer--;
    //console.log(myTimer);
    document.querySelector(".timeLeft").textContent = myTimer + " seconds left";
    if(myTimer <= 0){
        clearInterval(intervalTimer);
        document.querySelector(".timeLeft").style.display = "none"; 
        handleResults();       
    }
}

//create an event for clicking 'Begin' button
document.querySelector(".start").addEventListener("click", function(event){
    pressBegin(event);
    }
)

//function to what happens when you press the 'Begin' button
function pressBegin(event){
    event.preventDefault();
    document.querySelector("#rules").style.display = "none";
    document.querySelector("#quiz").style.display = "block";
    changeQuestion(i);
    document.querySelector(".timeLeft").style.display = "block";
    intervalTimer = setInterval(setTimer, 1000);
}

document.querySelector("#submit").addEventListener("click", function(){
    var userName = document.querySelector("#sign-up").value;
    var rank = {name: userName, points: pointsGained}
    highScoreList.push(rank);
    var score = document.createElement("div");
    listScores.appendChild(score);
    var temp = score.setAttribute("id","nameScore");
    document.querySelector("#nameScore").textContent = rank.name + " " +rank.points;
    document.querySelector("#high-scores").style.display = "block";
    localStorage.setItem("highScoreList", JSON.stringify(highScoreList));
})

console.log(highScoreList);