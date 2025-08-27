    const computerChoiceDisplay = document.getElementById('computer-choice');
    const yourChoiceDisplay = document.getElementById('user-choice');
    const resultDisplay = document.getElementById('results');
    const possibleChoices = document.querySelectorAll('button');
    let userChoice;

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        yourChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
    }));

    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length);
        console.log(randomNumber);
    }
