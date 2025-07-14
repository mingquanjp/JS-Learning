'use strict';

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