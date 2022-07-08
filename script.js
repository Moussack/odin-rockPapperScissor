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

// const computerSelection = computerPlay();
// const playerSelection = playerPlay();

// console.log(playRound(playerSelection, computerSelection));

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
   let pScore = 0;
   let cScore = 0;

   for (let i = 0; i < 5; i++) {
      //const playerSelection = playerPlay();
      const playerSelection = prompt('Choose rock, papper or scissor');
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      if (result.includes('Win')) {
         console.log('WON!!! You got SCORE + 1 ');
         pScore = pScore + 1;
      } else if (result.includes('Lose')) {
         console.log('LOSE!!!computer got SCORE + 1');
         cScore = cScore + 1;
      } else {
         console.log('TIE!!!');
         pScore = pScore + 0;
         cScore = cScore + 0;
      }
   }

   console.log(`player score final ${pScore}`);
   console.log(`computer score final ${cScore}`);
}

game();

// NEXT TO DO = calculate players and computer score if they won each round and use prompt method to gather user input
