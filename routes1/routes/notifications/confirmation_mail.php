<?php
    function generateRandomPassword($length = 10) {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        $charactersLength = strlen($characters);
        $randomPassword = '';
        for ($i = 0; $i < $length; $i++) {
            $randomPassword .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomPassword;
    }

    function passwordExists($password, $con) {
        $stmt = $con->prepare("SELECT COUNT(*) FROM Users WHERE password = ?");
        $stmt->bind_param("s", $password);
        $stmt->execute();
        $stmt->bind_result($count);
        $stmt->fetch();
        return $count > 0;
    }
    if (isset($_GET['name'])){
        $name = $_GET['name'];
    do {
        $newPassword = generateRandomPassword();
    } while (passwordExists($newPassword, $con));

    $msg = "Votre demande d'adhesion à l'association". $name ."a ete aprouve avec le mot de passe". $newPassword;
    mail();
    }
?>