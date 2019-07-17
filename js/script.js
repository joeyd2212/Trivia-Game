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

	startButton.addEventListener("click", function(){

		startGame();
	});
}





//start the game

function startGame (){

	// set the in progres to true
	inProgress = true;

	// hide the start button
	startButton.classList.add("hide");


	// show the trivia div
	triviadiv.classList.remove("hide")

	//set the time limit
	timeLimit = 10;
	timerDiv.innerHTML = "Time left<br />" + timeLimit;

	//set question number

	questionNum = 0;

	//set the starting score
	score =0;

	//start the time

	startTimer();

	//display the first question
	displayQuestion();


}

function startTimer() {

	var x = setInterval(function() {

		//suntract 1 from the time limit
		timeLimit--;

		//update time left
		timerDiv.innerHTML = "Time left<br/>" + timeLimit;

		if(timeLimit < 0){
			// stop the number
			clearInterval(x);

			//display time expired
			timerDiv.innerHTML = "Time expired"

			//display results
		}


	}, 1000); 

}


	function displayQuestion(){
		//gtet questions from our list and display on page
		questionDiv.innerHTML = questions[questionNum].question;
	}


	function answerQuestion({
		//get th epayer's answer form the textbox
	})
















