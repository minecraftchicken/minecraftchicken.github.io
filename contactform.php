<?php

if (isset($POST ['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "contact@gabsterstudios.com"
    $headers = "From: ".$mailFrom;
    $txt = "New message from website from ".$name."./n/n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend")
}

?>