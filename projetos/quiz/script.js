const perguntas = [
  {
    pergunta: "O que caracteriza o modelo SaaS (Software como Serviço)?",
    respostas: [
      "É exclusivo para armazenamento de dados em servidores locais.",
      "Permite ao usuário gerenciar o sistema operacional e aplicações.",
      "Oferece apenas infraestrutura física, sem software.",
      "Fornece aplicações prontas para uso, acessíveis via internet.",
      "Exige instalação local de todos os softwares."
    ],
    correta: 3
  },
  {
    pergunta: "Qual das opções abaixo é uma característica da nuvem pública?",
    respostas: [
      "Não permite escalabilidade de recursos.",
      "É dedicada exclusivamente a uma única organização.",
      "Exige instalação de hardware local pelo cliente.",
      "É gerenciada por provedores externos e atende múltiplos clientes.",
      "Oferece apenas serviços de backup."
    ],
    correta: 3
  },
  {
    pergunta: "No modelo IaaS, o cliente é responsável por gerenciar:",
    respostas: [
      "Somente a rede física.",
      "Sistema operacional, aplicações e dados.",
      "Apenas o banco de dados.",
      "Apenas o uso da aplicação.",
      "Somente o hardware físico."
    ],
    correta: 1
  },
  {
    pergunta: "Qual provedor de nuvem é reconhecido por sua especialização em Big Data e Machine Learning?",
    respostas: [
      "Oracle Cloud",
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "IBM Cloud",
      "Microsoft Azure"
    ],
    correta: 1
  },
  {
    pergunta: "O que diferencia a nuvem híbrida das demais?",
    respostas: [
      "É utilizada apenas por pequenas empresas.",
      "Oferece apenas serviços de armazenamento.",
      "Não permite integração entre diferentes ambientes.",
      "Combina nuvem pública e privada, permitindo portabilidade de dados e aplicações.",
      "É exclusiva para uso doméstico."
    ],
    correta: 3
  },
  {
    pergunta: "Qual das alternativas abaixo NÃO é um benefício da abordagem multi-cloud?",
    respostas: [
      "Aumenta a dependência de um único provedor.",
      "Permite otimização de custos.",
      "Oferece flexibilidade na escolha de serviços.",
      "Reduz riscos de indisponibilidade.",
      "Aumenta a resiliência dos sistemas."
    ],
    correta: 0
  },
  {
    pergunta: "No modelo PaaS, o usuário gerencia:",
    respostas: [
      "Todo o hardware e rede física.",
      "Apenas o banco de dados.",
      "Apenas aplicações e dados.",
      "Sistema operacional e hardware.",
      "Somente o uso da aplicação."
    ],
    correta: 2
  },
  {
    pergunta: "Qual das opções abaixo é um critério importante para escolher um provedor de nuvem?",
    respostas: [
      "Quantidade de funcionários do provedor.",
      "Disponibilidade regional e conformidade regulatória.",
      "Localização do escritório central do provedor.",
      "Apenas o preço do serviço.",
      "Número de redes sociais do provedor."
    ],
    correta: 1
  },
  {
    pergunta: "Entre os três grandes provedores de nuvem, qual possui a maior cobertura regional?",
    respostas: [
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
      "Oracle Cloud",
      "IBM Cloud",
      "Google Cloud Platform (GCP)"
    ],
    correta: 0
  },
  {
    pergunta: "Qual das alternativas abaixo é uma vantagem da computação em nuvem?",
    respostas: [
      "Acesso restrito a partir de um único local.",
      "Pagamento fixo independente do uso.",
      "Necessidade de compra antecipada de servidores físicos.",
      "Atualizações manuais obrigatórias pelo usuário.",
      "Elasticidade e escalabilidade automáticas de recursos."
    ],
    correta: 4
  },

  // QUESTÕES EXTRAS

  {
    pergunta: "Qual modelo de serviço oferece maior controle e flexibilidade ao cliente?",
    respostas: [
      "SaaS",
      "PaaS",
      "IaaS",
      "Multi-cloud"
    ],
    correta: 2
  },
  {
    pergunta: "Em qual modelo o provedor fornece a infraestrutura e o sistema operacional prontos?",
    respostas: [
      "SaaS",
      "PaaS",
      "IaaS",
      "Nuvem Privada"
    ],
    correta: 1
  },
  {
    pergunta: "Qual exemplo representa um serviço SaaS?",
    respostas: [
      "Máquina virtual AWS EC2",
      "Google Drive",
      "Servidor Linux local",
      "Banco de dados instalado no computador"
    ],
    correta: 1
  },
  {
    pergunta: "Na nuvem privada, a infraestrutura é:",
    respostas: [
      "Compartilhada entre várias empresas.",
      "Exclusiva para uma única organização.",
      "Obrigatoriamente pública.",
      "Utilizada apenas para backup."
    ],
    correta: 1
  },
  {
    pergunta: "O termo multitenancy está associado principalmente a qual modelo de implantação?",
    respostas: [
      "Nuvem Pública",
      "Nuvem Privada",
      "Nuvem Híbrida",
      "On-Premise"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o principal objetivo da estratégia multi-cloud?",
    respostas: [
      "Utilizar apenas um provedor.",
      "Reduzir a dependência de um único fornecedor.",
      "Eliminar custos de TI.",
      "Substituir a internet."
    ],
    correta: 1
  },
  {
    pergunta: "O modelo de pagamento mais comum na computação em nuvem é:",
    respostas: [
      "Pagamento por uso.",
      "Pagamento anual obrigatório.",
      "Compra definitiva do hardware.",
      "Pagamento por quantidade de funcionários."
    ],
    correta: 0
  },
  {
    pergunta: "O que significa elasticidade na computação em nuvem?",
    respostas: [
      "Capacidade de alterar o código-fonte.",
      "Capacidade de aumentar ou diminuir recursos conforme a demanda.",
      "Capacidade de trocar de sistema operacional.",
      "Capacidade de armazenar apenas arquivos."
    ],
    correta: 1
  },
  {
    pergunta: "Qual provedor é considerado pioneiro e líder de mercado em computação em nuvem?",
    respostas: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "Amazon Web Services (AWS)",
      "Oracle Cloud"
    ],
    correta: 2
  },
  {
    pergunta: "Por que a disponibilidade regional é importante ao escolher um provedor?",
    respostas: [
      "Para reduzir a latência e melhorar o desempenho.",
      "Para aumentar o preço do serviço.",
      "Para limitar o acesso dos usuários.",
      "Para reduzir a capacidade de armazenamento."
    ],
    correta: 0
  },
  {
    pergunta: "A conformidade regulatória garante que:",
    respostas: [
      "Os servidores sejam mais rápidos.",
      "O provedor siga leis de proteção de dados, como a LGPD.",
      "O serviço seja gratuito.",
      "Os dados nunca precisem de backup."
    ],
    correta: 1
  },
  {
    pergunta: "No modelo SaaS, o cliente gerencia:",
    respostas: [
      "Sistema operacional e aplicações.",
      "Apenas os servidores.",
      "Somente o uso do sistema.",
      "Hardware e rede."
    ],
    correta: 2
  }
];
const quizBody = document.getElementById("quizBody");
const resultPanel = document.getElementById("resultPanel");
const progressChip = document.getElementById("progressChip");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionsGrid = document.getElementById("optionsGrid");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const restartButton = document.getElementById("restartButton");
const correctCountEl = document.getElementById("correctCount");
const wrongCountEl = document.getElementById("wrongCount");
const scorePercentEl = document.getElementById("scorePercent");
const timerFill = document.getElementById("timerFill");
const timerText = document.getElementById("timerText");
const totalTimeEl = document.getElementById("totalTime");
const startModal = document.getElementById("startModal");
const participantInput = document.getElementById("participantName");
const startBtn = document.getElementById("startButton");
const rankingListEl = document.getElementById("rankingList");
const clearRankingBtn = document.getElementById("clearRanking");

let participantName = null;

let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let score = 0;
let wrongAnswers = 0;
let answered = false;
let quizPerguntas = [];
// Timer / tempo
const QUESTION_TIME = 20; // segundos por pergunta (ajustável)
let timeLeft = QUESTION_TIME;
let timerInterval = null;
let totalTimeStart = null;

function validateQuestions(questionList) {
  if (!Array.isArray(questionList) || questionList.length === 0) {
    throw new Error("O array de perguntas não pode estar vazio.");
  }

  questionList.forEach((question, index) => {
    const hasValidShape =
      question &&
      typeof question.pergunta === "string" &&
      Array.isArray(question.respostas) &&
      question.respostas.length >= 2 &&
      Number.isInteger(question.correta) &&
      question.correta >= 0 &&
      question.correta < question.respostas.length;

    if (!hasValidShape) {
      throw new Error(
        `Pergunta inválida no índice ${index}. Cada item precisa ter pergunta, respostas e uma alternativa correta válida.`
      );
    }
  });
}

function shuffleQuestions(questionList) {
  const shuffledQuestions = [...questionList];

  for (let index = shuffledQuestions.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledQuestions[index], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[index]];
  }

  return shuffledQuestions;
}

// Embaralha as alternativas de uma pergunta mantendo o índice correto
function shuffleAnswersForQuestion(question) {
  const items = question.respostas.map((text, idx) => ({ text, idx }));

  for (let i = items.length - 1; i > 0; i -= 1) {
    const r = Math.floor(Math.random() * (i + 1));
    [items[i], items[r]] = [items[r], items[i]];
  }

  const newRespostas = items.map((it) => it.text);
  const newCorreta = items.findIndex((it) => it.idx === question.correta);

  return {
    pergunta: question.pergunta,
    respostas: newRespostas,
    correta: newCorreta,
  };
}

function updateProgress() {
  const currentNumber = currentQuestionIndex + 1;
  progressChip.textContent = `Pergunta ${currentNumber} de ${quizPerguntas.length}`;
  questionCount.textContent = `Pergunta ${currentNumber}`;
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.className = "feedback";
}

function renderQuestion() {
  const currentQuestion = quizPerguntas[currentQuestionIndex];

  updateProgress();
  questionText.textContent = currentQuestion.pergunta;
  optionsGrid.innerHTML = "";
  clearFeedback();
  nextButton.disabled = true;
  selectedAnswerIndex = null;
  answered = false;

  currentQuestion.respostas.forEach((answerText, answerIndex) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-button";
    optionButton.textContent = answerText;
    optionButton.setAttribute("aria-pressed", "false");

    optionButton.addEventListener("click", () => selectAnswer(answerIndex, optionButton));

    optionsGrid.appendChild(optionButton);
  });

  // iniciar temporizador para a pergunta atual
  stopQuestionTimer();
  timeLeft = QUESTION_TIME;
  updateTimerUI();
  startQuestionTimer();

  // marca início do tempo total quando a primeira pergunta é renderizada
  if (!totalTimeStart) {
    totalTimeStart = Date.now();
  }
}

function selectAnswer(answerIndex, clickedButton) {
  if (answered) {
    return;
  }

  selectedAnswerIndex = answerIndex;
  nextButton.disabled = false;

  const optionButtons = [...optionsGrid.querySelectorAll(".option-button")];
  optionButtons.forEach((button, index) => {
    button.classList.toggle("selected", index === answerIndex);
    button.setAttribute("aria-pressed", index === answerIndex ? "true" : "false");
  });

  clickedButton.focus();
}

function confirmAnswer(forced = false) {
  // Se não houve seleção e não foi forçado (ex.: tempo esgotou), não confirma
  if (selectedAnswerIndex === null && !forced) {
    return;
  }

  const currentQuestion = quizPerguntas[currentQuestionIndex];
  const optionButtons = [...optionsGrid.querySelectorAll(".option-button")];
  const isCorrect = selectedAnswerIndex !== null && selectedAnswerIndex === currentQuestion.correta;

  answered = true;
  nextButton.disabled = false;
  stopQuestionTimer();

  optionButtons.forEach((button, index) => {
    button.disabled = true;
    button.classList.remove("selected");

    if (index === currentQuestion.correta) {
      button.classList.add("correct");
    }

    if (selectedAnswerIndex !== null && index === selectedAnswerIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 1;
    feedback.textContent = "Você acertou.";
    feedback.classList.add("correct");
  } else {
    wrongAnswers += 1;
    if (forced && selectedAnswerIndex === null) {
      feedback.textContent = `Tempo esgotado. A resposta correta é: ${currentQuestion.respostas[currentQuestion.correta]}.`;
    } else {
      feedback.textContent = `Você errou. A resposta correta é: ${currentQuestion.respostas[currentQuestion.correta]}.`;
    }
    feedback.classList.add("wrong");
  }

  nextButton.textContent = currentQuestionIndex === quizPerguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
}

function startQuestionTimer() {
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimerUI();
      clearInterval(timerInterval);
      timerInterval = null;
      // tempo esgotado: confirma como resposta errada
      if (!answered) {
        confirmAnswer(true);
      }
      return;
    }
    updateTimerUI();
  }, 1000);
}

function stopQuestionTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerUI() {
  const pct = Math.max(0, Math.min(1, timeLeft / QUESTION_TIME));
  if (timerFill) timerFill.style.width = `${Math.round(pct * 100)}%`;
  if (timerText) timerText.textContent = formatTime(timeLeft);
}

function formatTime(seconds) {
  const s = Number(seconds) || 0;
  const mm = Math.floor(s / 60).toString().padStart(2, "0");
  const ss = (s % 60).toString().padStart(2, "0");
  return `${mm}:${ss}`;
}

function goToNextStep() {
  if (!answered) {
    confirmAnswer();
    return;
  }

  if (currentQuestionIndex < quizPerguntas.length - 1) {
    currentQuestionIndex += 1;
    nextButton.textContent = "Próxima pergunta";
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  const totalQuestions = quizPerguntas.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // stop any running timer
  stopQuestionTimer();

  quizBody.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  correctCountEl.textContent = String(score);
  wrongCountEl.textContent = String(wrongAnswers);
  scorePercentEl.textContent = `${percentage}%`;
  progressChip.textContent = "Quiz concluído";

  // tempo total
  let totalElapsed = 0;
  if (totalTimeStart) {
    totalElapsed = Math.round((Date.now() - totalTimeStart) / 1000);
  }
  if (totalTimeEl) totalTimeEl.textContent = formatTime(totalElapsed);
  // salva no localStorage
  const record = {
    name: participantName || "Anônimo",
    correct: score,
    wrong: wrongAnswers,
    timeSeconds: totalElapsed,
    date: new Date().toISOString(),
  };
  saveRankingEntry(record);
  renderRanking();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswerIndex = null;
  score = 0;
  wrongAnswers = 0;
  answered = false;
  quizPerguntas = shuffleQuestions(perguntas).map(shuffleAnswersForQuestion);
  totalTimeStart = null;

  resultPanel.classList.add("hidden");
  quizBody.classList.remove("hidden");
  nextButton.textContent = "Próxima pergunta";

  renderQuestion();
}

validateQuestions(perguntas);

// inicializa ranking existente
renderRanking();

// não inicia o quiz até o usuário informar o nome
startBtn.addEventListener("click", () => {
  const name = (participantInput.value || "").trim();
  participantName = name || "Anônimo";
  // fechar modal
  if (startModal) startModal.style.display = "none";

  // preparar perguntas embaralhadas e embaralhar alternativas
  quizPerguntas = shuffleQuestions(perguntas).map(shuffleAnswersForQuestion);
  // iniciar
  renderQuestion();
});

nextButton.addEventListener("click", goToNextStep);
restartButton.addEventListener("click", restartQuiz);

if (clearRankingBtn) {
  clearRankingBtn.addEventListener("click", () => {
    localStorage.removeItem("quiz_ranking");
    renderRanking();
  });
}

// LocalStorage: salvar e renderizar ranking
function getRanking() {
  try {
    const raw = localStorage.getItem("quiz_ranking");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveRankingEntry(entry) {
  const list = getRanking();
  list.push(entry);
  // ordenar: mais acertos primeiro, depois menor tempo
  list.sort((a, b) => {
    if (b.correct !== a.correct) return b.correct - a.correct;
    return a.timeSeconds - b.timeSeconds;
  });
  localStorage.setItem("quiz_ranking", JSON.stringify(list));
}

function renderRanking() {
  const list = getRanking();
  if (!rankingListEl) return;
  rankingListEl.innerHTML = "";
  if (list.length === 0) {
    rankingListEl.innerHTML = "<li>Nenhum registro ainda</li>";
    return;
  }
  list.slice(0, 20).forEach((r) => {
    const li = document.createElement("li");
    const date = new Date(r.date).toLocaleString();
    li.textContent = `${r.name} — Acertos: ${r.correct}, Erros: ${r.wrong}, Tempo: ${formatTime(r.timeSeconds)} — ${date}`;
    rankingListEl.appendChild(li);
  });
}

