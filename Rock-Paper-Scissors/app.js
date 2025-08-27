const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

const emojiMap = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️"
};

possibleChoices.forEach(choice =>
  choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = `${userChoice} ${emojiMap[userChoice]}`;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = `${computerChoice} ${emojiMap[computerChoice]}`;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw! 🤝";
  } else {
    const winCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (winCases[userChoice] === computerChoice) {
      result = "You win! 🎉";
    } else {
      result = "You lose! 😢";
    }
  }
  resultDisplay.innerHTML = result;
}
