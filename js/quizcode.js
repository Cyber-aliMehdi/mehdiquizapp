const questions = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Transfer Markup Language", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: [
            { text: "<script>", correct: false },
            { text: "<css>", correct: false },
            { text: "<style>", correct: true },
            { text: "<head>", correct: false },
        ]
    },
    {
        question: "Which is the correct HTML element for inserting a line break?",
        answer: [
            { text: "<lb>", correct: false },
            { text: "<break>", correct: false },
            { text: "<br>", correct: true },
            { text: "<newline>", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a hyperlink?",
        answer: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<hyperlink>", correct: false },
            { text: "<href>", correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answer: [
            { text: "class", correct: false },
            { text: "id", correct: false },
            { text: "style", correct: true },
            { text: "css", correct: false },
        ]
    },
    {
        question: "Which tag is used to define an unordered list?",
        answer: [
            { text: "<li>", correct: false },
            { text: "<ul>", correct: true },
            { text: "<list>", correct: false },
            { text: "<ol>", correct: false },
        ]
    },
    {
        question: "Which is the correct HTML element for the largest heading?",
        answer: [
            { text: "<h1>", correct: true },
            { text: "<title>", correct: false },
            { text: "<head>", correct: false },
            { text: "<h6>", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a table?",
        answer: [
            { text: "<th>", correct: false },
            { text: "<tr>", correct: false },
            { text: "<table>", correct: true },
            { text: "<td>", correct: false },
        ]
    },
    {
        question: "Which attribute is used to use JavaScript in your document?",
        answer: [
            { text: "<script>", correct: true },
            { text: "<body>", correct: false },
            { text: "<checked>", correct: false },
            { text: "<code>", correct: false },
        ]
    },
    {
        question: "Which tag is used to link an external CSS file?",
        answer: [
            { text: "<select>", correct: false },
            { text: "<list>", correct: false },
            { text: "<link>", correct: true },
            { text: "<option>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answer: [
            { text: "<background>yellow</background>", correct: false },
            { text: "<body bg='yellow'>", correct: false },
            { text: "<bgcolor>yellow</bgcolor>", correct: false },
            { text: "<body style='background-color:yellow;'>", correct: true },
        ]
    },
    {
        question: "Which tag is used to define a paragraph?",
        answer: [
            { text: "<text>", correct: false },
            { text: "<paragraph>", correct: false },
            { text: "<p>", correct: true },
            { text: "<para>", correct: false },
        ]
    },
    {
        question: "Which tag is used to embed an image?",
        answer: [
            { text: "<picture>", correct: false },
            { text: "<image>", correct: false },
            { text: "<img>", correct: true },
            { text: "<photo>", correct: false },
        ]
    },
    {
        question: "Which attribute is used to specify the URL of an image?",
        answer: [
            { text: "src", correct: true },
            { text: "href", correct: false },
            { text: "link", correct: false },
            { text: "source", correct: false },
        ]
    },
    {
        question: "Which tag is used to create an ordered list?",
        answer: [
            { text: "<list>", correct: false },
            { text: "<li>", correct: false },
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
        ]
    },
    {
        question: "Which attribute specifies an alternative text for an image?",
        answer: [
            { text: "title", correct: false },
            { text: "alt", correct: true },
            { text: "description", correct: false },
            { text: "text", correct: false },
        ]
    },
    {
        question: "Which is the correct HTML tag for making text bold?",
        answer: [
            { text: "<strong>", correct: true },
            { text: "<b>", correct: false },
            { text: "<bold>", correct: false },
            { text: "<em>", correct: false },
        ]
    },
    {
        question: "Which tag is used to embed a video in a document?",
        answer: [
            { text: "<video>", correct: true },
            { text: "<form>", correct: false },
            { text: "<source>", correct: false },
            { text: "<div>", correct: false },
        ]
    },
    {
        question: "Which option will be used to make text 60px wide?",
        answer: [
            { text: "font-size: 60px;", correct: false },
            { text: "text-size: 60px;", correct: false },
            { text: "font-width: 60px;", correct: true },
            { text: "width: 60px;", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a button?",
        answer: [
            { text: "<press>", correct: false },
            { text: "<button>", correct: true },
            { text: "<click>", correct: false },
            { text: "<input>", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define a list item?",
        answer: [
            { text: "<li>", correct: true },
            { text: "<ul>", correct: false },
            { text: "<list>", correct: false },
            { text: "<ol>", correct: false }
        ]
    },
    {
        question: "Which tag is used to define a form in HTML?",
        answer: [
            { text: "<input>", correct: false },
            { text: "<button>", correct: false },
            { text: "<table>", correct: false },
            { text: "<form>", correct: true },
        ]
    },
    {
        question: "Which HTML tag is used to define a footer?",
        answer: [
            { text: "<bottom>", correct: false },
            { text: "<end>", correct: false },
            { text: "<footer>", correct: true },
            { text: "<last>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify a unique ID for an element?",
        answer: [
            { text: "class", correct: false },
            { text: "id", correct: true },
            { text: "style", correct: false },
            { text: "name", correct: false }
        ]
    },
    {
        question: "What does the title tag define?",
        answer: [
            { text: "A section heading", correct: false },
            { text: "A navigation bar", correct: false },
            { text: "A paragraph", correct: false },
            { text: "The webpage title", correct: true },
        ]
    },
    {
        question: "Which tag is used for creating a dropdown list?",
        answer: [
            { text: "<option>", correct: false },
            { text: "<select>", correct: true },
            { text: "<dropdown>", correct: false },
            { text: "<list>", correct: false }
        ]
    },
    {
        question: "Which tag is used to define a division or a section in HTML?",
        answer: [
            { text: "<span>", correct: false },
            { text: "<div>", correct: true },
            { text: "<section>", correct: false },
            { text: "<group>", correct: false }
        ]
    },
    {
        question: "Which tag is used to add a horizontal line in HTML?",
        answer: [
            { text: "<hr>", correct: true },
            { text: "<line>", correct: false },
            { text: "<border>", correct: false },
            { text: "<br>", correct: false }
        ]
    },
    {
        question: "Which attribute specifies that an input field must be filled out?",
        answer: [
            { text: "required", correct: true },
            { text: "validate", correct: false },
            { text: "mandatory", correct: false },
            { text: "necessary", correct: false }
        ]
    },
    {
        question: "What does the <meta> tag provide?",
        answer: [
            { text: "A clickable link", correct: false },
            { text: "Metadata about the HTML document", correct: true },
            { text: "A navigation bar", correct: false },
            { text: "A footer", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to define emphasized text?",
        answer: [
            { text: "<i>", correct: false },
            { text: "<strong>", correct: false },
            { text: "<em>", correct: true },
            { text: "<b>", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used to create a checkbox?",
        answer: [
            { text: "<input type='checkbox'>", correct: true },
            { text: "<check>", correct: false },
            { text: "<box>", correct: false },
            { text: "<tick>", correct: false }
        ]
    },
    {
        question: "Which attribute is used to specify an image height?",
        answer: [
            { text: "size", correct: false },
            { text: "height", correct: true },
            { text: "length", correct: false },
            { text: "dim", correct: false }
        ]
    },
    {
        question: "Which tag is used to make text italic?",
        answer: [
            { text: "<italic>", correct: false },
            { text: "<em>", correct: false },
            { text: "<b>", correct: false },
            { text: "<i>", correct: true },
        ]
    },
    {
        question: "Which tag is used for the main content of an HTML document?",
        answer: [
            { text: "<content>", correct: false },
            { text: "<main>", correct: true },
            { text: "<section>", correct: false },
            { text: "<body>", correct: false }
        ]
    },
        {
            question: "Which HTML element is used to play audio files?",
            answer: [
                { text: "<sound>", correct: false },
                { text: "<mp3>", correct: false },
                { text: "<audio>", correct: true },
                { text: "<voice>", correct: false },
            ]
        },
        {
            question: "Which attribute is used to open a link in a new tab?",
            answer: [
                { text: "new-tab='true'", correct: false },
                { text: "target='_blank'", correct: true },
                { text: "open='new'", correct: false },
                { text: "window='new'", correct: false },
            ]
        },
        {
            question: "Which HTML element is used to create a navigation menu?",
            answer: [
                { text: "<nav>", correct: true },
                { text: "<menu>", correct: false },
                { text: "<navbar>", correct: false },
                { text: "<ul>", correct: false },
            ]
        },
        {
            question: "Which tag is used to group header content in HTML?",
            answer: [
                { text: "<top>", correct: false },
                { text: "<head>", correct: false },
                { text: "<header>", correct: true },
                { text: "<hgroup>", correct: false },
            ]
        },
        {
            question: "Which HTML attribute is used to specify a tooltip text?",
            answer: [
                { text: "tooltip", correct: false },
                { text: "alt", correct: false },
                { text: "hint", correct: false },
                { text: "title", correct: true },
            ]
        },
        {
            question: "Which tag defines a block of text that is preformatted?",
            answer: [
                { text: "<text>", correct: false },
                { text: "<p>", correct: false },
                { text: "<pre>", correct: true },
                { text: "<code>", correct: false },
            ]
        },
        {
            question: "Which tag is used to define a table row?",
            answer: [
                { text: "<td>", correct: false },
                { text: "<tr>", correct: true },
                { text: "<th>", correct: false },
                { text: "<table>", correct: false },
            ]
        },
        {
            question: "Which HTML element represents a section of quoted text?",
            answer: [
                { text: "<blockquote>", correct: true },
                { text: "<quote>", correct: false },
                { text: "<q>", correct: false },
                { text: "<cite>", correct: false },
            ]
        },
        {
            question: "Which HTML tag is used to mark up contact information?",
            answer: [
                { text: "<address>", correct: true },
                { text: "<contact>", correct: false },
                { text: "<info>", correct: false },
                { text: "<email>", correct: false },
            ]
        },
        {
            question: "Which tag is used to define an abbreviation in HTML?",
            answer: [
                { text: "<short>", correct: false },
                { text: "<acronym>", correct: false },
                { text: "<abbrv>", correct: false },
                { text: "<abbr>", correct: true },
            ]
        },
        {
            question: "Which tag is used to create a progress bar in HTML?",
            answer: [
                { text: "<bar>", correct: false },
                { text: "<meter>", correct: false },
                { text: "<progress>", correct: true },
                { text: "<status>", correct: false },
            ]
        },
        {
            question: "Which tag is used to group related options in a dropdown list?",
            answer: [
                { text: "<option>", correct: false },
                { text: "<select>", correct: false },
                { text: "<fieldset>", correct: false },
                { text: "<optgroup>", correct: true },
            ]
        },
        {
            question: "Which tag is used to define keyboard input in HTML?",
            answer: [
                { text: "<key>", correct: false },
                { text: "<kbd>", correct: true },
                { text: "<input>", correct: false },
                { text: "<command>", correct: false },
            ]
        },
        {
            question: "Which tag is used to define a caption for a table?",
            answer: [
                { text: "<title>", correct: false },
                { text: "<th>", correct: false },
                { text: "<caption>", correct: true },
                { text: "<legend>", correct: false },
            ]
        },
        {
            question: "Which HTML element is used to define a figure with a caption?",
            answer: [
                { text: "<img>", correct: false },
                { text: "<figure>", correct: true },
                { text: "<caption>", correct: false },
                { text: "<figcaption>", correct: false },
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