// Function Constructor

var Person  = function(name, yearofBirth, job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
}

Person.prototype.calcAge =   function(){
    console.log(2020 - this.yearofBirth);   
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1999, 'Teacher'); // new operator creates an empty object and then function is called.
var jane = new Person('Jane', 1955, 'Designer');
var mark = new Person('Mark', 1975, 'Soldier');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


/*
// Object.create

var personProto = {
    calcAge: function(){
        console.log(2016 - this.yearofBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearofBirth = 1999;
john.job = 'Teacher';

var jane = Object.create(personProto, {
    name : { value : 'Jane'},
    yearofBirth : { value : 1965},
    job : { value : 'Designer'}
});
*/

/*

// Primitives vs Objects

// Primitives

var a = 23;
var b =a;
a = 85;
console.log(a);
console.log(b);

// Objects


obj1 = {
    name : 'Eren',
    age : 25
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age)

// Functions

var age = 24;
var obj = {
    name : 'Anuj',
    city : 'Howrah'
};

function change(a,b){
    a = 38;
    b.city = 'New Delhi';
};

change(age, obj);
console.log(age);
console.log(obj.city);

*/

