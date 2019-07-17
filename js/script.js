let startButton;
let triviadiv;
let timerDiv;
let questionDiv;
let resultsDiv;
let finalScoreDiv;
let answerTextBox;


//variables
//indicate if the game is in progress

var inProgress;


//time limit in seconds
var timeLimit;


//current question number
var questionNum;


//declares player's score

var score;

//list of trivia questions
var questions = [
{
	question: "What is 1 + 1? ",
	correctAnswer: "2"
},
{ 
	
	question: "question ",
	correctAnswer: "answer"
},

{ 
	
	question: "question ",
	correctAnswer: "answer"
},
{ 
	
	question: "question ",
	correctAnswer: "answer"
},
{ 
	
	question: "question ",
	correctAnswer: "answer"
}


];




//initialize the DOM elements

function init() {
	startButton= document.getElementById("start-button");
	triviadiv = document.getElementById("trivia");
	timerDiv = document.getElementById("timer");
	questionDiv = document.getElementById("question");
	answerTextBox = document.getElementById("answer");
	resultsDiv = document.getElementById("results");
	finalScoreDiv = document.getElementById("final-score");
}





//start the game


















