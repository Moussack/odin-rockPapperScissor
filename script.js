// This function randomly determines computer's choice
function computerPlay() {
   const comSelection = Math.floor(Math.random() * 3);
   if (comSelection === 0) {
      return 'rock';
   } else if (comSelection === 1) {
      return 'papper';
   } else {
      return 'scissor';
   }
}

// This function randomly determines player's choice (for testing purposes)
function playerPlay() {
   const playerSelection = Math.floor(Math.random() * 3);
   if (playerSelection === 0) {
      return 'rock';
   } else if (playerSelection === 1) {
      return 'papper';
   } else {
      return 'scissor';
   }
}

// this function controls all Output scenario
function playRound(p, c) {
   if (p === 'rock' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Lose, Papper beats Rock';
   } else if (p === 'rock' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Win, Rock beats scissor';
   } else if (p === 'rock' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'Tie';
   } else if (p === 'papper' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Win, Papper beats Rock';
   } else if (p === 'papper' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Lose, Scissor beats Papper';
   } else if (p === 'papper' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'Tie';
   } else if (p === 'scissor' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Win, Scissor beats Papper';
   } else if (p === 'scissor' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'You Lose, Rock beats Scissor';
   } else if (p === 'scissor' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      return 'Tie';
   }
}

// This function is to start the game
function game() {
   // initializing score
   let playerScore = 0;
   let computerScore = 0;

   for (let i = 0; i < 5; i++) {
      /* const playerSelection = playerPlay(); // generate random player choice for testing purposes */
      const playerSelection = prompt('Choose rock, papper or scissor');
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      // if user enter empty word or click the cancel button in the prompt, the game ended by this code
      if (playerSelection === '' || playerSelection === null) {
         alert(`please insert a word`);
      }

      // This code is to add score if there's a word win
      if (result.includes('Win')) {
         console.log('WON!!! You got SCORE + 1 ');
         playerScore = playerScore + 1;
      } else if (result.includes('Lose')) {
         console.log('LOSE!!!computer got SCORE + 1');
         computerScore = computerScore + 1;
      } else {
         console.log('TIE!!!');
         playerScore = playerScore + 0;
         computerScore = computerScore + 0;
      }
   }

   // log the final score to the console
   console.log(`player score final ${playerScore}`);
   console.log(`computer score final ${computerScore}`);
}

// start the game by calling the function
game();

// NEXT TO DO = implement case insensitive
