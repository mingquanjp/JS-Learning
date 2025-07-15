'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

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

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Risoto']);
console.log(orderSet);

console.log(new Set('Hao'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
// console.log(orderSet[0]); --> undefined
for(const order of orderSet) console.log(order);

//Make Set from an Array
const staff =['Quan', 'Hao', 'Khang', 'Quan'];
const staffUnique = new Set(staff);
console.log(staffUnique);

//If we want to remove the duplicate ele in an array
const staffUnique1 = [...new Set(staff)];
console.log(staffUnique1);


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
