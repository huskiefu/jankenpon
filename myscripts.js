//create a function that will rnadomly return either "Rock", "Scissors" or "Paper"
//Create an array with elements, rock, paper and scissors.
let choices = ['Rock','Paper','Scissors']
//play the round
let playerScore = 0;
let computerScore = 0;
//Create function ComputerPlay that generates random choice
function computerPlay(){
    let computerChoice= choices[Math.floor(Math.random()*3)];
    return computerChoice;  
}

//Create function playRound that returns winner
function playRound(playerSelection,computerSelection){
//use cases to determine winner 
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'Rock'){
            gameText.textContent = "No  Winner!  Both  used  Rock!";
            checkScore(playerScore,computerScore);
            return;
        } else if (computerSelection === 'Paper') {
            gameText.textContent = "You  Lose!  Paper  beats  Rock!";
            computerScore++;
            cScore.textContent = computerScore;
            checkScore(playerScore,computerScore);
        } else {
            gameText.textContent = "You  Win!  Rock  beats  Scissors!";
           playerScore++;
           pScore.textContent = playerScore;
           checkScore(playerScore,computerScore);
        }
    } else if (playerSelection.toLowerCase()==='scissors') {
        if (computerSelection === 'Rock') {
            gameText.textContent = "You  Lose!  Rock beats Scissors!"
            computerScore++;
            cScore.textContent = computerScore;
            checkScore(playerScore,computerScore);
        } else if (computerSelection === 'Paper') {
            gameText.textContent = "You  Win!  Scissors  beats  Paper!"
            playerScore++;
            pScore.textContent = playerScore;
            checkScore(playerScore,computerScore);
        } else {
            gameText.textContent = "No  Winner!  Both  used  Scissors!"
            checkScore(playerScore,computerScore);
        }
        }  else if (playerSelection.toLowerCase()==='paper') {
            if (computerSelection === 'Rock') {
                gameText.textContent = "You  Win!  Paper  beats  Rock!";
                playerScore++;
                pScore.textContent = playerScore;
                checkScore(playerScore,computerScore);
            } else if (computerSelection === 'Paper') {
                gameText.textContent = "No  Winner!  Both  used  Paper"
                checkScore(playerScore,computerScore);
            } else {
                gameText.textContent = "You  Lose!  Scissors  beats  Paper!";
                computerScore++;
                cScore.textContent = computerScore;
                checkScore(playerScore,computerScore);
            }
        } else {
            return "Invalid Input! Please choose from Rock, Paper, or Scissors!"
        }
    }

    function playrock(){
        let computerSelection = computerPlay();
        playRound('rock',computerSelection);
    }

    function playScissors(){
        let computerSelection = computerPlay();
        playRound('scissors',computerSelection);
    }

    function playPaper(){
        let computerSelection = computerPlay();
        playRound('paper',computerSelection);
    }


    const rock = document.querySelector("#rock");
    rock.addEventListener('click',playrock);
    const paper = document.querySelector("#paper");
    paper.addEventListener('click',playPaper);
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click',playScissors);

    const gameText = document.querySelector('.gameText');

    const pScore = document.querySelector('.playerScore');
    pScore.textContent = playerScore;
    const cScore = document.querySelector('.computerScore')
    cScore.textContent = computerScore;

    function checkScore(playerScore,computerScore) {
        if (playerScore === 5) {
            gameText.textContent= "PLAYER  WINS !!!!!!! CONGRATULATIONS  TO  OUR  CHAMPION";
            playerScore = 0;
            computerScore =0;
            pScore.textContent = playerScore;
            cScore.textContent = computerScore;
        }
        else if (computerScore === 5) {
            gameText.textcontent= "COMPUTER  WINS !!!!!!! CONGRATULATIONS  TO  OUR  CHAMPION";
            playerScore = 0;
            computerScore = 0;
            pScore.textContent = playerScore;
            cScore.textContent = computerScore;
        }
        else return;
    }