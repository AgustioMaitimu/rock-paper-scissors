let choices = ['Rock', 'Paper', 'Scissor'];
let computerChoice;
let playerChoice;

function getPlayerChoice() {
    let playerInput = prompt('What Do You Pick');
    return playerInput.charAt(0).toUpperCase() + playerInput.substring(1).toLowerCase();
};

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound(playerDecision, computerDecision) {
    if (playerChoice == 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                return 'Draw! You Both Picked Rock'
            case 'Paper':
                return 'You Lost! Paper Beats Rock'
            case 'Scissor':
                return 'You Won! Rock Beats Scissor'
        }; 
    } else if (playerChoice == 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                return 'You Won! Paper Beats Rock'
            case 'Paper':
                return 'Draw! You Both Picked Paper'
            case 'Scissor':
                return 'You Lost! Scissor Beats Paper'
        }; 
    } else if (playerChoice == 'Scissor') {
        switch (computerChoice) {
            case 'Rock':
                return 'You Lost! Rock Beats Scissor'
            case 'Paper':
                return 'You Won! Scissor Beats Paper'
            case 'Scissor':
                return 'Draw! You Both Picked Scissor'
        }; 
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        console.log(`Your Choice: ${playerChoice}\nComputer Choice: ${computerChoice}`)
        console.log(playRound(playerChoice, computerChoice));
    };
};

game()