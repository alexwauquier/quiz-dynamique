<?php
// Lire le contenu du fichier JSON
$jsonData = file_get_contents('../data/questions.json');

// Décoder les données JSON en un tableau PHP
$questions = json_decode($jsonData, true);

// Sélectionner une question aléatoire parmi le tableau de questions
$randomQuestion = $questions[array_rand($questions)];

// Encoder la question sélectionnée en JSON pour l'envoyer au navigateur
echo json_encode($randomQuestion);
?>
