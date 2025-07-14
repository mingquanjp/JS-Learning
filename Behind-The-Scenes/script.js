'use strict';
/*
function calcAge(birthYear){
    const age = 2025 - birthYear;
    

    function printAge(){
        let output =`You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >=2000 && birthYear <=2005){
            var genZ = true; // Var is function scope, can acess outside of block scope
           
            //Creating the NEW variable with same name as outer scope var
            const firstName ='Steven';
            
            //Reasssigning outer scope var
            output ='NEW OUTPUT';
            const str =`Oh, you are in gen Z, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a + b;
            }
           
            
        }
        console.log(genZ);
        // add(2,3);
        console.log(output);
        
    }
    printAge();
    
    return age;
}

const firstName ='Quan';
calcAge(2005);



//Variables
console.log(me); // Var --> undified
// console.log(job);
// console.log(year);

var me = 'Quan';
let job = 'student';
const year = 2005;

//Functions

console.log(addDecl(2,3));
// console.log(addExpr(2,3)); //addExpr is not a function, var --> undified(2,3)
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;
}

var addExpr = function(a,b){
    return a+b;
}

var addArrow = (a,b) => a+b;


//Example
console.log(!numProducts);

if (!numProducts) deleteCart();
//Still print because numProducts = undefined, !numProducts = true;

var numProducts = 10;

function deleteCart(){
    console.log('All deleted');
    
}

var x =1;
let y =2;
const z = 3;

console.log(x=== window.x);

console.log(y=== window.y);

console.log(z=== window.z);


console.log(this);

const calcAgee = function(birthYear){
    console.log(2025 - birthYear);
    console.log(this); // Not point to any key word

    
};
calcAgee(2005);

const calcAgeArrow = birthYear => {
     console.log(2025 - birthYear);
    console.log(this); //Point to the global key word
}

calcAgeArrow(2005);

const Quan = {
    year : 2005,
    calcAge : function(){
        console.log(this);
        console.log(2025 - this.year);
        
    },
};
Quan.calcAge(); // this point to Quan bcs Quan is calling the method calcAge


const Hao = {
    year: 2006,
};

Hao.calcAge = Quan.calcAge; // function is just a value
Hao.calcAge();

const f = Quan.calcAge;
f();

// var firstName = 'Hao'

const Quan = {
    firstName : 'Quan',
    year : 2005,
    calcAge : function(){
        console.log(this);
        console.log(2025 - this.year);

        //Solution 1
        // const self = this;
        // const isMillenial = function(){
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 2005);
        //     // console.log(this.year >= 1981 && this.year <= 2005);
        // };



        const isMillenial = () => { // Arrow function, this inherite from the parent    
           console.log(this);
        //    console.log(self.year >= 1981 && self.year <= 2005);
           console.log(this.year >= 1981 && this.year <= 2005);
         };

        isMillenial(); //simple call -> this = undefined
        
    },

    
    // greet: () => console.log(`Hey ${this.firstName}`), // this is a window function now
    greet : function(){
        console.log(`Hey ${this.firstName}`); // OK- Hey Quan

    }
};
Quan.greet();
Quan.calcAge();

//Arguements  keywords
const addExpr = function (a,b){ // OK with regular function
    console.log(arguments);
    return a+b;
};

addExpr(2,5);
addExpr(2,5,8,10);

var addArrow = (a,b)=>{ // Error with arrow function
    console.log(arguments);
    return a+b
};

addArrow(2,5);

*/
const jessica = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,

};

function marryPerson(originalPerson, newLastName){
    originalPerson.lastName = newLastName;
    return originalPerson;
}

const marriedJessica = marryPerson(jessica,'Davis')

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis'; // change the lastName of obj
console.log('Before : ', jessica);
console.log('Afer :',marriedJessica);

jessica.age = 39;
console.log(jessica);

const jessiaca2 = {
    firstName : 'Jessica',
    lastName : 'Williams',
    age : 27,
    family : ['Alice', 'Bob'],
};

//Shallow copy (low)
const jessicaCopy = {...jessiaca2}; // ... : copy all the attribute from jessica2 into it
jessicaCopy.lastName = 'Davis';

console.log(jessiaca2, jessicaCopy); //No change from jessica2
jessicaCopy.family.push('Katz');
jessicaCopy.family.push('Johm');

console.log('Before : ', jessiaca2); //Both of them are pushed with Katz and John, because the family is an object nested in jessica2
console.log('Afer :', jessicaCopy);

//Deep copy
const jessicaClone = structuredClone(jessiaca2);
jessicaClone.family.push('Katz');
jessicaClone.family.push('Johm');

console.log('Original: ', jessiaca2);  
console.log('Clone :', jessicaClone); // only change in clone, but the original is the same as start