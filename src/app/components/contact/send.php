<?php

//Llamamos a los campos.
$name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$phone = $_POST['phone'];
$mail = $_POST['email'];
$text = $_POST['text'];

// Datos para correo.
$destino = "esmerado.vela.javier@gmail.com";
$asunto = "Correo desde Vicsutrans.com";

$message = "De: $nombre \n";
$message .= "Correo: $mail \n";
$message .= "Teléfono: $phone \n";
$message .= "Mensaje: $text";

//Enviamos mensaje.
mail($destino, $asunto, $message);
header('location:mensaje.php');

?>