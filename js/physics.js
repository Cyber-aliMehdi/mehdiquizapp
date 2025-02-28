const questions = [
    {
        question: "What is the force that pulls objects toward the Earth?",
        answer: [
            { text: "Gravity", correct: true },
            { text: "Friction", correct: false },
            { text: "Magnetism", correct: false },
            { text: "Tension", correct: false },
        ]
    },
    {
        question: "What is the unit of force?",
        answer: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false },
        ]
    },
    {
        question: "Which law states that for every action, there is an equal and opposite reaction?",
        answer: [
            { text: "Law of Conservation of Energy", correct: false },
            { text: "Newton's Second Law", correct: false },
            { text: "Newton's First Law", correct: false },
            { text: "Newton's Third Law", correct: true },
        ]
    },
    {
        question: "What is the speed of light in vacuum?",
        answer: [
            { text: "5 × 10^7 m/s", correct: false },
            { text: "1 × 10^6 m/s", correct: false },
            { text: "9 × 10^9 m/s", correct: false },
            { text: "3 × 10^8 m/s", correct: true },
        ]
    },
    {
        question: "Which of these is a scalar quantity?",
        answer: [
            { text: "Force", correct: false },
            { text: "Velocity", correct: false },
            { text: "Speed", correct: true },
            { text: "Acceleration", correct: false },
        ]
    },
    {
        question: "What is the SI unit of energy?",
        answer: [
            { text: "Ohm", correct: false },
            { text: "Newton", correct: false },
            { text: "Joule", correct: true },
            { text: "Watt", correct: false },
        ]
    },
    {
        question: "What type of energy is stored in a stretched rubber band?",
        answer: [
            { text: "Potential energy", correct: true },
            { text: "Thermal energy", correct: false },
            { text: "Chemical energy", correct: false },
            { text: "Kinetic energy", correct: false },
        ]
    },
    {
        question: "Which of the following materials is a good conductor of electricity?",
        answer: [
            { text: "Plastic", correct: false },
            { text: "Copper", correct: true },
            { text: "Rubber", correct: false },
            { text: "Wood", correct: false },
        ]
    },
    {
        question: "What is the acceleration due to gravity on Earth?",
        answer: [
            { text: "2 m/s²", correct: false },
            { text: "15 m/s²", correct: false },
            { text: "4.9 m/s²", correct: false },
            { text: "9.8 m/s²", correct: true },
        ]
    },
    {
        question: "Which of these is an example of a renewable energy source?",
        answer: [
            { text: "Oil", correct: false },
            { text: "Coal", correct: false },
            { text: "Natural gas", correct: false },
            { text: "Solar", correct: true },
        ]
    },
        {
            question: "What is the unit of electric current?",
            answer: [
                { text: "Ohm", correct: false },
                { text: "Watt", correct: false },
                { text: "Ampere", correct: true },
                { text: "Volt", correct: false },
            ]
        },
        {
            question: "Which force keeps planets in orbit around the Sun?",
            answer: [
                { text: "Magnetic Force", correct: false },
                { text: "Gravitational Force", correct: true },
                { text: "Frictional Force", correct: false },
                { text: "Nuclear Force", correct: false },
            ]
        },
        {
            question: "What is the speed of light in a vacuum?",
            answer: [
                { text: "300,000 km/s", correct: true },
                { text: "150,000 km/s", correct: false },
                { text: "3,000 km/s", correct: false },
                { text: "30,000 km/s", correct: false },
            ]
        },
        {
            question: "Who formulated the three laws of motion?",
            answer: [
                { text: "Albert Einstein", correct: false },
                { text: "Isaac Newton", correct: true },
                { text: "Galileo Galilei", correct: false },
                { text: "Nikola Tesla", correct: false },
            ]
        },
        {
            question: "What is the SI unit of force?",
            answer: [
                { text: "Newton", correct: true },
                { text: "Joule", correct: false },
                { text: "Watt", correct: false },
                { text: "Pascal", correct: false },
            ]
        },
        {
            question: "Which law states that energy cannot be created or destroyed?",
            answer: [
                { text: "Newton's First Law", correct: false },
                { text: "Law of Conservation of Energy", correct: true },
                { text: "Boyle's Law", correct: false },
                { text: "Ohm’s Law", correct: false },
            ]
        },
        {
            question: "Which subatomic particle has no charge?",
            answer: [
                { text: "Electron", correct: false },
                { text: "Proton", correct: false },
                { text: "Neutron", correct: true },
                { text: "Positron", correct: false },
            ]
        },
        {
            question: "What is the formula for kinetic energy?",
            answer: [
                { text: "mgh", correct: false },
                { text: "½ mv²", correct: true },
                { text: "F = ma", correct: false },
                { text: "P = VI", correct: false },
            ]
        },
        {
            question: "Which type of wave is sound?",
            answer: [
                { text: "Transverse", correct: false },
                { text: "Longitudinal", correct: true },
                { text: "Electromagnetic", correct: false },
                { text: "Static", correct: false },
            ]
        },
        {
            question: "What is the charge of an electron?",
            answer: [
                { text: "-1", correct: true },
                { text: "+1", correct: false },
                { text: "0", correct: false },
                { text: "+2", correct: false },
            ]
        },
        {
            question: "What does Ohm’s Law state?",
            answer: [
                { text: "V = IR", correct: true },
                { text: "F = ma", correct: false },
                { text: "P = mv", correct: false },
                { text: "E = mc²", correct: false },
            ]
        },
        {
            question: "Which type of mirror is used in car rear-view mirrors?",
            answer: [
                { text: "Concave", correct: false },
                { text: "Convex", correct: true },
                { text: "Plane", correct: false },
                { text: "Cylindrical", correct: false },
            ]
        },
        {
            question: "What is the SI unit of work?",
            answer: [
                { text: "Watt", correct: false },
                { text: "Joule", correct: true },
                { text: "Newton", correct: false },
                { text: "Hertz", correct: false },
            ]
        },
        {
            question: "Which phenomenon explains why the sky appears blue?",
            answer: [
                { text: "Reflection", correct: false },
                { text: "Scattering", correct: true },
                { text: "Refraction", correct: false },
                { text: "Diffraction", correct: false },
            ]
        },
        {
            question: "What is the unit of power?",
            answer: [
                { text: "Watt", correct: true },
                { text: "Joule", correct: false },
                { text: "Newton", correct: false },
                { text: "Pascal", correct: false },
            ]
        },
        {
            question: "What is absolute zero in Kelvin?",
            answer: [
                { text: "0 K", correct: true },
                { text: "-273 K", correct: false },
                { text: "273 K", correct: false },
                { text: "100 K", correct: false },
            ]
        },
        {
            question: "Which particle is responsible for electricity?",
            answer: [
                { text: "Proton", correct: false },
                { text: "Electron", correct: true },
                { text: "Neutron", correct: false },
                { text: "Photon", correct: false },
            ]
        },
        {
            question: "What is the primary cause of tides on Earth?",
            answer: [
                { text: "The Sun", correct: false },
                { text: "The Moon", correct: true },
                { text: "The Earth's Rotation", correct: false },
                { text: "Gravity of Other Planets", correct: false },
            ]
        },
        {
            question: "What is the resistance of a superconductor at critical temperature?",
            answer: [
                { text: "Infinite", correct: false },
                { text: "Zero", correct: true },
                { text: "Very High", correct: false },
                { text: "Variable", correct: false },
            ]
        },
        {
            question: "Which fundamental force is the weakest?",
            answer: [
                { text: "Gravitational Force", correct: true },
                { text: "Electromagnetic Force", correct: false },
                { text: "Strong Nuclear Force", correct: false },
                { text: "Weak Nuclear Force", correct: false },
            ]
        },
        {
            question: "Which planet has the strongest gravitational pull?",
            answer: [
                { text: "Earth", correct: false },
                { text: "Saturn", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Mars", correct: false },
            ]
        },
        {
            question: "What type of energy is stored in a stretched rubber band?",
            answer: [
                { text: "Kinetic Energy", correct: false },
                { text: "Thermal Energy", correct: false },
                { text: "Elastic Potential Energy", correct: true },
                { text: "Chemical Energy", correct: false },
            ]
        },
        {
            question: "What happens to the pressure of a gas when its volume decreases at constant temperature?",
            answer: [
                { text: "Decreases", correct: false },
                { text: "Increases", correct: true },
                { text: "Remains Constant", correct: false },
                { text: "Becomes Zero", correct: false },
            ]
        },
        {
            question: "Which color of light has the shortest wavelength?",
            answer: [
                { text: "Red", correct: false },
                { text: "Yellow", correct: false },
                { text: "Violet", correct: true },
                { text: "Green", correct: false },
            ]
        },
        {
            question: "What is the SI unit of frequency?",
            answer: [
                { text: "Joule", correct: false },
                { text: "Newton", correct: false },
                { text: "Hertz", correct: true },
                { text: "Watt", correct: false },
            ]
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            answer: [
                { text: "5.8 m/s²", correct: false },
                { text: "9.8 m/s²", correct: true },
                { text: "15.8 m/s²", correct: false },
                { text: "3.8 m/s²", correct: false },
            ]
        },
        {
            question: "Which of the following is a scalar quantity?",
            answer: [
                { text: "Velocity", correct: false },
                { text: "Acceleration", correct: false },
                { text: "Speed", correct: true },
                { text: "Force", correct: false },
            ]
        },
        {
            question: "What type of lens is used to correct farsightedness?",
            answer: [
                { text: "Concave Lens", correct: false },
                { text: "Convex Lens", correct: true },
                { text: "Cylindrical Lens", correct: false },
                { text: "Plano-Concave Lens", correct: false },
            ]
        },
        {
            question: "Which fundamental force holds the nucleus together?",
            answer: [
                { text: "Gravitational Force", correct: false },
                { text: "Weak Nuclear Force", correct: false },
                { text: "Strong Nuclear Force", correct: true },
                { text: "Electromagnetic Force", correct: false },
            ]
        },
        {
            question: "What is the primary function of a transformer?",
            answer: [
                { text: "Convert AC to DC", correct: false },
                { text: "Step Up or Step Down Voltage", correct: true },
                { text: "Store Electrical Energy", correct: false },
                { text: "Convert Mechanical Energy to Electrical Energy", correct: false },
            ]
        },
        {
            question: "What does a voltmeter measure?",
            answer: [
                { text: "Current", correct: false },
                { text: "Voltage", correct: true },
                { text: "Resistance", correct: false },
                { text: "Power", correct: false },
            ]
        },
        {
            question: "Which phenomenon causes light to bend when passing through different mediums?",
            answer: [
                { text: "Reflection", correct: false },
                { text: "Refraction", correct: true },
                { text: "Diffraction", correct: false },
                { text: "Scattering", correct: false },
            ]
        },
        {
            question: "Which material is commonly used as a semiconductor?",
            answer: [
                { text: "Copper", correct: false },
                { text: "Aluminum", correct: false },
                { text: "Silicon", correct: true },
                { text: "Iron", correct: false },
            ]
        },
        {
            question: "What does the second law of thermodynamics state?",
            answer: [
                { text: "Total Energy is Constant", correct: false },
                { text: "Entropy Always Increases", correct: true },
                { text: "Action = Reaction", correct: false },
                { text: "Force = Mass × Acceleration", correct: false },
            ]
        },
        {
            question: "Which electromagnetic wave has the highest frequency?",
            answer: [
                { text: "Microwaves", correct: false },
                { text: "Infrared", correct: false },
                { text: "Gamma Rays", correct: true },
                { text: "Radio Waves", correct: false },
            ]
        },
        {
            question: "What type of motion does a pendulum exhibit?",
            answer: [
                { text: "Linear Motion", correct: false },
                { text: "Rotational Motion", correct: false },
                { text: "Oscillatory Motion", correct: true },
                { text: "Random Motion", correct: false },
            ]
        },
        {
            question: "What is the value of Planck's constant?",
            answer: [
                { text: "6.626 × 10⁻³⁴ Js", correct: true },
                { text: "3.00 × 10⁸ m/s", correct: false },
                { text: "9.8 m/s²", correct: false },
                { text: "1.67 × 10⁻²⁷ kg", correct: false },
            ]
        },
        {
            question: "What does a capacitor store?",
            answer: [
                { text: "Magnetic Energy", correct: false },
                { text: "Kinetic Energy", correct: false },
                { text: "Electrical Energy", correct: true },
                { text: "Thermal Energy", correct: false },
            ]
        },
        {
            question: "Which device converts sound waves into electrical signals?",
            answer: [
                { text: "Speaker", correct: false },
                { text: "Microphone", correct: true },
                { text: "Transistor", correct: false },
                { text: "Amplifier", correct: false },
            ]
        },
        {
            question: "What is the main cause of electrical resistance?",
            answer: [
                { text: "Voltage", correct: false },
                { text: "Electron Collisions", correct: true },
                { text: "Magnetic Fields", correct: false },
                { text: "Protons", correct: false },
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