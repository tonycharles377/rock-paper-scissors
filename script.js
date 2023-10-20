//computer's pick
function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random() * options.length)];
    
    console.log(choice);
}

getComputerChoice();
