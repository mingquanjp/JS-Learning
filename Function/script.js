'use strict';

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
/*
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