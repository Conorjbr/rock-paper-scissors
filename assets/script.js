//Set up main game variables

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
let userScore
let computerScore

//Event listener for user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))
  

//Game functions

//Function, uses random numbers to create and display the computer's choice for the game
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

//Calulate result function, compare user choice with computer choice
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
    //incrementDraw();
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!';
    incrementWin();
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!';
    incrementLose();
    
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!';
    incrementWin();  
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lost!';
    incrementLose();
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!';
    incrementWin();
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lost!';
    incrementLose();
  }
    resultDisplay.innerHTML = result

}
//Scoreboard functions
//Tekes current user score from the DOM and increments it by 1
function incrementWin(){
      
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

//Takes current computer score from the DOM and increments it by 1
function incrementLose(){
  
let oldScore = parseInt(document.getElementById("c-score").innerText);
document.getElementById("c-score").innerText = ++oldScore;
}

//Takes current draws score from the DOM and increments it by 1
//function incrementDraw(){
    



//Game level change functions