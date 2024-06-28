
/*-------------------------------- Constants --------------------------------*/
// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors") - delete when done
const choices = ['rock', 'paper', 'scissors'];

/*-------------------------------- Variables --------------------------------*/
// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
//    We'll need a reference to a DOM element to display messages
const resultDisplayElement = document.getElementById('result-display');

/*-------------------------------- Functions --------------------------------*/
// 4) Handle generating random selections for the computer player


const getPlayerChoice = (evt) => {
  playerChoice = evt.target.id;
};

const getComputerChoice = () => {
  const randomIndex = (Math.floor(Math.random() * choices.length));
  computerChoice = choices[randomIndex];
};

// 5) Compare the player choice to the computer choice, and check for a winner
const compare = ()=> {
  if(playerChoice === computerChoice) {
    msg = 'You Tied!'
  } else if(playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = 'You Win!'
  } else if(playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = 'You Win!';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) { 
    // "scissors" vs. "paper"
    msg = 'You Win!';
  } else {
    msg = 'You lose! Try again?';
  }
}

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

const render = () => {
  resultDisplayElement.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}, ${msg}`
};

const reset = () => {
  playerChoice = null;
  computerChoice = null;
  resultDisplayElement.textContent ='';
}

const play = function(evt) {
 getPlayerChoice(evt);
 getComputerChoice();
 compare();
 render();
};


/*----------------------------- Event Listeners -----------------------------*/
// 3) Handle a player clicking a button

document.getElementById('rock').addEventListener('click',play);
document.getElementById('paper').addEventListener('click',play);
document.getElementById('scissors').addEventListener('click',play);


document.getElementById('reset').addEventListener('click',reset)

// document.querySelectorAll('button').forEach(function(button) {
//   button.addEventListener('click', play);
// }) //another way to listen for clicks on any buttons