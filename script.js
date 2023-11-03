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
        singleRound(computerSelection, playerSelection);
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

    const txtdiv = document.querySelector('#txt');
    const para = document.createElement('p');
    para.textContent = '';

    //clear the existing content of txtdiv
    txtdiv.innerHTML = '';
    

    if (computerSelection === playerSelection) {
        
        para.textContent = 'you tie computer: ' + computerSelection + ' vs player: ' + playerSelection;
        txtdiv.appendChild(para);
        
        console.log('you tie computer: ' + computerSelection + ' vs player: ' + playerSelection);
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
                
                para.textContent = 'You win! ' + playerSelection + ' beat ' + computerSelection;
                txtdiv.appendChild(para);
                
                console.log('You win! ' + playerSelection + ' beat ' + computerSelection);
                player++;
    }else{ 
             
        para.textContent = 'You losse! ' + computerSelection + ' beat ' + playerSelection;
        txtdiv.appendChild(para);
        
        console.log('You losse! ' + computerSelection + ' beat ' + playerSelection);
        computer++;
    }
}

getPlayerChoise();