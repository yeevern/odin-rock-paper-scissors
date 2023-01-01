let playerScore = 0;
let computerScore = 0;
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
    if (playerSelection === "rock") {
        if (playerSelection < computerSelection) {
            playerScore++;
            // return `You win! ${playerSelection} beats ${computerSelection}`
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (playerSelection > computerSelection) {
            computerScore++;
            // return `You lose! ${playerSelection} beats ${computerSelection}`
            console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
        }
        else {
            console.log(`Draw`);
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            // return `You win! ${playerSelection} beats ${computerSelection}`
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (computerSelection === "scissors") {
            computerScore++
            // return `You lose! ${playerSelection} beats ${computerSelection}`
            console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
        }
        else {
            console.log(`Draw`);
        }
    }
    else {
        if (computerSelection === "paper") {
            playerScore++;
            // return `You win! ${playerSelection} beats ${computerSelection}`
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if (computerScore === "rock") {
            computerScore++;
            // return `You lose! ${playerSelection} beats ${computerSelection}`
            console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
        }
        else {
            console.log(`Draw`);
        }
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    playerScoreDisplay.innerHTML = playerScore.toString();
    computerScoreDisplay.innerHTML = computerScore.toString();
    resultDisplay.innerHTML = playRound(playerSelection, computerSelection);
    selectionDisplay.innerHTML = `<li>Computer selected: ${computerSelection}</li> <li>Player selected: ${playerSelection}</li>`;
    if (Math.max(playerScore, computerScore) === maxScore) {
        let winner = playerScore === maxScore ? "Player" : "Computer";
        alert(`${winner} is the winner!`);
        document.querySelectorAll('button').forEach(elem => elem.onclick = null);
    } 
}

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.result');
const selectionDisplay = document.querySelector('.selection');
document.querySelectorAll('button').forEach(elem => elem.onclick = () => {game(elem.textContent);});