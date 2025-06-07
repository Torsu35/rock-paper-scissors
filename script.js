// Get all the DOM elements
const computerChoiceDiv = document.querySelector('#computer_choice');
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundDiv = document.querySelector("#round");
const userChoiceDiv = document.querySelector("#user_choice");
let userScoreDiv = document.querySelector("#userScore");
let computerScoreDiv = document.querySelector("#computerScore");
const declarationDiv = document.querySelector("#declaration");
const winner = document.querySelector("#score-cards"); 

// Capture the initial state of the 'Div'
const scoreCards = winner.innerHTML;

//Create a resetGameBtn
let resetGameBtn = null;

// Scores and round tracker
let humanScore = 0;
let computerScore = 0;
let round = 1;

// Random computer choice
function getComputerChoice() {

    let computerSelect = Math.floor(Math.random() * 3);
    let computerChoice;

    if(computerSelect == 0){
        computerChoice = "ROCK";
    }else if(computerSelect == 1){
        computerChoice = "PAPER";
    }else if(computerSelect == 2){
        computerChoice = "SCISSORS";
    }
    return computerChoice;
}

// Main round logic
function playGame(humanChoice) {
    const computer = getComputerChoice();
    let result = "";

    // Game logic
    if (humanChoice === computer) {
        result = "It's a tie. Let's go!";
    } else if (
        (humanChoice === "ROCK" && computer === "SCISSORS") ||
        (humanChoice === "PAPER" && computer === "ROCK") ||
        (humanChoice === "SCISSORS" && computer === "PAPER")
    ) {
        result = `You won! ${humanChoice} beats ${computer}.`;
        humanScore++;
    } else {
        result = `You lose! ${computer} beats ${humanChoice}.`;
        computerScore++;
    }

    // Update DOM
    userChoiceDiv.textContent = humanChoice;
    computerChoiceDiv.textContent = computer;
    userScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
    declarationDiv.textContent = result;
    roundDiv.textContent = `ROUND ${round}`;
    round++;

    // Check for game end
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }

    
}

function endGame(){

     winner.setAttribute("style", "font-size: 35px; display: flex; flex-direction: column; justify-content: center; align-items: center;");
    if (humanScore === 5) {
        winner.textContent = "🎉 You Win the Game!";
        winner.style.color = "rgb(68, 247, 82)";
    }else{
        winner.textContent = "😢 Computer Wins the Game!"
        winner.style.color = "rgb(250, 51, 51)";
    }
    
    //Create resetBtn
    if(!resetGameBtn){
        resetGameBtn = document.createElement("button");
        resetGameBtn.textContent = "Reset";
        resetGameBtn.setAttribute("style", "background-color: aqua; border-radius: 3px ; width: 100px;");
        resetGameBtn.addEventListener("click", resetGame);
        
    }

    winner.appendChild(resetGameBtn);

    disableButtons();
    
}

// Reset everything
function resetGame() {
   humanScore = 0;
    computerScore = 0;
    round = 1;
    userChoiceDiv.textContent = "";
    computerChoiceDiv.textContent = "";
    declarationDiv.textContent = "Let's go again!";
    roundDiv.textContent = ""
    
    // Restore the score board
    winner.removeAttribute("style");
    winner.innerHTML = scoreCards;
    
    userScoreDiv = document.querySelector("#userScore");
    computerScoreDiv = document.querySelector("#computerScore");
    
    userScoreDiv.textContent = "0";
    computerScoreDiv.textContent = "0";

    resetGameBtn = null;

    enableButtons();
}

//Disable the buttons
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}



// Hook up buttons to playGame
rockBtn.addEventListener('click', () => playGame("ROCK"));
paperBtn.addEventListener('click', () => playGame("PAPER"));
scissorsBtn.addEventListener('click', () => playGame("SCISSORS"));
