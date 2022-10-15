function computerPlay() {
	// A number between 0 and 2 (including) is chosen, and an option is selected based on the number
	var rand = Math.floor(Math.random() * 3);
	var chosenOption;
	switch(rand) {
		case 0:
			chosenOption = "rock";
			break;
		case 1: 
			chosenOption = "paper";
			break;
		default:
			chosenOption = "scissors";
			break;
	}
	return chosenOption;
}

function playRound(playerSelection, computerSelection) {
  // Computer selects a random option through the computerPlay() function
  var computerSelection = computerPlay();
	// Player types in their choice through a text prompt
	var playerSelection = prompt("Choose rock, paper or scissors!").toLowerCase();
	// Choices are displayed in the console log
	console.log(`You selected: ${playerSelection}`);
	console.log(`Computer selected: ${computerSelection}`);
	// Decides the outcome of the round, and increments the scores accordingly
	switch(playerSelection) {
		case "rock":
			if (computerSelection == "scissors") {
				console.log("You win! Rock beats Scissors!");
				playerScore++;
			} else if (computerSelection == "paper") {
				console.log("You lose! Paper beats Rock!");
				computerScore++;
			} else {
					console.log("Tie!");
			}
			break;
		case "paper":
			if (computerSelection == "rock") {
				console.log("You win! Paper beats Rock!");
				playerScore++;
			} else if (computerSelection == "scissors") {
				console.log("You lose! Scissors beats Paper!");
				computerScore++;
			} else {
				console.log("Tie!");
			}
			break;
		case "scissors":
			if (computerSelection == "paper") {
				console.log("You win! Scissors beats Paper!");
				playerScore++;
			} else if (computerSelection == "rock") {
				console.log("You lose! Rock beats Scissors!");
				computerScore++;
			} else {
				console.log("Tie!");
			}
			break;
		// Checks for any invalid inputs, in which case the round is restarted
		default:
			alert("Invalid input, try again!");
			playRound(playerSelection, computerSelection);
			break;
    }
}

function game() {
	// Plays a game of 5 rounds of RPS, returns the outcome of the game
  var outcome;
	var playerScore = 0;
	var computerScore = 0;
	for (var i = 0; i < 5; i++) {
		playRound(playerSelection, computerSelection);
	}
	if (playerScore > computerScore) {
		outcome = "You win the game!";
	} else if (playerScore < computerScore) {
		outcome = "The computer wins the game!";
	} else {
		outcome = "Tie game!";
	}
	console.log(`The results: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
	return outcome;
}

console.log(game());