const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');

// Scoreboard elements
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const drawScoreDisplay = document.getElementById('draw-score');

let userChoice;
let computerChoice;
let result;

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

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
    drawScore++;
  } else {
    const winCases = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (winCases[userChoice] === computerChoice) {
      result = "You win! 🎉";
      userScore++;
    } else {
      result = "You lose! 😢";
      computerScore++;
    }
  }

  resultDisplay.innerHTML = result;

  // Debug logs
  console.log("Scores → User:", userScore, "Computer:", computerScore, "Draws:", drawScore);

  // Update scoreboard
  userScoreDisplay.innerHTML = user-score;
  computerScoreDisplay.innerHTML = computer-score;
  drawScoreDisplay.innerHTML = draw-score;
}
