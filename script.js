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

// This function randomly determines player's choice
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

const computerSelection = computerPlay();
const playerSelection = playerPlay();
console.log(playRound(playerSelection, computerSelection));

// this function controls all Output scenario
function playRound(p, c) {
   let playerScore = 0;
   let computerScore = 0;

   console.log(`Player Score: ${playerScore}`);
   console.log(`Computer Score: ${computerScore}`);

   if (p === 'rock' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      computerScore = computerScore + 1;
      return 'You Lose, Papper beats Rock';
   } else if (p === 'rock' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 1;
      return 'You Win, Rock beats scissor';
   } else if (p === 'rock' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      return 'Tie';
   } else if (p === 'papper' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 1;
      return 'You Win, Papper beats Rock';
   } else if (p === 'papper' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      computerScore = computerScore + 1;
      return 'You Lose, Scissor beats Papper';
   } else if (p === 'papper' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      return 'Tie';
   } else if (p === 'scissor' && c === 'papper') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 1;
      return 'You Win, Scissor beats Papper';
   } else if (p === 'scissor' && c === 'rock') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      computerScore = computerScore + 1;
      return 'You Lose, Rock beats Scissor';
   } else if (p === 'scissor' && c === 'scissor') {
      console.log(`Player choose:${p} And Computer choose:${c}`);
      playerScore = playerScore + 0;
      computerScore = computerScore + 0;
      return 'Tie';
   }
}

// This function is to start the game
/* function game() {
   for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      const playerSelection = playerPlay();
      console.log(playRound(playerSelection, computerSelection));
   }
}

game(); */

// NEXT TO DO = calculate players and computer score if they won each round and use prompt method to gather user input
