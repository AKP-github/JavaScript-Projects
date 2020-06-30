// lecture : Bind, Call and Apply

var eren = {
    name : 'Eren',
    age : 25,
    job : 'Survey Corp',
    presenatation : function (style, timeofDay){
        if(style=== 'formal'){
            console.log('Good ' + timeofDay + ' ladies and gentlemen ! I\'m ' +this.name + ' I\'m a ' + this.job + 
            ' and I\'m ' + this.age +' years old.'  );
        }
        else if ( style === 'friendly'){
            console.log('Hey ! What\'s up ? I\'m ' + this.name +' I\'m a ' + this.job + 
            ' and I\'m ' + this.age +' years old. Have a nice ' + timeofDay +'.' );
        }
    }
};

var mikasa = {
    name : 'Mikasa',
    age : 23,
    job : 'Survey Corp '
};

eren.presenatation('formal','morning');
eren.presenatation.call(mikasa,'friendly', 'afternoon');

//eren.presenatation.apply(mikasa,['friendly','afternoon']);

var erenFriendly = eren.presenatation.bind(eren,'friendly');

erenFriendly('morning');
erenFriendly('night');

var mikasaFormal = eren.presenatation.bind(mikasa,'formal');
mikasaFormal('afternoon');

console.log('--------------Example-----------------');

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

function isFullage(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years,calcAge);
var fullJapan = arrayCalc(ages,isFullage.bind(this,20));
console.log(ages);
console.log(fullJapan);