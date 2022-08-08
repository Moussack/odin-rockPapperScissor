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

// This function randomly determines player's choice (for testing purposes), the function returns one value (string) either the word rock, papper or scissor
/* function playerPlay() {
   const playerSelection = Math.floor(Math.random() * 3); // <- create random number beetwen 0 - 2 (so it's 3 choices)
   if (playerSelection === 0) {
      return 'rock';
   } else if (playerSelection === 1) {
      return 'papper';
   } else {
      return 'scissor';
   }
} */

// this function controls all of the output scenario based on player's choise
// p = player, c = computer.
function playRound(p, c) {
   if (p === 'rock' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Lose, Papper beats Rock';
   } else if (p === 'rock' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Win, Rock beats scissor';
   } else if (p === 'rock' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'Tie';
   } else if (p === 'papper' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Win, Papper beats Rock';
   } else if (p === 'papper' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Lose, Scissor beats Papper';
   } else if (p === 'papper' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'Tie';
   } else if (p === 'scissor' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Win, Scissor beats Papper';
   } else if (p === 'scissor' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return 'You Lose, Rock beats Scissor';
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
const results = document.querySelector('.tempResults');

// Initialize first score
let playerScore = 0;
let computerScore = 0;

// display score
playerScoreEl.textContent = playerScore;
comScoreEl.textContent = computerScore;

rock.addEventListener('click', function () {
   const result = playRound('rock', computerPlay());
   results.textContent = result;

   if (result.includes('Win')) {
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   } else if (result.includes('Lose')) {
      computerScore += 1;
      comScoreEl.textContent = computerScore;
      playerScoreEl.textContent = playerScore;
   } else {
      playerScore += 0;
      computerScore += 0;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }
});

papper.addEventListener('click', function () {
   const result = playRound('papper', computerPlay());
   results.textContent = result;

   if (result.includes('Win')) {
      console.log('+1');
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   } else if (result.includes('Lose')) {
      computerScore += 1;
      comScoreEl.textContent = computerScore;
      playerScoreEl.textContent = playerScore;
   } else {
      playerScore += 0;
      computerScore += 0;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }
});

scissor.addEventListener('click', function () {
   const result = playRound('scissor', computerPlay());
   results.textContent = result;

   if (result.includes('Win')) {
      console.log('+1');
      playerScore += 1;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   } else if (result.includes('Lose')) {
      computerScore += 1;
      comScoreEl.textContent = computerScore;
      playerScoreEl.textContent = playerScore;
   } else {
      playerScore += 0;
      computerScore += 0;
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }
});

// This function is to start the game
// function game() {
//    // initializing first score
//    let playerScore = 0;
//    let computerScore = 0;

//    // using for loop cuz we want to loop the following code 5 times, which is tranlates to a 5 rounds game.
//    for (let i = 0; i < 5; i++) {
//       /* const playerSelection = playerPlay(); // <- generate random player choice . It's only for testing purposes */
//       const playerSelection = prompt('Type Rock, Papper or Scissor').toLowerCase(); // <- player can type case insensitive word in the prompt either rock, papper, or scissor. Cuz toLowerCase() method converts all words to lower case, doesn't matter if the word is capital or mixed capital, ie : ROCK or ROck
//       const computerSelection = computerPlay(); // <- randomly generated computer choice, it returns a string either word rock, papper, or scissor.
//       console.log(`---------------Round ${i + 1}-------------------`); // <- log the round to the console, this code is living inside the loop so we can access and use the iterator (i) as a round dynamically.
//       const result = playRound(playerSelection, computerSelection); // <- we put the player choice and computer choice here and store the return value to 'result' variable.

//       // if player enters empty word or click the cancel button in the prompt, the game ended by this code, it's not perfect, it's still work in progress.
//       if (playerSelection === '' || playerSelection === null) {
//          alert(`Please insert a correct word`);
//       }

//       // This code is to add score if there's a word win in the result, the word 'Win' comes from the return value of playRound() function. The includes() method searches the word 'Win', if it found it, the method returns 'true'.
//       if (result.includes('Win')) {
//          console.log(`YOU WON!!`);
//          console.log(`SCORE + 1`);
//          playerScore = playerScore + 1;
//       } else if (result.includes('Lose')) {
//          console.log(`YOU LOSE!!`);
//          console.log(`COMPUTER SCORE + 1`);
//          computerScore = computerScore + 1;
//       } else {
//          console.log('TIE!!');
//          playerScore = playerScore + 0;
//          computerScore = computerScore + 0;
//       }
//    }

//    // log the  overall and final result to the console
//    console.log(`---------------OVERALL RESULT-------------------`);
//    console.log(`Final player score : ${playerScore}`);
//    console.log(`Final computer score : ${computerScore}`);

//    if (playerScore > computerScore) {
//       console.log(`---------------FINAL RESULT-------------------`);
//       console.log(`THE PLAYER WIN!!!`);
//    } else {
//       console.log(`---------------FINAL RESULT-------------------`);
//       console.log(`THE COMPUTER WIN!!!`);
//    }
// }

// start the game by calling/invoke game() function
//game();
