//var myObject = {
    //numbers : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    //lettersUpper : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //lettersLower : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  //  specialChars : ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "?", "@", "^", "_", "~"],
//}

var myMatrix = [
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "?", "@", "^", "_", "~"],
]

function getRow(useNumbers, useLettersUpper, useLettersLower, useSpecialChars){  //Take input of boleans and run them through test to determine row
    var returnRow = -1;
    while (returnRow === -1){
        var possRow = Math.floor(Math.random() * 4);
        if (useNumbers && (possRow === 0)){    
            returnRow = possRow;
        } // useNumbers === true
        if (useLettersUpper && (possRow === 1)){
            returnRow = possRow;
        } // useLettersUpper === true
        if (useLettersLower && (possRow === 2)){
            returnRow = possRow;
        } // useLettersLower === true
        if (useSpecialChars && (possRow === 3)){
            returnRow = possRow;
        } // useSpecialChars === true
    }
    return returnRow;
}

function password(){
while (true){
    var chars = prompt("How many characters do you want to password to have? (8-128 chars)");
    if ((chars >= 8) && (chars <= 128)) break; //validate character length
    alert("Follow the guidelines of the character length.")
} 
while (true){
    var confNumbers = confirm("Would you like to use numbers in the password?");
    var confUpper = confirm("Would you like to use uppercase letters in the password?");
    var confLower = confirm("Would you like to use lowercase letters in the password?");
    var confSpecial = confirm("Would you like to use special characters in the password?");
    if ((confNumbers === true) || (confUpper === true) || (confLower === true) || (confSpecial === true)) break;
    alert("You need to pick at least one character type to proceed.") //validate that a character type is chosen
}

var password = ""; //generates the password as a cancatenated string equal to character length chosen
for (var i = 0; i < chars; i++){
    var row = getRow(confNumbers, confUpper, confLower, confSpecial); //number of row in 2D array
    var column = Math.floor(Math.random() * myMatrix[row].length); //number of column in 2D array
    password += (myMatrix[row][column]); //result of each loop and adding to string
    }
    document.getElementById("text").value = password;
}

function clipboard(){
    document.querySelector("textarea").select(); //select what is in text field
    var copiedPW = document.execCommand('copy'); //copy the selected field
    alert("Copied the Password"); //alert the it has been copied
}
