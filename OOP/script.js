'use strict';

//Constructor function

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;


    //Don't do this. When we create an instance, it appear and work with each instance -> bad performance
    // this.calcAge = function(){
    //     console.log(2025 - this.birthYear);
    // };
};

const jonas = new Person('Jonas', 1991); // new for Constructor
console.log(jonas);
//1. New {} is created
//2. Function is called, this = {}
//3.{} linked to prototype
//4.function automatically return {}


const quan = new Person('Quan', 2005);
const jack = new Person('Jack', 1999);

console.log(quan);
console.log(quan instanceof Person);

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
     console.log(2025 - this.birthYear);
     };

quan.calcAge();
console.log(quan);

console.log(quan.__proto__);
console.log(quan.__proto__ === Person.prototype);
console.log(quan.prototype);
console.log(Person.prototype.isPrototypeOf(quan));

//Although in obj quan, we dont have the calcAge method but we can still use it
//because we have define the method in the prototyes, and object can acess this method in prototypes

//ProotypeOfLinkedObjects
Person.prototype.species = 'Homo Spaiens';
console.log(quan.species, jonas.species);

console.log(quan.hasOwnProperty('firstName'));
console.log(quan.hasOwnProperty('species'));