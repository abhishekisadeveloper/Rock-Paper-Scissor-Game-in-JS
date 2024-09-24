// this is the initial scores.
let userScore = 0;
let opponentScore = 0;

const winAudio = new Audio('win.mp3');
const loseAudio = new Audio('lose.mp3');
const drawAudio = new Audio('draw.mp3');

// this is for updating the scores.
const userScoreEl = document.getElementById('user-score');
const opponentScoreEl = document.getElementById('opponent-score');

// this is for showing icons.
let userChoiceIcon = document.getElementById('user-choice');
let opponentChoiceIcon = document.getElementById('opponent-choice');

// this is for result text
let gameResult = document.getElementById('result');

// this is for game buttons.
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

// reset button.
const resetEl = document.getElementById('resetEl');

//(this is for opponent choice.)
const choiceArray = ['rock', 'paper', 'scissor'];

// Icons for each choice
const choiceIcons = {
    rock: '<i class="fa fa-hand-rock"></i>',
    paper: '<i class="fa fa-hand-paper"></i>',
    scissor: '<i class="fa fa-hand-scissors"></i>'
};

// this is for random choices by the computer.
function getOpponentChoice() {
    const opponentChoice = Math.floor(Math.random() * 3);
    return choiceArray[opponentChoice];
}

// this is for user choices.
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissor.addEventListener('click', () => playGame('scissor'));

// this is the main function.
function playGame(userChoice) {
    let computerChoice = getOpponentChoice();
    
    // this is for showing icons.
    userChoiceIcon.innerHTML = choiceIcons[userChoice];
    opponentChoiceIcon.innerHTML = choiceIcons[computerChoice];

    resultFun(userChoice, computerChoice);
}

// this is for Game Logic 1.
function gameLogic(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) 
    {
        return 'win';
    }
    else {
        return 'lose';
    }
}

// This function throws confetti when the user wins
function celebrateWin() {
    confetti({
        particleCount: 100,  // number of sprinkles
        spread: 70,          // how wide they spread
        origin: { y: 0.6 }   // where they start
    });
}

// this is for Game Logic 2.
function resultFun(userChoice, computerChoice) {
    let functionResult = gameLogic(userChoice, computerChoice);
    
    if (functionResult === 'win') {
        userScore++;
        gameResult.textContent = 'Congrats You Win!';
        gameResult.style.color = '#4CAF50';
        winAudio.play();

        // this is for Sprinkling when you wine .
        celebrateWin()
    }
    else if (functionResult === 'lose') {
        opponentScore++;
        gameResult.textContent = 'O No! You lose!';
        gameResult.style.color = '#ff0000';
        loseAudio.play();
    }
    else {
        gameResult.textContent = 'It\'s Draw!';
        gameResult.style.color = '#ffaa00';
        drawAudio.play();
    }

    // this is for updating scores.
    userScoreEl.textContent = userScore;
    opponentScoreEl.textContent = opponentScore;
}

// reset function.
resetEl.addEventListener('click', resetGame);

function resetGame() {
    userScore = 0;
    userScoreEl.textContent = 0;
    opponentScore = 0;
    opponentScoreEl.textContent = 0;

    userChoiceIcon.textContent = '?';
    opponentChoiceIcon.textContent = '?';

    gameResult.textContent = 'Make your move!';
    gameResult.style.color = '#555';
}
