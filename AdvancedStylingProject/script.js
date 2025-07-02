const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Technical Main Language"
    ],
    correct: 0
  },
  {
    question: "Which tag is used for inserting an image in HTML?",
    options: ["<image>", "<img>", "<src>", "<pic>"],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Syntax"
    ],
    correct: 2
  },
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "backgroundImage"],
    correct: 2
  },
  {
    question: "Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "How do you make text bold in HTML?",
    options: ["<bold>", "<strong>", "<bld>", "<font weight='bold'>"],
    correct: 1
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correct: 2
  },
  {
    question: "How do you add a comment in HTML?",
    options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
    correct: 0
  },
  {
    question: "Which HTML tag is used to define a table?",
    options: ["<table>", "<tab>", "<tbl>", "<data>"],
    correct: 0
  },
  {
    question: "Which CSS property sets the space between elements?",
    options: ["margin", "border", "padding", "spacing"],
    correct: 0
  }
];

let currentQuestion = 0;

function loadQuiz() {
  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      if (i === q.correct) alert("✅ Correct!");
      else alert("❌ Incorrect. Try again!");
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuiz();
}

loadQuiz();

function getJoke() {
fetch("https://official-joke-api.appspot.com/random_joke")

    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      document.getElementById("joke").textContent = "Error loading joke.";
    });
}
