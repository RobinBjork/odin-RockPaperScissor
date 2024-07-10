
function getComputerChoice(value) {
    return Math.random(value);
    
}
let x = getComputerChoice();
console.log(x);

//Generate a random number between 0-1
//if number is 0.33 or less give rock
//If number is betwwen 0.34 and 0.66 give paper
//If number is between 0.67 and 1 give scissor