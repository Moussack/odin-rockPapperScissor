// DOM query
const rock = document.querySelector('.rock');
const papper = document.querySelector('.papper');
const scissor = document.querySelector('.scissor');
const playerScoreEl = document.querySelector('.player');
const comScoreEl = document.querySelector('.com');
const tempResults = document.querySelector('.tempResults');
const finalResults = document.querySelector('.finalResults');
// const rpsBtnElements = document.querySelectorAll('.rps');
const resetGame = document.querySelector('.reset');
const rpsImgs = document.querySelectorAll('.rps-img');

const playerCard = document.querySelector('.player-card');
const playerFlip = document.querySelector('.player-flip');
const playerFront = document.querySelector('.player-front');
const playerBack = document.querySelector('.player-back');

const computerCard = document.querySelector('.computer-card');
const computerFlip = document.querySelector('.computer-flip');
const computerFront = document.querySelector('.computer-front');
const computerBack = document.querySelector('.computer-back');

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
      return `Tie, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'papper' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Win, Papper beats Rock, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'papper' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Lose, Scissor beats Papper, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'papper' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `Tie, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'scissor' && c === 'papper') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Win, Scissor beats Papper, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'scissor' && c === 'rock') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `You Lose, Rock beats Scissor, You choose ${p} and Computer choose ${c}`;
   } else if (p === 'scissor' && c === 'scissor') {
      console.log(`Player choose: ${p} And Computer choose: ${c}`);
      return `Tie, You choose ${p} and Computer choose ${c}`;
   }
}

// This function is to start the game
function game() {
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
      document.querySelector('.player-display').setAttribute('src', '/img/rps.svg');
      document.querySelector('.computer-display').setAttribute('src', '/img/rps.svg');
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

   // display corresponding image to the DOM based on playRound's retun value (result)
   function displayImage(result) {
      // add the score ROCK
      if (result.includes('Win') && result.includes('rock') && result.includes('scissor')) {
         document.querySelector('.player-front').setAttribute('src', '/img/rock.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/scissor.svg');
         addPlayerScore();
         updateScore();
      }
      if (result.includes('Lose') && result.includes('rock') && result.includes('papper')) {
         document.querySelector('.player-front').setAttribute('src', '/img/rock.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/papper.svg');
         addComScore();
         updateScore();
      }
      if (result.includes('Tie') && result.includes('rock') && result.includes('rock')) {
         document.querySelector('.player-front').setAttribute('src', '/img/rock.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/rock.svg');
         tie();
         updateScore();
      }

      // add the score PAPPER
      if (result.includes('Win') && result.includes('papper') && result.includes('rock')) {
         document.querySelector('.player-front').setAttribute('src', '/img/papper.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/rock.svg');
         addPlayerScore();
         updateScore();
      }
      if (result.includes('Lose') && result.includes('papper') && result.includes('scissor')) {
         document.querySelector('.player-front').setAttribute('src', '/img/papper.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/scissor.svg');
         addComScore();
         updateScore();
      }
      if (result.includes('Tie') && result.includes('papper') && result.includes('papper')) {
         document.querySelector('.player-front').setAttribute('src', '/img/papper.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/papper.svg');
         tie();
         updateScore();
      }

      // add the score SCISSOR
      if (result.includes('Win') && result.includes('scissor') && result.includes('papper')) {
         document.querySelector('.player-front').setAttribute('src', '/img/scissor.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/papper.svg');
         addPlayerScore();
         updateScore();
      }
      if (result.includes('Lose') && result.includes('scissor') && result.includes('rock')) {
         document.querySelector('.player-front').setAttribute('src', '/img/scissor.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/rock.svg');
         addComScore();
         updateScore();
      }
      if (result.includes('Tie') && result.includes('scissor') && result.includes('scissor')) {
         document.querySelector('.player-front').setAttribute('src', '/img/scissor.svg');
         document.querySelector('.computer-front').setAttribute('src', '/img/scissor.svg');
         tie();
         updateScore();
      }
   }

   /* ________________________________THE GAME'S LOGIC____________________________________ */
   // active state is to maek the choices unselectable for a second (prevent user clicked many times)
   let active = true;

   // Initialize first scores
   let playerScore = 0;
   let computerScore = 0;

   // display score to the DOM
   displayScore();

   // Add event listener to the img element
   rpsImgs.forEach((rpsImg) =>
      rpsImg.addEventListener('click', function (e) {
         if (active) {
            // Result variable is to hold the return value from playRound function
            let result;
            if (e.target.getAttribute('class') === 'rock')
               result = playRound(e.target.getAttribute('class'), computerPlay());

            if (e.target.getAttribute('class') === 'papper')
               result = playRound(e.target.getAttribute('class'), computerPlay());

            if (e.target.getAttribute('class') === 'scissor')
               result = playRound(e.target.getAttribute('class'), computerPlay());

            // showing temporary result of the player choices to the DOM when player click the button
            tempResults.textContent = result;

            // display corresponding image to the DOM based on playRound's retun value (result)
            active = false;
            playerFlip.classList.add('flipped');
            computerFlip.classList.add('flipped');
            displayImage(result);
            // remove flipped class after 1 sec
            setTimeout(() => {
               playerFlip.classList.remove(`flipped`);
               computerFlip.classList.remove(`flipped`);
            }, 1000);

            // change active state to true again after 1,5 sec
            setTimeout(() => {
               active = true;
            }, 1500);

            // whoever reaches 5 scores first, they win the game.
            if (playerScore === 5) finalResults.textContent = "Congratulation You've won the game";
            if (computerScore === 5) finalResults.textContent = 'Computer WON, You Lose the game';
         }
      })
   );

   // Button to reset the game
   resetGame.addEventListener('click', reset);
}

game();
