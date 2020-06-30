
// Arrays
//1. Initialize new array
var names = ['Anuj','Sayam','Gautam']; // frequently used
var years = new Array(1990,1999,2000); // Less used

console.log(names);
console.log(names. length);
console.log(names[2].length);

// 2. Mutating Array data

names[1] = 'Eren';       
console.log(names[1]);
console.log(names);
names[3] = 'Levi';
console.log(names);
names[names. length]= 'Mikasa'; // Adds data at the last index
console.log(names);

// Different data types

var Light = ['Light','Yagami',2008,'Shinigami',false];
console.log(Light);
Light.push('Apple'); //Adds Element at end of array
Light.unshift('Kami'); //Adds Element at beginning of array
console.log(Light);
Light.pop();
Light.pop();
Light.unshift();

console.log(Light);
console.log(Light.indexOf('Shinigami')); //Returns the index of given element in the array if absent returns -1
console.log(Light.indexOf('Ryuk'));
var isDesigner = Light.indexOf('Designer') === -1? 'Light is not a designer' : 'Light is a designer';
console.log(isDesigner);
var isDesigner = Light.indexOf('Kami') === -1? 'Light is not a Kami' : 'Light is a Kami';
console.log(isDesigner);

