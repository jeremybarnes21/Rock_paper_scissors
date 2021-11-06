//Declare global variables so can be seen in multiple functions
let playerInput;
let playerSelection;
//User puts in selection, loops back to prompt if player puts in incorrect input
//userInputs Rock,Paper, or Scissor

//Return message to user to try again if puts in wrong input

let gameTitle = document.querySelector('#gameTitle');
gameTitle.style.textAlign = 'center';

function game() {
 let playerScore = 0;
 let computerScore = 0;
 //next time call this div something that makes more sense like buttons.
 const newDiv = document.querySelector('#butContainer'); 
 newDiv.style.width = '25%';
 newDiv.style.margin = 'auto';
 newDiv.style.display = 'flex';
 newDiv.style.justifyContent = 'center'; //Making buttons and declartions seperate divs helped a lot
 newDiv.style.justifyContent = 'space-between';
 newDiv.style.padding = '10px';


 const declaration = document.createElement('div');
 declaration.style.textAlign = 'center'; 
 declaration.style.padding = '10px';
 declaration.classList.add('declaration');
 declaration.textContent = 'Choose your weapon to begin!';
 document.body.appendChild(declaration); 

 const endGameDiv = document.createElement('div');
  endGameDiv.classList.add('endGameDiv');
  endGameDiv.textContent = 'First player to five wins!'
  endGameDiv.style.textAlign = 'center'; 
  endGameDiv.style.padding = '10px';
  document.body.appendChild(endGameDiv);

 const buttons = document.querySelectorAll('button'); //buttons acts similar to array
 buttons.forEach((button) => {
        button.addEventListener('click',()=> {
        let playerSelection = button.id; 
        console.log(playerSelection);
        function computerPlay(){
            const computerChoices = ["rock","paper","scissors"];
            const random = Math.floor(Math.random() * computerChoices.length); 
            const computerPick = computerChoices[random];
            return computerPick;
         }
        computerPlay();
        const computerSelection = computerPlay();
        console.log(computerSelection);
    
    function checkRound(playerSelection,computerSelection){  
    if(playerSelection == computerSelection){
        
        drawDeclaration = 'Draw! Play again! ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        declaration.textContent = drawDeclaration;
        return drawDeclaration;
        
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'  || playerSelection =='paper' && computerSelection=='scissors'
    || playerSelection =='scissors' && computerSelection =='rock'){
        computerScore+=1;
        let loseDeclaration = 'You lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + playerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        declaration.textContent = loseDeclaration;
        
        return loseDeclaration;
    }
    else{
        playerScore+=1;
        let winDeclaration = 'You win! ' + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) +     ' beats ' + computerSelection + '. ' + 'The score is ' + playerScore + '-' + computerScore + '.';
        declaration.textContent = winDeclaration;
        
        return winDeclaration;
    }
  }
  checkRound(playerSelection,computerSelection);

  function checkWinner(computerScore,playerScore){
    if (computerScore>=5){
        let finalResult = 'Sorry, you lost the game! Refresh the page to try again.';
        endGameDiv.textContent = finalResult;
        console.log(finalResult);
       // return finalResult;
        return checkWinner; //so does not keep changing once one player reaches 5... does not work because does not stop function
    }
    if (playerScore>=5){
      let finalResult = 'Congratulations! You won the game! Refresh the page to play again';
      endGameDiv.textContent = finalResult;
      console.log(finalResult);
      //return finalResult;
      return checkWinner;
    }
  }
  checkWinner(computerScore,playerScore);
  }); //for eventListener
  
  
/* 11.2.21 had to add this within the eventListener function... if outside then doesn't check on click... so only loops through it forEach button...great lesson learned.
  if (computerScore>=5){
      let finalResult = 'Sorry, you lost the game! Refresh the page to try again.';
      endGameDiv.textContent = finalResult;
      console.log(finalResult);
      return finalResult;
  }
  if (playerScore>=5){
    let finalResult = 'Congratulations! You won the game! Refresh the page to play again';
    endGameDiv.textContent = finalResult;
    console.log(finalResult);
    return finalResult;
  }*/
 }); //for.Each function... the variables are declared within game function... but inner function can see computerScore...

}
game();

