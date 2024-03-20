const questions = [  //array with objects containing questions and answers
    {
        question: "What is the capital of France?",
        answers: [
            {text: "London", correct: "false"},
            {text: "Paris", correct: "true"},
            {text: "Rome", correct: "false"},
            {text: "Madrid", correct: "false"},
        ]
    },
    {
        question: "What is chemical symbol for water?",
        answers: [
            {text: "Wa", correct: "false"},
            {text: "H2O", correct: "true"},
            {text: "H2", correct: "false"},
            {text: "O2", correct: "false"},
        ]
    },
    {
        question: 'Who worte the famous play "Romeo and Juliet"?',
        answers: [
            {text: "William Shakespeare", correct: "true"},
            {text: "Charles Dickens", correct: "false"},
            {text: "Jane Austen", correct: "false"},
            {text: "Mark Twin", correct: "false"},
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "Mount Kilimanjaro", correct: "false"},
            {text: "Mount Everest", correct: "true"},
            {text: "Mount Fuji", correct: "false"},
            {text: "Mount McKinley", correct: "false"},
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"?',
        answers: [
            {text: "Mars", correct: "true"},
            {text: "Jupiter", correct: "false"},
            {text: "Venus", correct: "false"},
            {text: "Saturn", correct: "false"},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: "true"},
            {text: "Ag", correct: "false"},
            {text: "Fe", correct: "false"},
            {text: "Cu", correct: "false"},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: "Vincent van Gogh", correct: "false"},
            {text: "Pablo Picasso", correct: "false"},
            {text: "Leonardo da Vinci", correct: "true"},
            {text: "Michelangelo", correct: "false"},
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            {text: "Liver", correct: "false"},
            {text: "Heart", correct: "false"},
            {text: "Skin", correct: "true"},
            {text: "Brain", correct: "false"},
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers: [
            {text: "6", correct: "false"},
            {text: "7", correct: "true"},
            {text: "8", correct: "false"},
            {text: "5", correct: "false"},
        ]
    },
    {
        question: "Who was the first person to step on the moon?",
        answers: [
            {text: "Buzz Aldrin", correct: "false"},
            {text: "Neil Armstrong", correct: "true"},
            {text: "Yuri Gagarin", correct: "false"},
            {text: "Michael Collins", correct: "false"},
        ]
    }
];

const questionElement = document.getElementById( 'question' );  // it gets the element of questions
const answerButton = Array.from(document.getElementsByClassName("answer-button"));
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

let startQuiz = () => {
    nextButton.innerHTML = "Next";
    showQuestion();
}

let showQuestion = () =>{
    if(currentQuestionIndex >= 10){
        // let mainBox = document.getElementById("main-box");
        // console.log("hello")
        // let child = mainBox.childNodes[1];
        // child.style.visiblity = "hidden !important";
        // console.log(child)
        questionElement.innerHTML = `You got ${score}/10 points!`;
        questionElement.classList.add("text-danger");
        for(let x in answerButton){
            answerButton[x].remove();
        }
        nextButton.classList.remove("display-none");
        nextButton.innerHTML = "Play Again.";
        nextButton.onclick = () =>{
            location.reload();
        }
    }
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    for(let i = 0; i < answerButton.length; i++){
        answerButton[i].innerHTML = currentQuestion.answers[i].text;
        if(currentQuestion.answers[i].correct == "true"){
            //console.log(currentQuestion.answers[i].text)
            answerButton[i].dataset.correct = currentQuestion.answers[i].correct;
        }
    }
    //console.log(answerButton)
    answerButton.forEach((elem)=>{
        elem.addEventListener('click', selectAnswer);
    })
}

let selectAnswer = (e) =>{
    let selectedButton = e.target;
    // console.log(selectedButton)
    if(selectedButton.dataset.correct == "true"){
        // console.log("hello")
        selectedButton.classList += " correct";
        score++;
        // console.log(score);
    }
    else{
        selectedButton.classList += " incorrect";
    }
    answerButton.forEach((button)=>{
         if(button.dataset.correct == "true"){
             button.classList.add("correct");
         }
        button.disabled = true;
        nextButton.classList.remove("display-none");
    })
}
nextButton.addEventListener("click", ()=>{
    for(let i in answerButton){ // turning off the disable
        answerButton[i].classList.remove("correct");
        answerButton[i].classList.remove("incorrect"); 
        answerButton[i].dataset.correct = false;
        answerButton[i].disabled = false;
    }
    nextButton.classList.add("display-none");
    startQuiz();
    currentQuestionIndex++;
})


//disabling all buttons before start
for(let i in answerButton){
    answerButton[i].disabled = "true";
}

