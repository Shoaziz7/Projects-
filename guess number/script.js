'using strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// refactoring functions
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Try again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  displayGuessMessage('Start guessing');
  displayScore(20);
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.question').style.width = '25rem';
});

// Check
document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  // Player did not enter number
  if (!guessingNumber) {
    displayGuessMessage('Enter number!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Correct!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Player guessed more than secret number
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber
          ? "Wrong, it's to many!"
          : "Wrong, it's to little!"
      );
      score--;
      displayScore(score);
    } else {
      displayGuessMessage('Game over!');
      displayScore(0);
    }
  }
});
