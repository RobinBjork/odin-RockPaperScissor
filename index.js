let humanScore = 0;
let computerScore = 0;

function getComputerChoice(value) {
    return Math.random(value);
    
}
//Generate a random number between 0-1

let x = getComputerChoice();
if (x <= 0.33) {
    console.log("Rock!");
}
else if (x >= 0.34 && x <= 0.66) {
    console.log("Paper!");
}
else {
    console.log("Scissor!");
}
console.log(x);

//if number is 0.33 or less give rock
//If number is betwwen 0.34 and 0.66 give paper
//If number is between 0.67 and 1 give scissor

function getHumanChoice() {
    let choice = window.prompt('Choose "Rock", "Paper" or "Scissor"');
    return choice;
}

let y = getHumanChoice();

if (y === 'Rock') {
    console.log('hRock');
}
else if (y === 'Paper') {
    console.log('hPaper');
}
else if (y === 'Scissor') {
    console.log('hScissor');
}
else {
    console.log('Invalid Choice, try again');

}

//Get a value rock, paper or scissor
//Save that value
//Use that value to prompt the choice

function playRound (humanChoice, computerChoice) {
    
}

playRound (y, x);
//get human value and computer value
//Rock rock
//paper paper
//scissor scissor
//rock paper