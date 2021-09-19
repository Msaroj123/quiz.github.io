//Question bank
var questionBank= [
    {
        question : 'India has largest deposits of ____ in the world.',
        option : ['Gold','Copper','Mica','None of the above'],
        answer : 'Mica'
    },
    {
        question : 'Indias first satellite is named after',
        option : ['Aryabhatta','Bhaskara II','Bhaskara I','	Albert Einstein'],
        answer : 'Aryabhatta'
    },
    {
        question : 'In which season do we need more fat?',
        option : ['Rainy season','Spring','Winter','Summer'],
        answer : 'Winter'
    },
    {
        question : 'India participated in Olympics Hockey in',
        option : ['1918','1928','1938','1948'],
        answer : '1928'
    },
    {
        question : 'How many red blood cells does the bone marrow produce every second?',
        option : ['2 million','5 million','7 million','10 million'],
        answer : '2 million'
    },
    {
        question : 'With which sport is the Jules Rimet trophy associated?',
        option : ['Basketball','Football','Hockey','Golf'],
        answer : 'Football'
    },
    {
        question : 'Joule is the unit of',
        option : ['temperature','pressure','energy','heat'],
        answer : 'energy'
    },
    {
        question : 'Milkha Singh Stood ____ in 1960 Olympics, in Athletics.',
        option : ['fourth in 400m final','second in 400m final','eighth in 50km walk','seventh in 800m final'],
        answer : 'fourth in 400m final'
    },
    {
        question : 'Lala Lajpat Rai is also known as',
        option : ['Sher-e-Punjab','Punjab Kesari','both (a) and (b)','	None of the above'],
        answer : 'both (a) and (b)'
    },
    {
        question : 'Kiran Bedi is',
        option : ['first woman IAS officer','first woman IPS officer','	first woman advocate','first woman judge'],
        answer : 'first woman IPS officer'
    }

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();