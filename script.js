console.log('Hello World ');

// Create the function named getComputerChoice

function getComputerChoice(){

    // Obtain computer choice  with the Math.random method & 
    // if...elseif statement

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

// Create a function named getHumanChoice

function getHumanChoice(){

    // obtain user choice

    let userSelect = parseInt(prompt('Select an item: \n1.ROCK \n2.PAPER \n3.SCISSORS'));

    while(userSelect > 3 || userSelect <1){

        userSelect = parseInt(prompt('Try Again. \nSelect an item: \n1.ROCK \n2.PAPER \n3.SCISSORS'));
    }

    let userChoice;

    // Check user choice
    switch(userSelect) {
        case 1:
            userChoice = "ROCK";
            break;
        case 2:
            userChoice = "PAPER";
            break;
        case 3:
            userChoice = "SCISSORS"
            break;
       
        
    }

    return userChoice;

}


// Declare the function playGame

let playGame = ()=> {
    // Initialize new variables to store the scores of the computer and the user 
    
    let humanScore = 0;
    let computerScore = 0;
    
    // Declare a function named playRound
    
    function playRound(humanChoice, computerChoice){
    

        // Initialize result for each round 
        let result;

        // Check the winner of each round 
    
        if(humanChoice === computerChoice){
            result = "It's a tie. Let's go!";
        }else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
            result = "You lose! Paper beats Rock.";
            computerScore++;
        }else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
            result = "You lose! Scissors beats Paper.";
            computerScore++;
        }else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
            result = "You lose! Rock beats Scissors.";
            computerScore++;
        }else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
            result = "You won! Rock beats Scissors.";
            humanScore++;
        }else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
            result = "You won! Paper beats Rock.";
            humanScore++;
        }else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
            result = "You won! Scissors beats Paper.";
            humanScore++;
    
        }else{
            result = 'Ooops, Try Again!';
        }
    
    
        console.log(result);
    }
    
    
    // Loop the game for 5 rounds 
    for(let play = 1; play < 6; play++){
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(humanSelection, computerSelection);
        
        // Display the results 
        console.log(`Round: ${play}`);
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`)

    }


    


}

playGame();

