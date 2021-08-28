//Declare global variables so can be seen in multiple functions
let playerInput;
let playerSelection;
//User puts in selection, loops back to prompt if player puts in incorrect input
//userInputs Rock,Paper, or Scissor

//Return message to user to try again if puts in wrong input



function game() {
let playerScore = 0;
let computerScore = 0;
/*let scoreDeclaration = 'The score is ' + playerScore + '-' + computerScore + '.';*/
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
        computerScore = ++computerScore;
        let loseDeclaration = 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        return loseDeclaration;
    }
    else{
        playerScore = ++playerScore;
        let winDeclaration = 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +     ' beats ' + computerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        return winDeclaration;
    }
  }
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection,computerSelection));  
 }
} 
game();





