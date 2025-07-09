const btnrock = document.querySelector("#buttonrock");
const btnpaper = document.querySelector("#buttonpaper");
const btnscissors = document.querySelector("#buttonscissors");
const gamecache = document.querySelector("#Cache");
const roundresults = document.querySelector("#RResults");
const totalresults = document.querySelector("#TResults");

function getComputerChoice() {
let computerChoice = "";
let randomelement = Math.floor(Math.random() * 3);
if (randomelement === 1) {computerChoice = "Rock";}
else if (randomelement === 2) {computerChoice = "Paper";}
else {computerChoice = "Scissors";}
return computerChoice;
}

function getHumanChoice(epick) {
let humanChoice = "";
let selectedtool = epick.target.id; 

switch (selectedtool) {
    case "buttonrock":
        humanChoice = "Rock";
        break;
    case "buttonpaper":
        humanChoice = "Paper";
        break;
    case "buttonscissors":
        humanChoice = "Scissors";
        break;
    default:
        console.log('Invalid pick...');
}

return humanChoice;
};


let humanScore = 0;
let computerScore = 0;

function testfix(a,b) {

let stepone = getHumanChoice(a);
let steptwo = getComputerChoice(b);
playRound(stepone, steptwo);
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) 
        {let tiemsg = document.createElement('p')
            tiemsg.textContent = `It's a tie! Current human score is: ${humanScore} and current computer score is ${computerScore}`;
            roundresults.appendChild(tiemsg);}
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock"|| humanChoice === "Scissors" && computerChoice === "Paper")
    {humanScore++;
    let hwmsg = document.createElement('p')
            hwmsg.textContent = `You won the round! ${humanChoice} beats ${computerChoice}! Current human score is: ${humanScore} and current computer score is ${computerScore}`;
            roundresults.appendChild(hwmsg);}
    else {computerScore++;
            let cwmsg = document.createElement('p')
            cwmsg.textContent = `You have lost the round! ${computerChoice} beats ${humanChoice}! Current human score is: ${humanScore} and current computer score is ${computerScore}`;
            roundresults.appendChild(cwmsg);}
     if (humanScore === 5) {roundresults.textContent = "";
     let HWIT = document.createElement("p");
     HWIT.textContent = "Human has won!"
     humanScore = 0;
     computerScore = 0;
    totalresults.appendChild(HWIT);}
    else if (computerScore === 5){roundresults.textContent = "";
        let CWIT = document.createElement("p");
     CWIT.textContent = "Computer has won!"
     humanScore = 0;
     computerScore = 0;
    totalresults.appendChild(CWIT)
    };
        }


    

/* const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(); */

/* playRound(humanSelection, computerSelection); */

/* function playGame() {
    for (let i = 0; i < 5; i++)
  playRound(getHumanChoice(), getComputerChoice())
if (humanScore > computerScore) {console.log(`The winner is human, human scored: ${humanScore} computer scored: ${computerScore}`);}
else if (humanScore < computerScore) {console.log(`Computer is the winner, human scored: ${humanScore} computer scored: ${computerScore}`)}
else {console.log(`it’s a tie, human scored: ${humanScore} computer scored: ${computerScore}`)}
}
 */
// playGame()


btnrock.addEventListener('click', testfix);
btnpaper.addEventListener('click', testfix);
btnscissors.addEventListener('click', testfix);


