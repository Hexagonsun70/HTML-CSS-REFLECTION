<?php include_once($_SERVER['DOCUMENT_ROOT'] . "/inc/dbh.inc.php");
/*
  This file deals with entering the contact information into the database. It
  also uses the variables created for the db entry to send an email with some of
  the contact details, subject line and a message. The database was initialised
  via an sql query found in the sql folder.
*/

// Defines all the vairables for db input. Escapes any malicious characters to
// avoid sql injection.
$first   =   mysqli_real_escape_string($conn, $_POST['first']);
$last    =   mysqli_real_escape_string($conn, $_POST['last']);
$email   =   mysqli_real_escape_string($conn, $_POST['email']);
$date    =   date('Y-m-d H:i:s');
$subject =   mysqli_real_escape_string($conn, $_POST['subject']);
$message =   mysqli_real_escape_string($conn, $_POST['message']);
$gdpr    =   "";

// Checks if the checkbox is checked or unchecked and stores info in variable.
// (doesn't need escaping as it returns a bool).
if(isset($_POST['gdpr'])) {
  $gdpr = "checked";
} else {
  $gdpr = "unchecked";
}

// Prepares sql query with variable info ready to be input in the db.
$sql = "INSERT INTO contact_details (first_name, last_name, email,
date, subject, message, gdpr) VALUES ('$first', '$last', '$email',
'$date', '$subject', '$message', '$gdpr');";

/*
  Checks if requisite fields are filled in and that the email is legitimate.
  if so it connects to the database and queries in the info and changes the
  header, if not it changes the header to submit fail.
*/
if ($first && $last && $email && filter_var($email, FILTER_VALIDATE_EMAIL)) {
  mysqli_query($conn, $sql);
  header("Location: ../pages/contact.php?submit=success");
} else {
  header("Location: ../pages/contact.php?submit=fail");
}

// If you wish to change which address the email is sent to, change '$to'
$to = "alex.mckendrick@gmail.com";
$msg = "$message\n\n$first $last\n\nGDPR box $gdpr\n\n$email\n\n$date";
/*
  (Windows only) When PHP is talking to a SMTP server directly, if a full stop
  is found on the start of a line, it is removed. To counter-act this,
  str_replace is used to replace these occurrences with a double dot.
*/
$msg = str_replace("\n.", "\n..", $msg);
// Word wrap for neat formatting of messages longer than 70 chars
$msg = wordwrap($msg, 70);
// mail($to, $subject, $msg);
