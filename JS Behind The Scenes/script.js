/////////////////////   Lecture : Hoisting    ///////////////////////

 /*
// Function Declaration

calcAge(1999);     // ->returns 21
function calcAge(year) 
{
    console.log(2020-year);
}
calcAge(1999); // returns-> 21

// Function Expression

// retirement(1999); // returns-> script.js:14 Uncaught TypeError: retirement is not a function at script.js:14
var retirement = function(year) 
{
    console.log(65-(2020-year));
}
retirement(1999);

// Variables
console.log(age); //  returns -> undefined
var age = 22;

function boo()
{
    console.log(age);//returns ->undfined
    var age = 62;
    console.log(age);// -> returns 62
}
boo();
console.log(age);  //-> returns 22
*/

console.log('---LECTURE  : SCOPING EXAMPLE---');

var a = 'Hello ';
first();

function first(){
    var b = 'Hi ';
    second();

function second(){
    var c ='Hey';
    console.log( a + b + c);
}
}

console.log('--Example to show difference between execution stack and scope chain---'); 

var a = 'Hello ';
third();

function third(){
    var b = 'Hi ';
    fourth();

    function fourth(){
         var c ='Hey';
        fifth();
    }
}

function fifth(){
    var d ='Eren';
   //console.log(a+b+c+d );        // b,c is not defined. shows error
    console.log( a+d);
}


console.log('---Lecture : this Keyword---'); 

//console.log(this);          // returns window
//calcAge(1999);
/*function calcAge(year)
{
    console.log(2020-year);
    console.log(this);
}
*/
var Eren = {
    name : 'Eren',
    birthYear : 2008,
    calcAge : function(){
       // console.log(this);                          //returns-> object
        this.age =  (2020-this.birthYear);

       //function innerfunc(){
       //     console.log(this);                      // returns --> window
       // }
       // innerfunc();
    
    }
};

Eren.calcAge();

var Levi = {
    name : 'Levi',
    birthYear : 2005,

};

Levi.calcAge = Eren.calcAge;                    // Function Borrowing
Levi.calcAge();
console.log(Eren);
console.log(Levi);

