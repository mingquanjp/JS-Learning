'use strict';

//Constructor function
/*

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

console.log(jonas.__proto__);
//Obj.prototype ( top of chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
const arr = [1, 2, 3, 4, 5, 4, 2];
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function(){
   return [...new Set(this)];
}
//obj can access the method in the prototypes
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 4);

class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }


    //Instance method
    //Method will be added to the property
    calcAge() {
        console.log(`You are ${2025-this.birthYear} years old!`);
    }

    //When we use get, it turn into a property, not a function !!!
    get age() {
        return 2025 - this.birthYear;
    }

    //Set a property that already exists
    set firstName(name){
        console.log(name);
        if (!name.includes(' ')) this._firstName = name;
        else alert(`${name} is not a first name!`);
    }

    get firstName(){
        return this._firstName;
    }

    static hey(){
        console.log(`Hi guy!`);
        console.log(this
        );
    }
}

const quan = new PersonCl('Quan', 2005);
console.log(quan);
quan.calcAge();
console.log(quan.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function(){
    console.log(`Hey ${this.firstName}`);
};

PersonCl.hey();

quan.greet();
console.log(quan.age);
console.log(quan.firstName);
console.log(quan);
console.log(quan.first_Name);

// classes arre not hoisted
// class are first_class citizes
// classes are exxecuted in strict mode

 const hao = new PersonCl('Hao Do', 2004);
 console.log(hao);

const account = {
    owner: 'Quan',
    movements: [200,530,120,300],

    get lastest(){
        return this.movements.slice(-1).pop();
    },

    set lastest(mov){
        this.movements.push(mov);
    },
};

console.log(account.lastest);

account.lastest = 50;
console.log(account.movements);

*/


const PersonProto = {
    calcAge(){
        console.log(2025 - this.birthYear);
    },

    inits(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const quan = Object.create(PersonProto);
console.log(quan);
quan.name = 'Steven';
quan.birthYear = 2000;
quan.calcAge();
console.log(quan.__proto__);

const hao = Object.create(PersonProto);
hao.inits('Hao', 2001);
hao.calcAge();

