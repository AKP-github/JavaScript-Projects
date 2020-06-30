// Objects and Properties

//Initialize Objects Method1 - Object Literals
var Eren = {
    firstName : 'Eren',
    lastName : 'Yaegar',
    birthYear : '2008',
    family : ['Mikasa','Armin','Historia'],
    job : 'Survey Corps',
    isMarried : false
};

//Initialize Objects Method2 - New Objects
var Naruto = new Object();
Naruto.firstName = 'Naruto';
Naruto.lastName = 'Uzumaki';
Naruto.job = 'Hokage';
Naruto.birthYear = 1999;
console.log(Naruto);
console.log(Eren);

//Retrieving Data from objects
console.log(Eren.birthYear); //Method1
console.log(Eren.family[1]);
console.log(Eren['lastName']); //Method 2
var x = 'birthYear';          // Method 3
console.log(Eren[x]);

//Mutating

Eren['isMarried'] = true; //Mutation Method1 
Eren.job ='Garrison';     //Mutation Method2
console.log(Eren);



// Objects and Methods

var Eren = {
    firstName : 'Eren',
    lastName : 'Yaegar',
    birthYear : 2000,
    family : ['Mikasa','Armin','Historia'],
    job : 'Survey Corps',
    isMarried : false,
    calcAge : function()
    {
        this.age =  (2020 - this.birthYear); // this keyword points to object John
    }
};
Eren.calcAge();
console.log(Eren);
