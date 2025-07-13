'use strict';
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(modal);

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // modal.style.display = 'block'; another way to display the modal
};

for(let i=0; i < btnsOpenModal.length ;i ++){
    btnsOpenModal[i].addEventListener('click',openModal );

}

const closeModal = function(){
     modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// const keyPress = function (){
//     console.log('A key was pressed');
// };

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        console.log('A key was pressed');
        console.log(e.key);
         closeModal();
    }
});


