var gameStart = confirm("Want to play a game of hangman?");


// Computer Word Choices

var gameWords = ["Switzerland", "Sweden", "Italy", "Rwanda", "Thailand", "Honduras", "Brazil", "New Zealand", "Liechtenstein", "Mongolia", "Japan", "Egypt", "Libya", "Columbia", "Nigeria", "India", "Russia", "Estonia", "Ukraine"];
// Variable to pick a random word from the gameWord Array

var playWord = gameWords[Math.floor(Math.random() * gameWords.length)];
// Empty Answer array to show up before user has guessed the word

var answerArray = [];
// Other variables

var gameWins = 0;
var gameLosses = 0;
var userGuesses = [];
var gameGuessesLeft = 10;



// function to reset the game 

var reset = function(){
		guessesLeft = 7;
		guessesMade = [];
	}

// For loop establishes the the length of the word, and picks the appropriate number
// of Characters for which to add the underscores to the answer array.

for (var i = 0; i < playWord.length; i++) {
	answerArray[i] = ["_"];
	
}	

// gameplay starts when user selects the first letter

document.onkeyup = function (gameplay) {

// establishes user choice variable with keystroke
	
	var userChoice = event.key;

// takes keystrokes and changes them to lower case:

	String.fromCharCode(event.keyCode).toLowerCase();

//limits user keystrokes to alphabet, also creates an alert if a duplicate key is pressed

	if (event.keyCode >= 65 && event.keyCode <= 90) {
		if (userGuesses.includes(userChoice)) {
			alert("You pressed a duplicate key! Choose another");

				return;

		}	

// Writes html with number of blanks from computer's guess:
	document.getElementById("blankWord");
	blankWord.innerHTML = answerArray.join(" ");
	document.getElementById("guessed");
	guessed.innerHTML = "Letters Guessed:" + " " + userGuesses.join(" ");


	}//closes alphabet if statement
 }  //closes total game function

