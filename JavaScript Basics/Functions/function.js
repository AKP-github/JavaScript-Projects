
function calAge(birthyear){
    return 2018-birthyear;
}
function yearstillretire(birthyear, firstName)
{
    var age = calAge(birthyear);
    var retireage = 65 - age;
    if(retireage > 0)
    {
        console.log(firstName + ' retires in '+ retireage + ' years ');
    }
    else
    {
        console.log(firstName + ' is already retired.');

    }
}
yearstillretire(1995,'Mike');
yearstillretire(1950,'Anuj');
yearstillretire(1998,'Eren');

// Function Expression  and Statements

//Function Declaration 
// function whatdoudo(job, firstName){}




// Function Expression

var whatdoudo = function(job, firstName){
    switch(job){
        case 'Teacher':
                return firstName + ' teaches kids';
        case 'Driver':
                return firstName + ' drives a cab.'
        case 'Designer':
                return firstName + ' designs website.'
        default:
            return  firstName + ' does something else.'
    }
}
console.log(whatdoudo('Teacher', 'Eren'));
console.log(whatdoudo('Designer', 'Mikasa'));
console.log(whatdoudo('Driver', 'Finral'));
console.log(whatdoudo('Dancer', 'Anuj'));