/*
Lets remember the first coding challenge where Mark and John compared their BMIs.Lets now implement
the same functionality with objects and methods.
1.For each of them create an object with their full name,mass and height and BMI. Save the BMI to the object
and also return it from the method.
2.In the end , log to the console who has the highest BMI , together with full name and the respective BMI .
Dont forget they might have the same BMI.
*/

var Mark = {
    fullName : ' Mark Evans',
    height  : 4,
    mass : 80 ,
    calcBMI : function()
    {
    this.BMI = ( this.mass/ (this.height*this.height));
    return this.BMI;
    }

};
var John = new Object();
John.fullName = 'John Smith';
John.height = 5;
John.mass = 80;
John.calcBMI = function()
{
    this.BMI = ( this.mass / (this.height*this.height));   
    return this.BMI;
}
Mark.calcBMI();
John.calcBMI();
console.log(Mark, John);
function higherBMI()
{
if (Mark.calcBMI > John.calcBMI)
{
    console.log(Mark.fullName + ' has higher BMI..i.e : ' + Mark.BMI);
}
else if ( Mark.BMI === John.BMI)
{
    console.log(Mark.fullName + ' and ' + John.fullName + ' have equal BMIs.');
}
else
{
    console.log(John.fullName + ' has higher BMI..i.e : ' + John.BMI);    
}
}
higherBMI();