// Cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// Finding the game board and setting to a variable
var gameBoard = document.getElementById('game-board');

// Creating the cards with javascript
var createCards = function(){
	// For loop to create the cards
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		// Set attribute for each element to give card value
		cardElement.setAttribute('data-card', cards[i]);
		// Listen for click event to check if match with isTwoCards
		cardElement.addEventListener('click', isTwoCards);
		// Add cards to board
		gameBoard.appendChild(cardElement);
	}
};

// Checks if two cards are in play
var isTwoCards = function (){
	cardsInPlay.push(this.getAttribute('data-card'));
	// Check for match if two cards in play
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		// Resets the cardsInPlay array to allow retry
		cardsInPlay = [];
	};
	// Show card's picture
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png' alt='king' style='width:150px;height:200px;'>";
	} else {
		this.innerHTML = "<img src='queen.png' alt='queen' style='width:150px;height:200px;'>";
	}
}

// Tests if two cards in play are a match
var isMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		setTimeout(function(){
			alert('You found a match!');},
			200);
	} else {
		setTimeout(function(){
			alert('Sorry, try again!');},
			200);
	}
	// Clears the innerHTML king/queen images to reset board 
	setTimeout(function() {
        var resetCards = document.querySelectorAll('.card');
        for(i=0; i<resetCards.length; i++) {
          resetCards[i].innerHTML = '';
        }
      }, 200);
};