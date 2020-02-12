let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}	
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}

flipCard(0);
flipCard(2);