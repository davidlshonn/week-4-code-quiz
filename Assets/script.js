var downloadTimer;
var timeleft = 60;
var userScore = 0;

var questions = [
  {
    question: "What is 2 + 2?",
    answers: ["4", "22", "5", "2"],
    correctAnswer: "4",
  },
  {
    question: "What is 5 + 2?",
    answers: ["4", "22", "7", "2"],
    correctAnswer: "7",
  },
  {
    question: "What is 5 + 2?",
    answers: ["4", "22", "7", "2"],
    correctAnswer: "7",
  },
  {
    question: "What is 5 + 2?",
    answers: ["4", "22", "7", "2"],
    correctAnswer: "7",
  },
  {
    question: "What is 5 + 2?",
    answers: ["4", "22", "7", "2"],
    correctAnswer: "7",
  },
];

var startButton = document.getElementById("start-btn");
var starterScreen = document.getElementById("starterCode");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
questionContainerElement.style.display = "none";
var questionElement = document.getElementById("questionAsked");
var answerButtonsElement = document.getElementById("answer-buttons");

var currentQuestionIndex = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  starterScreen.style.display = "none";
  questionContainerElement.style.display = "block";
  setNextQuestion();
}

function close(){

    clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!";
      var container = getElementById("container");
      container.style.display = "none";
}

function function1() {

    document.getElementById("countdown").innerHTML =
      timeleft + "&nbsp" + "seconds remaining";

      timeleft -= 1;
    
      if(timeleft <= 0){
      
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Time is up!"
    }
}

function setNextQuestion() {
  //Timer

  downloadTimer = setInterval(function1, 1000);  
  //start timer and display the time remaining to the user
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  var answersArea = document.getElementById("answer-buttons");
  answersArea.innerHTML = "";
  for (var i = 0; i < question.answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", question.answers[i]);
    answerButton.textContent = question.answers[i];
    answerButton.addEventListener("click", selectAnswer);
    answersArea.appendChild(answerButton);
  }
}

function selectAnswer() {
  if (this.value === questions[currentQuestionIndex].correctAnswer) {
    userScore = userScore + 1;
    alert("correct" + userScore);
  } else {
    userScore = userScore - 1;
    alert("incorrect " + userScore);
    

    clearInterval(downloadTimer);
    timeleft -= 5;
    downloadTimer = setInterval(function1, 1000);
    // check if any time is remaining on timer and end quiz if not
    if (timeleft <= 0) {
        close();
      }
  }
  currentQuestionIndex++;

  var amountOfQuestions = questions.length;
  if (amountOfQuestions === currentQuestionIndex) {
    endQuiz();
  } else {
    showQuestion(questions[currentQuestionIndex]);
  }
}

function endQuiz() {
  // hide the questions section
  
  // reveal a section where you can save your score to local storage and also see the highscores (you need to check for these in local storage)
  //reveal a button which you can click on and clear down local storage
}
