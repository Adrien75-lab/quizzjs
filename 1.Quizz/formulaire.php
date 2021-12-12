<?php

if(!empty($_POST["send"])) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $connexion = mysqli_connect("localhost", "root", "", "contact_form") or die("Erreur de connexion: " . mysqli_error($connexion));
  $result = mysqli_query($connexion, "INSERT INTO contact (name, email, subject, message) VALUES ('" . $name. "', '" . $email. "','" . $subject. "','" . $message. "')");
  if($result){
    $db_msg = "Vos informations de contact sont enregistrées avec succés.";
    $type_db_msg = "success";
  }else{
    $db_msg = "Erreur lors de la tentative d'enregistrement de contact.";
    $type_db_msg = "error";
  }
}
?>


?>