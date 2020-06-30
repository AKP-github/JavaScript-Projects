/*
---Lets build a fun quiz game in the console !---

1. Build a function constructor called Question to describe a questions. A questions should include:
    a) questions itself.
    b) the answer which the player can choose the correctAns one (choose an adeqauate data structure here,
        array, object, etc..)
    c) correctAns answer ( I would use number for this)

2. Create a couple of questions using constructor 
3. Store them all inside array
4. Select one random questions and log it on the console, together with possible answers (HINNT : write a method
    for the questions objects for this task).
5. Use the prompt function to ask the user for correctAns answer . The user should input the number of the correctAns 
    answer such as displayed in task 4.
6. Check if the answer is correctAns and print it to the console whether the answer is correctAns or not (HINT : write
    another method for this ).
7. Suppose this code would be plugin for other programmers to use their code. So make sure that all your code is
    private and does not interfere with other programmers' code.


(function(){
    function Question(questions,answer,correctAns){
        this.questions = questions;
        this.answer = answer;
        this.correctAns = correctAns;
    }
    Question.prototype.displayQuestion = function()
    {
        console.log(this.questions);
    
        for(var i =0; i < this.answer.length; i++){
            console.log(i + ':' + this.answer[i]);
        }
    }
     
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correctAns){
            console.log('Correct Answer ! ');
        }
        else
        {
            console.log('Incorrect Answer.. -_-! Try Again');
        }
    }
    var q1 = new Question('Is Attack On Titans best anime ? ', 
                            ['Yes', 'No'],
                            0);
    var q2 = new Question('Who is the writer of Attack on Titans ? ',
                            ['Hajime Ishiyama','Tite Kubo','Akira Toriyama'],
                            0);
    var q3 = new Question('Who is the founding Titan ? ',
                            ['Armin','Eren','Reiner','Annie'],
                            1);
    var questions = [q1,q2,q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correctAns answer : '));
    
    questions[n].checkAnswer(answer);
})();

*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
 (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game 
if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correctAns, add 1 point
 to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do
  this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){
    function Question(questions,answer,correctAns){
        this.questions = questions;
        this.answer = answer;
        this.correctAns = correctAns;
    }
    Question.prototype.displayQuestion = function()
    {
        console.log(this.questions);
    
        for(var i =0; i < this.answer.length; i++){
            console.log(i + ':' + this.answer[i]);
        }
    }
     
    Question.prototype.checkAnswer = function(ans,callback){

        var sc;

        if (ans === this.correctAns){
            console.log('Correct Answer ! ');
            sc = callback(true);
        }
        else
        {
            console.log('Incorrect Answer.. -_-! Try Again');

            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is : ' + score);
        console.log('------------------------------------------');
    }

    var q1 = new Question('Is Attack On Titans best anime ? ', ['Yes', 'No'],0);
    var q2 = new Question('Who is the writer of Attack on Titans ? ',['Hajime Ishiyama','Tite Kubo','Akira Toriyama'], 0);
    var q3 = new Question('Who is the founding Titan ? ',['Armin','Eren','Reiner','Annie'],1);
    var q4 = new Question('Who is the Beast Titan ?' ,['Sasha','Zeke','Historia'],1);
    var questions = [q1,q2,q3,q4];
    function score(){
        var sc = 0;
        return function(correctAns){
            if(correctAns){
                sc++
            }
            else{
                sc--;
            }
            return sc;
        }
    }
    var keepscore = score();
    function nextQuestion(){
    
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer answer : ');
        if (answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepscore);
        nextQuestion();
        }
    }
    nextQuestion();

})();

 