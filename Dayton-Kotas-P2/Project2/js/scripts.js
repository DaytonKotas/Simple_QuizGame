const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let randomizeQuestions
let currentIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentIndex++
    setNextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    randomizeQuestions = questions.sort(() => Math.random() - .5)
    currentIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        answerButtonElement.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    });
}

function setNextQuestion(){
    resetState()
    showQuestion(randomizeQuestions[currentIndex])
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomizeQuestions.length > currentIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Play Again'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

const questions = [
    {
        questions: 'Who won the 2021 NBA Finals?',

        answers:[
            { text: 'Milwaukee Bucks', correct: true},
            { text: 'Huston Rockets', correct: false},
            { text: 'Boston Celtics', correct: false},
            { text: 'Orlando Magic', correct: false}
        ]
    }, 
    {
        questions: 'How many months are in a year?',

        answers:[
            { text: '30', correct: false},
            { text: '12', correct: true},
            { text: '24', correct: false},
            { text: '13', correct: false}
        ]
    },
    {
        questions: 'What is 2 + 2?',

        answers:[
            { text: '0', correct: false},
            { text: '100', correct: false},
            { text: '4', correct: true},
            { text: '7', correct: false}
        ]
    }
]