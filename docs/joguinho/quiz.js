const questions = [
    {
      question: "Em que ano o Flamengo foi fundado?",
      options: ["1895", "1902", "1912", "1920"],
      correctAnswer: "1895"
    },
    {
      question: "Quantos títulos brasileiros o Flamengo possui?",
      options: ["5", "7", "8", "10"],
      correctAnswer: "8"
    },
    {
      question: "Quem é o maior artilheiro da história do Flamengo?",
      options: ["Adriano", "Zico", "Romário", "Gabigol"],
      correctAnswer: "Zico"
    }
  ];
  
  let currentQuestion = 0;
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  
  function loadQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionContainer.innerHTML = currentQuizQuestion.question;
    optionsContainer.innerHTML = "";
  
    for (const option of currentQuizQuestion.options) {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    }
  }
  
  function checkAnswer(answer) {
    const currentQuizQuestion = questions[currentQuestion];
    if (answer === currentQuizQuestion.correctAnswer) {
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta. Tente novamente.");
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert("Quiz concluído!");
      currentQuestion = 0; 
    }
  }
  
  loadQuestion();