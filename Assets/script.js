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
  }
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

function setNextQuestion() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  var answersArea = document.getElementById("answer-buttons");
  answersArea.innerHTML = "";
  for (var i = 0; i < question.answers.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.setAttribute("value", question.answers[i])
    answerButton.textContent = question.answers[i];
    answerButton.addEventListener("click", selectAnswer);
    answersArea.appendChild(answerButton);
  }
}

function selectAnswer() {
    if (this.value === questions[currentQuestionIndex].correctAnswer){
        alert("fsoinf")
    } else {
        // remove time from timer 
    }
    currentQuestionIndex++;

    var amountOfQuestions = questions.length; 
    if (amountOfQuestions === currentQuestionIndex){

    }else {

        showQuestion(questions[currentQuestionIndex])
    }
}
