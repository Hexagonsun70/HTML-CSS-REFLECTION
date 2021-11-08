<?php

// dbh = database handler

// the servername, username and password given here are default on xammp
$dbServerName = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "nm_db";

// the variables above are created in the order in which they need to be passed
// on to the mysqli_connect() function.
$conn = mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbName);
