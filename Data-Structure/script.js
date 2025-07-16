'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    //Method with syntax : name( ..) { }, dont need name : function(){}
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20.00', address }) {
    // The default value for the obj
    //Pass an obj, not an argument
    console.log(
      `Order receive ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Coding Challenge #4


// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable -->some_variable
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅


// Afterwards, test with your own test data!

/*List of variables name --> no limit -> ...
Some_Variable -> someVariable
3 parts 'Some', '_', 'Variable'
want : 'Some' -> 'some', '_' ->'', Variable ->Variable
with the first and third, may be change all of string to lowercase, then make the first ele of string become upper
the second, use replace ?
*/
// console.log('helloooo'.slice(4));
// console.log('hello_SSSS'.toLowerCase());
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  const newText = text.split('\n');


//Another way
let i =0;
  for (const item of newText){
    const [first, second] = item.toLowerCase().split('_');
    // console.log(second);
    // console.log(second[0].toLowerCase());
    const str = `${first}${second[0].toUpperCase() + second.slice(1)}`;
    console.log(`${str.padEnd(20)} ${'✅'.repeat(++i)}`);
  };

  //  changeCamelCase(newText); Solution 2
});




const changeCamelCase = function(arr){ //Function of solution 2
  let i = 0;
  for (const item of arr){
   
    let newItem = item.toLowerCase(); //some_variable 
    let tempItem = newItem.slice(newItem.indexOf('_')+1)
    let last = newItem.slice(0, newItem.indexOf('_')) + tempItem[0].toUpperCase() + tempItem.slice(1);
    console.log(`${last.padEnd(20)} ${'✅'.repeat(++i)} `);
    // console.log(newItem.indexOf('_'));
    
  }

}
 changeCamelCase(['Some_Variable', 'calculate_AGE','delayed_departure', 'first_name'] );







// const airline ='TAP Air Portugal';


// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());


// //Fix capitalization in name
// const passenger ='qUaN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);


// //Camparing emails
// const email = 'quan@gmail.com';
// const loginEmail ='   QUan@Gmail.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // .trim() for remove white space and \n, \t, \r
// console.log(trimmedEmail);

// console.log(loginEmail.toLowerCase().trim());

// //replacing
// const priceVN = '100.000VND';
// const priceUS = priceVN.replace('VND','$').replace('.', ',');
// console.log(priceUS);

// const annoucement = 'All passengers come to Viet Nam in door 25';
// console.log(annoucement.replace('door', 'gate'));

// //Boolean
// const plane = 'Airbus A320 neo';
// console.log(plane.includes('A320'));

// if (plane.startsWith)'Airbus' && plane.endsWith('neo')
//   console.log('Part of new Airbus');


// console.log('a+very+nice+string'.split('+'));
// console.log('Quan Nguyen'.split(' '));

// const [firstName, lastName] = 'Quan Nguyen'.split(' ');
// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = name => {
//   const capName = name.split(' ');
//   const temp = [];
//   console.log(capName);
//   for( const item of capName){
//     let res = item[0].toUpperCase() + item.slice(1);
//     temp.push(res);
//   }
//   console.log(temp);
//   console.log(temp.join(' '));
// }

// //Padding

// capitalizeName('quan nguyen minh');

// const message = 'Go to gate 16';
// console.log(message.padStart(25,'.'));

// const maskCreditCard = function(number){
//   const str = number +'';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*');
// }

// console.log(maskCreditCard(12312314123)); 

// console.log(maskCreditCard('123123123131'));

// //Repeat
// const message2 = 'Bad wearther... All are delayed';
// console.log(message2.repeat(5));

// const planesInLine = function(n){
//   console.log(`There are ${n} planes in the line ${'A'.repeat(n)}`);
// }
// planesInLine(5);

// console.log(plane[0]);

// console.log(plane[1]);

// console.log(plane[2]);
// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// console.log(airline.slice(2)); //cut the ele in string
// console.log(airline.slice(4,7));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -2));


// const checkMiddleSeat = function(seat){
// //B and E are middle seats
// const s = seat.slice(-1);
// if (s === 'B' || s === 'E'){
//   console.log(`You got the middle seat`);
// }else{
//   console.log('Hello');
// }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('1C');
// checkMiddleSeat('12E');

// console.log(new String('quan'));
// console.log(typeof(new String('quan'))); //Object
// console.log('quan', typeof('quan')); // Only string
// console.log(new String('quan').slice(1)); // String, not object


// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// for (const [key, value] of gameEvents){
//   key >= 64 && value === '🔶 Yellow card' ?  gameEvents.delete(key) : console.log('Hello');
// }
// console.log(gameEvents);


// //3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`An event happend, on average, every ${90/gameEvents.size}`);

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const [key, value] of gameEvents){
//   // key <= 45 ? console.log(`[FIRST HALF]`) : console.log(`[SECOND HALF]`); console.log(key, value);
//   key <= 45 ? console.log(`[FIRST HALF] ${key} : ${value}`) : console.log(`[SECOND HALF] ${key} : ${value}`);
// }










//Map Array
// const question = new Map([
//   ['question', 'What is the best language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// //Convert oject to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key,value] of question){
//   if ( typeof key === 'number') console.log(`Answer ${key}: ${value}`);

// }



// const anwser = Number(prompt('Yout answer :'));
// console.log(anwser);
// anwser === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));


//Conver map to array
// console.log([...question]);

//MAP
// const rest = new Map();
// rest.set('name', 'Quan');
// rest.set(1, 'Freeze, Italy');
// console.log(rest.set(2, 'Konbanwa, VietNam'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');


// console.log(rest.get('name'));
// console.log(rest.get('open'));

// const time=21;
// rest.get(time > rest.get('open') && time < rest.get('close'));


// console.log(rest.has('categories'));
// rest.delete(2);

// //FIx
// const arr =[1,2]
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr)); //NOT WORK but it's diff from the set


// rest.clear();
// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risoto']);
// console.log(orderSet);

// console.log(new Set('Hao'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// // console.log(orderSet[0]); --> undefined
// for(const order of orderSet) console.log(order);

// //Make Set from an Array
// const staff =['Quan', 'Hao', 'Khang', 'Quan'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);

// //If we want to remove the duplicate ele in an array
// const staffUnique1 = [...new Set(staff)];
// console.log(staffUnique1);

//SET
// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);//Find element in both 2 SET
// console.log('Intersection :' ,commonFoods);

// console.log([...commonFoods]);

// const italiaMexicanFusion = italianFoods.union(mexicanFoods); //Combine 2 set
// console.log('Union ;', italiaMexicanFusion);

// const mix = [...new Set([...italianFoods, ...mexicanFoods])]; //Array
// console.log(mix);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Differnce italian :', uniqueItalianFoods);

// const uniqueItalianAndMexicanFoods = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// //Property Names(KEYS)
// const temp = Object.keys(openingHours); //Only get the key of obj, not Value
// // const res = openingHours;
// console.log(temp);
// let str = `We are opening at ${temp.length} days`;
// // console.log(res);
// for (const day of temp) {
//   str += ` with ${day}, `;
// }
// console.log(str);

// //Property Value
// const value = Object.values(openingHours);
// console.log(value);

// //Entries Object
// const entries = Object.entries(openingHours);
// console.log(entries);
// //[Array(2), Array(2), Array(2)]

// //key and value
// for (const [day, { open, close }] of entries)
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //WITH option chaining
// console.log(restaurant.openingHours.mon?.open); //If restaurant.openingHours.mon exist, continue with .open
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days){
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

// console.log(restaurant.orderTV?.(0,1) ?? 'Method does not exist');

// //Arrays
// const users= [{
//   name : 'Quan',
//   email : 'hello@quan',
// }];
// console.log(users[0]?.name ?? 'User arr is empty'); //Better solution

// if (users.length >0) console.log(users[0].name); //Long solution
// else console.log(`User arr is empty`);

// const menu =[...restaurant.starterMenu,...restaurant.mainMenu];
// for(const item of menu) console.log(item);

// for(const [i, el] of menu.entries()){ //We destructuring the item into [i, el]
//   // console.log(item);
//   //console.log(`${item[0]+1} " ${item[1]}")
//   console.log(`${i+1}: ${el}`);
// }

// for(let i =0;i <menu.length;i++){ // Basic Way
//   // console.log(menu[i]);
//   console.log(`${i+1} : ${menu[i]}`);
// }

//console.log([...menu.entries()]); //Each item is a new array

// const rest1 = {
//   name : 'Hao',
//   numGuests : 20,
// };

// const rest2 = {
//   name : 'Khang',
//   owner : 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10; Solution 1

// rest1.numGuests ||=10; //Solution 2
// rest2.numGuests ||=10;
// console.log(rest2);

//Use ANY data type, return ANY data type
// console.log('Quan' || 3);
// console.log(undefined || null);
/*
//SPREAD, bcs on RIGHT side
const arr =[1,2, ...[3,4]];

//REST, bcs on the LEFT side
const [a,b, ...others] = [1,2,3,4,5]; //others = [3,4,5]
console.log(a,b,others);

const [pizza, , risotto, ...othersFood]=[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, othersFood);

//Objects
const {sat, ...weekday} = restaurant.openingHours;
console.log(weekday);


//Function
const add = function(...numbers){
  let sum = 0;
  for(let i =0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);

}
add(2,3);
add(5,3,7,2); 

const x = [23,5,3];
add(...x)

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'snack');
// const {name : resName, ...other} = restaurant;
// console.log(resName);
// console.log(other);



const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; //Basic
console.log(badNewArr);

//... is copy the arr into the new array
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterables : arrays, strings, maps, sets. NOT object
const str = 'Quan';
const letters = [...str, '', 's.'];
console.log(letters); //(6) ['Q', 'u', 'a', 'n', '', 's.']
console.log(...str); // ... seprate the str into string with chars

const ingredients = [
  prompt("Let's make pasta! Ingredient 1 ?"),
  prompt("Ingredient 2 ?"),
  prompt("Ingredient 3 ?"),
];
console.log(ingredients);

console.log(restaurant.orderPasta(...ingredients)); //Use ... instead of ingredients[0],.....

//Objects
const newRestaurant = {foundIn : 2005,...restaurant, founder :'Quan'};
console.log(newRestaurant);


restaurant.orderDelivery({
  time: '22:30',
  address: 'ABC 123',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant; //Destructure obj
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 1;
let b = 3;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log(fri);
console.log(open, close);
*/
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; //destructuring
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Solution 1 : switch variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// [main, secondary] = [secondary, main]; //Solution 2
// console.log(main,secondary);
// console.log(restaurant.order(0,1));

// const [starter, mainCourse] = restaurant.order(0,1);
// console.log(starter, mainCourse);

// const nested = [2,3,[5,6]];
// const [i, ,j] = nested;
// console.log(i,j);
// const [i, ,[j, k]] = nested;
// console.log(i,j,k);
