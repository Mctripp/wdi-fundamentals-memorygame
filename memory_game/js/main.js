const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
		{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
		{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	}
];
let cardsInPlay = [];

function resetCard(cardImage1, cardImage2){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.querySelectorAll('.playingCard')[i];
		if((cardElement.getAttribute('src') === cardImage1)
			|| (cardElement.getAttribute('src') === cardImage2)){
			cardElement.setAttribute('src', 'images/back.png');
		}
	}
}

function checkForMatch(){
	if((cardsInPlay[0].rank === cardsInPlay[1].rank)
		&&(cardsInPlay[0].suit === cardsInPlay[1].suit)){
		document.getElementById('game-state').textContent = 'You found a match!';
		cardsInPlay.pop();
		cardsInPlay.pop();
	} 
	else {
		document.getElementById('game-state').textContent = 'Sorry, try again.';
		let cardImage1 = cardsInPlay[0].cardImage;
		let cardImage2 = cardsInPlay[1].cardImage;
		cardsInPlay.pop();
		cardsInPlay.pop();
		setTimeout(resetCard,2000, cardImage1, cardImage2);
	}	
}

function flipCard(cardElement){
	let cardId = this.getAttribute('data-id');
	if(this.getAttribute('src') !== 'images/back.png'){
		document.getElementById('game-state').textContent = 'Please pick a face-down card.';
		return;
	}
	console.log("User flipped " + cards[cardId].rank + ".");
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay[0] && cardsInPlay[1]){
		checkForMatch();
	} else {
		document.getElementById('game-state').textContent = 'Choose your second card.';
	}
}

function createBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'playingCard');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard(){
	for(let i = 0; i < cards.length; i++){
		let cardElement = document.querySelectorAll('.playingCard')[i];
		console.log("Card " + i + " reset.");
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.addEventListener('click', flipCard);
		cardsInPlay = [];
		document.getElementById('game-state').textContent = 'Go again! Pick your first card.';
	}
}

createBoard();

document.getElementById('reset-button').addEventListener('click', resetBoard);