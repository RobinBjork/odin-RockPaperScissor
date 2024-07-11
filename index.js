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

//if number is 0.33 or less give rock
//If number is betwwen 0.34 and 0.66 give paper
//If number is between 0.67 and 1 give scissor

function getHumanChoice() {
    let choice = window.prompt('Choose "Rock", "Paper" or "Scissor"');
    let convertedChoice = choice.toLowerCase();

    if (convertedChoice === 'rock') {
        return 'Rock'; 
    }
    else if (convertedChoice === 'paper') {
        return 'Paper';
    }
    else if (convertedChoice === 'scissor') {
        return 'Scissor';
    }
    else {
        console.log('invalid');
        getHumanChoice();
    }
    
}


//Get a value rock, paper or scissor
//Save that value
//return that value 






//om human är rock och computer är scissor, poäng till human
//om human är paper och computer är rock, poäng till human
//om human är scissor och computer är paper, poäng till human
//Om humanvalue är samma som computer value, kör igen
//Annars, poäng till computer
    let humanScore = 0;
    let computerScore = 0;

function playGame () {
 
    let computerValue = getComputerChoice();
    console.log(computerValue);
    let humanValue = getHumanChoice();
    console.log(humanValue);

    if (humanScore === 5) {
        console.log('You won, well done!');
    }
    else if (computerScore === 5) {
        console.log('You loose, too bad!');
    }
    else {
        playRound(humanValue, computerValue);
    }

//Om human är 5, vinn
//Om computer är 5, förlora
//Annars spela på    


        function playRound (humanChoice, computerChoice) {

            

            if (humanChoice === 'Rock' && computerChoice === 'Scissor') {
                humanScore++;
                console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
                console.log('Human ' + humanScore);
                console.log('Computer ' + computerScore);

                playGame();
                
            }
            else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
                humanScore++;
                console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
                console.log('Human ' + humanScore);
                console.log('Computer ' + computerScore);
                
                playGame();
                
            }
            else if (humanChoice === 'Scissor' && computerChoice === 'Paper') {
                humanScore++;
                console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
                console.log('Human ' + humanScore);
                console.log('Computer ' + computerScore);

                playGame();
               
            }
            else if (humanChoice === computerChoice) {
                console.log('Tie!');
                console.log('Human ' + humanScore);
                console.log('Computer ' + computerScore);

                playGame();
            }
            else {
                computerScore++;
                console.log('You loose! ' + humanChoice + ' looses to ' + computerChoice);
                console.log('Human ' + humanScore);
                console.log('Computer ' + computerScore);

                playGame();
            }
            
        }
}

playGame();

//om humanscore eller computerscore är mindre än 5, spela
//om humanscore = 5, sluta spela
//Annars sluta spela
