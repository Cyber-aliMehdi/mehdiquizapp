const questions = [
    {
        question: "What is the powerhouse of the cell?",
        answer: [
            { text: "Mitochondria", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Chloroplast", correct: false },
        ]
    },
    {
        question: "Which organ pumps blood throughout the body?",
        answer: [
            { text: "Lungs", correct: false },
            { text: "Heart", correct: true },
            { text: "Liver", correct: false },
            { text: "Kidneys", correct: false },
        ]
    },
    {
        question: "What do plants release during photosynthesis?",
        answer: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the basic unit of life?",
        answer: [
            { text: "Cell", correct: true },
            { text: "Organ", correct: false },
            { text: "Tissue", correct: false },
            { text: "Atom", correct: false },
        ]
    },
    {
        question: "Which gas do humans need to breathe to survive?",
        answer: [
            { text: "Carbon Dioxide", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answer: [
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Heart", correct: false },
            { text: "Lungs", correct: false },
        ]
    },
    {
        question: "What part of the plant absorbs water?",
        answer: [
            { text: "Stem", correct: false },
            { text: "Roots", correct: true },
            { text: "Leaves", correct: false },
            { text: "Flowers", correct: false },
        ]
    },
    {
        question: "What type of blood cells fight infection?",
        answer: [
            { text: "Red blood cells", correct: false },
            { text: "White blood cells", correct: true },
            { text: "Platelets", correct: false },
            { text: "Plasma", correct: false },
        ]
    },
    {
        question: "Which organ produces insulin?",
        answer: [
            { text: "Pancreas", correct: true },
            { text: "Liver", correct: false },
            { text: "Kidney", correct: false },
            { text: "Stomach", correct: false },
        ]
    },
    {
        question: "What is the main function of the lungs?",
        answer: [
            { text: "Breathing", correct: true },
            { text: "Digestion", correct: false },
            { text: "Pumping blood", correct: false },
            { text: "Filtering toxins", correct: false },
        ]
    },
    {
        question: "What carries oxygen in the blood?",
        answer: [
            { text: "Hemoglobin", correct: true },
            { text: "Platelets", correct: false },
            { text: "White blood cells", correct: false },
            { text: "Plasma", correct: false },
        ]
    },
    {
        question: "Which vitamin is produced when the skin is exposed to sunlight?",
        answer: [
            { text: "Vitamin D", correct: true },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin B", correct: false },
            { text: "Vitamin A", correct: false },
        ]
    },
    {
        question: "What is the main function of red blood cells?",
        answer: [
            { text: "Transport oxygen", correct: true },
            { text: "Fight infections", correct: false },
            { text: "Clot blood", correct: false },
            { text: "Digest food", correct: false },
        ]
    },
    {
        question: "Which part of the brain controls balance?",
        answer: [
            { text: "Cerebellum", correct: true },
            { text: "Cerebrum", correct: false },
            { text: "Brainstem", correct: false },
            { text: "Hypothalamus", correct: false },
        ]
    },
    {
        question: "Which organ is responsible for filtering blood?",
        answer: [
            { text: "Kidneys", correct: true },
            { text: "Liver", correct: false },
            { text: "Heart", correct: false },
            { text: "Lungs", correct: false },
        ]
    },
    {
        question: "What is the main function of the large intestine?",
        answer: [
            { text: "Absorbing water", correct: true },
            { text: "Digesting proteins", correct: false },
            { text: "Pumping blood", correct: false },
            { text: "Producing enzymes", correct: false },
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answer: [
            { text: "Stapes", correct: true },
            { text: "Femur", correct: false },
            { text: "Tibia", correct: false },
            { text: "Humerus", correct: false },
        ]
    },
    {
        question: "Which part of the flower produces pollen?",
        answer: [
            { text: "Anther", correct: true },
            { text: "Stigma", correct: false },
            { text: "Sepal", correct: false },
            { text: "Petal", correct: false },
        ]
    },
    {
        question: "What is the function of chlorophyll?",
        answer: [
            { text: "Absorbing sunlight", correct: true },
            { text: "Transporting water", correct: false },
            { text: "Breaking down food", correct: false },
            { text: "Producing oxygen", correct: false },
        ]
    },
    {
        question: "What is the process by which plants make their food?",
        answer: [
            { text: "Photosynthesis", correct: true },
            { text: "Respiration", correct: false },
            { text: "Fermentation", correct: false },
            { text: "Transpiration", correct: false },
        ]
    },
    {
        question: "Which part of the human body contains the most bones?",
        answer: [
            { text: "Hands", correct: true },
            { text: "Feet", correct: false },
            { text: "Spine", correct: false },
            { text: "Skull", correct: false },
        ]
    },
    {
        question: "What part of the cell contains genetic material?",
        answer: [
            { text: "Nucleus", correct: true },
            { text: "Ribosome", correct: false },
            { text: "Cytoplasm", correct: false },
            { text: "Cell membrane", correct: false },
        ]
    },
    {
        question: "Which human organ produces bile?",
        answer: [
            { text: "Liver", correct: true },
            { text: "Pancreas", correct: false },
            { text: "Gallbladder", correct: false },
            { text: "Kidneys", correct: false },
        ]
    },
    {
        question: "Which element is the main component of air?",
        answer: [
            { text: "Nitrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answer: [
            { text: "H₂O", correct: true },
            { text: "CO₂", correct: false },
            { text: "O₂", correct: false },
            { text: "NaCl", correct: false },
        ]
    },
    {
        question: "Which gas is responsible for the greenhouse effect?",
        answer: [
            { text: "Carbon Dioxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "What is the pH of pure water?",
        answer: [
            { text: "7", correct: true },
            { text: "1", correct: false },
            { text: "14", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "Which element is a liquid at room temperature?",
        answer: [
            { text: "Mercury", correct: true },
            { text: "Lead", correct: false },
            { text: "Iron", correct: false },
            { text: "Zinc", correct: false },
        ]
    },
    {
        question: "Which gas is used in balloons to make them float?",
        answer: [
            { text: "Helium", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Nitrogen", correct: false },
        ]
    },
    {
        question: "What type of charge does a proton have?",
        answer: [
            { text: "Positive", correct: true },
            { text: "Negative", correct: false },
            { text: "Neutral", correct: false },
            { text: "It has no charge", correct: false },
        ]
    },
    {
        question: "Which metal is the best conductor of electricity?",
        answer: [
            { text: "Silver", correct: true },
            { text: "Copper", correct: false },
            { text: "Gold", correct: false },
            { text: "Aluminum", correct: false },
        ]
    },
    {
        question: "Which element is the most abundant in Earth's crust?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Silicon", correct: false },
            { text: "Iron", correct: false },
            { text: "Aluminum", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for table salt?",
        answer: [
            { text: "NaCl", correct: true },
            { text: "KCl", correct: false },
            { text: "HCl", correct: false },
            { text: "CaCl₂", correct: false },
        ]
    },
    {
        question: "Which of these is NOT a noble gas?",
        answer: [
            { text: "Chlorine", correct: true },
            { text: "Neon", correct: false },
            { text: "Argon", correct: false },
            { text: "Xenon", correct: false },
        ]
    },
    {
        question: "What is the atomic symbol for iron?",
        answer: [
            { text: "Fe", correct: true },
            { text: "Ir", correct: false },
            { text: "I", correct: false },
            { text: "In", correct: false },
        ]
    },
    {
        question: "What is the main gas found in Earth's atmosphere?",
        answer: [
            { text: "Nitrogen", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for methane?",
        answer: [
            { text: "CH₄", correct: true },
            { text: "CO₂", correct: false },
            { text: "H₂O", correct: false },
            { text: "NH₃", correct: false },
        ]
    },
    {
        question: "Which element is used in batteries?",
        answer: [
            { text: "Lithium", correct: true },
            { text: "Magnesium", correct: false },
            { text: "Zinc", correct: false },
            { text: "Copper", correct: false },
        ]
    },
    {
        question: "Which type of bond shares electrons between atoms?",
        answer: [
            { text: "Covalent", correct: true },
            { text: "Ionic", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Metallic", correct: false },
        ]
    },
    {
        question: "What is the lightest element?",
        answer: [
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Lithium", correct: false },
            { text: "Carbon", correct: false },
        ]
    },
    {
        question: "Which metal is used to make coins?",
        answer: [
            { text: "Copper", correct: true },
            { text: "Iron", correct: false },
            { text: "Silver", correct: false },
            { text: "Gold", correct: false },
        ]
    },
    {
        question: "Which element is needed for breathing?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false },
        ]
    },
    {
        question: "Which element is used in fireworks to create bright red color?",
        answer: [
            { text: "Strontium", correct: true },
            { text: "Barium", correct: false },
            { text: "Magnesium", correct: false },
            { text: "Potassium", correct: false },
        ]
    },
    {
        question: "Which gas is essential for fire to burn?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false },
        ]
    },
    {
        question: "Which chemical element has the symbol Pb?",
        answer: [
            { text: "Lead", correct: true },
            { text: "Platinum", correct: false },
            { text: "Phosphorus", correct: false },
            { text: "Palladium", correct: false },
        ]
    },
    {
        question: "Which acid is found in vinegar?",
        answer: [
            { text: "Acetic Acid", correct: true },
            { text: "Citric Acid", correct: false },
            { text: "Sulfuric Acid", correct: false },
            { text: "Hydrochloric Acid", correct: false },
        ]
    },
    {
        question: "Which element is a major component of glass?",
        answer: [
            { text: "Silicon", correct: true },
            { text: "Carbon", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Lead", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance?",
        answer: [
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false },
            { text: "Graphite", correct: false },
            { text: "Steel", correct: false },
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