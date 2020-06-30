/* Loops and Iterations


for ( var i =0; i < 10; i++)
{
    console.log(i);
}
*/
console.log('---------FOR LOOP----------')
var Light = ['Light','Yagami',2008,'Shinigami',false];

for( var i =0; i < Light.length; i++)
{
    console.log(Light[i]);
}

// While loop
console.log('----------WHILE LOOP-----------')
var i =0;
while ( i  < Light.length )
{
    console.log(Light[i]);
    i++;
}

// continue and break statement

console.log('--------continue-----------')
var Light = ['Light','Yagami',2008,'Shinigami',false];

for( var i =0; i < Light.length; i++)
{
    if( typeof Light[i] !== 'string' )
    continue  ;                               // !== is the strict different operator
    console.log(Light[i]);
}
console.log('--------break-----------')
for( var i =0; i < Light.length; i++)
{
    if( typeof Light[i] !== 'string' ) break  ;                               // !== is the strict different operator
    console.log(Light[i]);
}

console.log('---------FOR LOOP BACKWARDS----------')
var Light = ['Light','Yagami',2008,'Shinigami',false];

for( var i = Light.length-1; i >= 0; i--)
{
    console.log(Light[i]);
}