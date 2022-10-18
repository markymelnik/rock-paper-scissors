// Rock, Paper, Scissors

// Random generation of either rock, paper, or scissors from the computer side

function getComputerChoice() {
  const max = 4;
  const min = 1;
  const randomNum = Math.floor(Math.random() * (max - min) + min);   
  switch(randomNum) {
      case 1: 
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";  
    } 
}

// All possible outcomes based on user input and computer selection

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
    console.log("invalid input. try again.")
  } else if (playerSelection == computerSelection) {
    console.log(`tie. ${playerSelection} is the same as ${computerSelection}. no winner.`);
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("you win! rock beats scissors.")
    playerScore = playerScore + 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("you win! scissors beats paper.") 
    playerScore = playerScore + 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("you win! paper beats rock.")
    playerScore = playerScore + 1;
  } else { 
    console.log(`you lose. ${computerSelection} beats ${playerSelection}.`)
    computerScore = computerScore + 1;
  }
}

// Play five rounds of the game

function playGame(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  while (playerScore < 3 && computerScore < 3) {
  playRound(playerSelection);
  }
  if (playerScore == 3) {
    console.log("You win!\nPlayer Score:", playerScore, "Computer Score:", computerScore)
  } else console.log("You lose!\nPlayer Score:", playerScore, "Computer Score:", computerScore)
}