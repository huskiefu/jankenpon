//create a function that will rnadomly return either "Rock", "Scissors" or "Paper"
//Create an array with elements, rock, paper and scissors.
let choices = ['Rock','Paper','Scissors']
//play the round
let playerScore = 0;
let computerScore = 0;
game();
//Create function ComputerPlay that generates random choice
function ComputerPlay(){
    let computerChoice= choices[Math.floor(Math.random()*3)];
    return computerChoice;  
}
//Create function playRound that returns winner
function playRound(playerSelection,computerSelection){
//use cases to determine winner 
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'Rock'){
            console.log("No Winner! Both used Rock!");
            return;
        } else if (computerSelection === 'Paper') {
            console.log("You Lose! Paper beats Rock!");
            computerScore++;
            return computerScore;
        } else {
           console.log("You Win! Rock beats Scissors!");
           playerScore++;
           return playerScore;
        }
    } else if (playerSelection.toLowerCase()==='scissors') {
        if (computerSelection === 'Rock') {
            console.log("You Lose! Rock beats Scissors!")
            computerScore++;
            return computerScore;
        } else if (computerSelection === 'Paper') {
            console.log("You Win! Scissors beats Paper!")
            playerScore++;
            return playerScore;
        } else {
            console.log("No Winner! Both used Scissors!")
            return;
        }
        }  else if (playerSelection.toLowerCase()==='paper') {
            if (computerSelection === 'Rock') {
                console.log("You Win! Paper beats Rock!");_
                playerScore++;
                return playerScore;
            } else if (computerSelection === 'Paper') {
                console.log("No Winner! Both used Paper")
                return;
            } else {
                console.log("You Lose! Scissors beats Paper!");
                computerScore++;
                return computerScore;
            }
        } else {
            return "Invalid Input! Please choose from Rock, Paper, or Scissors!"
        }
    }

    //write a function "Game" that loops 5 rounds of playRound and keeps score, then prints the winner.
    function game() {
        //playRound 5 times
        for (let i = 0; i < 5; i++) {
            //get input from the player
        let playerSelection = prompt("What will you choose?");
        let computerSelection = ComputerPlay();
        playRound(playerSelection,computerSelection); 
        }
        if (playerScore>computerScore) {
            console.log("Congratulations! You are the champion!");
        } else if (computerScore > playerScore) {
            console.log("Too Bad! CPU is the champion!");
        } else console.log("It's a tie! Try again!");
    }