let player = 0;
let computer = 0;
let playerSelection;
let computerSelection;

//human's pick
function getPlayerChoise(){

    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    
    function handleButtonClick(choice){
        playerSelection = choice;
        console.log(playerSelection);
        

        getComputerChoice();
        singleRound(playerSelection, computerSelection);
    }

    rockBtn.addEventListener('click', () => handleButtonClick('rock'));
    paperBtn.addEventListener('click', () => handleButtonClick('paper'));
    scissorsBtn.addEventListener('click', () => handleButtonClick('scissors'));
};


//computer's pick
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    computerSelection = options[Math.floor(Math.random() * options.length)];

    console.log(computerSelection);
}



//single play-round game function
function singleRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        console.log('you tie computer: ' + computerSelection + ' vs player: ' + playerSelection);
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'rock'){
                console.log('You win! ' + playerSelection + ' beat ' + computerSelection);
                player++;
    }
    else{
        console.log('You losse! ' + computerSelection + ' beat ' + playerSelection);
        computer++;
    }
}

getPlayerChoise();


