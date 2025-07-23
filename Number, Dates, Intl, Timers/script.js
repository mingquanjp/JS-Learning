'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2025-07-22T21:31:17.178Z',
    '2025-07-21T07:42:02.383Z',
    '2020-07-19T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDaysPassed(new Date(), date);
  console.log(dayPassed);
  if (dayPassed === 0) {
    return 'Today';
  } else if (dayPassed === 1) {
    return 'Yesterday';
  } else if (dayPassed <= 7) {
    return `${dayPassed}days ago`;
  } else {
    // const day = date.getDate();
    // const month = +date.getMonth() + 1;
    // const year = date.getFullYear();
    return Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (locale, currency, move) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(move.toFixed(2));
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const combineMovements = acc.movements.map((mov, i) => ({
    movement: mov,
    date: acc.movementsDates?.at(i),
  }));

  console.log([...combineMovements]);
  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;
  // console.log('Movement', acc.movements);
  const movs = sort
    ? [...combineMovements].sort((a, b) => a.movement - b.movement)
    : [...combineMovements];
  movs.forEach(function (mov, i) {
    const type = mov.movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(mov.date);
    const displayDate = formatMovementDate(date, acc.locale);
    const formatedMov = formatCur(acc.locale, 'EUR', mov.movement);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatedMov}</div>
        
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.locale, 'EUR', acc.balance);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(acc.locale, 'EUR', incomes);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(acc.locale, 'EUR', out * -1);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(acc.locale, 'EUR', interest);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let interval;
const setTimeOut = function () {
  const date = new Date();
  date.setHours(0, 5, 0);
  let second = date.getSeconds();
  let minute = date.getMinutes();

  if(interval) clearInterval(interval);
    interval = setInterval(
    function () {
      second -= 1;

      second = second === -1 ? 59 : second;
      minute = second === 59 ? (minute -= 1) : minute;

      labelTimer.textContent = `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
      // console.log(`Set`);

      if (minute === 0 && second === 0) {
        console.log(`You are logged out`);
        clearInterval(interval);
        containerApp.style.opacity = 0;

      }
    },
    1000
  );
  console.log(interval);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Date and time
    // const nowDate = new Date();
    // console.log(nowDate);
    // console.log(nowDate.getMonth());
   
    setTimeOut();

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const year = nowDate.getFullYear();
    // const date = nowDate.getDate();
    // const month = +nowDate.getMonth() + 1;
    // const hour = nowDate.getHours();
    // const minute = nowDate.getMinutes();
    // labelDate.textContent =
    //   date + '/ ' + month + '/ ' + year + ', ' + hour + ' : ' + minute;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update time for transfer
    const timeTransfer = new Date();
    currentAccount.movementsDates.push(timeTransfer.toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Update for time
      const timeTransfer = new Date();
      currentAccount.movementsDates.push(timeTransfer.toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(currentAccount);
  // console.log(currentAccount.movements);
  console.log(typeof currentAccount.movements);
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// setInterval(function(){
//   const now = new Date();
//   console.log(now);
// }, 2000);

// const date =
// const timeOut =

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//TIMEOUT

// const ingredient = ['snack', 'oil'];
// console.log(...ingredient);
// const pizzaTime = setTimeout((ing1, ing2) => console.log(`Here is your ${ing1}, ${ing2}`), 3000, ...ingredient);

// console.log(`Waiting...`);

// if (ingredient.includes('oil')) clearTimeout(pizzaTime);

//FORMAT NUMBER
// const num = 389112312.25;

// const options = {
//   style : "currency",
//   unit : "celsius",
//   currency : 'EUR',
// }
// console.log('US', new Intl.NumberFormat('en-US', options).format(num));
// console.log('VN', new Intl.NumberFormat('vi-VN', options).format(num));

// console.log(23 === 23.0);

// //Coversion
// console.log(Number('23'));
// console.log(+'23');

// //Parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseFloat('2.5rem'));

// console.log(Number.isNaN(23/0));

// console.log(Number.isFinite(20));

// console.log(Number.isInteger(23/0));

// console.log(Math.sqrt(25));

// console.log(Math.max(5,18,23,2,20));

// console.log(Math.trunc(23.5));
// console.log(Math.round(23.9));

// console.log(8/3);

// const evenNum = num => num % 2===0;
// console.log(evenNum(4));

// const diameter = 249_000_230_000; //Easily to read, and use
// console.log(diameter);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(20n === 20);

// console.log(typeof 20n); //big int

// console.log(10n / 3n);

//Create a date

// const now = new Date();
// console.log(now);

// console.log(new Date('December 24, 2015'));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 30));

//working with dates
// const future = new Date (2037, 10, 19, 15, 23, 5);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.toISOString());
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDay = (date1, date2) => (date2 - date1);
