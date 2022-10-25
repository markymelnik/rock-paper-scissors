// Rock, Paper, Scissors

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");
const choiceText = document.querySelector("#choiceText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector(".resetBtn");

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;

choiceBtn.forEach(button => button.addEventListener("click", () => {
  playerSelection = button.textContent.toLowerCase();
  getComputerSelection();
  playerText.textContent = `Player: ${playerSelection}`;
  computerText.textContent = `Computer: ${computerSelection}`;
  resultText.textContent = `Result: ${playRound()}`;
  getScore();
  scoreText.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore}`;
  getResult();
  buttonAppear();
}));

resetBtn.addEventListener("click", () => {
  window.location.reload();
});

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
      return `You tied this round.`;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
      return `You won this round!`;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
      return `You won this round!`;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
      return `You won this round!`;
  } else { 
      return `You lost this round.`;
  }
}

function getScore() {
  if (playerSelection == computerSelection) {
    return;
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return playerScore += 1;
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
     return playerScore += 1;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return playerScore += 1;
  } else return computerScore += 1;
}

function getResult() {
  if (playerScore < 3 && computerScore < 3) {
    choiceText.textContent = `Keep going!`;
  } else if (playerScore > 2 && computerScore < 3) {
    choiceText.textContent = `Congratulations! You won the game! :)`;
  } else if (playerScore < 3 && computerScore > 2) {
    choiceText.textContent = `You lost the game. :( Better luck next time.`;
  } else if (playerScore > 2 && computerScore > 2) {
    choiceText.textContent = `Still going??`;
  }
}

function buttonAppear() {
  if (playerScore < 3 && computerScore < 3) {
    return;
  } else if (playerScore > 2 && computerScore < 3) {
    resetBtn.style.visibility = "visible";
  } else if (playerScore < 3 && computerScore > 2) {
    resetBtn.style.visibility = "visible";
  }
}