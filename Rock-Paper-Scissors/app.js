const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // 0,1,2
  if (randomNumber === 0) {
    computerChoice = 'rock';
  }
  if (randomNumber === 1) {
    computerChoice = 'paper';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'paper' && userChoice === 'scissors') ||
    (computerChoice === 'scissors' && userChoice === 'rock')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }
  resultDisplay.innerHTML = result;
}
