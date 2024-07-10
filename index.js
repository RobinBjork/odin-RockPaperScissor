let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        return 'Rock';
    }
    else if (randomNumber >= 0.34 && randomNumber <= 0.66) {
        return 'Paper'
    }
    else {
        return 'Scissor';
    }
    
}

let computerValue = getComputerChoice();
console.log(computerValue);

//if number is 0.33 or less give rock
//If number is betwwen 0.34 and 0.66 give paper
//If number is between 0.67 and 1 give scissor

function getHumanChoice() {
    let choice = window.prompt('Choose "Rock", "Paper" or "Scissor"');
    if (choice === 'Rock') {
        console.log('R');
        return 'Rock';
        
    }
    else if (choice === 'Paper') {
        console.log('P');
        return 'Paper';
    }
    else if (choice === 'Scissor') {
        console.log('S');
        return 'Scissor';
    }
    /*else {
        console.log('invalid');
        getHumanChoice();
    }*/
    
}

let humanValue = getHumanChoice();
console.log(humanValue);




//Get a value rock, paper or scissor
//Save that value
//Use that value to prompt the choice

function playRound (humanChoice, computerChoice) {
    
}

//playRound (y, x);

//get human value and computer value
//Rock rock
//paper paper
//scissor scissor
//rock paper