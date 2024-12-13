const questions = [
    {
        question: `Q: Do you usually talk on the phone<br>R: ________.`,
        answers: [
            {text: "I called my mum this morning", correct: false},
            {text: "I don't often talk to friends", correct: false},
            {text: "No, I prefer texting", correct: true},
            {text: "Yes, hardly ever", correct: false},
        ]
    },
    {
        question: `Q: Why are you wearing a bandage<br>R: ________.`,
        answers: [
            {text: "I have a bad stomach", correct: false},
            {text: "I think it's too expensive", correct: false},
            {text: "I was in car accident", correct: true},
            {text: "I'm going to concert", correct: false},
        ]
    },
    {
        question: `Q: Do you have these trainers in a 10<br>R: ________.`,
        answers: [
            {text: "It'll take more than 10 minutes", correct: false},
            {text: "They all have left the gym", correct: false},
            {text: "The next train leaves at 11", correct: false},
            {text: "I'll take a look for you", correct: true},
        ]
    },
    {
        question: `Q: How about going to cinema?<br>R: ________.`,
        answers: [
            {text: "Are there any good films showing?", correct: true},
            {text: "How long will the movie last?", correct: false},
            {text: "I don't like horror films at all", correct: false},
            {text: "I've already seen the movie", correct: false},
        ]
    },
    {
        question: `Q: Why did you change your hair style<br>R: ________.`,
        answers: [
            {text: "I want to look at the model", correct: false},
            {text: "It's more expensive to wear", correct: false},
            {text: "I wash it in evening", correct: false},
            {text: "It's the latest fashion", correct: true},
        ]
    },
    {
        question: `Q: What's your favorite tourist attraction<br>R: ________.`,
        answers: [
            {text: "I often go sightseeing and take pictures", correct: false},
            {text: "That would be the Eiffel Tower in Paris", correct: true},
            {text: "Traveling alone is a lot of fun for me", correct: false},
            {text: "Lots of tourists come to Bangkok", correct: false},
        ]
    },
    {
        question: `Q: How often you clean your room<br>R: ________.`,
        answers: [
            {text: "Every weekend", correct: true},
            {text: "In the evening", correct: false},
            {text: "Once or twice", correct: false},
            {text: "For one hour", correct: false},
        ]
    },
    {
        question: `Q: What does your father do<br>R: ________.`,
        answers: [
            {text: "He does a good job", correct: false},
            {text: "He's in an office", correct: false},
            {text: "He's retired", correct: true},
            {text: "He's fined", correct: false},
        ]
    },
    {
        question: `Q: How long does it take to travel from Chiang Mai to Bangkok<br>R: ________.`,
        answers: [
            {text: "I recommended the overnight bus", correct: false},
            {text: "About an hour by plane", correct: true},
            {text: "Only 600 km.", correct: false},
            {text: "Seven", correct: false},
        ]
    },
    {
        question: `Q: What's the matter with your friend<br>R: ________.`,
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

/* ------------------------------------------------ */

let countdownMinutes = 60;
let countdownTime = countdownMinutes * 60;

const timeElement = document.getElementById("time");
const questionNoElement = document.getElementById("questionNo");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("next-btn");
const gifPlayer = document.getElementById("gifPlayer");

let currentQuestionIndex = 0;
let score = 0;
let countdownInterval;

// Countdown Timer
function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    timeElement.textContent = `${minutes} min ${seconds}s`;

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        clearInterval(countdownInterval);
        timeElement.textContent = "Time's up!";
        showScore();
    }
}

// Start Quiz
function startQuiz() {
    alert("Close this to start the timer");
    currentQuestionIndex = 0;
    score = 0;
    countdownTime = countdownMinutes * 60;
    countdownInterval = setInterval(updateCountdown, 1000);
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show Question Number
function showQuestionNumber() {
    const questionNo = currentQuestionIndex + 1;
    questionNoElement.innerHTML = questionNo + ".&nbsp;";
}

// Show Question
function showQuestion() {
    resetState();
    showQuestionNumber();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Select Answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    gifPlayer.style.display = "none";
}

// Reset State
function resetState() {
    nextButton.style.display = "none";
    gifPlayer.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Show Score
function showScore() {
    clearInterval(countdownInterval);
    resetState();
    
    timeElement.textContent = "";
    questionNoElement.textContent = "";

    const totalTimeUsed = countdownMinutes * 60 - countdownTime;
    const minutesUsed = Math.floor(totalTimeUsed / 60);
    const secondsUsed = totalTimeUsed % 60;

    const scorePercentage = (score / questions.length) * 100;
    questionElement.innerHTML = `Score ${score} / ${questions.length}<br>Duration ${minutesUsed} min ${secondsUsed}s`;

    playGif(scorePercentage);

    if (scorePercentage >= 80) {
        nextButton.textContent = "Home";
        nextButton.onclick = () => {
            window.location.href = "/tgat1";
        };
    } else {
        nextButton.textContent = "Try Again";
        nextButton.onclick = () => {
            window.location.href = "/tgat1-exam";
        };
    }
    nextButton.style.display = "block";
}

// Play GIF Based on Score
function playGif(scorePercentage) {
    if (scorePercentage >= 80) {
        gifPlayer.src =
            "https://media0.giphy.com/media/NYVkNkrc7x99hLQNwF/giphy.gif?cid=6c09b952r0jbi4s0r1fqa77nbuo36xhp0g4gtgoa0kwsnxu8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
    } else if (scorePercentage >= 20 && scorePercentage < 80) {
        gifPlayer.src =
            "https://media2.giphy.com/media/J27KfEl2ayxCQNbyT9/200w.gif?cid=82a1493buxwda61zikzncbnpkxey1aebtg5zyzcbjbhozoy2&ep=v1_gifs_related&rid=200w.gif&ct=g";
    } else if (scorePercentage < 20) {
        gifPlayer.src =
            "https://media4.giphy.com/media/Vuw9m5wXviFIQ/200w.gif?cid=6c09b9523ukw482vexlepx57prpujk0l7nd3g6x5fuydj793&ep=v1_gifs_search&rid=200w.gif&ct=g";
    }
    gifPlayer.style.display = "block";
}

// Handle Next Button
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Next Button Logic
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Initialize Quiz
startQuiz();