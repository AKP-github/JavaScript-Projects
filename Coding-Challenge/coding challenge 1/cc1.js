
/*
Mark and john are trying to compare their BMI( Body Mass Index), which is calculated using the formula:
BMI = Mass/Height ^2= mass/(height*height).
Mass in Kg and Height in meter.
1.Store Mark’s and John’s height in variables
2.Calculate both their BMIs.
3.Print a string to console containing the variable from step 3.(something like “IS Mark’s BMI higher than  John’s  ? true”.
*/


var markMass,johnMass;
var markHeight,johnHeight;
markMass = 78;
console.log('Mass of Mark is = ' + markMass );
markHeight = 2.8;
console.log('Height of Mark is = ' + markHeight );
johnMass = 55;
console.log('Mass of John is = ' + johnMass );
johnHeight = 2.7;
console.log('Height of John is = ' + johnHeight);

 var  markBMI,johnBMI;
 

 markBMI = markMass / (markHeight * markHeight);
 console.log('BMI of Marks : ' + markBMI);

 johnBMI = johnMass / (johnHeight * johnHeight);
 console.log('BMI of John is : '  + johnBMI);

var greaterBMI;
greaterBMI = markBMI > johnBMI;
console.log(greaterBMI);

console.log('Is the BMI of Mark greater than John ? ' + greaterBMI);

//Using Prompt

var markMass = prompt('What is the Mass of Mark ?');
console.log('Mass of Mark is ' + markMass);
var markHeight = prompt('What is the height of Mark? ');
console.log('Height of Mark is : ' + markHeight);
console.log('BMI of Mark : ' + markBMI );
var johnMass = prompt('What is the Mass of John ?');
console.log('Mass of John is ' + johnMass);
var johnHeight = prompt('What is the height of John ? ');
console.log('Height of John is : ' + johnHeight);
console.log('BMI of John : ' + johnBMI );

var greaterBMI;
greaterBMI = markBMI > johnBMI;
console.log(greaterBMI);

console.log('Is the BMI of Mark greater than John ? ' + greaterBMI);
