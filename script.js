let playerScore = 0;
let computerScore = 0;
let rounds = 1;
const maxScore = 5;

const options = ["rock", "paper", "scissors"]
function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    rounds++;
    if (playerSelection === "rock") {
        if (playerSelection < computerSelection) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
        else if (playerSelection > computerSelection) {
            computerScore++;
            return `You lose! ${playerSelection} beats ${computerSelection}`
        }
        else {
            return `Draw! Both pick ${playerSelection}, ${computerSelection}`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
        else if (computerSelection === "scissors") {
            computerScore++
            return `You lose! ${playerSelection} beats ${computerSelection}`
        }
        else {
            return `Draw! Both pick ${playerSelection}, ${computerSelection}`;
        }
    }
    else {
        if (computerSelection === "paper") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`
        }
        else if (computerSelection === "rock") {
            computerScore++;
            return `You lose! ${playerSelection} beats ${computerSelection}`
        }
        else {
            return `Draw! Both pick ${playerSelection}, ${computerSelection}`;
        }
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    roundsDisplay.innerHTML = `ROUND ${rounds}`;
    playerScoreDisplay.innerHTML = playerScore.toString();
    computerScoreDisplay.innerHTML = computerScore.toString();
    resultDisplay.innerHTML = playRound(playerSelection, computerSelection);
    selectionDisplay.innerHTML = `<li>Player selected: ${playerSelection}</li> <li>Computer selected: ${computerSelection}</li>`;
    if (Math.max(playerScore, computerScore) === maxScore) {
        let winner = playerScore === maxScore ? "Player" : "Computer";
        alert(`${winner} is the winner!`);  // display the winner
        document.querySelectorAll('button').forEach(elem => elem.onclick = null);  // set it to null so that it wont keep calling game() after concluding a winner
    } 
}

const roundsDisplay = document.querySelector('.rounds');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.result');
const selectionDisplay = document.querySelector('.selection');
document.querySelectorAll('button').forEach(elem => elem.onclick = () => {game(elem.textContent);});  // set attribute according to player selected button