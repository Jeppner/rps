let winner;
let roundResult;
let results = document.querySelector('.results');
let btns = document.querySelectorAll('.btn');
let playerChoice;

let playerScore = 0;
let computerScore = 0;

let scores = document.querySelector('.scores');

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1)
    switch(rand) {
        case rand = 1:
            return 'rock';
        case rand = 2:
            return 'paper';
        case rand = 3:
            return 'scissors';
    }
}

btns.forEach(btn => btn.addEventListener('click', function() {
    playerChoice = String(btn.getAttribute('data-rps'));
    game();
}));

function rockPaperScissors() {
    let computerChoice = getComputerChoice();

    if(playerChoice === computerChoice) {
        winner = 'tied';
    } else if (playerChoice == 'rock') {
        if(computerChoice == 'scissors') {
            playerScore++;
            winner = 'player';
        } else if (computerChoice === 'paper') {
            winner = 'computer';
            computerScore++;
        } 
    } else if (playerChoice == 'paper') {
        if(computerChoice == 'scissors') {
            winner = 'computer';
            computerScore++;
        } else if (computerChoice == 'rock') {
            winner = 'player';
            playerScore++;
        } 
    } else if (playerChoice == 'scissors') {
        if(computerChoice == 'rock') {
            winner = 'computer';
            computerScore++;
        } else if (computerChoice == 'paper') {
            winner = 'player';
            playerScore++;
        } 

    } if (winner == 'player') {
        roundResult = 'won';
    } else if (winner == 'computer') {
        roundResult = 'lost';
    } else {
        roundResult = 'tied';
    }
    results.textContent = `You ${roundResult}! You chose ${playerChoice} and the computer chose ${computerChoice}.`
}

function game() {
    rockPaperScissors();
    scores.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;

    if(playerScore == 5) {
        results.textContent = `You won the game! Congratulations!`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        results.textContent = `You lost the game. You suck!`;
        playerScore = 0;
        computerScore = 0;
    }
}


// function rockPaperScissors(playerChoice, computerSelection) {
//     computerSelection = getComputerChoice();
//     let playerSelection = String(playerChoice).toLowerCase();
//     if(playerSelection === computerSelection) {
//         winner = 'tie';
//         return console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. The round is a tie!`);
//     } else if(playerSelection === 'scissors') {
//         if(computerSelection === 'rock') {
//             winner = 'computer';
//         } else if(computerSelection === 'paper') {
//             winner = 'player';
//         }
//     } else if(playerSelection === 'rock') {
//         if(computerSelection === 'paper') {
//             winner = 'computer';
//         } else if(computerSelection === 'scissors') {
//             winner = 'player';
//         }
//     } else if (playerSelection === 'paper') {
//         if(computerSelection === 'rock') {
//             winner = 'player';
//         } else if(computerSelection === 'scissors'); {
//             winner = 'computer';
//         }
//     } else {
//         return `Invalid choice! Please choose rock, paper, or scissors.`;
//     }
//     console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. The winner is ${winner}!`);
//     return winner;
// }