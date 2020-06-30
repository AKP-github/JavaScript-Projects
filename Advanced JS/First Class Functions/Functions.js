/*
// Passing Functions as Arguments

var years = [1999,1995,1992,1998,2005];

function arrayCalc(arr,func){
    var arrRes = [];
    for( var i = 0 ; i < arr.length; i++)
    {
        arrRes.push(func(arr[i]));
    }
    return arrRes;
}

function calcAge(el){
    return 2020 - el;
}

function isFullage(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
    return Math.round (206.9 - (0.67*el));
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years,calcAge);
var fullAges = arrayCalc(ages,isFullage);
var rates = arrayCalc(ages,maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/
/*
// Functions returning Functions

function interviewQuestions(job){
    if (job === 'Designer'){
        return function(name){
            console.log(name + ',can you explain what UX design is ?');
        }
    }
    else if (job === 'Teacher'){
        return function(name){
            console.log(name +',what subject do you teach ?');
        }
    }
    else{
        return function(name){
            console.log('Hello ' + ',what do you do ?');
        }
    }
}

var teacherQuestion = interviewQuestions('Teacher');
var designerQuestion = interviewQuestions('Designer');

teacherQuestion('John');
designerQuestion('Rupangi');

interviewQuestions('Teacher')('Mark');

*/

// Lecture : IIFE (Immediately Invoked Function Expression)
/*
function game(){
    var score = Math.random()*10;
    console.log(score>=10);
}
game();
*/
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);










