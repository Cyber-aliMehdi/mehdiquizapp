const questions = [
    {
        question: "What is the brain of the computer?",
        answer: [
            { text: "CPU", correct: true },
            { text: "RAM", correct: false },
            { text: "Hard Drive", correct: false },
            { text: "Power Supply", correct: false },
        ]
    },
    {
        question: "Which programming language is known for web development?",
        answer: [
            { text: "Java", correct: false },
            { text: "C++", correct: false },
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            { text: "Computer Style Sheet", correct: false },
            { text: "Creative Style System", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheet", correct: false },
        ]
    },
    {
        question: "Which data structure works on the principle of FIFO?",
        answer: [
            { text: "Queue", correct: true },
            { text: "Stack", correct: false },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false },
        ]
    },
    {
        question: "Which company developed the Windows operating system?",
        answer: [
            { text: "Microsoft", correct: true },
            { text: "Apple", correct: false },
            { text: "Google", correct: false },
            { text: "IBM", correct: false },
        ]
    },
    {
        question: "What is the full form of HTTP?",
        answer: [
            { text: "Hyper Transfer Text Protocol", correct: false },
            { text: "Hyper Text Transfer Protocol", correct: true },
            { text: "High Text Transfer Protocol", correct: false },
            { text: "Hyperlink and Text Transfer Protocol", correct: false },
        ]
    },
    {
        question: "Which language is primarily used for iOS app development?",
        answer: [
            { text: "Java", correct: false },
            { text: "Swift", correct: true },
            { text: "Python", correct: false },
            { text: "Kotlin", correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: [
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Logic", correct: false },
            { text: "System Query Language", correct: false },
            { text: "Structured Question Language", correct: false },
        ]
    },
    {
        question: "Which device is used to connect multiple computers in a network?",
        answer: [
            { text: "Router", correct: true },
            { text: "Monitor", correct: false },
            { text: "Printer", correct: false },
            { text: "Keyboard", correct: false },
        ]
    },
    {
        question: "Which company developed the Android operating system?",
        answer: [
            { text: "Apple", correct: false },
            { text: "Google", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Samsung", correct: false },
        ]
    },
    {
        question: "What does RAM stand for?",
        answer: [
            { text: "Random Access Memory", correct: true },
            { text: "Read Access Memory", correct: false },
            { text: "Run Access Memory", correct: false },
            { text: "Remote Access Memory", correct: false },
        ]
    },
    {
        question: "Which protocol is used to send emails?",
        answer: [
            { text: "SMTP", correct: true },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "TCP", correct: false },
        ]
    },
    {
        question: "Which of the following is not an operating system?",
        answer: [
            { text: "Windows", correct: false },
            { text: "Linux", correct: false },
            { text: "Python", correct: true },
            { text: "MacOS", correct: false },
        ]
    },
    {
        question: "What is the primary function of an operating system?",
        answer: [
            { text: "Manage hardware and software resources", correct: true },
            { text: "Create web pages", correct: false },
            { text: "Run antivirus programs", correct: false },
            { text: "Send emails", correct: false },
        ]
    },
    {
        question: "What does the acronym 'IP' stand for in networking?",
        answer: [
            { text: "Internet Provider", correct: false },
            { text: "Internal Process", correct: false },
            { text: "Interactive Program", correct: false },
            { text: "Internet Protocol", correct: true },
        ]
    },
    {
        question: "Which of the following is a frontend framework?",
        answer: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Node.js", correct: false },
            { text: "MongoDB", correct: false },
        ]
    },
    {
        question: "What is the default port for HTTP?",
        answer: [
            { text: "443", correct: false },
            { text: "21", correct: false },
            { text: "3306", correct: false },
            { text: "80", correct: true },
        ]
    },
    {
        question: "Which data structure follows LIFO (Last In, First Out)?",
        answer: [
            { text: "Linked List", correct: false },
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Array", correct: false },
        ]
    },
    {
        question: "Which company created the Python programming language?",
        answer: [
            { text: "Guido van Rossum", correct: true },
            { text: "Google", correct: false },
            { text: "Apple", correct: false },
            { text: "Microsoft", correct: false },
        ]
    },
    {
        question: "Which of these is a relational database?",
        answer: [
            { text: "MySQL", correct: true },
            { text: "MongoDB", correct: false },
            { text: "Cassandra", correct: false },
            { text: "Neo4j", correct: false },
        ]
    },
    {
        question: "Which programming language is primarily used for iOS development?",
        answer: [
            { text: "Java", correct: false },
            { text: "Kotlin", correct: false },
            { text: "Swift", correct: true },
            { text: "Python", correct: false },
        ]
    },
    {
        question: "What is the primary function of DNS?",
        answer: [
            { text: "Manage network security", correct: false },
            { text: "Store passwords", correct: false },
            { text: "Secure a website", correct: false },
            { text: "Translate domain names to IP addresses", correct: true },
        ]
    },
    {
        question: "Which of the following is an interpreted language?",
        answer: [
            { text: "Rust", correct: false },
            { text: "Python", correct: true },
            { text: "C++", correct: false },
            { text: "C", correct: false },
        ]
    },
    {
        question: "What does API stand for?",
        answer: [
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Protocol Interface", correct: false },
            { text: "Automated Program Integration", correct: false },
            { text: "Application Process Integration", correct: false },
        ]
    },
    {
        question: "Which of the following is used for version control?",
        answer: [
            { text: "Apache", correct: false },
            { text: "Git", correct: true },
            { text: "Docker", correct: false },
            { text: "Kubernetes", correct: false },
        ]
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answer: [
            { text: "define", correct: false },
            { text: "set", correct: false },
            { text: "var", correct: true },
            { text: "create", correct: false },
        ]
    },
    {
        question: "Which of these is a cloud computing platform?",
        answer: [
            { text: "AWS", correct: true },
            { text: "Oracle SQL", correct: false },
            { text: "Ubuntu", correct: false },
            { text: "Jupyter Notebook", correct: false },
        ]
    },
    {
        question: "What does 'CSS' primarily control?",
        answer: [
            { text: "Web page logic", correct: false },
            { text: "Styling of web pages", correct: true },
            { text: "Server-side scripts", correct: false },
            { text: "Database connections", correct: false },
        ]
    },
    {
        question: "What does JSON stand for?",
        answer: [
            { text: "Java Source Open Notation", correct: false },
            { text: "JavaScript Object Notation", correct: true },
            { text: "JavaScript Online Network", correct: false },
            { text: "Java Serialized Object Naming", correct: false },
        ]
    },
    {
        question: "Which protocol is used to transfer files over the Internet?",
        answer: [
            { text: "IMAP", correct: false },
            { text: "FTP", correct: true },
            { text: "SMTP", correct: false },
            { text: "HTTP", correct: false },
        ]
    },
    {
        question: "What does the 'DOM' stand for in web development?",
        answer: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Manipulation", correct: false },
            { text: "Dynamic Output Module", correct: false },
            { text: "Document Oriented Mapping", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of a text editor?",
        answer: [
            { text: "Docker", correct: false },
            { text: "VS Code", correct: true },
            { text: "Jenkins", correct: false },
            { text: "MySQL", correct: false },
        ]
    },
    {
        question: "What is the primary function of a firewall?",
        answer: [
            { text: "Block unauthorized access", correct: true },
            { text: "Optimize internet speed", correct: false },
            { text: "Monitor battery usage", correct: false },
            { text: "Boost graphics performance", correct: false },
        ]
    },
    {
        question: "Which company developed the first graphical web browser?",
        answer: [
            { text: "Netscape", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Mosaic", correct: true },
            { text: "Google", correct: false },
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "--", correct: false },
            { text: "#", correct: false },
        ]
    },
    {
        question: "What is the main function of an operating system?",
        answer: [
            { text: "Managing hardware and software resources", correct: true },
            { text: "Running web applications", correct: false },
            { text: "Editing documents", correct: false },
            { text: "Browsing the internet", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of an interpreted language?",
        answer: [
            { text: "Python", correct: true },
            { text: "C++", correct: false },
            { text: "Assembly", correct: false },
            { text: "Java (compiled to bytecode)", correct: false },
        ]
    },
    {
        question: "Which HTTP method is used to retrieve data from a server?",
        answer: [
            { text: "POST", correct: false },
            { text: "DELETE", correct: false },
            { text: "GET", correct: true },
            { text: "PUT", correct: false },
        ]
    },
    {
        question: "Which data structure is based on key-value pairs?",
        answer: [
            { text: "Array", correct: false },
            { text: "Queue", correct: false },
            { text: "HashMap", correct: true },
            { text: "Linked List", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of a compiled language?",
        answer: [
            { text: "JavaScript", correct: false },
            { text: "C", correct: true },
            { text: "Python", correct: false },
            { text: "Ruby", correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: [
            { text: "Structured Query Language", correct: true },
            { text: "System Query Logic", correct: false },
            { text: "Simple Query Language", correct: false },
            { text: "Sequential Query List", correct: false },
        ]
    },
    {
        question: "What does the 'return' statement do in a function?",
        answer: [
            { text: "Stops the function and sends back a value", correct: true },
            { text: "Loops through an array", correct: false },
            { text: "Defines a new function", correct: false },
            { text: "Declares a variable", correct: false },
        ]
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        answer: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Array", correct: true },
            { text: "Boolean", correct: false },
        ]
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answer: [
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
            { text: "=>", correct: false },
        ]
    },
    {
        question: "Which loop runs at least once before checking the condition?",
        answer: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: true },
            { text: "foreach", correct: false },
        ]
    },
    {
        question: "What does the 'push' method do in JavaScript arrays?",
        answer: [
            { text: "Removes the last element", correct: false },
            { text: "Adds an element to the end", correct: true },
            { text: "Sorts the array", correct: false },
            { text: "Removes the first element", correct: false },
        ]
    },
    {
        question: "Which of the following is not a relational database?",
        answer: [
            { text: "MongoDB", correct: true },
            { text: "PostgreSQL", correct: false },
            { text: "MySQL", correct: false },
            { text: "Oracle DB", correct: false },
        ]
    },
    {
        question: "Which symbol is used for exponentiation in JavaScript?",
        answer: [
            { text: "^", correct: false },
            { text: "**", correct: true },
            { text: "exp()", correct: false },
            { text: "//", correct: false },
        ]
    },
    {
        question: "Which of the following is a valid JavaScript variable name?",
        answer: [
            { text: "2variable", correct: false },
            { text: "_variableName", correct: true },
            { text: "var-name", correct: false },
            { text: "let", correct: false },
        ]
    },
    {
        question: "Which of these is a dynamically typed language?",
        answer: [
            { text: "C++", correct: false },
            { text: "Python", correct: true },
            { text: "Java", correct: false },
            { text: "Go", correct: false },
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