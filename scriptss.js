const btnFlipped = document.querySelector('.btnFlip');
const playerCard = document.querySelector('.player-card');
const playerFlip = document.querySelector('.player-flip');

const computerCard = document.querySelector('.computer-card');
const computerFlip = document.querySelector('.computer-flip');

btnFlipped.addEventListener('click', function () {
   playerFlip.classList.add('flipped');
   computerFlip.classList.add('flipped');
});
