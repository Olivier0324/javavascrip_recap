const userInput = require("readline-sync");
let anyNumber = parseInt(userInput.question("Enter any number:"));

let i = 1;

while (i <= anyNumber) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}
