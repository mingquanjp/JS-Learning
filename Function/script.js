'use strict';


/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
/*
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

g();
f();


const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
console.log(booker); //booker will be the function
booker();

console.log(booker);
// Coding Challenge #1

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
    answerArray:  [0, 0, 0, 0],
    displayResults : function(type='array'){
        const [first,second, third, four] = this.answerArray;
        if (type==='array'){
            console.log(this.answerArray);
        }else if (type === 'string'){
            console.log(`The poll result are ${first}, ${second}, ${third}, ${four}`);
        }
    }
    ,registerNewAnwser : function(){
       const ans = Number(prompt(`What is your favourite programming language?
            0: Java
            1: Python
            2: Rust
            3: C++
            (Write option number)`));
        // ans <=3 && ans >=0 ? this.answerArray[ans]++ : alert('Wrong input'); 
        if ( ans >= 0 && ans <=3){
            (this.answerArray[ans])++;
        }else{
            alert( `Wrong input`);
        }
        this.displayResults('string');
    }
    
}
poll.registerNewAnwser();
document.querySelector('.poll').addEventListener('click', poll.registerNewAnwser.bind(poll));


// const VNairline = {
//   airline: 'Bamboo',
//   iataCode: 'BM',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// console.log(VNairline);
// VNairline.book(239, 'Quan Nguyen');

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = VNairline.book;
// book.call(eurowings, 23, 'Sarah');
// console.log(eurowings);

// const swiss = {
//   name: 'Swiss Air lines',
//   iataCode: 'Lx',
//   bookings: [],
// };
// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply method
// const flightData = [582, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //book.call(eurowings, 23, 'Quan');
// const bookEW = book.bind(eurowings);
// bookEW(23, 'Hao');
// const bookLH = book.bind(VNairline);
// const bookLX = book.bind(swiss);

// const bookEW23 = book.bind(eurowings, 23); //number is already setted
// bookEW23('Quan nguyen');
// bookEW23('Hao Do');

// //With event listener
// VNairline.planes = 300;
// VNairline.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', VNairline.buyPlane.bind(VNairline));

// //Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(10, 200));

// const addVATs = addTax(0.23);
// console.log(addVATs(100));
// const addVAT = addTax.bind(null, 0.23);
// //Equivalent to addVAT = value => value + value*0.23;
// console.log(addVAT(100));

// NOT a function, not a method
// book('LOL', 'Quan');
// const greet = function(greeting){
//     return function (name){
//         console.log(`${greeting} ${name}`);
//     }
// }



const greet = greeting => {
    return name => console.log(`${greeting} ${name}`);
}

//const greet = greeting => name => console.log(...)
greet('Quan');
const greeterHey = greet('Hey');
greeterHey('Quan');
greet('Hello')('Quan');

//Arrow function





const oneWord = function(str){
    return str.replaceAll(' ', '').toLowerCase();
}
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function(str,fn){
    console.log(`Original string : ${str}`);
    console.log(`Transformed string :${fn(str)}`);

    console.log(`Transformed by : ${fn.name}`);
}
transformer('JavaScript is the best', upperFirstWord);

transformer('JavaScript is the best', oneWord);


///JS uses callbacks all the times
const high5 = function(){
    console.log(`Hello`);
}

document.body.addEventListener('click',high5);

['Quan', 'Mars',' Hao'].forEach(high5);










const flight ='LH234';
const quan = {
    name : 'Quan Nguyen',
    passport : 1205029532
};

const checkIn = function(flightNum, passenger){
    flightNum ='Lh999';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 1205029532) {
        alert('Checked in')
    }else{
        alert('wrong passport');
    }
}
checkIn(flight, quan)
console.log(flight);
console.log(quan);


const newPassprt = function(person){
    person.passport = Math.trunc(Math.random() * 10000);

}

newPassprt(quan);
console.log(quan);
checkIn(flight, quan);

const bookings = [];


const createBooking = function(flightNum, numPassengets=1, price=200){ //default value
    
    // numPassengets = numPassengets || 1;
    // price = price || 200;
    const booking = {
        flightNum,
        numPassengets,
        price
    }
    console.log(booking);
    bookings.push(booking);
    bookings.push(1);
    console.log(bookings);
}

createBooking('LH123');
*/
