const questions = [
  {
    quizQue: "Who is the First PM of India ?",
    answers: [
      { text: "Dr. Rajendra Prasad", correct: false },
      { text: "Pt. Jawaharlal Nehru", correct: true },
      { text: "Dr. Abdul Kalam", correct: false },
      { text: "Dr. Narendra Modi", correct: false },
    ]
  },
  {
    quizQue: "Who is the First President of India ?",
    answers: [
      { text: "Dr. Rajendra Prasad", correct: true },
      { text: "Dropadi Murmu", correct: false },
      { text: "Dr. Abdul Kalam", correct: false },
      { text: "Dr. Narendra Modi", correct: false },
    ]
  },
  {
    quizQue: "Who is the smallest state of India ?",
    answers: [
      { text: "Uttar Pradesh", correct: false },
      { text: "Sikkim", correct: false },
      { text: "Assam", correct: false },
      { text: "Goa", correct: true },
    ]
  },
  {
    quizQue: "Which is the biggest state of India?",
    answers: [
      { text: "Uttar Pradesh", correct: false },
      { text: "Madhya Pradesh", correct: false },
      { text: "Rajasthan", correct: true },
      { text: "Gujarat", correct: false },
    ]
  },
];

let quizQue = document.getElementById("quizQue");
let allAns = document.getElementById("allAns");
let submit = document.getElementById("submit");

let currentQue = 0;
let score = 0;

const startQuizz = () => {
  currentQue = 0;
  score = 0;
  submit.innerHTML = "Next";
  submit.style.display = "none";
  showQue();
};

const showQue = () => {
  allAns.innerHTML = "";

  const newQue = questions[currentQue];
  quizQue.innerHTML = `${currentQue + 1}. ${newQue.quizQue}`;

  newQue.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("text-start", "p-2", "mb-4", "rounded-4", "option");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", (e) => {
      const selectedBtn = e.target;
      const isCorrect = selectedBtn.dataset.correct === "true";

      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("wrong");
      }

      Array.from(allAns.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
      });

      submit.style.display = "block";
    });

    allAns.appendChild(button);
  });
};

const nextButton = () => {
  currentQue++;
  if (currentQue < questions.length) {
    showQue();
    submit.style.display = "none";
  } else {
    showScore();
  }
};

const showScore = () => {
  allAns.innerHTML = "";
  quizQue.innerHTML = `🎉 You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>`;
  submit.innerText = "Restart";
  submit.style.display = "block";
};

submit.addEventListener("click", () => {
  if (currentQue < questions.length) {
    nextButton();
  } else {
    startQuizz();
  }
});

startQuizz();
