let systemChoice;
let playerChoice;
let playerLives = 5;
let systemLives = 5;
let clickedButton;
const choices = ['Rock', 'Paper', 'Scissor'];
const playerLivesArray = ['Player', 'Player ❤️', 'Player ❤️ ❤️', 'Player ❤️ ❤️ ❤️', 'Player ❤️ ❤️ ❤️ ❤️', 'Player ❤️ ❤️ ❤️ ❤️ ❤️']
const systemLivesArray = ['System', '❤️ System', '❤️ ❤️ System', '❤️ ❤️ ❤️ System', '❤️ ❤️ ❤️ ❤️ System', '❤️ ❤️ ❤️ ❤️ ❤️ System']
const playerBar = document.querySelector('.player.name')
const systemBar = document.querySelector('.system.name')
const playerImage = document.getElementById('player-hand')
const systemImage = document.getElementById('system-hand')
const buttons = document.querySelector('.buttons');
const mainButtons = document.querySelector('.main-buttons')
const middleText = document.querySelector('.middle-text')
const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', resetGame)


buttons.addEventListener('click', (e) => {
    clickedButton = ''
    systemChoice = getSystemChoice()
    playerChoice = (e.target.innerHTML).slice(0, - 3)
    if (playerChoice == 'Rock' || playerChoice == 'Paper' || playerChoice == 'Scissor') {
        clickedButton = e.target 
    setTimeout(function(){
        removeButtons()
    }, 100); 
    }
    console.log(playerChoice)
    console.log(systemChoice) 
    if (playerLives > 0 && systemLives > 0) {
        clickedButton.style.backgroundColor = '#8EACCD'
    }
    setTimeout(function(){ 
        playRound();
    }, 1000); 
    console.log(clickedButton)
});

function getSystemChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function playRound() {
    switch (systemChoice) {
        case 'Rock':
            systemImage.src = 'rps-frames/rock-frame' 
            break;
        case 'Paper':
            systemImage.src = 'rps-frames/paper-frame'
            break;
        case 'Scissor':
            systemImage.src = 'rps-frames/scissor-frame' 
            break;
    }
    if (playerChoice == 'Rock') {
        playerImage.src = 'rps-frames/rock-frame'
        switch (systemChoice) {
            case 'Rock':
                middleText.innerHTML = 'Draw'
                break;
            case 'Paper':
                middleText.innerHTML = 'System Scores'
                playerLives -= 1;
                break;
            case 'Scissor':
                middleText.innerHTML = 'Player Scores'
                systemLives -= 1;
                break;
        }; 
    } else if (playerChoice == 'Paper') {
        playerImage.src = 'rps-frames/paper-frame'
        switch (systemChoice) {
            case 'Rock':
                middleText.innerHTML = 'Player Scores'
                systemLives -= 1;
                break;
            case 'Paper':
                middleText.innerHTML = 'Draw'
                break;
            case 'Scissor':
                middleText.innerHTML = 'System Scores'
                playerLives -= 1;
                break;
        }; 
    } else if (playerChoice == 'Scissor') {
        playerImage.src = 'rps-frames/scissor-frame'
        switch (systemChoice) {
            case 'Rock':
                middleText.innerHTML = 'System Scores'
                playerLives -= 1;
                break;
            case 'Paper':
                middleText.innerHTML = 'Player Scores'
                playerLives -= 1;
                break;
            case 'Scissor':
                middleText.innerHTML = 'Draw'
                break;
        }; 
    }
    if (playerLives > 0 && systemLives > 0) {
        clickedButton.style.backgroundColor = '#F9F3CC'
    }
    playerBar.innerHTML = playerLivesArray[playerLives]
    systemBar.innerHTML = systemLivesArray[systemLives]

    if (playerLives == 0) {
        middleText.innerHTML = 'Player Lost'
        removeButtons()
        buttons.appendChild(resetButton)
    } else if (systemLives == 0) {
        middleText.innerHTML = 'System Lost' 
        removeButtons()
        buttons.appendChild(resetButton)
    } else {
        setTimeout(function(){
            playerImage.src = 'rps.gif'
            systemImage.src = 'rps.gif'
            middleText.innerHTML = 'Choosing'
            addButtons()
        }, 1200); 
    }

    
};

function removeButtons() {
    while (mainButtons.hasChildNodes()) {
        mainButtons.removeChild(mainButtons.firstChild);
      }
}

function addButtons() {
    const rockButton = document.createElement('div')
    rockButton.classList.add('rock', 'button')
    rockButton.innerHTML = 'Rock 🪨'

    const paperButton = document.createElement('div')
    paperButton.classList.add('paper', 'button')
    paperButton.innerHTML = 'Paper 📃'

    const scissorButton = document.createElement('div')
    scissorButton.classList.add('scissor', 'button')
    scissorButton.innerHTML = 'Scissor ✂️'

    mainButtons.appendChild(rockButton)
    mainButtons.appendChild(paperButton)
    mainButtons.appendChild(scissorButton)
}

function resetGame() {
    resetButton.style.backgroundColor = '#8EACCD'
    setTimeout(function(){
        location.reload()
    }, 100);
    
}   