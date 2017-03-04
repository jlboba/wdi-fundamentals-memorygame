// Card variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// Checking equality between two cards
/* if (cardTwo === cardFour) {
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
} */

var board = document.getElementById('game-board');


// Finding the game board and setting to a variable
var gameBoard = document.getElementById('game-board');

// Creating the cards with javascript
var createCards = function(cards){
	// For loop to create the cards and append to board
	for (var i=0; i<cards; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
	}
}
