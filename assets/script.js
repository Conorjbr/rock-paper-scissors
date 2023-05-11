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
    userChoice = e.target.innerHTML
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
  }))
  

//Game functions

//Function, uses random numbers to create and display the computers choice for the game
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'Rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'Scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'Paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}


//Calulate result function, compare user choice with computer choice

//Scoreboard functions

//Game level change functions