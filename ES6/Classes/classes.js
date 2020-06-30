//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Classes
/*
Classes simply make it easier to implement inheritance and to create objects based on blueprints(Function constructors in ES5).
Class definitions are not hoisted so unlike Function constructors we need to first implement a class and later in the code
start using it.
We can only add methods to classes but not properties.
*/
/*
// ES5
var Person5 = function(name, yearofBith, job){
    this.name = name;
    this.yearofBith = yearofBith;
    this.job = job;
}

Person5.prototype.calcAge = function(){
     var age  = new Date().getFullYear() - this.yearofBith;
     console.log(age);
}

var anuj5 = new Person5('Anuj',1999, 'Student');

// ES6

class Person6 {
    constructor(name, yearofBith, job){
        this.name = name;
        this.yearofBith = yearofBith;
        this.job = job;
    }
    calcAge(){
        var age  = new Date().getFullYear() - this.yearofBith;
        console.log(age);
    }
    // Static Methods : Methods attached to the class but not inherited by the class instances 
    static greeting(){
        console.log('Hello there');
    }
}
const anuj6 = new Person6('Anuj', 1999, 'Student');
Person6.greeting();

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Inheritance between classes and subclasses

// ES5

var Person5 = function(name, yearofBith, job){           // Superclass
    this.name = name;
    this.yearofBith = yearofBith;
    this.job = job;
}

Person5.prototype.calcAge = function(){
     var age  = new Date().getFullYear() - this.yearofBith;
     console.log(age);
}

var Athelete5 = function(name, yearofBith, job, olympicGames, medals){                  // subclass

    Person5.call(this, name, yearofBith, job);
    this.olympicGames = olympicGames;
    this.medals  = medals;
}

Athelete5.prototype = Object.create(Person5.prototype); // Object.create allows us to manually set the prototype of an object

Athelete5.prototype.wonMedals = function(){
    this.medals ++;
    console.log(this.medals);
}

var anujAthelete5 = new Athelete5('Anuj',1999, 'Shooter', 4, 10);

anujAthelete5.calcAge();
anujAthelete5.wonMedals();


// ES6

class Person6 {                                                 //Superclass
    constructor(name, yearofBith, job){
        this.name = name;
        this.yearofBith = yearofBith;
        this.job = job;
    }
    calcAge(){
        var age  = new Date().getFullYear() - this.yearofBith;
        console.log(age);
    }
}

class Athlete6 extends Person6{                                 //Subclass
    constructor(name, yearofBith, job, olympicGames, medals){
        super(name, yearofBith, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedals(){
        this.medals ++;
        console.log(this.medals);
    }
}

var anujAthlete6 = new Athlete6('Anuj',1999,'Shooter',2,2);

anujAthlete6.wonMedals();
anujAthlete6.calcAge();








