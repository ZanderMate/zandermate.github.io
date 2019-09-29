var myObject = {
    numbers : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lettersUpper : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lettersLower : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    specialChars : ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", "?", "@", "^", "_", "~"],
}


function password (){
while (true){
    var chars = prompt("How many characters do you want to password to have? (8-128 chars)");
    if ((chars >= 8) && (chars <= 128)) break;
    alert("Follow the guidelines of the character length.")
} 
while (true){
    var confNumbers = confirm("Would you like to use numbers in the password?");
    var confUpper = confirm("Would you like to use uppercase letters in the password?");
    var confLower = confirm("Would you like to use lowercase letters in the password?");
    var confSpecial = confirm("Would you like to use special characters in the password?");
    if ((confNumbers === true) || (confUpper === true) || (confLower === true) || (confSpecial === true)) break;
    alert("You need to pick at least one character type to proceed.")
}
}