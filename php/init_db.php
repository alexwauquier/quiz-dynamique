<?php
// Informations de connexion à la base de données
$host = 'localhost';
$user = 'root';
$pass = '';

try {
    // Connexion à la base de données
    $pdo = new PDO ("mysql:host=$host; charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Initialisation de la base de données
    $stmt = $pdo->prepare(file_get_contents("../db/init_db.sql"));
    $stmt->execute();

    echo "Initialisation de la base de données avec succès !";
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
