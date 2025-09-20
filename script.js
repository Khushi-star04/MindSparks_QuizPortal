// Questions: 20 Programming + 20 GK
const quizData = {
  programming: [
    { q: "What does HTML stand for?", a: "Hyper Text Markup Language", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"] },
    { q: "Which language is used for styling web pages?", a: "CSS", options: ["HTML", "jQuery", "CSS", "XML"] },
    { q: "Which operator is used to assign a value?", a: "=", options: [" = ", "==", "===", "+="] },
    { q: "What does CSS stand for?", a: "Cascading Style Sheets", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets"] },
    { q: "Which company developed Java?", a: "Sun Microsystems", options: ["Sun Microsystems", "Microsoft", "Oracle", "Google"] },
    { q: "Which symbol is used for comments in Python?", a: "#", options: ["//", "#", "/* */", "!-- --"] },
    { q: "Which method is used to print output in Python?", a: "print()", options: ["cout", "echo", "print()", "printf()"] },
    { q: "Which keyword is used for inheritance in Java?", a: "extends", options: ["super", "this", "extends", "implements"] },
    { q: "Which HTML attribute is used to define inline styles?", a: "style", options: ["class", "styles", "style", "font"] },
    { q: "Which is not a JavaScript data type?", a: "float", options: ["number", "string", "boolean", "float"] },
    { q: "Which Python keyword is used for function?", a: "def", options: ["func", "define", "def", "function"] },
    { q: "Which event occurs when the user clicks on an HTML element?", a: "onclick", options: ["onmouseover", "onclick", "click", "onchange"] },
    { q: "Which is used to declare a constant in JavaScript?", a: "const", options: ["let", "var", "const", "constant"] },
    { q: "Which method adds an element at the end of an array in JavaScript?", a: "push()", options: ["append()", "add()", "push()", "insert()"] },
    { q: "Which operator is used for exponentiation in Python?", a: "**", options: ["^", "**", "%", "//"] },
    { q: "Which is used to create an object in JavaScript?", a: "{}", options: ["[]", "{}", "()", "<>"] },
    { q: "Which of the following is vaild Java loop?", a: "for", options: ["each", "loop", "repeat", "for"] },
    { q: "Which Python keyword is used for exception handling?", a: "try", options: ["catch", "try", "handle", "except"] },
    { q: "Which HTML attribute specifies an image source?", a: "src", options: ["href", "source", "src", "link"] },
    { q: "Which method converts JSON to object in JavaScript?", a: "JSON.parse()", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"] }
  ],
  gk: [
    { q: "Who is the President of India in 2025?", a: "Droupadi Murmu", options: ["Droupadi Murmu", "Ram Nath Kovind", "Pranab Mukherjee", "Narendra Modi"] },
    { q: "Which planet is known as the Red Planet?", a: "Mars", options: ["Mars", "Earth", "Venus", "Jupiter"] },
    { q: "Who wrote 'Harry Potter'?", a: "J.K. Rowling", options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"] },
    { q: "What is the capital of France?", a: "Paris", options: ["Paris", "Berlin", "Madrid", "Rome"] },
    { q: "Which is the largest ocean?", a: "Pacific Ocean", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
    { q: "Which country hosted the 2024 Summer Olympics?", a: "France", options: ["USA", "France", "Japan", "China"] },
    { q: "Who invented the telephone?", a: "Alexander Graham Bell", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"] },
    { q: "Which gas do plants absorb?", a: "Carbon Dioxide", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"] },
    { q: "Which is the smallest country?", a: "Vatican City", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"] },
    { q: "Which is the longest river?", a: "Nile", options: ["Amazon", "Nile", "Yangtze", "Mississippi"] },
    { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci", options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"] },
    { q: "What is the currency of Japan?", a: "Yen", options: ["Yen", "Dollar", "Euro", "Rupee"] },
    { q: "Which continent is called 'Dark Continent'?", a: "Africa", options: ["Asia", "Africa", "Europe", "Australia"] },
    { q: "Who discovered gravity?", a: "Isaac Newton", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"] },
    { q: "Which country is known as the Land of the Rising Sun?", a: "Japan", options: ["China", "Japan", "Thailand", "South Korea"] },
    { q: "Which is the tallest mountain?", a: "Mount Everest", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"] },
    { q: "Who wrote 'The Theory of Relativity'?", a: "Albert Einstein", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"] },
    { q: "Which is the fastest land animal?", a: "Cheetah", options: ["Lion", "Tiger", "Cheetah", "Leopard"] },
    { q: "Which organ purifies blood?", a: "Kidney", options: ["Liver", "Kidney", "Heart", "Lungs"] },
    { q: "Which vitamin is produced by sunlight?", a: "Vitamin D", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"] }
  ]
};

// Variables
let category = "programming";
let currentQuestion = 0;
let score = 0;

function loadQuiz() {
  const params = new URLSearchParams(window.location.search);
  category = params.get("category") || "programming";
  document.getElementById("quiz-title").innerText = category === "programming" ? "Programming Quiz" : "General Knowledge Quiz";
  showQuestion();
}

// Show question
function showQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuestion >= quizData[category].length) {
    localStorage.setItem("quizScore", score);
    localStorage.setItem("quizTotal", quizData[category].length);
    window.location.href = "result.html";
    return;
  }

  const q = quizData[category][currentQuestion];
  let optionsHTML = "";
  q.options.forEach(opt => {
    optionsHTML += `<label><input type="radio" name="answer" value="${opt}"> ${opt}</label><br>`;
  });

  container.innerHTML = `<h3>${currentQuestion + 1}. ${q.q}</h3>${optionsHTML}`;

  // 🔹 Correct/Wrong CSS trigger
  const labels = container.querySelectorAll("label");
  labels.forEach(label => {
    label.addEventListener("click", () => {
      const selectedInput = label.querySelector("input");

      // Remove previous classes
      labels.forEach(l => l.classList.remove("correct", "wrong"));

      // Check answer (trim + case-insensitive)
      if (selectedInput.value.trim().toLowerCase() === q.a.trim().toLowerCase()) {
        label.classList.add("correct"); // sparkle
        score++;
      } else {
        label.classList.add("wrong");   // 😶 emoji

        // Highlight correct answer automatically
        labels.forEach(l => {
          if (l.querySelector("input").value.trim().toLowerCase() === q.a.trim().toLowerCase()) {
            l.classList.add("correct");
          }
        });
      }

      // Disable all options after selection
      labels.forEach(l => l.querySelector("input").disabled = true);
    });
  });
}

// Next question button
document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestion++;
  showQuestion();
});

window.onload = loadQuiz;