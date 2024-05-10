
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0: return "rock";
        case 1: return "scissors";
        case 2: return "paper";
    }
}

function getHumanChoice() {
    let select = prompt("It's your turn! Choose between Rock, Paper, and Scissors:");
    let normalizedSelect = select.toLowerCase();
    if (normalizedSelect === "rock" || normalizedSelect === "paper" || normalizedSelect === "scissors") {
        return normalizedSelect;
    } else {
        alert("Invalid input, please enter Rock, Paper, or Scissors.");
        return getHumanChoice();  
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You've won this round!";
    } else {
        computerScore++;
        return "You've lost this round!";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You've won the game!");
    } else if (humanScore < computerScore) {
        console.log("The computer has won the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}


playGame();