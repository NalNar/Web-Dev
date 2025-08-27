const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => 
    possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        yourChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    })
);

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultDisplay.innerHTML = "You win!";
    } else {
        resultDisplay.innerHTML = "You lose!";
    }
}
