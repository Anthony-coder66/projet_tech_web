const questionsBank = [
  { q: "Qu'est-ce que le phishing ?", options: ["Une attaque qui imite une source fiable pour voler des données", "Un pare-feu nouvelle génération", "Un antivirus cloud", "Un protocole de chiffrement"], answer: 0 },
  { q: "Quel signe peut révéler un email suspect ?", options: ["Une salutation personnalisée", "Une adresse expéditeur étrange ou mal orthographiée", "Un logo en haute définition", "Un message signé"], answer: 1 },
  { q: "Quel est le meilleur usage d'un VPN ?", options: ["Augmenter la taille d'un fichier", "Cacher son adresse IP et chiffrer la connexion", "Bloquer tous les cookies", "Créer un mot de passe"], answer: 1 },
  { q: "Un malware est :", options: ["Un logiciel malveillant", "Un protocole réseau", "Un mot de passe fort", "Une signature numérique"], answer: 0 },
  { q: "Le but principal d'un pare-feu est de :", options: ["Faire des sauvegardes", "Filtrer le trafic réseau", "Nettoyer le disque", "Accélérer le Wi‑Fi"], answer: 1 },
  { q: "Quel mot de passe est le plus sûr ?", options: ["12345678", "Votre prénom + année de naissance", "Une phrase longue avec caractères variés", "password"], answer: 2 },
  { q: "À quoi sert l'authentification à deux facteurs ?", options: ["Remplacer le mot de passe", "Ajouter une couche de sécurité supplémentaire", "Rendre le réseau plus rapide", "Supprimer les virus"], answer: 1 },
  { q: "Quel comportement réduit le risque de virus ?", options: ["Ouvrir toutes les pièces jointes", "Installer des programmes inconnus", "Mettre à jour régulièrement le système", "Désactiver l'antivirus"], answer: 2 },
  { q: "Que faut-il faire avant de cliquer sur un lien suspect ?", options: ["Le partager", "Vérifier l'URL et l'expéditeur", "Le mettre en favori", "Le traduire"], answer: 1 },
  { q: "Un ransomware fait quoi ?", options: ["Accélère l'ordinateur", "Chiffre les fichiers pour exiger une rançon", "Supprime les publicités", "Change le fond d'écran"], answer: 1 },
  { q: "Le Wi‑Fi public est risqué car :", options: ["Il est toujours payant", "Les données peuvent être interceptées", "Il ne fonctionne pas sur mobile", "Il bloque les mots de passe"], answer: 1 },
  { q: "L'antivirus sert surtout à :", options: ["Détecter et bloquer les logiciels malveillants", "Créer des comptes", "Augmenter la RAM", "Changer la résolution"], answer: 0 },
  { q: "Le principe du moindre privilège signifie :", options: ["Donner tous les droits à tout le monde", "Accorder uniquement les accès nécessaires", "Supprimer les logs", "Utiliser un seul mot de passe"], answer: 1 },
  { q: "Une bonne pratique sur les réseaux sociaux est de :", options: ["Publier ses identifiants", "Partager des informations sensibles", "Limiter les informations personnelles visibles", "Accepter tous les amis"], answer: 2 },
  { q: "Le chiffrement protège :", options: ["La vitesse de l'écran", "La confidentialité des données", "La couleur du fond", "Le volume sonore"], answer: 1 },
  { q: "Quel élément est le plus important pour repérer une fraude ?", options: ["La couleur de l'email", "L'urgence inhabituelle et les fautes", "La taille du logo", "Le nombre d'images"], answer: 1 },
  { q: "Un mot de passe fort doit être :", options: ["Long, unique et difficile à deviner", "Le même partout", "Le nom du chien", "Court et simple"], answer: 0 },
  { q: "Pourquoi mettre à jour ses logiciels ?", options: ["Pour supprimer les raccourcis", "Pour corriger des failles de sécurité", "Pour ralentir l'ordinateur", "Pour changer l'heure"], answer: 1 },
  { q: "Une attaque DDoS cherche à :", options: ["Surcharger un service pour le rendre indisponible", "Chiffrer les emails", "Améliorer le ping", "Créer un VPN"], answer: 0 },
  { q: "Que faire si un compte semble compromis ?", options: ["Ignorer le problème", "Changer le mot de passe et prévenir le service concerné", "Le partager", "Supprimer Internet"], answer: 1 },
  { q: "Une sauvegarde sert à :", options: ["Restaurer des données après une perte ou une attaque", "Créer des virus", "Masquer l'IP", "Bloquer le spam"], answer: 0 },
  { q: "Un site sécurisé commence souvent par :", options: ["ftp://", "http://", "https://", "file://"], answer: 2 },
  { q: "Le social engineering exploite surtout :", options: ["Les émotions et la confiance", "La mémoire vive", "Le Bluetooth", "Le câble réseau"], answer: 0 },
  { q: "Un accès administrateur doit être :", options: ["Utilisé sur tous les appareils", "Réservé aux besoins spécifiques", "Partagé entre collègues", "Conservé sans surveillance"], answer: 1 },
  { q: "Pourquoi éviter les téléchargements pirates ?", options: ["Ils sont toujours trop gros", "Ils peuvent contenir des malwares", "Ils ne fonctionnent jamais", "Ils sont trop rapides"], answer: 1 },
  { q: "Le spam est :", options: ["Un message non sollicité, souvent commercial ou malveillant", "Un antivirus", "Une clé USB", "Un pare-feu"], answer: 0 },
  { q: "Une bonne pratique mobile est de :", options: ["Désactiver les mises à jour", "Installer des apps depuis des sources fiables", "Partager son code PIN", "Laisser le Bluetooth ouvert en permanence"], answer: 1 },
  { q: "Un certificat HTTPS aide à :", options: ["Vérifier l'identité du site et chiffrer la connexion", "Augmenter la batterie", "Supprimer les cookies", "Créer des dossiers"], answer: 0 },
  { q: "Pourquoi faut-il verrouiller sa session ?", options: ["Pour économiser le clavier", "Pour éviter l'accès non autorisé", "Pour supprimer les fichiers", "Pour accélérer l'écran"], answer: 1 },
  { q: "Le meilleur réflexe face à un lien inconnu reçu par message est :", options: ["Cliquer immédiatement", "Vérifier la source avant toute action", "Le transférer à tous", "Désactiver le pare-feu"], answer: 1 },
  { q: "Une fuite de données concerne :", options: ["Une perte d'eau", "Une divulgation non autorisée d'informations", "Un changement d'écran", "Un mot de passe long"], answer: 1 }
];

const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const stepText = document.getElementById('stepText');
const progressBar = document.getElementById('progressBar');
const scoreLive = document.getElementById('scoreLive');
const progressLive = document.getElementById('progressLive');
const questionCount = document.getElementById('questionCount');
const finalScore = document.getElementById('finalScore');
const finalPercent = document.getElementById('finalPercent');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restartBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const bgParticles = document.getElementById('bgParticles');
const timerText = document.getElementById('timerText');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let locked = false;
let timer = null;
let timeLeft = 15;
const questionTime = 15;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createParticles() {
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement('span');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.animationDuration = (8 + Math.random() * 14) + 's';
    dot.style.animationDelay = (Math.random() * 8) + 's';
    dot.style.opacity = (0.15 + Math.random() * 0.85).toFixed(2);
    bgParticles.appendChild(dot);
  }
}

function startQuiz() {
  clearInterval(timer);
  currentQuestions = shuffle(questionsBank).slice(0, 10);
  currentIndex = 0;
  score = 0;
  locked = false;
  questionCount.textContent = currentQuestions.length;
  scoreLive.textContent = score;
  feedback.textContent = '';
  resultCard.classList.add('hidden');
  quizCard.classList.remove('hidden');
  renderQuestion();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = questionTime;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 5) {
      timerText.classList.add('danger');
      feedback.textContent = `Alerte rouge : il reste ${timeLeft}s.`;
    } else {
      timerText.classList.remove('danger');
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerText.classList.add('danger');
      timeoutQuestion();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = `${timeLeft}s`;
  progressLive.textContent = `${Math.round((currentIndex / currentQuestions.length) * 100)}%`;
}

function renderQuestion() {
  locked = false;
  timerText.classList.remove('danger');
  const q = currentQuestions[currentIndex];
  stepText.textContent = `Question ${currentIndex + 1} / ${currentQuestions.length}`;
  questionText.textContent = q.q;
  optionsContainer.innerHTML = '';
  feedback.textContent = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.type = 'button';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectAnswer(btn, idx));
    optionsContainer.appendChild(btn);
  });

  const progress = (currentIndex / currentQuestions.length) * 100;
  progressBar.style.width = progress + '%';
  progressLive.textContent = Math.round(progress) + '%';
  quizCard.animate([{ transform: 'translateY(12px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 320, easing: 'ease-out' });
  startTimer();
}

function selectAnswer(button, chosenIndex) {
  if (locked) return;
  locked = true;
  clearInterval(timer);

  const q = currentQuestions[currentIndex];
  const buttons = [...optionsContainer.querySelectorAll('.option-btn')];
  const correct = chosenIndex === q.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
  });

  if (correct) {
    score += 1;
    scoreLive.textContent = score;
    button.classList.add('correct');
    feedback.textContent = 'Bonne réponse. Défense renforcée.';
  } else {
    button.classList.add('wrong');
    feedback.textContent = `Mauvaise réponse. La bonne réponse était : ${q.options[q.answer]}.`;
  }

  setTimeout(() => nextQuestion(), 1100);
}

function timeoutQuestion() {
  if (locked) return;
  locked = true;

  const q = currentQuestions[currentIndex];
  const buttons = [...optionsContainer.querySelectorAll('.option-btn')];

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add('correct');
  });

  feedback.textContent = `Temps écoulé. La bonne réponse était : ${q.options[q.answer]}.`;
  setTimeout(() => nextQuestion(), 1200);
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex < currentQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);
  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');

  const percent = Math.round((score / currentQuestions.length) * 100);
  finalScore.textContent = `${score}/${currentQuestions.length}`;
  finalPercent.textContent = `${percent}%`;

  let title = 'Niveau à améliorer';
  let message = 'Continuez à apprendre les bases de la cybersécurité et entraînez-vous sur les menaces courantes.';
  if (percent >= 90) {
    title = 'Excellent expert cybersécurité';
    message = 'Excellent. Vous maîtrisez très bien les réflexes de sécurité numérique et les menaces actuelles.';
  } else if (percent >= 70) {
    title = 'Bon niveau';
    message = 'Très bon résultat. Vous avez de solides bases, avec encore quelques réflexes à renforcer.';
  } else if (percent >= 50) {
    title = 'Niveau moyen';
    message = 'Vous connaissez les bases, mais certaines attaques courantes restent à mieux identifier.';
  }

  resultTitle.textContent = title;
  resultMessage.textContent = message;
  resultCard.animate([{ transform: 'scale(.96)', opacity: 0 }, { transform: 'scale(1)', opacity: 1 }], { duration: 450, easing: 'ease-out' });
  progressLive.textContent = '100%';
  progressBar.style.width = '100%';
  timerText.classList.remove('danger');
  timerText.textContent = `${questionTime}s`;
}

restartBtn.addEventListener('click', startQuiz);
playAgainBtn.addEventListener('click', startQuiz);

createParticles();
startQuiz();