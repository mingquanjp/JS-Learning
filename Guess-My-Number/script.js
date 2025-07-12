'use strict';

/*
console.log(document.querySelector('.message').textContent);
//Change the content of the class message
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = 10;



document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);

*/
document.querySelector('.number').textContent = 15;

document.querySelector('.check').addEventListener('click',function(){

    const guess = document.querySelector('.guess').value;
    let message = document.querySelector('.message').textContent;
    if (!guess){
        message = 'No number!'
    }

    if ( guess === document.querySelector('.number').textContent){
        message = 'Correct Number!';
        console.log('Bye');
    }else{
        message = 'Wronggg';
        console.log('Hello');
    }
});