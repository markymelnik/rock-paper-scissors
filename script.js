// Rock, Paper, Scissors (Best of 5!)

// Prompt the player for an input and return a valid input of either 'rock', 'paper', or 'scissors'

function getPlayerSelection() {
  let playerInput = prompt('Rock, paper, or scissors? Best of 5!');
  return playerInput;
}

// Random generation of either rock, paper, or scissors from the computer side

function getComputerSelection() {
  const max = 4;
  const min = 1;
  const randomNum = Math.floor(Math.random() * (max - min) + min);   
  switch(randomNum) {
      case 1: 
        return 'rock';
      case 2:
        return 'paper';
      case 3:
        return 'scissors';
    } 
}

// All possible outcomes based on player selection and computer selection

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();
  if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
    console.log(console.log(`'${playerSelection}' is an invalid input. Choose either rock, paper, or scissors.`));
  } else if (playerSelection == computerSelection) {
    console.log(`Tie. ${playerSelection} is the same as ${computerSelection}. no winner.`);
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log('You won this round! rock beats scissors.')
    playerScore = playerScore + 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log('You won this round! Scissors beats paper.') 
    playerScore = playerScore + 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log('You won this round! Paper beats rock.')
    playerScore = playerScore + 1;
  } else { 
    console.log(`You lost this round. ${computerSelection} beats ${playerSelection}.`)
    computerScore = computerScore + 1;
  }
}

// Play five rounds of the game, display score after each round, and display the ultimate result

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
  playRound();
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  }
  if (playerScore == 3) {
    console.log(`You won the game!\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`)
  } else console.log(`You lost the game! The computer won.\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`)
}