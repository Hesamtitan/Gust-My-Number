'use strict';

let secretNumber = Math.ceil(Math.random() * 20);
let score = 10;
let highscores = 0;
const message = message => {
  document.querySelector('.message').textContent = message;
};
const scoreMessage = scoreMessage => {
  document.querySelector('.score').textContent = scoreMessage;
};
const number = number => {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message(' No number ⛔');
  } else if (guess === secretNumber) {
    message('You Correct 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number(secretNumber);
    if (score > highscores) {
      highscores = score;
    }
    document.querySelector('.highscore').textContent = highscores;
  } else if (guess !== secretNumber) {
    message(guess > secretNumber ? 'too High 👆' : 'Too Low 👇');

    scoreMessage(score);
    score--;
  } else {
    message(' Youe lose 😭');
    scoreMessage(0);
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = 10;
  message('Start guessing...🤩😉');
  number('?');
  scoreMessage(score);
  document.querySelector('.guess').value = '';
  secretNumber = Math.ceil(Math.random() * 20);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
