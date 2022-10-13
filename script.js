// Rock, Paper, Scissors

// Random generation of either rock, paper, or scissors from the computer side

const max = 4;
const min = 1;
const randomNum = Math.floor(Math.random() * (max - min) + min);

function getComputerChoice(randomNum) {
    switch(randomNum) {
      case 1: 
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";  
    } 
}

let computerSelection = getComputerChoice(randomNum);

// All possible outcomes based on user input and computer selection

function playRound(mySelection, computerSelection) {
  if (mySelection != "rock" && mySelection != "paper" && mySelection != "scissors") {
    return "invalid input. try again."
  } else if (mySelection == computerSelection) {
    return "tie. no winner."
  } else if (mySelection == "rock" && computerSelection == "scissors") {
    return "you win! rock beats scissors."
  } else if (mySelection == "scissors" && computerSelection == "paper") {
    return "you win! scissors beats paper."
  } else if (mySelection == "paper" && computerSelection == "rock") {
    return "you win! paper beats rock."
  } else return `you lose. ${computerSelection} beats ${mySelection}.`
}

// Play five rounds of the game

let myCount = 0;
let computerCount = 0;

function game(mySelection) {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(mySelection, computerSelection));
  }
}

console.log(game("scissors"));