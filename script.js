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

// This function is to start the game
function game() {
   // Initialize first score
   let playerScore = 0;
   let computerScore = 0;

   // display score
   playerScoreEl.textContent = playerScore;
   comScoreEl.textContent = computerScore;

   // playing
   rock.addEventListener('click', function () {
      const result = playRound('rock', computerPlay());
      tempResults.textContent = result;

      if (result.includes('Win')) {
         playerScore = playerScore + 1;
         playerScoreEl.textContent = playerScore;
         comScoreEl.textContent = computerScore;
      } else if (result.includes('Lose')) {
         computerScore = computerScore + 1;
         comScoreEl.textContent = computerScore;
         playerScoreEl.textContent = playerScore;
      } else {
         playerScore = playerScore + 0;
         computerScore = computerScore + 0;
         playerScoreEl.textContent = playerScore;
         comScoreEl.textContent = computerScore;
      }

      // Final Result
      if (playerScore === 5) finalResults.textContent = "Congratulation You've won the game";
      if (computerScore === 5) finalResults.textContent = 'Computer WON, You Lose the game';
   });

   papper.addEventListener('click', function () {
      const result = playRound('papper', computerPlay());
      tempResults.textContent = result;

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

      // Final Result
      if (playerScore === 5) finalResults.textContent = "Congratulation You've won the game";
      if (computerScore === 5) finalResults.textContent = 'Computer WON, You Lose the game';
   });

   scissor.addEventListener('click', function () {
      const result = playRound('scissor', computerPlay());
      tempResults.textContent = result;

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

      // Final Result
      if (playerScore === 5) finalResults.textContent = "Congratulation You've won the game";
      if (computerScore === 5) finalResults.textContent = 'Computer WON, You Lose the game';
   });

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
}
game();
