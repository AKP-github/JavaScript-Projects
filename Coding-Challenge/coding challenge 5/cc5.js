/*
John and his family went to 5 different restaurants.The bills were $124, $48, $268, $189 and $42.
John likes to tip 20% of the bill when the bill is less than $50 , 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops :
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output, create i) a new array containing all tips, and ii) an array containing final paid amounts
    (bill+tip). HINT = Start with two empty arrays [] as properties and then fill them up in the loops.

EXTRA AFTER FINISHING : Mark's family also went on a holiday, going to 4 different restaurants . The bills were
$77 , $375 , $110 and $45. Mark likes to tip 20% of the bill when the bill is less than $100 , 10% when the 
bill is between $100 and $300, and 25% if the bill is more than $300.

5. Implement the same functionality as before , this time using Mark's tipping rules.
6. Create a function (not a method ) to calculate the average of a given array of tips . 
    HINT : loop over sum in a variable (starting from 0).After you have the sum of the array , divide it by the
    number of elements in it.
7. Log to the console which family paid the highest tips on average.

*/

var John = {
    fullname : 'John Smith',
    bills : [124,48,268,189,42],
    tips : [],
    paidBills : [],
    calcTip : function()
    {
        for( var i = 0 ; i < this.bills.length; i++)
        {
            if ( this.bills[i] <= 50)
            {
                this.tips[i] = this.bills[i]*0.2;
                this.tips.push(this.tips[i]);
                this.paidBills.push( this.bills[i] + this.tips[i]);
            }
            else if (this.bills[i] > 50 && this.bills[i] <= 200)
            {
                this.tips[i] = this.bills[i]*0.15;
                this.tips.push(this.tips[i]);
                this.paidBills.push( this.bills[i] + this.tips[i]);
            }
            else
            {
                this.tips[i] = this.bills[i]*0.1;
                this.tips.push(this.tips[i]);
                this.paidBills.push( this.bills[i] + this.tips[i]);
            }
        }
    }
};
John.calcTip();
console.log(John);
console.log('Bills Paid by John\'s family :' + John.bills);
console.log('Tips Paid by John\'s family :' + John.tips);
console.log('Total Bills Paid by John\'s family : ' + John.paidBills);


var Mark = {
    fullname : 'Mark Evans',
    bills : [77,375,110,45],
calcTip : function()
{
    this.tips =[];
    this.paidBills =[];

    for( var i = 0 ; i < this.bills.length; i++)
        {
           var percent;
            var bill = this.bills[i];
            if(bill < 100)
                {
                   percent = 0.2;
                }
            else if(bill >=10 && bill <= 300)
                {
                  percent  = 0.1;
                }
            else
                {
                    percent = 0.25;
                }   
            this.tips[i] = bill*percent;
            this.paidBills[i] = bill + bill*percent;

        }
}
};

Mark.calcTip();
console.log(Mark);
console.log('Tips Paid by Mark\'s family : : ' + Mark.tips );
console.log('Bill Paid by Mark\'s family : : ' + Mark.bills);
console.log('Total Bills Paid by Mark\'s family : : ' + Mark.paidBills);

function averageTip()
{
    var sum1 = sum2 = 0;
    for(var i = 0; i < Mark.tips.length; i++)
    sum1 =  sum1 + Mark.tips[i];
    averageMark = sum1/4;
    console.log('Tip paid by Mark\'s family -> ' + averageMark);
    for(var i = 0; i < John.tips.length; i++)
    sum2 =  sum2 + John.tips[i];
    averageJohn = sum2/4;
    console.log('Tip paid by John\'s family -> ' + averageJohn);
    if(averageJohn > averageMark)
        {
            console.log('John\'s family paid the highest tip - ' + averageJohn);
        }
    else if(averageJohn === averageMark)
        {
            console.log('Both families paid equal tip .');
        }
    else
        {
            console.log('Mark\'s family paid the highest tip : ' + averageMark );
        }
}
averageTip();



/*
var John = {
    fullname : 'John Smith',
    bills : [124,48,268,189,42],
calcTip : function()
{
    this.tips =[];
    this.paidBills =[];
    for( var i = 0 ; i < this.bills.length; i++)
        {
           var percent;
            var bill = this.bills[i];
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
            this.tips[i] = bill*percent;
            this.paidBills[i] = bill + bill*percent;
        }
}
};

John.calcTip();
console.log('Bills ' + John.bills);
console.log('Tips ' + John.tips);
console.log('Paid Bills  ' + John.paidBills);
console.log(John);
*/
