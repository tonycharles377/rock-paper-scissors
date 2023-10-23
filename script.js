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




//five rounds-play game function
function game(){
    

    let player = 0;
    let computer = 0;

    while(player < 5 || computer < 5){
        singleRound(getComputerChoice(), getHumanChoise());
        if(player == 4){
            console.log('You win!');
            break;
        }else if (computer == 4){
            console.log('You lose!');
            break;
        }
    }

    //single play-round game function
    function singleRound(computerSelection, playerSelection){
        if (computerSelection === playerSelection) {
            console.log('you tie computer: ' + computerSelection + ' vs player: ' + playerSelection);
            alert('player: 0 computer: 0');
        }
        else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection === 'paper' && computerSelection === 'rock' ||
                playerSelection === 'scissors' && computerSelection === 'rock'){
                    console.log('You win! ' + playerSelection + ' beat ' + computerSelection);
                    alert('player: 1 computer: 0');
                    player++;
        }
        else{
            console.log('You losse! ' + computerSelection + ' beat ' + playerSelection);
            alert('player: 0 computer: 1');
            computer++;
        }
    }

}

game();
                        
