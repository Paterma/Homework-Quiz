//Declaring all my varibales and linking my elements with my HTML
var startButton = document.getElementById("startButton")
var nextButton = document.getElementById("nextButton")
var qContainer = document.getElementById("qContainer")
var questions = document.getElementById("questions")
var answerButtons = document.getElementById(".aButtons")
var timeText = document.getElementById("time")
var highscore = document.getElementById("highscore")
var btn = document.getElementById(".btn")
var currentQuestion
var answeredQuestion
var questionOptions
var scores=0; 
var timer = 30;
var savedScores = JSON.parse(localStorage.getItem("score")) || []
var questionIndex =0
var abtn = document.getElementById("abtn")
var bbtn = document.getElementById("bbtn")
var cbtn = document.getElementById("cbtn")
var dbtn = document.getElementById("dbtn")

//Creating my Questions for the quiz with true/false answers
var questionOptions = [
    {
        currentQuestion: "How many different types of loops are there in JavaScript?",
        answers: [
            { text: "2", correct: false},
            { text: "4", correct: false},
            { text: "7", correct: true},
            { text: "9", correct: false},
        ]
    },
    {
        currentQuestion: "How do you remove an item at the end of an Array?",
        answers: [
            { text: ".push", correct: false},
            { text: ".pop", correct: true},
            { text: ".splice", correct: false},
            { text: ".shift", correct: false},
        ]
    },
    {
        currentQuestion: "How many way can you declare a variable in JavaScript?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
        ]
    },
    {
        currentQuestion: "Which is NOT a primitive data type in JavaScript?",
        answers: [
            { text: "Boolean", correct: false},
            { text: "Null", correct: false},
            { text: "String", correct: false},
            { text: "Combine", correct: true},
        ]
    },
    {
        currentQuestion: "How many different conditional statements are there?",
        answers: [
            { text: "8", correct: false},
            { text: "4", correct: true},
            { text: "3", correct: false},
            { text: "6", correct: false},
        ]
    }
]
//initializing page with starting values
function init(){
    renderScores()
    nextButton.style.display = "none"; //no longer display the start button
    // btn.style.display = "none"; //no longer display the start button
}
init ();

// abtn.addEventListener("click", keepScore);
// keepScore()

startButton.addEventListener("click", startGame); //When start button is clicked, start game

function renderQuestion() {
    qContainer.textContent = questionOptions[questionIndex].currentQuestion
    abtn.textContent = questionOptions[questionIndex].answers[0].text
    abtn.setAttribute("data-correct", questionOptions[questionIndex].answers[0].correct)
    bbtn.textContent = questionOptions[questionIndex].answers[1].text
    bbtn.setAttribute("data-correct", questionOptions[questionIndex].answers[1].correct)
    cbtn.textContent = questionOptions[questionIndex].answers[2].text
    cbtn.setAttribute("data-correct", questionOptions[questionIndex].answers[2].correct)
    dbtn.textContent = questionOptions[questionIndex].answers[3].text
    dbtn.setAttribute("data-correct", questionOptions[questionIndex].answers[3].correct)
}

//grab each individual button 4 new variables update text of each button with corresponding answer increase question by 1
//beginning the game
function startGame() { 
    timer = 30;
    renderQuestion()
    
//no longer show the start button once the game has started
startButton.style.display = "none"; //no longer display the start button


var gameTimer = setInterval(() => { //begin the timer when the game starts
    timeText.textContent = timer;
    timer --; //timer is decreasing in time

    if (timer <=0) {
        clearInterval(gameTimer); //if the timer goes to zero, clear the interval
        gameOver ()
    }
    
}, 1000); //in seconds

nextButton.style.display = "inline-block" //now display the next button
nextButton.addEventListener("click", function () {
    questionIndex ++
    if (questionIndex >= questionOptions.length) {
        gameOver()
        
    } else {
        renderQuestion()
    }
})
//when a A, B, C, or D button is clicked it will either give a point if they get it correct or deduct time if it is not
abtn.addEventListener("click", function (event){
    console.log (event.target.dataset.correct)
    var isCorrect = event.target.dataset.correct
    if (isCorrect === "true") {
        scores++;
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
        renderQuestion()
    } else {
        timer = timer-10
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
    }
})

bbtn.addEventListener("click", function (event){
    console.log (event.target.dataset.correct)
    isCorrect = event.target.dataset.correct
    if (isCorrect === "true") {
        scores++;
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
        renderQuestion()
    } else {
        timer = timer-10
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
    }
}
)
cbtn.addEventListener("click", function (event){
    console.log (event.target.dataset.correct)
    isCorrect = event.target.dataset.correct
    if (isCorrect === "true") {
        scores++;
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
        renderQuestion()
    } else {
        timer = timer-10
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
    }
}
)
dbtn.addEventListener("click", function (event){
    console.log (event.target.dataset.correct)
    isCorrect = event.target.dataset.correct
    if (isCorrect === "true") {
        scores++;
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
        renderQuestion()
    } else {
        timer = timer-10;
            questionIndex ++
            if (questionIndex >= questionOptions.length) {
                gameOver()
                
            } else {
                renderQuestion()
            }
    }
}
)  //telling the score to go up when the correct button is clicked 

if (abtn || bbtn || cbtn || dbtn == true) {
    // scores++;
    savedScores; 
} else { 
    // timer -=10;
} 


// }
// keepScore()
function setStatus (element,correct){//two options available- correct and incorrect
    clearStatus(element)
    if (correct) {
        element.ques.add("correct")
    }else{
        element.ques.add("incorrect")
    }
    }

function clearStatus (element){ //removing the correct or incorrect
    element.ques.remove("correct") 
    element.ques.remove("incorrect")
}}



function gameOver () { //Ending game
    // startButton.textContent = "restart"
    var userInitials = window.prompt("What are your initials?") //getting user initials
    var initAndScore = { //creating a var that saves the initials and score together
        userInitials,
        scores
    }
    savedScores.push(initAndScore); //updated saved score data

    localStorage.setItem("score", JSON.stringify(savedScores)) //saving the savedscores to local storage

//Resetting page and variables back to the start for new game
    startButton.style.display = "inline-block";
    nextButton.style.display = "none";
    scores = 0;
    qContainer.style.display="none"
    abtn.style.display="none"
    bbtn.style.display="none"
    cbtn.style.display="none"
    dbtn.style.display="none"

    renderScores();
}


//Show and render scores
function renderScores() {
    var savedScores= JSON.parse(localStorage.getItem("score")) || [] //parsing the data
    console.log(savedScores)
    var shScores= document.getElementById("shScores")
    for (let i = 0; i < savedScores?.length; i++) {
        const element = savedScores[i];
        console.log(element)
        var newInfo = document.createElement("li")
        newInfo.textContent = element.userInitials + " -- " + element.scores
        
        console.log(shScores)
    //     shScores.appendChild(newInfo); 
    }
}


//PSUEDO CODE
//Have the beginning display with a start button
//Once the start button is clicked, a timer begins and you are brought to the first question
//Once an answer is selected, that answer is saved in local storage/logged in the consol
//Once they hit the next button, they are taken to the next question
//The timer goes down by 10 seconds if a question is wrong
//Once all the questions have been answered, you are taken to the End of Game screen
//Timer stops
//User is prompted for their initials
//data is saved for high scores
//high scores are able to be accessed from beginning of game
//info is logged in local storage so it can contiue to be viewed
//reset page and variables for new game
//