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

//const playerSelection = prompt('Input your selection');
const playerSelection = 'rock';
const computerSelection = computerPlay();

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

function game() {
   for (let i = 0; i < 5; i++) {
      console.log(playRound(playerSelection, computerSelection));
   }
}

game();
