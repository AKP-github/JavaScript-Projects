//  Lecture : Let and const

/*

// ES5

// var is function scoped

var name5  = 'Anuj Prasad';
var age5 = 22;
name5 = 'Anuj Kumar';
console.log(name5);

// ES6

// let and const are block scoped

const name6 = 'Anuj Prasad';
let age6 = 22;
name6 = 'Anuj Kumar';
// console.log(name6);  //Uncaught TypeError:Assignment to constant variable.

*/
/*

// ES5
function driverLiscense5(passedTest){

    if(passedTest){
        console.log(firstName); // undefined
        var firstName  = 'Anuj,';
        var yearOfBirth = 1999;
    }
    console.log(firstName + ' born in ' + yearOfBirth +' is now officially allowed to drive.');

}


driverLiscense5(true);

// ES6

function driverLiscense6(passedTest){
    
    //console.log(firstName); // script.js:44 Uncaught ReferenceError: Cannot access 'firstName' before initialization

    let firstName ;
    const yearOfBirth = 1999;

    if(passedTest){
        firstName = 'Anuj,';
        
        //yearOfBirth = 1999; // Uncaught SyntaxError: Missing initializer in const declaration

        console.log(firstName + ' born in ' + yearOfBirth +' is now officially allowed to drive.'); 

    }
    //console.log(firstName + ' born in ' + yearOfBirth +' is now officially allowed to drive.'); 
    //Uncaught ReferenceError: firstName is not defined

}
driverLiscense6(true);
/*
console.log('---------------');

let j = 23;

for( let j = 0; j < 5; j++){
    console.log(j);
}

console.log(j); // returns 23


console.log('--------------');
var  i = 23;
for(var i = 0; i < 5; i++){
    console.log(i);
}

console.log(i); // returns  5



/*
//////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Blocks and IIFEs

//ES6

{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a + b); //script.js:92 Uncaught ReferenceError: a is not defined
console.log(c);
//console.log(a);
//console.log(b); //script.js:95 Uncaught ReferenceError: b is not defined


// ES5
(function() {
    var c = 3;
})();

//console.log(c);

*////////////////////////////////////////////////////////////////////////////////////////

/*
// Lecture  : Strings

let firstName = 'Anuj';
let lastName = 'Prasad';
const yearOfBirth = 1999;
function calcAge(year){
    return  2020 - year;
}

//ES5

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' +
calcAge(yearOfBirth) + ' years old.');


//ES6

console.log(`This is ${firstName} ${lastName}.He was born in ${yearOfBirth}.Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('A'));
console.log(n.endsWith('ad'));
console.log(n.includes('s'));
console.log(firstName.repeat(6));
console.log(`${firstName} ` .repeat(6)); // same as above but with spaces

*/
/////////////////////////////////////////////////////////////////////////////////////

// Lecture : Arrows Functions 1

/*

const years = [1990,1998,1983,1936,1999];

//ES5

var ages5 = years.map(function(el){

    return 2020 -el;

});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6  = years.map((el, index) => `Age element ${index + 1} : ${2020-el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now -el;
    return `Age element ${index +1} : ${age}.`
});
console.log(ages6);

*/

///////////////////////////////////////////////////////////////////////////////////////////////


// Lecture : Arrow Functions 2, Lexical 'this' keyword
/*
//ES5

var box5 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is '  + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6

var box6 = {
    color : 'green',
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();


var box66 = {
    color : 'green',
    position : 1,
    clickMe : () => {
        var self = this;
        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
            // output-->>This is box number undefined and it is undefined
        });
    }
}
box66.clickMe();
*/

/*

function Person(name){
    this.name = name;
}

//ES5

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


//ES6

Person.prototype.myFriends6 = function(friends){

    var arr  = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Sayam', 'Minhaj','Gautam'];
new Person('Anuj').myFriends6(friends);

*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture : DESTRUCTURING -> extract data from a data structure like an object or an array

/*

//ES5

var Aot = ['Eren',15];
//var name = Eren[0];  // Both elements are in a separate variable 
//var age = Eren[1];   // diffult to follow this process when the number of elements is large


// ES6
// follow this process when the number of elements is large

const [name, year]  = ['John',26];
console.log(name);
console.log(year);

const obj = {
    firstName : 'Eren',
    lastName : 'Jaegar'
};

const {firstName, lastName} =obj;  // variable names must match the keys .
console.log(firstName);
console.log(lastName);

const { firstName : a, lastName : b} = obj;  // we can change variable names like this
console.log(a);
console.log(b);

// Practical application

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [ age, 65 - age];
}

const [ age2, retirement] = calcAgeRetirement(1999); // return values from the function are stored in different variables by destructuring
console.log(age2);
console.log(retirement);

*/

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture : Arrays

const boxes = document.querySelectorAll('.box'); // returns nodeList, we have to convert it into array

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
    
});


//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');




// ES5
/*
for(var i = 0; i < boxesArr5.length; i++){

    if(boxesArr5[i].className === 'box blue'){
        continue;
        //break;
    }
    boxesArr5[i].textContent = ' I changed to blue!';

}


//ES6

for(const cur of boxesArr6){

    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = ' I changed to blue!';

}


// ES5

var ages = [ 12,17,8,21,14,11];

var full = ages.map(function(cur){
    return cur >=18;

})
console.log(full);
console.log(full.indexOf(true));        // position of the element
console.log(ages[full.indexOf(true)]);  // value of the element  at the position 

//ES6

ages.findIndex(cur => cur>= 18);
console.log(ages.findIndex(cur => cur>= 18));    // position of the element 
console.log(ages.find(cur => cur >= 18));          // value of the element at the position 

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lecture : Spread operator

/*

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familyNaruto = ['Naruto','Minato','Boruto'];
const familySasuke = ['Itachi','Sasuke','Sarada'];

const bigFamily = [...familyNaruto,'Hinata','Sakura',...familySasuke];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'yellow');

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Rest Parameters(allows us to pass arbitary number of arguments in a function)
// Spread operator is called in the function call while rest operator is called in function declaration

/*

//ES5
function isFullAge5(){
    //console.log(arguments);
    var agrsArr = Array.prototype.slice.call(arguments);
    agrsArr.forEach(function(cur){
        console.log((2020-cur) >= 18);
    })
    
}

//isFullAge5(1990,1995,2009);
//isFullAge5(1985,1987,1995,2005);

//ES6

function isFullAge6(...years){
    years.forEach(cur => console.log((2020-cur) >= 18));

}

isFullAge6(1990,1995,2009),2015);
*/
//--------------------------------------------------------------------------------------------------------------------------------
// adding an argument of age limit

/*

//ES5
function isFullAge5(limit){                             
    //console.log(arguments);
    var agrsArr = Array.prototype.slice.call(arguments,1); 
// array will be copied from position 1 of the array not 0. hence 1st argument is excluded

    agrsArr.forEach(function(cur){
        console.log((2020-cur) >= limit);
    })
    
}

isFullAge5(18,1990,1995,2009);
//isFullAge5(1985,1987,1995,2005);

//ES6

function isFullAge6(limit,...years){
    years.forEach(cur => console.log((2020-cur) >= limit));

}

isFullAge6(16,1990,1995,2009,2015);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Lecture : Default parameters

/*

//ES5

function SmithPerson(firstName,yearOfBirth,lastName,nationality){
    lastName === undefined ? lastName = 'Prasad' : lastName = lastName;
    nationality === undefined ? nationality = 'Indian' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var anuj  = new SmithPerson('Anuj',1999);
var jyoti = new SmithPerson('Jyoti',1995,'Kumari')



// ES6
function SmithPerson(firstName,yearOfBirth,lastName = 'Prasad',nationality = 'Indian'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality; 
}
var anuj  = new SmithPerson('Anuj',1999);
var jyoti = new SmithPerson('Jyoti',1995,'Kumari');

*/


















