let startButton;
let nextQuestionButton;
let playAgainButton;
let triviadiv;
let timerDiv;
let questionDiv;
let resultsDiv;
let finalScoreDiv;
let answerTextbox;


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
	question: "Run Who Run? ",
	correctAnswer: "forest"
},
{ 
	
	question: "What does General assembly instructors tell you to do, when you ask a question? ",
	correctAnswer: "google it"
},

{ 
	
	question: " Winnie the Pooh's best friend",
	correctAnswer: "piglet"
},
{ 
	
	question: " Yabba ... doo ",
	correctAnswer: "dabba"
},
{ 
	
	question: " I'm starting with the man in the .....",
	correctAnswer: "mirror"
},
{ 
	
	question: "2019 NBA Champions - city",
	correctAnswer: "toronto"
},
{ 
	
	question: "Capital of Deleware",
	correctAnswer: "dover"
},
{ 
	
	question: "Our deepest fear is not that we are inadequate, our deepest fear is that...",
	correctAnswer: "we are powerful beyond measure"
},
{ 
	
	question: "When in doubt",
	correctAnswer: "log it out"
},
{ 
	
	question: "Live, laugh, ....",
	correctAnswer: "love"
}

];




//initialize the DOM elements

function init() {
	startButton= document.getElementById("start-button");
	nextQuestionButton= document.getElementById("next-question");
	playAgainButton= document.getElementById("play-again");
	triviadiv = document.getElementById("trivia");
	timerDiv = document.getElementById("timer");
	questionDiv = document.getElementById("question");
	answerTextbox = document.getElementById("answer");
	resultsDiv = document.getElementById("results");
	finalScoreDiv = document.getElementById("final-score");

	startButton.addEventListener("click", function(){

		startGame();
	});
	nextQuestionButton.addEventListener("click", function(){

		answerQuestion();
	});
	playAgainButton.addEventListener("click", function(){

		playAgain();
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
	timeLimit = 60;
	timerDiv.innerHTML = "Time left<br />" + timeLimit;

	//set question number

	questionNum = 0;

	//set the starting score
	score = 0;

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
			gameover();

		}else if(!inProgress){
			//if player finish trivia before Time expires
			clearInterval(x);
		}


	}, 1000); 

}


function displayQuestion(){
	//gtet questions from our list and display on page
	questionDiv.innerHTML = questions[questionNum].question;
}


function answerQuestion(){
	//get the player's answer form the textbox

	var playerAnswer = answerTextbox.value;

	//check if the answer is correct

	if( playerAnswer === questions[questionNum].correctAnswer){ 
		//add 1 point to score
		score ++;

	};


	//advance the question to the next number
	questionNum ++;

	//clear the answer textbox

	answerTextbox.value = "";

	//check if there are more questions left

    if( questionNum < questions.length){

		//display the next question
		displayQuestion();
	}else {

		//display results
		gameover();

	}	

}

function gameover(){
	//set the in progress variable to false
	inProgress = false;
	//hide the trivia div

	triviadiv.classList.add("hide")

	//unhide the results div
	resultsDiv.classList.remove("hide")

	//display the final score
	finalScoreDiv.innerHTML = score + " out of " + questions.length;
}


function playAgain(){

	//unhide the start buttom
	startButton.classList.remove("hide")

	//hide play again button
	resultsDiv.classList.add("hide")
}












