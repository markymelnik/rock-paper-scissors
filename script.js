// Rock, Paper, Scissors (Best of 5!)

// Automatic player prompt

window.addEventListener('load', playGame);

// Prompt the player for an input and return a valid input of either 'rock', 'paper', or 'scissors'

function getPlayerSelection() {
  let playerInput = prompt('Rock, paper, or scissors? Best of 5!');
  return playerInput;
}

// Random generation of either rock, paper, or scissors from the computer side

function getComputerSelection() {
  
  const randomNum = Math.floor(Math.random() * (3));   
  switch(randomNum) {
      case 0: 
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    } 
}

// All possible outcomes based on player selection and computer selection

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = (getPlayerSelection()).toLowerCase();
  let computerSelection = getComputerSelection();
  if (playerSelection != 'rock' 
    && playerSelection != 'paper' 
    && playerSelection != 'scissors') {
    console.log(console.log(`'${playerSelection}' is an invalid input. Choose either rock, paper, or scissors.`));
  } else if (playerSelection == computerSelection) {
    console.log(`Tie. ${playerSelection} is the same as ${computerSelection}. no winner.`);
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('You won this round! Rock beats scissors.');
    playerScore += 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('You won this round! Scissors beats paper.');
    playerScore += 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('You won this round! Paper beats rock.');
    playerScore += 1;
  } else { 
    console.log(`You lost this round. ${computerSelection} beats ${playerSelection}.`);
    computerScore += 1;
  }
}

// Play five rounds of the game, display score after each round, and display the ultimate result

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
  playRound();
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  }
  if (playerScore == 3) {
    console.log(`You won the game!\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
  } else console.log(`You lost the game! The computer won.\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
}