'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const transferMoney = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const html = ` 
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${movement}€</div>
      </div> `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

transferMoney(account1.movements);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);

//MAX
const max = movements.reduce(function(acc, mov){
  if (acc > mov)
    return acc;
  else 
    return mov;  
}, movements[0]);
console.log(max);


// const deposits = movements.filter(function(mov){
//     return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);


// const balance = movements.reduce(function(acc,cur, i, arr){
//   return acc + cur;
// }, 0);
// console.log(balance);

const calcPrintBalance = function(movements){
    const balance = movements.reduce(function(acc, cur){
      return cur + acc;
  }, 0);
  console.log(balance);
  labelBalance.textContent = balance + '€';
  
}
calcPrintBalance(account1.movements);

//Set textContent of balance
const calcSum = function(movements){
  let sum =0;
  movements.forEach(item => sum+=item);
  return sum;
}


const calcInOut = function(movements){
  const moveIn = movements.filter(mov => mov > 0);
  const moveOut = movements.filter(mov => mov < 0);
  labelSumIn.textContent = calcSum(moveIn) +'$' ;
  labelSumOut.textContent =calcSum(moveOut)+ '$';
}
calcInOut(movements);


// const username = user.toLowerCase().split(' ');
// console.log(username);
// const newUSername =[];
// username.forEach(mov => {
//   newUSername.push(mov.slice(0,1));
// });
// const realName = newUSername.join('');

// const euroToUsd = 1.1;
// const movementUSD = movements.map(function(mov){
//   return mov *euroToUsd;
// });
// console.log(movements);
// console.log(movementUSD);

// const movementsUSDfor = [];
// for ( const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

// const movementUSDs = movements.map( mov => mov * euroToUsd);

// console.log(movementUSDs);
///////////////////////////////////////
// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const dogsJulia = [3,5,2,12,7];
// const dogsKate = [4,1,15,8,3];
// const checkDogs = function(dogsJulia, dogsKate){
//   const shallowJulia = [...dogsJulia];
//   // shallowJulia.splice(-1);
//   shallowJulia.splice(-1);
//   console.log(shallowJulia);
//   shallowJulia.splice(0,1);
//   console.log(shallowJulia);
//   const arr = [...shallowJulia, ...dogsKate];
//    console.log(arr);
//   arr.forEach(function(dog, i){
//     const type = dog >= 3 ? 'an adult' : 'a puppy';
//     console.log(`Dog number ${i+1} is ${type}, and is ${dog} years old`);
//   })
// }
// checkDogs(dogsJulia, dogsKate);

/* 

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function(ages){
  
}




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(...arr); 

//SPLCE
console.log(arr.splice(1,2));

const arr2 = ['j', 'i', 'h','g'];
//REVERSE
console.log(arr.reverse());
console.log(arr);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//JOIN
console.log(letters.join('*'));



const arr = [25, 16, 5];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr[-1]);

console.log('quan'.at(0));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements){ //function (const [i, movement] of movements.entries())
  if (movement>0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
console.log(`---------------`);
movements.forEach(function(movement){
  if (movement>0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
*/
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key} : ${value}`);
// })

// //Set
// const currenciesUnique = new Set(['USD', 'GBP','USD', 'VND']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, map){
//   console.log(`${key}${value}`);
// })
