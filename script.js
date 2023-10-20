//computer's pick
function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let computerSelection = options[Math.floor(Math.random() * options.length)];

    return computerSelection;
}

//human's pick
function getHumanChoise(){
    let playerSelection = prompt('Pick an option: Rock, Paper, Scissors').toLocaleLowerCase();

    return playerSelection;
}

//single play-round game function
function singleRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection) {
        console.log('you tie computer: ' + computerSelection + ' vs player: ' + playerSelection);
    } else {
        switch (computerSelection) {
            case 'rock':
                switch (playerSelection) {
                    case 'paper':
                        console.log('you win! ' + playerSelection + ' beats ' + computerSelection);
                        break;
                    case 'scissors':
                        console.log('you lose! ' + computerSelection + ' beats ' + playerSelection);
                        break;
                }
                break;
            case 'paper':
                switch (playerSelection) {
                    case 'scissors':
                        console.log('you win! ' + playerSelection + ' beats ' + computerSelection);
                        break;
                    case 'rock':
                        console.log('you lose! ' + computerSelection + ' beats ' + playerSelection);
                        break;
                }
                break;
            case 'scissors':
                switch (playerSelection) {
                    case 'rock':
                        console.log('you win! ' + playerSelection + ' beats ' + computerSelection);
                        break;
                    case 'paper':
                        console.log('you lose! ' + computerSelection + ' beats ' + playerSelection);
                        break;
                }
                break;
            default:
                console.log('Invalid selection');
        }
    }
}

singleRound(getComputerChoice(), getHumanChoise());

