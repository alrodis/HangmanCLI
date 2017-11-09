var Letter = require("./letters.js");

function Word(wordString) {
	this.word = wordString
	this.letters = [];

	for (var i = 0; i < wordString.length; i ++) {
		var letterObj = new Letter(wordString[i]);
		this.letters.push(letterObj);
	}
}






module.exports = Word;