// DOM query
const rock = document.querySelector('.rock');
const papper = document.querySelector('.papper');
const scissor = document.querySelector('.scissor');
const playerScoreEl = document.querySelector('.player');
const comScoreEl = document.querySelector('.com');
const tempResults = document.querySelector('.tempResults');
const finalResults = document.querySelector('.finalResults');
// const rpsBtnElements = document.querySelectorAll('.rps');
const resetBtn = document.querySelector('.reset');
const rpsImgs = document.querySelectorAll('.rps-img');

const playerCard = document.querySelector('.player-card');
const playerFlip = document.querySelector('.player-flip');
const playerFront = document.querySelector('.player-front');
const playerBack = document.querySelector('.player-back');

const computerCard = document.querySelector('.computer-card');
const computerFlip = document.querySelector('.computer-flip');
const computerFront = document.querySelector('.computer-front');
const computerBack = document.querySelector('.computer-back');

const resultDiv = document.querySelector('.tempResultContainer div');
const ul = document.querySelector('.theTempResult');

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
      playerFront.setAttribute('src', '/img/rps.svg');
      computerFront.setAttribute('src', '/img/rps.svg');
      playerScore = 0;
      computerScore = 0;
      finalResults.innerHTML = '';
      ul.innerHTML = '';
      updateScore();
   }

   // function to display score to the DOM
   function displayScore() {
      playerScoreEl.textContent = playerScore;
      comScoreEl.textContent = computerScore;
   }

   // function to disable the reset button
   function disableButton() {
      resetBtn.setAttribute('disabled', 'true');
   }

   // function to enable the reset button
   function enableButton() {
      resetBtn.removeAttribute('disabled');
   }

   // function to add green border to player card
   function addGreenBorderPlayer() {
      playerFront.classList.add('greenBorder');
      setTimeout(() => {
         playerFront.classList.remove('greenBorder');
      }, 1500);
   }

   // function to add green border to computer card
   function addGreenBorderCom() {
      computerFront.classList.add('greenBorder');
      setTimeout(() => {
         computerFront.classList.remove('greenBorder');
      }, 1500);
   }

   // function to add green border if result Tie
   function addGreenBorderTie() {
      playerFront.classList.add('greenBorder');
      computerFront.classList.add('greenBorder');

      setTimeout(() => {
         playerFront.classList.remove('greenBorder');
         computerFront.classList.remove('greenBorder');
      }, 1500);
   }

   // funtion to add red border to player
   function addRedBorderPlayer() {
      playerFront.classList.add('redBorder');
      setTimeout(() => {
         playerFront.classList.remove('redBorder');
      }, 1500);
   }

   // funtion to add red border to computer
   function addRedBorderComputer() {
      computerFront.classList.add('redBorder');
      setTimeout(() => {
         computerFront.classList.remove('redBorder');
      }, 1500);
   }

   // funtion to add yellow border to computer and player if result tie
   function addYelloBorderTie() {
      playerFront.classList.add('yellowBorder');
      computerFront.classList.add('yellowBorder');
      setTimeout(() => {
         playerFront.classList.remove('yellowBorder');
         computerFront.classList.remove('yellowBorder');
      }, 1500);
   }

   // function to make blue border stay for a second and then removes it after (UNSUSED!)
   function bluBorderStay(target) {
      target.classList.add('blueStay');
      setTimeout(() => {
         target.classList.remove('blueStay');
      }, 1200);
   }

   // function to flip the image
   function flippedTheImages() {
      playerFlip.classList.add('flipped');
      computerFlip.classList.add('flipped');
   }

   // funtion to flipped back the image back
   function flippedTheImagesBack() {
      setTimeout(() => {
         playerFlip.classList.remove(`flipped`);
         computerFlip.classList.remove(`flipped`);
      }, 1000);
   }

   // funtion to delay score update after done flipping
   function delayUpdateScore() {
      setTimeout(() => {
         updateScore();
      }, 1300);
   }

   // function to display temp result to the DOM
   function displayTempResult(player, com, result) {
      const li = document.createElement('li');
      if (result === 'win') li.textContent = `You win, ${player} beats ${com}`;
      if (result === 'lose') li.textContent = `You lose, ${com} beats ${player}`;
      if (result === 'tie') li.textContent = 'Tie';
      ul.appendChild(li);
   }

   // function to add RGB border promptly to player's RPS options
   function addRgbBorder(element, borderColor) {
      setTimeout(() => {
         element.classList.add(`${borderColor}Border`);
      }, 300);
      setTimeout(() => {
         element.classList.remove(`${borderColor}Border`);
      }, 1200);
   }

   // funtion to delay final result
   function delayFinalResult(text, result) {
      setTimeout(() => {
         let html;
         if (result === 'win') html = `<p class="finalText win">${text}</p>`;
         if (result === 'lose') html = `<p class="finalText lose">${text}</p>`;
         finalResults.insertAdjacentHTML('beforeend', html);
      }, 1300);
   }

   // function to display corresponding image to the DOM based on playRound's retun value (result)
   function displayImage(result) {
      // add the score ROCK
      if (result.includes('Win') && result.includes('rock') && result.includes('scissor')) {
         addGreenBorderPlayer();
         addRedBorderComputer();
         addRgbBorder(rock, 'green');
         playerFront.setAttribute('src', '/img/rock.svg');
         computerFront.setAttribute('src', '/img/scissor.svg');
         displayTempResult('ROCK', 'SCISSOR', 'win');
         addPlayerScore();
         delayUpdateScore();
      }
      if (result.includes('Lose') && result.includes('rock') && result.includes('papper')) {
         addGreenBorderCom();
         addRedBorderPlayer();
         addRgbBorder(rock, 'red');
         playerFront.setAttribute('src', '/img/rock.svg');
         computerFront.setAttribute('src', '/img/papper.svg');
         displayTempResult('ROCK', 'PAPPER', 'lose');
         addComScore();
         delayUpdateScore();
      }
      if (result.includes('Tie') && result.includes('rock') && result.includes('rock')) {
         addYelloBorderTie();
         addRgbBorder(rock, 'yellow');
         playerFront.setAttribute('src', '/img/rock.svg');
         computerFront.setAttribute('src', '/img/rock.svg');
         displayTempResult('ROCK', 'ROCK', 'tie');
         tie();
         delayUpdateScore();
      }

      // add the score PAPPER
      if (result.includes('Win') && result.includes('papper') && result.includes('rock')) {
         addGreenBorderPlayer();
         addRedBorderComputer();
         addRgbBorder(papper, 'green');
         playerFront.setAttribute('src', '/img/papper.svg');
         computerFront.setAttribute('src', '/img/rock.svg');
         displayTempResult('PAPPER', 'ROCK', 'win');
         addPlayerScore();
         delayUpdateScore();
      }
      if (result.includes('Lose') && result.includes('papper') && result.includes('scissor')) {
         addGreenBorderCom();
         addRedBorderPlayer();
         addRgbBorder(papper, 'red');
         playerFront.setAttribute('src', '/img/papper.svg');
         computerFront.setAttribute('src', '/img/scissor.svg');
         displayTempResult('PAPPER', 'SCISSOR', 'lose');
         addComScore();
         delayUpdateScore();
      }
      if (result.includes('Tie') && result.includes('papper') && result.includes('papper')) {
         addYelloBorderTie();
         addRgbBorder(papper, 'yellow');
         playerFront.setAttribute('src', '/img/papper.svg');
         computerFront.setAttribute('src', '/img/papper.svg');
         displayTempResult('PAPPER', 'PAPPER', 'tie');
         tie();
         delayUpdateScore();
      }

      // add the score SCISSOR
      if (result.includes('Win') && result.includes('scissor') && result.includes('papper')) {
         addGreenBorderPlayer();
         addRedBorderComputer();
         addRgbBorder(scissor, 'green');
         playerFront.setAttribute('src', '/img/scissor.svg');
         computerFront.setAttribute('src', '/img/papper.svg');
         displayTempResult('SCISSOR', 'PAPPER', 'win');
         addPlayerScore();
         delayUpdateScore();
      }
      if (result.includes('Lose') && result.includes('scissor') && result.includes('rock')) {
         addGreenBorderCom();
         addRedBorderPlayer();
         addRgbBorder(scissor, 'red');
         playerFront.setAttribute('src', '/img/scissor.svg');
         computerFront.setAttribute('src', '/img/rock.svg');
         displayTempResult('SCISSOR', 'ROCK', 'lose');
         addComScore();
         delayUpdateScore();
      }
      if (result.includes('Tie') && result.includes('scissor') && result.includes('scissor')) {
         addYelloBorderTie();
         addRgbBorder(scissor, 'yellow');
         playerFront.setAttribute('src', '/img/scissor.svg');
         computerFront.setAttribute('src', '/img/scissor.svg');
         displayTempResult('SCISSOR', 'SCISSOR', 'tie');
         tie();
         delayUpdateScore();
      }
   }

   /* ________________________________THE GAME'S LOGIC____________________________________ */
   // active state = false is to make the choices unselectable for a second (to prevent user clicked too many times)
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
            if (e.target.getAttribute('class') === 'rock') {
               result = playRound(e.target.getAttribute('class'), computerPlay());
               // bluBorderStay(e.target);
            }

            if (e.target.getAttribute('class') === 'papper') {
               result = playRound(e.target.getAttribute('class'), computerPlay());
               //bluBorderStay(e.target);
            }

            if (e.target.getAttribute('class') === 'scissor') {
               result = playRound(e.target.getAttribute('class'), computerPlay());
               //bluBorderStay(e.target);
            }

            // showing temporary result of the player choices to the DOM when player click the button
            //tempResults.textContent = result;

            // display corresponding image to the DOM based on playRound's retun value (result)
            active = false;
            //disableButton();
            flippedTheImages();
            displayImage(result);
            flippedTheImagesBack();
            // change active state to true again after 1.5 sec
            setTimeout(() => {
               active = true;
            }, 1500);

            // whoever reaches 5 scores first, they win the game.
            if (playerScore >= 5) {
               delayFinalResult("Congratulations, You've beaten the Ai!", 'win');
            }
            if (computerScore >= 5) {
               delayFinalResult('Ai WON, What a loser!, LOL', 'lose');
            }
         }
      })
   );

   // Button to reset the game
   resetBtn.addEventListener('click', reset);
}

game();
