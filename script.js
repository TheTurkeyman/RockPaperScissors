function getComputerChoice() {
let computerChoice = "";
let randomelement = Math.floor(Math.random() * 3);
if (randomelement === 1) {computerChoice = "Rock";}
else if (randomelement === 2) {computerChoice = "Paper";}
else {computerChoice = "Scissors";}
return computerChoice;
}

function getHumanChoice() {
    let humanchoice = prompt("Please type: Rock, Paper or Scissors");
let Caseinsensitive = humanchoice.toLowerCase();
if (Caseinsensitive === "rock") {humanchoice = "Rock";
    console.log("You have picked Rock");}

else if (Caseinsensitive === "paper") {humanchoice = "Paper";
    console.log("You have picked Paper");
}
else if (Caseinsensitive === "scissors") {humanchoice = "Scissors";
    console.log("You have picked Scisssors");
}
else {console.log("Quite an unexpected pick, please try again");}
return humanchoice;}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) 
        {console.log("It's a tie!");}
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock"|| humanChoice === "Scissors" && computerChoice === "Paper")
    {humanScore++;
    console.log(`You won the round! ${humanChoice} beats ${computerChoice}`);}
    else {computerScore++;
        console.log(`You have lost the round! ${computerChoice} beats ${humanChoice}`);}
    }
    

/* const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); */

/* playRound(humanSelection, computerSelection); */

function playGame() {
    for (let i = 0; i < 5; i++)
  playRound(getHumanChoice(), getComputerChoice())
if (humanScore > computerScore) {console.log(`The winner is human, human scored: ${humanScore} computer scored: ${computerScore}`);}
else if (humanScore < computerScore) {console.log(`Computer is the winner, human scored: ${humanScore} computer scored: ${computerScore}`)}
else {console.log(`it’s a tie, human scored: ${humanScore} computer scored: ${computerScore}`)}
}

playGame()


