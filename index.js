
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