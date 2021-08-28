//Declare global variables so can be seen in multiple functions
let playerInput;
let playerSelection;
//User puts in selection, loops back to prompt if player puts in incorrect input
//userInputs Rock,Paper, or Scissor

//Return message to user to try again if puts in wrong input
while(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors" || playerInput === null){
    playerInput = prompt("Let's Play Rock, Paper, Scissors!","Enter Rock, Paper, or Scissors");
    if (playerInput == null){
        playerInput = prompt("Let's Play Rock, Paper, Scissors!","Enter Rock, Paper, or Scissors");
    }
    else{
    playerSelection = playerInput.toLowerCase();
        console.log(playerSelection);
    }
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
        break;
    }
}


function game() {
for (let i = 0; i < 6; i++){ 
    while(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors" || playerInput === null){
        playerInput = prompt("Let's Play Rock, Paper, Scissors!","Enter Rock, Paper, or Scissors");
        if (playerInput == null){
            playerInput = prompt("Let's Play Rock, Paper, Scissors!","Enter Rock, Paper, or Scissors");
        }
        else{
        playerSelection = playerInput.toLowerCase();
            console.log(playerSelection);
        }
        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
            break;
        }
    }
    function computerPlay(){
        const computerChoices = ["rock","paper","scissors"];
        const random = Math.floor(Math.random() * computerChoices.length); 
        const computerPick = computerChoices[random];
        return computerPick;
    }
    computerPlay();
    const computerSelection = computerPlay();
    console.log(computerSelection);

 function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        let drawDeclaration = 'Draw! Play again!';
        return drawDeclaration;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'  || playerSelection =='paper' && computerSelection=='scissors'
    || playerSelection =='scissors' && computerSelection =='rock'){
        let loseDeclaration = 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '.';
        return loseDeclaration;
    }
    else{
        let winDeclaration = 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +     ' beats ' + computerSelection + '.';
        return winDeclaration;
    }
  }
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection,computerSelection));  
 }
} 
game();





