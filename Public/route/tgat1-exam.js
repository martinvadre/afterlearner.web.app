const questions = [
    {
        question: `Q: Do you usually talk on the phone? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "I called my mum this morning", correct: false},
            {text: "I don't often talk to friends", correct: false},
            {text: "No, I prefer texting", correct: true},
            {text: "Yes, hardly ever", correct: false},
        ]
    },
    {
        question: `Q: Why are you wearing a bandage? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "I have a bad stomach", correct: false},
            {text: "I think it's too expensive", correct: false},
            {text: "I was in car accident", correct: true},
            {text: "I'm going to concert", correct: false},
        ]
    },
    {
        question: `Q: Do you have these trainers in a 10? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "It'll take more than 10 minutes", correct: false},
            {text: "They all have left the gym", correct: false},
            {text: "The next train leaves at 11", correct: false},
            {text: "I'll take a look for you", correct: true},
        ]
    },
    {
        question: `Q: How about going to cinema?  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "Are there any good films showing?", correct: true},
            {text: "How long will the movie last?", correct: false},
            {text: "I don't like horror films at all", correct: false},
            {text: "I've already seen the movie", correct: false},
        ]
    },
    {
        question: `Q: Why did you change your hair style? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "I want to look at the model", correct: false},
            {text: "It's more expensive to wear", correct: false},
            {text: "I wash it in evening", correct: false},
            {text: "It's the latest fashion", correct: true},
        ]
    },
    {
        question: `Q: What's your favorite tourist attraction? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "I often go sightseeing and take pictures", correct: false},
            {text: "That would be the Eiffel Tower in Paris", correct: true},
            {text: "Traveling alone is a lot of fun for me", correct: false},
            {text: "Lots of tourists come to Bangkok", correct: false},
        ]
    },
    {
        question: `Q: How often you clean your room? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "Every weekend", correct: true},
            {text: "In the evening", correct: false},
            {text: "Once or twice", correct: false},
            {text: "For one hour", correct: false},
        ]
    },
    {
        question: `Q: What does your father do? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "He does a good job", correct: false},
            {text: "He's in an office", correct: false},
            {text: "He's retired", correct: true},
            {text: "He's fined", correct: false},
        ]
    },
    {
        question: `Q: How long does it take to travel from Chiang Mai to Bangkok? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "I recommended the overnight bus", correct: false},
            {text: "About an hour by plane", correct: true},
            {text: "Only 600 km.", correct: false},
            {text: "Seven", correct: false},
        ]
    },
    {
        question: `Q: What's the matter with your friend? <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R: ________.`,
        answers: [
            {text: "He is a friendly  person", correct: false},
            {text: "He likes science", correct: false},
            {text: "He scored well", correct: false},
            {text: "He lost his dog", correct: true},
        ]
    },
    {
        question: `Conversation 1 <br>
        Joe: Hello Pete, how have you been? Long time no see!<br>
        Pete: ____(11)____ We haven't seen each other for months. How have you been?<br>
        Joe: I have an important event-to organize next week. That has kept me very busy. ____(12)____ .<br>
        Pete: Oh! I just finished a meeting with an important client. Now I have some free time.<br>
        Joe: Good for you. ____(13)____ catch up with each other sometime after next week?<br>
        Pete: Sure. ____(14)____ when you have finished your project.<br>
        Joe: Okay. Bye, take care.`,
        answers: [
            {text: "It's been a long day!", correct: true},
            {text: "It's a matter of luck!", correct: false},
            {text: "What a surprise!", correct: false},
            {text: "Time's up!", correct: false},
        ]
    },
    {
        question: `Conversation 1 <br>
        Joe: Hello Pete, how have you been? Long time no see!<br>
        Pete: ____(11)____ We haven't seen each other for months. How have you been?<br>
        Joe: I have an important event-to organize next week. That has kept me very busy. ____(12)____ .<br>
        Pete: Oh! I just finished a meeting with an important client. Now I have some free time.<br>
        Joe: Good for you. ____(13)____ catch up with each other sometime after next week?<br>
        Pete: Sure. ____(14)____ when you have finished your project.<br>
        Joe: Okay. Bye, take care.`,
        answers: [
            {text: "How do you like it?", correct: false},
            {text: "Are you with me?", correct: false},
            {text: "How about you?", correct: true},
            {text: "Are you sure?", correct: false},
        ]
    },
    {
        question: `Conversation 1 <br>
        Joe: Hello Pete, how have you been? Long time no see!<br>
        Pete: ____(11)____ We haven't seen each other for months. How have you been?<br>
        Joe: I have an important event-to organize next week. That has kept me very busy. ____(12)____ .<br>
        Pete: Oh! I just finished a meeting with an important client. Now I have some free time.<br>
        Joe: Good for you. ____(13)____ catch up with each other sometime after next week?<br>
        Pete: Sure. ____(14)____ when you have finished your project.<br>
        Joe: Okay. Bye, take care.`,
        answers: [
            {text: "Why do we need to", correct: false},
            {text: "Don't you want to", correct: false},
            {text: "Do you agree to", correct: false},
            {text: "Why don't we", correct: true},
        ]
    },
    {
        question: `Conversation 1 <br>
        Joe: Hello Pete, how have you been? Long time no see!<br>
        Pete: ____(11)____ We haven't seen each other for months. How have you been?<br>
        Joe: I have an important event-to organize next week. That has kept me very busy. ____(12)____ .<br>
        Pete: Oh! I just finished a meeting with an important client. Now I have some free time.<br>
        Joe: Good for you. ____(13)____ catch up with each other sometime after next week?<br>
        Pete: Sure. ____(14)____ when you have finished your project.<br>
        Joe: Okay. Bye, take care.`,
        answers: [
            {text: "Give me a call", correct: true},
            {text: "Catch me up", correct: false},
            {text: "Make a line", correct: false},
            {text: "Check out", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    gifPlayer.style.display = 'none'
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    gifPlayer.style.display = 'none'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    const scorePercentage = (score / questions.length) * 100;
    const gifPlayer = document.getElementById("gifPlayer");
    if(scorePercentage >= 80) {
        playGif();
        nextButton.innerHTML = 'Home'
        nextButton.addEventListener('click', function () {
            window.location.href = 'https://afterlearner.web.app/tgat1';
        });
    }
    else {
        nextButton.innerHTML = 'Try Again'
        nextButton.addEventListener('click', function () {
            window.location.href = 'https://afterlearner.web.app/tgat1-exam';
        });
    }
    nextButton.style.display = 'block'
}

function playGif() {
    const gifPlayer = document.getElementById("gifPlayer");
    gifPlayer.src = 'https://media4.giphy.com/media/Vuw9m5wXviFIQ/200w.gif?cid=6c09b9523ukw482vexlepx57prpujk0l7nd3g6x5fuydj793&ep=v1_gifs_search&rid=200w.gif&ct=g';
    gifPlayer.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
});

startQuiz();