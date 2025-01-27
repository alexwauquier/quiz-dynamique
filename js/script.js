const choices = document.querySelectorAll('.choice');
const next = document.getElementById("next");
const score = document.getElementById("score");
const scoreInput = document.getElementById("scoreInput");

let currentQuestion = {}; // Variable globale pour la question actuelle
let totalQuestions = 0;
let timer;
let timeLeft;

// Fonction pour récupérer une question via PHP
function fetchQuestion() {
    fetch('./php/get_question.php') // Appelle le fichier PHP qui génère la question
    .then(response => response.json()) // Convertit la réponse en JSON
    .then(data => {
        currentQuestion = data; // Stocke les données pour l'accès global

        // Affiche la question et les choix de réponse
        document.getElementById('question').innerText = data.question;

        // Affiche les choix
        choices.forEach((choice, index) => {
            choice.innerText = data.choices[index]; // Remplit les boutons avec les choix
        });
    })
    .catch(error => console.error('Erreur : ', error)); // Gère les erreurs
}

// Démarre un compte à rebours de 30 secondes pour répondre à la question actuelle.
function startTimer() {
    clearInterval(timer); // Arrête tout timer existant
    timeLeft = 30; // Réinitialise le temps
    document.getElementById('timer').innerHTML = "Temps restant : " + timeLeft + "s";
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer); // Arrête le timer quand il atteint 0
            alert("Temps écoulé !");
            // Logic pour passer à la question suivante automatiquement
            totalQuestions++;
            score.innerHTML = "Score : " + scoreInput.value + "/" + totalQuestions;
            fetchQuestion();
            startTimer();
        } else {
            document.getElementById('timer').innerHTML = "Temps restant : " + timeLeft + "s";
            timeLeft--; // Diminue le temps restant d'une seconde
        }
    }, 1000); // Le timer diminue toutes les secondes (1000ms)
}

// Démarre le timer et charge la première question
fetchQuestion();
startTimer();

// Gestion du clic sur le bouton "Suivant"
next.addEventListener("click", function () {
    clearInterval(timer);
    fetchQuestion();
    startTimer();
});

// Gestion des réponses des choix
choices.forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.innerText.trim() === currentQuestion.choices[currentQuestion.correct].trim()) {
            clearInterval(timer);
            scoreInput.value++;
            alert("Bonne réponse");
            fetchQuestion();
            startTimer();
        } else {
            clearInterval(timer);
            alert("Mauvaise réponse");
            fetchQuestion();
            startTimer();
        }
        
        totalQuestions++;
        score.innerHTML = "Score : " + scoreInput.value + "/" + totalQuestions;
    });
});
