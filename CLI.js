var inquirer = require("inquirer");
var Letter = require("./letters.js");
var Word = require("./words.js");

var numGuesses = 9;


inquirer.prompt([
	{
		name:"guess",
		message:"Guess a letter!"
	}

	]).then(function(answers){
		// console.log(answers);
		test(answers);
		// console.log(firstWord);
	})


var firstWord = new Word('jerome');

// console.log('this is our jerome word -------', firstWord);

function test(answer) {
	var stringToLog = '';
	console.log(answer);
	// console.log(firstWord.letters.length);

	// console.log(firstWord.letter);
	for (var i = 0; i < firstWord.letters.length; i++) {
		if (firstWord.letters[i].actualLetter === answer.guess) {
			firstWord.letters[i].guessed = true;
		}
	};

	for (var i = 0; i < firstWord.letters.length; i++) {
		if (firstWord.letters[i].guessed === true) {
			stringToLog += firstWord.letters[i].actualLetter
		} else if (firstWord.letters[i].guessed === false) {
			stringToLog += firstWord.letters[i].tempDisplay;
		}
	}
	console.log('this is the pretty string !!! ---:', stringToLog);
}





