const userInput = require("readline-sync");
let evenNumbers = 0;
let oddNumbers = 0;
let initialNumber = 0;
let choice = parseInt(userInput.question("Enter any number: "));
while (initialNumber < choice) {
    initialNumber++;
    if (initialNumber % 2 === 0) {
        evenNumbers++;
        console.log("The number " + initialNumber + " Is even");
    }
    if (initialNumber % 2 === 1) {
        oddNumbers++;
        console.log("The number " + initialNumber + " Is odd");
    }

}
console.log("Total even numbers are: " + evenNumbers);
console.log("Total odd numbers are: " + oddNumbers);