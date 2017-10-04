<?php
 $userName= checkInputs($_POST['user_name']);
 $userEmail = checkInputs($_POST['user_email']);
 $messageSubject = checkInputs($_POST['message_subject']);
 $userMessage = checkInputs($_POST['user_message']);

function checkInputs($data, $problem='') {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  if ($problem && strlen($data) == 0) {
    die($problem);
  }
  return $data;
}

echo $_userName;
echo $_userEmail;

 ?>
