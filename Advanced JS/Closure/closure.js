// Closures

function retirement(retirementAge){
    var a =' years left until retirement';
    return function(yearofBirth){
        var age = 2020-yearofBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementIND = retirement(65);
var retirementGermany = retirement(67);

retirementIND(1990);
retirementUS(1990);
retirementGermany(1990)

//retirement(66)(1990);

// Using Closure 

function interviewQuestions(job){
        return function(name){
            if(job === 'Designer'){
                console.log( name + ',what is UX design ?');
            }
            else if (job === 'Teacher'){
            console.log(name + ',what subject do you teach ?');
           }
           else{
               console.log('Hello ! ' + name + ' what do you do ?')
           }
        }
}

var teacherQuestions = interviewQuestions('Teacher');
teacherQuestions('Anuj');

interviewQuestions('Soldier')('Anuj');
interviewQuestions('Designer')('Mikasa');
interviewQuestions('Teacher')('Kakashi');
