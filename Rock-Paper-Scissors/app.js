document.addEventListener('DOMContentLoaded', function() {
    const computerChoice = document.getElementById('computerChoice');
    const yourChoice = document.getElementById('yourChoice');
    const resultDisplay = document.getElementById('results');
    const possibleChoices = document.querySelectorAll('button');
    let userChoice;

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        yourChoice.innerHTML = userChoice;
    }));

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length);
        console.log(randomNumber);
    }
});