////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lecture : Maps
/*

Maps string keys to arbitary values.This is called Hash Map.It is a key value data structure in ES6. We can use anything for the keys
unlike objects where we are limited to strings but in Maps we can use any kind of primitive value like number,strings or boolean and 
we can also use functions and objects as keys.

*/


const question = new Map();
question.set('question','What is the official name of the latest major JavaScript version ?');
question.set(1,'ES5');
question.set(2,'Es6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct',3);
question.set(true,'Correct Answer !');
question.set(false,'Wrong || Try Again.....');

console.log(question.get('question'));
//console.log(question.size);           //returns length 
if(question.has(4)){
    //question.delete(4); // key value 4's data is deleted
    //console.log('Question 4 is here');
}

//question.clear(); // clearsv everything from the map

//////////*******looping through maps**********/////////////////

//question.forEach((value,key) => console.log(`This is ${key}, and it's set to ${value}`));

for( let [key, value] of question.entries()){       // entries returns all entries of the question map. we can use destructuring to store
                                                     // the key and values into two separate values
    //console.log(`This is ${key}, and it's set to ${value}`);
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} : ${value}`);
    }
}

const ans = parseInt(prompt('Choose the correct option.'));
console.log(question.get(ans === question.get('correct')));
                            
