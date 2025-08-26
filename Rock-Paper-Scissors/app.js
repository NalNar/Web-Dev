const computerChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    yourChoice.innerHTML = userChoice;
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length); // using * 3 
    console.log(randomNumber);
    console.out(randomNumber);

}