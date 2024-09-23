// this is the initial scores.
let userScore = 0;
let opponentScore = 0;

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

//(this is for opponent choice.)
const choiceArray = ['rock', 'paper', 'scissor'];

// Icons for each choice
const choiceIcons = {
    rock: '<i class="fa fa-hand-rock"></i>',
    paper: '<i class="fa fa-hand-paper"></i>',
    scissor: '<i class="fa fa-hand-scissors"></i>'
};

// this is for selecting random icon.
function getOpponentChoice() {
    const opponentChoice = Math.floor(Math.random() * 3);
    return choiceArray[opponentChoice];
}

// (this is for user choices.)
rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissor.addEventListener('click', () => playGame('scissor'));

// this is for updating icons.
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

// this is for Game Logic 2.
function resultFun(userChoice, computerChoice) {
    let functionResult = gameLogic(userChoice, computerChoice);
    
    if (functionResult === 'win') {
        userScore++;
        gameResult.textContent = 'Congrats You Win!';
        gameResult.style.color = '#4CAF50';
    }
    else if (functionResult === 'lose') {
        opponentScore++;
        gameResult.textContent = 'O No! You lose!';
        gameResult.style.color = '#ff0000';
        
    }
    else {
        gameResult.textContent = 'It\'s Draw!';
        gameResult.style.color = '#ffaa00';

    }


    // this is for updating scores.
    userScoreEl.textContent = userScore;
    opponentScoreEl.textContent = opponentScore;
}