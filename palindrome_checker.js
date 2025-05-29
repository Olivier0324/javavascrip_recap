const userInput = require("readline-sync");
let userChoice = userInput.question("Enter a word or phrase:").replaceAll(" ", "").toLowerCase();

let reversed ="";
for (let i = userChoice.length-1; i >= 0; i--){
    reversed += userChoice[i];
}

if (reversed === userChoice) {
    console.log(`\"${userChoice}\" is a palindrome!`);
}
else {
    console.log(`\"${userChoice}\" is not a palindrome!`);

}