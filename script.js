// Rock, Paper, Scissors (Best of 5!)

const playerText = document.querySelector("#player")
const computerText = document.querySelector("#computer")
const resultText = document.querySelector("#result")
const choiceBtns = document.querySelectorAll(".choiceBtn");

let playerSelection;
let computerSelection;
let playerScore;
let computerScore;

choiceBtns.forEach(button => button.addEventListener("click", () => {
  playerSelection = button.textContent;
  getComputerSelection();
  playerText.textContent = `Player: ${playerSelection}`;
  computerText.textContent = `Computer: ${computerSelection}`;
  resultText.textContent = `Result: ${playRound()}`
}));

function getComputerSelection() {
  const randomNum = Math.floor(Math.random() * (3));   
  switch(randomNum) {
      case 0: 
        return computerSelection = 'rock';
      case 1:
        return computerSelection = 'paper';
      case 2:
        return computerSelection = 'scissors';
    } 
}

function playRound() {
  if (playerSelection == computerSelection) {
      return `Tie game.`;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      return `You won!`;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      return `You won!`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      return `You won!`;
  } else { 
      return `You lost.`;
  }
}

/* 

let playerScore;
let computerScore;

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
  playRound();
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  }
  if (playerScore == 3) {
    console.log(`You won the game!\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
  } else console.log(`You lost the game! The computer won.\nPlayer Score: ${playerScore}, Computer Score: ${computerScore}`);
}

*/