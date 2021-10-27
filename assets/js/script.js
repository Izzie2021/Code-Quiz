
var startBtnEl = document.querySelector("#start-btn");
var pageContentEl = document.querySelector("#page-content");
var startPageContainerEl = document.querySelector("#start-page-container");
var currentQuestion = 0;
var questionBankDataObject = [
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    },
    {
        questionText: "question 1",
        correctAnswer: "3",
        answerOptions: ["1", "2", "3", "4"],
    }
]

var startBtnHandler = function (event) {
    event.preventDefault();
    console.log("text2");

    //delete start quiz container
    startPageContainerEl.remove()


    // start timer for quiz



    // show first question
    var quizContainerEl = document.createElement("section");
    quizContainerEl.className = "quiz-continer";
    quizContainerEl.id = "quiz-container";

    // view score link button
    var highscoresEl = document.createElement("a");
    highscoresEl.className = "highscores-text";
    highscoresEl.innerHTML = "View Highscores";
    highscoresEl.href = "/highscores";
    quizContainerEl.appendChild(highscoresEl);

    var timerEl = document.createElement("p");
    timerEl.className = "timer-text";
    timerEl.innerHTML = "5:00";
    quizContainerEl.appendChild(timerEl);

    var questionContainerEl = document.createElement("div");
    questionContainerEl.className = "question-container";
    questionContainerEl.id = "question-container"
    quizContainerEl.appendChild(questionContainerEl);

    var questionTextEl = document.createElement("h1");
    questionTextEl.className = "quetion-text";
    questionTextEl.id = "question-text";
    questionTextEl.innerHTML = "Question 1";
    questionContainerEl.appendChild(questionTextEl);

    //question options
    var answerOptionsContainerEl = document.createElement("div");
    answerOptionsContainerEl.className = "answer-options-container";
    answerOptionsContainerEl.id = "answer-options-container";
    questionContainerEl.appendChild(answerOptionsContainerEl);

    var answerOptionOneEl = document.createElement("button");
    answerOptionOneEl.className = "btn";
    answerOptionOneEl.id = "answer-option-one";
    answerOptionOneEl.innerHTML = "Answer 1";
    answerOptionsContainerEl.appendChild(answerOptionOneEl);

    var answerOptionTwoEl = document.createElement("button");
    answerOptionTwoEl.className = "btn";
    answerOptionTwoEl.id = "answer-option-two";
    answerOptionTwoEl.innerHTML = "Answer 2";
    answerOptionsContainerEl.appendChild(answerOptionTwoEl);

    var answerOptionThreeEl = document.createElement("button");
    answerOptionThreeEl.className = "btn";
    answerOptionThreeEl.id = "answer-option-three";
    answerOptionThreeEl.innerHTML = "Answer 3";
    answerOptionsContainerEl.appendChild(answerOptionThreeEl);

    var answerOptionFourEl = document.createElement("button");
    answerOptionFourEl.className = "btn";
    answerOptionFourEl.id = "answer-option-four";
    answerOptionFourEl.innerHTML = "Answer 4";
    answerOptionsContainerEl.appendChild(answerOptionFourEl);

    pageContentEl.appendChild(quizContainerEl);



    //feedback
}

startBtnEl.addEventListener("click", startBtnHandler);

{/* <section class="quiz-container" id="quiz-container">
            <a class="higscores-text" href="/highscores">View Highscores</a>
            <p class="timer-text" id="timer">5:00</p>

            <div class="question-container" id="question-container">
                <h1 class="question-text" id="question-text">Question 1</h1>
                <div class="answer-options-container" id="answer-options-container">
                    <button class="btn" id="answer-option-one">Answer 1</button>
                    <button class="btn" id="answer-option-two">Answer 2</button>
                    <button class="btn" id="answer-option-three">Answer 3</button>
                    <button class="btn" id="answer-option-four">Answer 4</button>
                </div>

            </div>

            <div class="feedback-container" id="feedback-container">
                <p class="feedback-text" id="feedback-text">Correct!</p>
            </div>
        </section> */}