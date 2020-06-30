/* John and his family went to a holiday and went to 3 different restaurants.The bills were 
$124 ,&48 and $268.

To tip the waiter a fair amount , John created a simple tip calculator (as a function) .He likes to
tip 20% of the bill when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end , John would like to have 2 arrays :
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

*/

var bill = [48,124,268];
var tip1,tip2,tip3;
function tipCalculator(bill)
{
    
    if(bill < 50)
    {
         tip1 = bill*0.2;
        console.log('Tip when bill is less than $50 :' + tip1);
    }
    else if(bill >=50 && bill < 200)
    {
        tip2= bill*0.15;
        console.log('Tip when bill is between $50 and $200 :' + tip2);
    }
    else
    {
        tip3 = bill*0.1;
        console.log('Tip when bill is more than $200: ' + tip3);
    }

}
tipCalculator(bill[0]);
tipCalculator(bill[1]);
tipCalculator(bill[2]);

var finalAmount1= ( bill[0] + tip1);
var finalAmount2= (bill[1] + tip2);
var finalAmount3= (bill[2] + tip3);

var finalTip = [tip1,tip2,tip3];
console.log('The Array for Tip : ' + finalTip);
var finalAmount = [finalAmount1,finalAmount2,finalAmount3];
console.log('The Array for Paid Amount :' + finalAmount);
console.log(finalTip,finalAmount);

/*
var bill = [48,124,268];
function tipCalculator(bill)
{
    if(bill < 50)
    {
         percent = 0.2;
    }
    else if(bill >=50 && bill < 200)
    {
       percent  = 0.15;
    }
    else
    {
        percent = 0.1;
    }
    return percent*bill;

}

var tips = [tipCalculator(bill[0]),tipCalculator(bill[1]),tipCalculator(bill[2])];
console.log('Arrays of Tips : ' + tips);
var paidAmount = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]];
console.log('Array of Paid Amount : ' + paidAmount);
*/
