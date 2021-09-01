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
// in the future, the while loop below is probably not the best way to run a prompt function... what I may do instead of using the for loop for five rounds is to check for computerScore + playerScore = 5...
//Also going to test ++i instead of i++. When console.log (i), seems that i starts at 0 even after 1 round. Could also make i start at 1.
//++i did not seem to help. Now will test i=1
for (let i = 1; i < 6; i++){ 
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
        i-=1;
        let drawDeclaration = 'Draw! Play again!';
        return drawDeclaration;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'  || playerSelection =='paper' && computerSelection=='scissors'
    || playerSelection =='scissors' && computerSelection =='rock'){
        computerScore+=1;
        let loseDeclaration = 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        return loseDeclaration;
    }
    else{
        playerScore+=1;
        let winDeclaration = 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +     ' beats ' + computerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        return winDeclaration;
    }
  }
  /*playRound(playerSelection, computerSelection); 
  ^This made my code run twice and therefore make the score go up by two*/
  console.log(playRound(playerSelection,computerSelection));  

  
  if (computerScore>=3){
      let finalResult = 'Sorry, you lost the game! Refresh the page to try again.';
      console.log(finalResult);
      return finalResult;
  }
  if (playerScore>=3){
    let finalResult = 'Congratulations! You won the game! Refresh the page to play again';
    console.log(finalResult);
    return finalResult;
  }
 }
} 
game();





