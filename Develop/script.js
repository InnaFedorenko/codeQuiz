//Define global variables
// let scoreEl = document.querySelector('#score');
let score = 0;

var timerEl = document.querySelector('#time-seconds');
var cardContainer = document.querySelector('#card-container');
var time = 999;
var timerInterval = 0;

var startBtn = document.querySelector('#start');
//Load page
function init(){
    console.log("init");
    stopTimer();
    timerEl.textContent= 'Time: 0'; 
    return;

}
// scoreEl.textContent= `score: ${score}`;
// console.log("Test connected script.js")

//Start timer function
function startTimer () {

    console.log ("Start Timer");
    timerEl.textContent= "Time left: ${time}";
    timerInterval = setInterval( 
        function() {
        time--; 
        timerEl.textContent= `Time left: ${time}`; 
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
function selectAnswer(time,score,answer) {
    //click button to select answer

    console.log("time is   "+ time);
    console.log("score is   "+ score);
    console.log("answer is   "+answer);

}





function startQuiz(){
    // startBtn.addEventListener("click", startTimer());
    console.log("Start Quiz");
    startTimer();

    //Hide Quiz description
    var cardStart = document.getElementById('card-start');
    // Hide the element by setting its CSS display property to "none"
    hideSection(cardStart);

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
    var buttonContainer =document.createElement('div');
    buttonContainer.classList.add('button-container');
    container.appendChild(buttonContainer);
    //add buttons with answers
    for (let i = 0; i < answers.length; i++) {
        var answer = answers[i];
        //var correctAnswer = false;
        //Validate answer

        var button = document.createElement('button');
        button.textContent = answer;
        button.id = "btn"+i;
        console.log("it is button"+button.id);
        buttonContainer.appendChild(button);
    }
    //Add event listeners for buttons
    var buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if (buttons[i].textContent ==='Paris') {
                console.log('Paris');                    
                score+=1;}
            else {
                time-=10;
            }
        });
        }


    return;
}


init();

//Start Quiz


// Add event listener to start button
// startBtn.addEventListener("click", startQuiz());
startBtn.addEventListener("click",startQuiz);
//THEN a timer starts and I am presented with a question








//Display Next Question
//THEN I am presented with another question




//Show is answer correct
//THEN time is subtracted from the clock



//Game is over
//THEN the game is over




//Show score
//THEN I can save my initials and my score