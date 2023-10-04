let choices = ['Rock', 'Paper', 'Scissor'];
let computerChoice;
let playerChoice;

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    computerChoice = getComputerChoice()
    playerChoice = (e.target.innerHTML).slice(0, - 3)
    console.log(playerChoice)
    playRound(playerChoice, computerChoice);
});

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound() {
    if (playerChoice == 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                break;
            case 'Paper':
                break;
            case 'Scissor':
                break;
        }; 
    } else if (playerChoice == 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                break;
            case 'Paper':
                break;
            case 'Scissor':
                break;
        }; 
    } else if (playerChoice == 'Scissor') {
        switch (computerChoice) {
            case 'Rock':
                break;
            case 'Paper':
                break;
            case 'Scissor':
                break;
        }; 
    }
};

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playerChoice = getPlayerChoice();
//         computerChoice = getComputerChoice();
//         console.log(`Your Choice: ${playerChoice}\nComputer Choice: ${computerChoice}`)
//         console.log(playRound(playerChoice, computerChoice));
//     };
// };

// game()