const questions = [
    {
        question: "What is the chemical symbol for water?",
        answer: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false },
        ]
    },
    {
        question: "What is the atomic number of hydrogen?",
        answer: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "8", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "Which gas do plants use for photosynthesis?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "Which element is commonly used in batteries?",
        answer: [
            { text: "Lithium", correct: true },
            { text: "Helium", correct: false },
            { text: "Iron", correct: false },
            { text: "Gold", correct: false },
        ]
    },
    {
        question: "What is the pH of pure water?",
        answer: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "9", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "What type of bond involves the sharing of electrons?",
        answer: [
            { text: "Ionic Bond", correct: false },
            { text: "Covalent Bond", correct: true },
            { text: "Hydrogen Bond", correct: false },
            { text: "Metallic Bond", correct: false },
        ]
    },
    {
        question: "Which metal is a liquid at room temperature?",
        answer: [
            { text: "Mercury", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "What is the main gas found in the sun?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Gold", correct: false },
            { text: "Tin", correct: false },
        ]
    },
    {
        question: "Which type of reaction releases energy?",
        answer: [
            { text: "Endothermic", correct: false },
            { text: "Exothermic", correct: true },
            { text: "Reversible", correct: false },
            { text: "Oxidation", correct: false },
        ]
    },
    {
        question: "What is the most reactive metal in the periodic table?",
        answer: [
            { text: "Sodium", correct: false },
            { text: "Potassium", correct: false },
            { text: "Francium", correct: true },
            { text: "Calcium", correct: false },
        ]
    },
    {
        question: "Which element is found in all organic compounds?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: true },
            { text: "Hydrogen", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "What is the formula for table salt?",
        answer: [
            { text: "NaCl", correct: true },
            { text: "HCl", correct: false },
            { text: "KCl", correct: false },
            { text: "NaOH", correct: false },
        ]
    },
    {
        question: "What is the lightest element?",
        answer: [
            { text: "Helium", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "What is the main component of natural gas?",
        answer: [
            { text: "Methane", correct: true },
            { text: "Ethane", correct: false },
            { text: "Propane", correct: false },
            { text: "Butane", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for ammonia?",
        answer: [
            { text: "NH3", correct: true },
            { text: "H2O", correct: false },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
        ]
    },
    {
        question: "Which element is essential for respiration?",
        answer: [
            { text: "Carbon", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Graphite", correct: false },
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Quartz", correct: false },
        ]
    },
    {
        question: "Which noble gas is used in balloons?",
        answer: [
            { text: "Neon", correct: false },
            { text: "Argon", correct: false },
            { text: "Helium", correct: true },
            { text: "Xenon", correct: false },
        ]
    },
    {
        question: "Which gas do humans exhale when breathing?",
        answer: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the atomic number of oxygen?",
        answer: [
            { text: "8", correct: true },
            { text: "6", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false },
        ]
    },
    {
        question: "Which acid is found in lemons?",
        answer: [
            { text: "Citric Acid", correct: true },
            { text: "Sulfuric Acid", correct: false },
            { text: "Hydrochloric Acid", correct: false },
            { text: "Acetic Acid", correct: false },
        ]
    },
    {
        question: "What is the most common element in the universe?",
        answer: [
            { text: "Hydrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "What is the state of matter of oxygen at room temperature?",
        answer: [
            { text: "Gas", correct: true },
            { text: "Liquid", correct: false },
            { text: "Solid", correct: false },
            { text: "Plasma", correct: false },
        ]
    },
    {
        question: "Which element is used to make nuclear fuel?",
        answer: [
            { text: "Uranium", correct: true },
            { text: "Plutonium", correct: false },
            { text: "Thorium", correct: false },
            { text: "Radium", correct: false },
        ]
    },
    {
        question: "Which element is commonly used in light bulbs?",
        answer: [
            { text: "Argon", correct: true },
            { text: "Neon", correct: false },
            { text: "Krypton", correct: false },
            { text: "Xenon", correct: false },
        ]
    },
    {
        question: "What is the atomic symbol for silver?",
        answer: [
            { text: "Ag", correct: true },
            { text: "Au", correct: false },
            { text: "Si", correct: false },
            { text: "Al", correct: false },
        ]
    },
    {
        question: "Which type of scientist studies chemical reactions?",
        answer: [
            { text: "Chemist", correct: true },
            { text: "Physicist", correct: false },
            { text: "Biologist", correct: false },
            { text: "Geologist", correct: false },
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answer: [
            { text: "100°C", correct: true },
            { text: "90°C", correct: false },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false },
        ]
    },
    {
        question: "Which gas is known as laughing gas?",
        answer: [
            { text: "Nitrous Oxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon Monoxide", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "What element is needed for bones to stay strong?",
        answer: [
            { text: "Calcium", correct: true },
            { text: "Iron", correct: false },
            { text: "Magnesium", correct: false },
            { text: "Potassium", correct: false },
        ]
    },
    {
        question: "Which metal is known for its high conductivity?",
        answer: [
            { text: "Copper", correct: true },
            { text: "Aluminum", correct: false },
            { text: "Iron", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "What is the process of a solid turning directly into gas?",
        answer: [
            { text: "Sublimation", correct: true },
            { text: "Condensation", correct: false },
            { text: "Evaporation", correct: false },
            { text: "Freezing", correct: false },
        ]
    },
    {
        question: "What is the atomic number of carbon?",
        answer: [
            { text: "6", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "8", correct: false },
        ]
    },
    {
        question: "What is the charge of an electron?",
        answer: [
            { text: "Negative", correct: true },
            { text: "Positive", correct: false },
            { text: "Neutral", correct: false },
            { text: "Varies", correct: false },
        ]
    },
    {
        question: "What element makes up diamonds?",
        answer: [
            { text: "Carbon", correct: true },
            { text: "Silicon", correct: false },
            { text: "Iron", correct: false },
            { text: "Oxygen", correct: false },
        ]
    },
    {
        question: "Which element is used in thermometers?",
        answer: [
            { text: "Mercury", correct: true },
            { text: "Lead", correct: false },
            { text: "Zinc", correct: false },
            { text: "Tin", correct: false },
        ]
    },
    {
        question: "What is the atomic symbol for gold?",
        answer: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pb", correct: false },
            { text: "Pt", correct: false },
        ]
    },
    {
        question: "What gas is produced by plants during photosynthesis?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "Which of these is an alkaline metal?",
        answer: [
            { text: "Sodium", correct: true },
            { text: "Iron", correct: false },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "What is the symbol for potassium?",
        answer: [
            { text: "K", correct: true },
            { text: "P", correct: false },
            { text: "Pt", correct: false },
            { text: "Po", correct: false },
        ]
    }
];


const questionData = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const questionCount = document.getElementById("questionCount");
let timerElement = document.getElementById("timer");
let time = 10;

let timerAudio = new Audio("../audios/10 Seconds Timer.mp3");
let hooray = new Audio("../audios/hooray.mp3")

function correctAnswer() {
    let click = new Audio("../audios/Correct Answer sound effect - Sound Effects.mp3");
    click.play();
}

function wrongAnswer() {
    let click = new Audio("../audios/buzzer-or-wrong-answer-20582.mp3");
    click.play();
}

let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
    for (i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleAnswers(questions) {
    return questions.map(question => {
        return {
            ...question,
            answer: shuffleArray([...question.answer])
        };
    });
}

function startQuiz() {
    timerElement.style.display = "block";
    clearInterval(interval);
    time = 10;
    interval = setInterval(Timer, 1000);
    Timer();

    shuffleArray(questions);
    shuffledQuestions = questions.slice(0, 20);

    shuffledQuestions = shuffleAnswers(shuffledQuestions);

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    clearPage();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionData.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";
        timerAudio.pause();
        timerAudio.currentTime = 0;

    if (correct) {
        selectedBtn.classList.add("correct");
        correctAnswer();
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        wrongAnswer();
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    clearInterval(interval);
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        nextButtonClick();
    } else {
        startQuiz();
    }
});

let params = new URLSearchParams(window.location.search);
let username = params.get("name");

function endScreen() {
    clearInterval(interval);
    timerAudio.pause();
    timerAudio.currentTime = 0;
    timerElement.style.display = "none";
    questionData.innerHTML = `Congrats! ${username} You Scored ${score} Out Of ${shuffledQuestions.length}!`;
    if(score>=15){
        hooray.play();
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function nextButtonClick() {
    clearInterval(interval);
    time = 10;
    interval = setInterval(Timer, 1000);
    Timer();
    clearPage();
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        endScreen();
    }
}

function clearPage() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function Timer() {
    timerAudio.play();
    let seconds = time % 60;
    timerElement.innerHTML = `${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(interval);
        timerElement.innerHTML = "Time's up!";
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
        nextButton.style.display = "block";
    }
}

let interval = setInterval(Timer, 1000);

startQuiz();