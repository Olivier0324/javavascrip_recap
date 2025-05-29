
const userInput = require('readline-sync');

let computerChoice = Math.floor(Math.random() * 10) + 1;
let userChoice;
let count = 0;

console.log("I'm thinking of a number between 1 and 10.");

while (userChoice !== computerChoice) {
    userChoice = parseInt(userInput.question("Take a guess: "));
    count++;

    if (userChoice < computerChoice) {
        console.log("Too low.");
    } else if (userChoice > computerChoice) {
        console.log("Too high.");
    } else {
        console.log("Correct! You guessed the number in " + count + " attempts.");
    }
}
