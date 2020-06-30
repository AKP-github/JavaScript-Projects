// variable & data types//

var firstName = 'Anuj';
console.log(firstName);
var lastName = 'Prasad';
var age = 22;
var fullAge = true;
console.log(fullAge);
var job; //undefined//
console.log(job);
job = 'Teacher';
console.log(job);


console.log('----Variable Mutation and Type Coercion----------');
 var firstName = 'Eren';
 var age = 12;

 //Type Coercion

 console.log(firstName + '  ' + age);
 var job, isMarried;
 job = 'Survey Corps';
 isMarried = false;
 console.log(firstName + ' ' + age + ' years old ' + job + ' .Is he Married ? ' + isMarried); //converted to string
 
 //Variable Mutation

 age = ' twelve';
 job = 'driver';

console.log(firstName + ' ' + age + ' years old ' + job + ' .Is he Married ? ' + isMarried);
alert(firstName + ' ' + age + ' years old ' + job + ' .Is he Married ? ' + isMarried);

var lastName = prompt('What is his last name ? ');
console.log(firstName + '  ' + lastName);

/*
// Basic Operators....
var year,yearEren,yearMikasa;
year = 2030;
ageEren = 20;
ageMikasa = 18;

//Math Operators

 yearEren =year-28;
  yearMikasa = year-25;
 console.log(yearEren);
 console.log(yearMikasa);

console.log(year +2);
console.log(year * 2);
console.log(year / 10);

//Logical Operators
var erenOlder = ageEren < ageMikasa;
console.log(erenOlder);

//Typeof operator
console.log(typeof erenOlder);
console.log(typeof ageMikasa);
console.log(typeof ' Eren is the Founding Titan');
var x;
console.log(typeof x);

*/

//Operator precedence
 
var now = 2020;
var yearEren = 2000;
var fullage = 18;

var isFullage = now - yearEren >= fullage; //true
console.log(isFullage);
 
var ageEren = now - yearEren;
var ageMikasa = 18;
var average = (ageEren + ageMikasa) / 2;
console.log(average);
 
// Multiple assignments

var x,y;
x = y = (3+5) * 4-6; // assosiativity of assignment operator is right->left
console.log(x,y); // therefore when x = y (y is undefined at this point) works

// More operators 

x ++;
console.log(x);
x += 1;
console.log(x);
x *= 2;
console.log(x);


