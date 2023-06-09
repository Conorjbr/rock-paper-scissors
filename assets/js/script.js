/* jshint esversion: 6 */
/* This script was created using the following tutorial:
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWVENnNobUVYTFFkVmxFajVDLVFHaEpWTVdzQXxBQ3Jtc0ttTXZfQjkyLWxNQy0xS3NmcExxUThBaWtnZjBvVWtRTmlZQzlOVk9wbTMxZHpBZkpweVNaajRhU3c1ei1xREdEVUI1d1dqdUdmMEZhNmR5MVF5c0xnOEtNSk5JdjhhWV90TFR0VDh1X1c4VFRjZE5Nbw&q=https%3A%2F%2Fgithub.com%2Fkubowania%2Frock-paper-scissors-x3&v=ec8vSKJuZTk
I have used some of the code from this tutorial to help with creation of the game.
and I have also personalised some of this code and added to it & crated my own styling.
*/
//Set up main game variables
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('#rock,#paper,#scissors');
let userChoice;
let computerChoice;
let result;

//Select user choice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })) ;

//Use random numbers to create and display the computer's choice for the game
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 ;
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

//Calulate result function, compare user choice with computer choice
function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!';
    incrementDraw();
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
    resultDisplay.innerHTML = result;
}

//Scoreboard functions
//I have borrowed some of the functions to run this from the CI "Love Maths" walk-through project and ammended and modifirf with my own code.
//Takes current user score from the DOM and increments it by 1
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
function incrementDraw(){
let oldScore = parseInt(document.getElementById("draw").innerText);
document.getElementById("draw").innerText = ++oldScore;
}  

//Reset scores button, resets all scores to 0
document.getElementById("reset-button").addEventListener("click", resetScore);
function resetScore(){
  document.getElementById("score").innerText = 0;
  document.getElementById("c-score").innerText = 0;
  document.getElementById("draw").innerText = 0;
}