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
        getWiner();
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
    const para2 = document.createElement('p');
    para2.textContent = '';

    //clear the existing content of txtdiv
    txtdiv.innerHTML = '';
    

    if (computerSelection === playerSelection) {
        
        para.textContent = 'you tie computer: ' + computerSelection + ' vs player: ' + playerSelection;
        txtdiv.appendChild(para);

        para2.textContent = 'Player score: ' + player + '   Computer score: ' + computer;
        txtdiv.appendChild(para2);
        
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' ||
            playerSelection === 'scissors' && computerSelection === 'paper'){
                
                para.textContent = 'You win! ' + playerSelection + ' beat ' + computerSelection;
                txtdiv.appendChild(para);
                
                player++;
                para2.textContent = 'Player score: ' + player + '   Computer score: ' + computer;
                txtdiv.appendChild(para2);
    }else{ 
             
        para.textContent = 'You losse! ' + computerSelection + ' beat ' + playerSelection;
        txtdiv.appendChild(para);
        
        computer++;
        para2.textContent = 'Player score: ' + player + '   Computer score: ' + computer;
        txtdiv.appendChild(para2);
    }
}


function getWiner(){
    if(player == 5){
        const popup = document.querySelector('#popup');
        const para = document.createElement('p');
        para.textContent = 'You Win! Play again';
        popup.prepend(para);
        openpopup();

        const closebtn = popup.querySelector('#closebtn');

        closebtn.addEventListener('click', () =>{
            closepopup();
        })
    }
    if(computer == 5){
        const popup = document.querySelector('#popup');
        const para = document.createElement('p');
        para.textContent = 'You lose! Try again';
        popup.prepend(para);
        openpopup();

        const closebtn = popup.querySelector('#closebtn');

        closebtn.addEventListener('click', () =>{
            closepopup();
        })
    }
}

function openpopup(){
    const popup = document.querySelector('#popup');
    popup.classList.add('open-popup');
}

function closepopup(){
    const popup = document.querySelector('#popup');
    popup.classList.remove('open-popup');
}


getPlayerChoise();