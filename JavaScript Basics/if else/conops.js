/*
var firstName = 'Anuj';
var civilStatus = 'Single';

if(civilStatus === 'Married')
{
    console.log(firstName + ' ' + 'is Married');
}
else
{
    console.log(firstName + ' ' + 'will hopefully maarry soon..')
}
var isMarried = true
if(isMarried)
{
    console.log(firstName + ' ' + 'is Married');
}
else
{
    console.log(firstName + ' ' + 'will hopefully marry soon..')
}
*/

//boolean logic
/*
 var firstName = 'Naruto';
 var age = prompt('Whats the age of ' + firstName + '?');
 console.log(firstName  + ' age = '+ age);

 if(age < 13)
 {
     console.log(firstName + ' is a boy.');
 }
 else if(age >= 13 && age < 20)
 {
    console.log(firstName + ' is a teenager.');
 }
 else if(age >=20 && age < 30)
 {
     console.log(firstName + ' is a young man ')
 }
 else
 {
     console.log(firstName + ' is a man.');
 }

 //Ternary Operation


 age >=18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');


 var drink = age >=18 ? 'beer' : 'juice' ;
 console.log(drink);
 */

 // Switch Statements

 var name = 'Anuj';
 var age = prompt('Whats the age of ' + name + '?');
 console.log(name  + ' age = '+ age);
 switch(true)
 {
     case age < 13:
         console.log(name + ' is a boy.');
         break;
    case age >= 13 && age < 20:
        console.log(name + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(name + ' is a young man.');
        break;
    default:
        console.log(name + ' is a man.')
 }
 

 //Truth and Falsy values
 
 //falsy values : undefined,null,0,'',NaN
 //truthy values : not falsy values

 var height;
 height = 23;
 if(height || height ===0){
     console.log('Variable is defined');
 }
 else{
    console.log('Variable is not defined');
 }

 //equality operators 
 if(height == 23)
 {
     console.log('The == operator does type coercion.')
 }