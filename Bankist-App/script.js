'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.body);
const allSelection = document.querySelectorAll('.section');
console.log(allSelection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // Get all the button with tag button, not the classList
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('test');

message.innerHTML = `We use cookied for improve quantity. 
<button class ="btn">Got it! </button>`;

// header.prepend(message); //In the first line
header.append(message); //In the last line, but the first line has be deleted
// header.append(message.cloneNode(true)); // the message in prepend still appear

// header.before(message);

header.after(message);

//Delete elements
document
  .querySelector('.btn')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message); //Another way to delete
  });
