'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); //# for getting id
//Way 2 to get id : const score1 = document.getElementById('score--1);
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollEl = document.querySelector('.btn--roll');
const holdEl = document.querySelector('.btn--hold');
const newEl = document.querySelector('.btn--new');

let scores, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden'); //Make the dice be invisible
};
init();

const changeActivePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    const number = Math.trunc(Math.random() * 6) + 1;
    console.log(number);
    diceEl.src = `dice-${number}.png`;
    if (number !== 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        Number(
          document.getElementById(`current--${activePlayer}`).textContent
        ) + number;
    } else {
      //Switch the turn

      //change the theme of current player
      // if (document.querySelector(`.player--${activePlayer}`).classList.contains('player--active')){
      //     document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      // }
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

      changeActivePlayer();
      //Fast way to change the theme of cur player
    }
  }
};

const hold = function () {
  if (playing) {
    scores[activePlayer] += Number(
      document.getElementById(`current--${activePlayer}`).textContent
    );
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(`Scores of ${activePlayer} is ${scores[activePlayer]}`);

    if (scores[activePlayer] >= 10) {
      playing = false;
      console.log(`You win!`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }

    changeActivePlayer();
  }
};

const newGame = function () {
  document
    .querySelector(`.player--${(activePlayer = activePlayer === 0 ? 1 : 0)}`)
    .classList.remove('player--winner');
  init();
};

rollEl.addEventListener('click', rollDice);
holdEl.addEventListener('click', hold);
newEl.addEventListener('click', newGame);

//console.log(score0El.textContent, typeof(score0El.textContent));
