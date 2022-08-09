// This function randomly determines computer's choice, the function returns one value (string) either the word rock, papper or scissor
function computerPlay() {
   const comSelection = Math.floor(Math.random() * 3); // <- create random number beetwen 0 - 2 (so it's 3 choices)
   if (comSelection === 0) {
      return 'rock';
   } else if (comSelection === 1) {
      return 'papper';
   } else {
      return 'scissor';
   }
}

// this function determine the outcome of the choices
function playRound(p, c) {
   if (p === 'rock' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Lose, Papper beats Rock, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'rock' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Win, Rock beats scissor, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'rock' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'Tie';
   } else if (p === 'papper' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Win, Papper beats Rock, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'papper' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Lose, Scissor beats Papper, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'papper' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'Tie';
   } else if (p === 'scissor' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Win, Scissor beats Papper, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'scissor' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Lose, Rock beats Scissor, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'scissor' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'Tie';
   }
}

// DOM query
const rock = document.querySelector('.rock');
const papper = document.querySelector('.papper');
const scissor = document.querySelector('.scissor');
const playerScoreEl = document.querySelector('.player');
const comScoreEl = document.querySelector('.com');
const tempResults = document.querySelector('.tempResults');
const finalResults = document.querySelector('.finalResults');
const rpsBtnElements = document.querySelectorAll('.rps');
const resetGame = document.querySelector('.reset');

// This function is to start the game
function game() {
   // Initialize first scores
   let playerScore = 0;
   let computerScore = 0;

   // function to update the score in the DOM
   function updateScore() {
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }

   // function to add player's score
   function addPlayerScore() {
      playerScore = playerScore + 1;
   }

   // function to add computers's score
   function addComScore() {
      computerScore = computerScore + 1;
   }

   // function if the result is tie
   function tie() {
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
   }

   // function to reset the game
   function reset() {
      playerScore = 0;
      computerScore = 0;
      tempResults.textContent = '';
      finalResults.textContent = '';
      updateScore();
   }

   // function to display score to the DOM
   function displayScore() {
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }

   // display score to the DOM
   displayScore();

   // Add event listener to the buttons element
   rpsBtnElements.forEach((el) =>
      el.addEventListener('click', function () {
         // create result variable to hold the return value from playRound function
         let result;
         if (el.getAttribute('id') === 'rock') result = playRound('rock', computerPlay());
         if (el.getAttribute('id') === 'papper') result = playRound('papper', computerPlay());
         if (el.getAttribute('id') === 'scissor') result = playRound('scissor', computerPlay());

         // showing temporary result of the player choices to the DOM when player click the button
         tempResults.textContent = result;

         // add the score if player or computer win or lose
         if (result.includes('Win')) {
            addPlayerScore();
            updateScore();
         } else if (result.includes('Lose')) {
            addComScore();
            updateScore();
         } else {
            tie();
            updateScore();
         }

         // whoever reaches 5 scores first, they win the game
         if (playerScore === 5) finalResults.textContent = "Congratulation You've won the game";
         if (computerScore === 5) finalResults.textContent = 'Computer WON, You Lose the game';
      })
   );

   // add eventListener to play again button to reset the game
   resetGame.addEventListener('click', reset);
}
game();
