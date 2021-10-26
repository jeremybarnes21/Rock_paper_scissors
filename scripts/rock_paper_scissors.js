//Declare global variables so can be seen in multiple functions
let playerInput;
let playerSelection;
//User puts in selection, loops back to prompt if player puts in incorrect input
//userInputs Rock,Paper, or Scissor

//Return message to user to try again if puts in wrong input



function game() {
let playerScore = 0;
let computerScore = 0;

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',()=> {
        let playerSelection = button.id; 
        console.log(playerSelection);
        const newDiv = document.querySelector('#butContainer');
        const declaration = document.createElement('div');
        declaration.classList.add('declaration');

        function computerPlay(){
            const computerChoices = ["rock","paper","scissors"];
            const random = Math.floor(Math.random() * computerChoices.length); 
            const computerPick = computerChoices[random];
            return computerPick;
        }
        computerPlay();
        const computerSelection = computerPlay();
        console.log(computerSelection);
    if(playerSelection == computerSelection){
        
        let drawDeclaration = 'Draw! Play again!';
        declaration.textContent = drawDeclaration;
        newDiv.appendChild(declaration);
        return drawDeclaration;
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'  || playerSelection =='paper' && computerSelection=='scissors'
    || playerSelection =='scissors' && computerSelection =='rock'){
        computerScore+=1;
        let loseDeclaration = 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        declaration.textContent = loseDeclaration;
        newDiv.appendChild(declaration);
    }
    else{
        playerScore+=1;
        let winDeclaration = 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +     ' beats ' + computerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        declaration.textContent = winDeclaration;
        newDiv.appendChild(declaration);
        return winDeclaration;
    }
  });
  /*playRound(playerSelection, computerSelection); 
  ^This made my code run twice and therefore make the score go up by two*/
  // Removing this since the function is anymous console.log(playRound(playerSelection,computerSelection));  

  
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
 });
//} curcly bracket for for loop at beginning
}
game();

