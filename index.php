<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Dynamique</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="quiz-container">
        <h2 id="question">Question ici</h2>
        <div id="choices">
            <button class="choice">Réponse 1</button>
            <button class="choice">Réponse 2</button>
            <button class="choice">Réponse 3</button>
            <button class="choice">Réponse 4</button>
        </div>
        <button id="next">Suivant</button>
        <p id="timer">Temps restant : 30s</p>
        <p id="score">Score : 0/0</p>
        <form id="scoreForm" method="POST" action="./php/save_score.php">
            <input type="hidden" id="scoreInput" name="score" value=0>
            <button type="submit">Sauvegarder le score</button>
        </form>
    </div>
    <script src="./js/script.js"></script>
</body>
</html>
