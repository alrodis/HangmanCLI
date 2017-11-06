var inquirer = require("inquirer");

var numGuesses = 9;

inquirer.prompt([
	{
		name:"guess",
		message:"Guess a letter!"
	}

	]).then(function(answers){
		console.log(answers);
	})