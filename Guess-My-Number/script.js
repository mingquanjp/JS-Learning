'use strict';

/*
console.log(document.querySelector('.message').textContent);
//Change the content of the class message
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = 10;



document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);

*/
let highScore = document.querySelector('.highscore').textContent;
let number = Math.floor(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){

    const guess = document.querySelector('.guess').value;
    if (!guess){
        displayMessage('No number!');
    }
    else if (score < 1 ){
        displayMessage('Game Over!');
    }
    else if ( guess == number){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = number;
       document.querySelector('body').style.backgroundColor ='green';

       if (score > highScore){
       document.querySelector('.highscore').textContent = score;
       highScore = score;
       console.log(`Update with ${score} and ${highScore}`);
       }

        
    }else if(guess > number){
        displayMessage('Too high!')
        document.querySelector('.score').textContent = --score;
    }else if(guess < number){
       displayMessage('Too low!')
        document.querySelector('.score').textContent = --score;
    }
});

const againBtn = function(){
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value ='';
    document.querySelector('.score').textContent = 20;
    score = 20;
    displayMessage('Start guessing...');
}

document.querySelector('.again').addEventListener('click', againBtn);