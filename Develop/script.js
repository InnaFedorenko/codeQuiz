//Define global variables
let scoreEl = document.querySelector('#score');
let score = 0;

var timerEl = document.querySelector('#time-seconds');
var cardContainer = document.querySelector('#card-container');
var time = 10;
var timerInterval = 0;

var startBtn = document.querySelector('#start');
//Load page
function init(){
    stopTimer();
    timerEl.textContent= 'Time: 0'; 
    scoreEl.textContent = 'Score: 0';
    return;

}
// scoreEl.textContent= `score: ${score}`;
// console.log("Test connected script.js")

//Start timer function
function startTimer () {

    console.log ("Start Timer");
   // timerEl.textContent= 'Time left: ${time}';
    timerInterval = setInterval( 
        function() {
        if (time > 0) {
            time--; 
            timerEl.textContent= `Time left: ${time}`; 
        } else{
            // If timer reaches 0, clear the interval and navigate to the "Game Over" page
            clearInterval(timerInterval);
            window.location.href = "score.html";
        }
        
        }, 1000 
    )
    console.log(time);
    return;
 }
//Stop Timer
function stopTimer(){
    console.log("Stop Timer");
    return;
}
//Hide section
function hideSection(section){
    section.style.display = 'none';
    return;
}

function createQuestion(){
    // First, create a container element to hold the question and answers
    var container = document.createElement('div');
    //container.classList.add('question-container');
    cardContainer.appendChild(container);

    // Next, create the question text element
    var question = document.createElement('h3');
    question.textContent = 'What is the capital of France?';
    container.appendChild(question);


    // Create an array to hold the possible answers
    var answers = ['Paris', 'Berlin', 'Madrid'];
    console.log("answers - "+ answers);

    // Loop through the answers array and create a button element for each answer
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    container.appendChild(buttonContainer);
    //add buttons with answers
    for (let i = 0; i < answers.length; i++) {
        // var answer = answers[i];
        var button = document.createElement('button');
        button.textContent = answers[i];
        button.id = "btn"+i;
        buttonContainer.appendChild(button);
    }
    //Add span element
    var span = document.createElement('span');
    span.id = 'score-message';
    span.textContent = 'Score Message- '+ score;
    buttonContainer.appendChild(span);
    //span.display = none;
    return document.querySelectorAll('button');
}
function runtQuiz(){
    //Hide Quiz description
    var cardStart = document.getElementById('card-start');
    // Hide the element by setting its CSS display property to "none"
    hideSection(cardStart);
    //Add event listeners for buttons
    var buttons = createQuestion();
    var scoreMessage = '';
    var messageEL = document.querySelector('#score-message');
    startBtn.addEventListener("click", startTimer());
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            console.log('Selected button is '+ buttons[i].textContent);
            if (buttons[i].textContent ==='Paris') {
                scoreMessage = 'Correct!';
                console.log('Paris is '+ scoreMessage);                    
                score+=1;
                console.log ('Score is '+score);
            }
            else {
                time-=10;
                scoreMessage = 'Wrong!';
                console.log (buttons[i].textContent + ' is '+ scoreMessage);  
            }
            console.log('scoreMessage - '+ scoreMessage);
            // var messageEL = document.querySelector('#score-message');
            messageEL.textContent = scoreMessage;
            console.log ('Score2 is '+score);
            scoreEl.textContent='Score: '+ score;
            //add timeout
            setTimeout(function() {
                // Code to be executed after 3 seconds
                console.log("3 seconds have passed!");
                document.querySelector('#score-message').textContent=''
            }, 3000);
            console.log('Next  Question');
         //add time validation
         console.log('Time is '+time);
            return ;
        });
    }
    return;
}
//scoreEl.textContent 

init();

//Start Quiz

// Add event listener to start button
startBtn.addEventListener("click",runtQuiz);


//THEN a timer starts and I am presented with a question








//Display Next Question
//THEN I am presented with another question




//Show is answer correct
//THEN time is subtracted from the clock



//Game is over
//THEN the game is over




//Show score
//THEN I can save my initials and my score