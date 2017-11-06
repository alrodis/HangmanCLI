function Word(wordString) {
	this.word = wordString
	this.letters = [];

	for (var i = 0; i < wordString.length; i ++) {
		var letterObj = new Letter(wordString[i]);
		this.letters.push(letterObj);
	}
}


function Letter(singleLetter) {
	this.actualLetter = singleLetter
	this.tempDisplay = ' _'
	this.guessed = false
}



var firstWord = new Word('jerome');

// console.log('this is our jerome word -------', firstWord);


var stringToLog = '';

firstWord.letters[0].guessed = true
firstWord.letters[3].guessed = true

for (var i = 0; i < firstWord.letters.length; i ++) {
	if (firstWord.letters[i].guessed === true) {
		stringToLog += firstWord.letters[i].actualLetter
	} else if (firstWord.letters[i].guessed === false) {
		stringToLog += firstWord.letters[i].tempDisplay;
	}
}


console.log('this is the pretty string !!! ---:', stringToLog);