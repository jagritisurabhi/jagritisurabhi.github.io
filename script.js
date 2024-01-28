const button_element = document.querySelectorAll('button');

const result_element = document.getElementById("result");

const playerscore_element = document.getElementById("player-score");

const computerscore_element = document.getElementById("computer-score");


let playerScore = 0;
let computerScore = 0;


button_element.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        // console.log(result);
        result_element.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "stone" && computerSelection === "paper")
    ) {
        playerScore++;
        playerscore_element.textContent = playerScore;
        return "You won- " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        computerscore_element.textContent = computerScore;
        return "You lost- " + computerSelection + " beats " + playerSelection;
    }
}