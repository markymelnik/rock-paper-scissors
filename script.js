const max = 4;
const min = 1;
const randomNum = Math.floor(Math.random() * (max - min) + min);

function choiceConversion(randomNum) {
    switch(randomNum) {
      case 1: 
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";  
    } 
}

let computerChoice = choiceConversion(randomNum);









