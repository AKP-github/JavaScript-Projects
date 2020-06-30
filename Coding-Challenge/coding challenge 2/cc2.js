/*
John and Mark play basketball in different teams. In the latest 3 games , John's team scored 89,120 and 
103 points While Mike's team scored 116,94 and 123 points.

1.Calculate the average score for each team.
2.Decide which team wins in average (highest average score),also print the  winner to the console.
also include the average score in the output.
3.Change the scores to show different winners .Dont forget to take into account there might be a draw (same
    average score.)
4. EXTRA :Mary also plays basketball,and her team scored 97,134 and 105 points. Like before ,log the average winner 
to the console. HINT : you will need the && operator to take the decision.
5. Like before change the scores to show different winners .Dont forget to take into account there might be a draw (same
    average score.)
*/

var markG1score ,markG2score, markG3score;
markG1score = 100;
markG2score = 100;
markG3score = 100;

markAvgscore = (markG1score + markG2score + markG3score) / 3;
console.log('Average Score for Team Mark : ' + markAvgscore);

var johnG1score,johnG2score,johnG3score;
johnG1score = 100;
johnG2score = 100;
johnG3score = 100;

johnAvgscore = (johnG1score + johnG2score + johnG3score ) / 3;
console.log('Average score for Team John : ' + johnAvgscore);
console.log('----------------John Versus Mark--------------');
if(markAvgscore > johnAvgscore)
{
    console.log('Team Mark Wins On Average Score against Team John  Points : ' + markAvgscore )
}
else if(markAvgscore === johnAvgscore)
{
    console.log('Team Mark and Team John have same average score.Result : Draw ..' );
}
else
{
    console.log('Team John Wins on Average Score : ' + johnAvgscore);
}

var maryG1score,maryG2score,maryG3score;
maryG1score = 100;
maryG2score = 100;
maryG3score = 100;

maryAvgscore = (maryG1score + maryG2score + maryG3score ) / 3;
console.log('Average score for Team Mary : ' + maryAvgscore);
console.log('-------------Mark vs John vs Mary-------------');
if(maryAvgscore > markAvgscore && maryAvgscore > johnAvgscore)
{
    console.log('Team Mary wins on average score : ' + maryAvgscore);
}
else if(maryAvgscore === markAvgscore && maryAvgscore === johnAvgscore)
{
    console.log('All three teams have same average scores.Result : Draw..');
}
else if (maryAvgscore > markAvgscore && maryAvgscore < johnAvgscore)
{
    console.log('Team John wins on Average scores : ' + johnAvgscore);
}
else 
{
    console.log('Team Mark wins on Average scores : ' + markAvgscore)
}
