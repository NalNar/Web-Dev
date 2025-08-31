const cardArray =[
    {
        name: 'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream'
    },
    {
        name:'milkshake',
        img: 'images/milkshake'
    },
    {
        name:'pizza',
        img: 'images/pizza'
    },
    {
        name: 'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream'
    },
    {
        name:'milkshake',
        img: 'images/milkshake'
    },
    {
        name:'pizza',
        img: 'images/pizza'
    }
];
cardArray.sort(()=> 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',id);
        card.addEventListener('click',flipCard);
        gridDisplay.append(card);
    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('check for match');
    
    if (optionOneId == optionTwoId){
        alert('you have clicked the same image!');
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You have a match')
        cards[cardsChosenIds[0]].setAttribute('src','images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src','images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen);
    } else {
            cards[cardsChosenIds[0]].setAttribute('src','images/black.png');
            cards[cardsChosenIds[1]].setAttribute('src','images/black.png');
            alert('sorry try again!');  

    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length/2 ){
        resultDisplay.innerHTML = 'Congratulations you found them all';

    }
}
 
function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500);
    }

}