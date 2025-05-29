let userInput = require("readline-sync");
let firstNum = parseInt(userInput.question("Enter the first number: "));
let secondNum = parseInt(userInput.question("Enter the second number: "));
let operatorChoice = String(userInput.question("Choose operator (+, -, *, /): "));
let result = null;
if (operatorChoice === "+") {
    result = firstNum + secondNum;
    console.log(`${firstNum} ${operatorChoice} ${secondNum} = ${result}`);
}
else if (operatorChoice === "-") {
    result = firstNum - secondNum;
    console.log(`${firstNum} ${operatorChoice} ${secondNum} = ${result}`);
}
else if (operatorChoice === "*") {
    result = firstNum * secondNum;
    console.log(`${firstNum} ${operatorChoice} ${secondNum} = ${result}`);
}
else if (operatorChoice === "/") {
    if (secondNum === 0) {
        console.log(`Error: impossible to devide ${firstNum} with ${secondNum} `);
    } else {
        result = firstNum / secondNum;
        console.log(`${firstNum} ${operatorChoice} ${secondNum} = ${result}`);
    }
}
else {
    console.log("invalid operator, try between +,-,*,/ 🙏")
}