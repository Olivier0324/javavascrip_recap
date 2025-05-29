const readline = require("readline-sync");
let highestScore = 0;
let topScorers = [];
let maxNum = parseInt(readline.question("Enter maximum number of students: "));
let students = [];
let name, score;
for (let i = 0; i < maxNum; i++){
    name = readline.question(`Enter player ${i + 1} name: `);
    score = readline.question(`Enter player ${i + 1} score: `);
    students.push(
        {
            name: name,
            score
        }
    )
}
// displaying all players
console.log("\n\nAll players:\n");
students.forEach((element) => {
    console.log(`${element.name} : ${element.score}`);
})
// Checking person with highest marks
students.forEach((player) => {
    let currentScore = parseFloat(player.score);
    if (currentScore > highestScore) {
        highestScore = currentScore;
        topScorers = [player.name];
    } else if (currentScore === highestScore) {
        topScorers.push(player.name); 
    }
});

console.log(`\nHighest Score: ${highestScore}`);
console.log(`Top Scorer(s): ${topScorers.join(", ")}`);

