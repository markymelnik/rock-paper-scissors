// Rock, Paper, Scissors

// Random generation of rock, paper, or scissors from the computer side

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
  mySelection = mySelection.toLowerCase();
  if (mySelection == computerSelection) {
    return "Tie! No winner."
  } else if (mySelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors."
  } else if (mySelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock."
  } else if (mySelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock."
  } else if (mySelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper."
  } else if (mySelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors."
  } else if (mySelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats paper."
  } else return "Invalid input. Try again."
}




