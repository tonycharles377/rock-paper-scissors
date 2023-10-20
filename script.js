//computer's pick
function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];

    console.log(choice);
}

getComputerChoice();

//human's pick
function getHumanChoise(){
    let choice = prompt('Pick an option: Rock, Paper, Scissors').toLocaleLowerCase();

    console.log(choice);
}

getHumanChoise();
