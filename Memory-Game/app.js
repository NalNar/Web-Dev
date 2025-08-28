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

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',id);
        gridDisplay.append(card);
    }
}
createBoard();