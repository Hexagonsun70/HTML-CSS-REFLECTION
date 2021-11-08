<?php
//include contains database handler which uses msqli to connect to db.
include($_SERVER['DOCUMENT_ROOT'] . "/inc/dbh.inc.php");

// write query for all cards
$news = "SELECT * FROM news_cards";

// retrieve the result set (set of rows)
$retNews = mysqli_query($conn, $news);

// fetch the resulting rows as an array
$cards = mysqli_fetch_all($retNews, MYSQLI_ASSOC);

// free $retNews from memory (good practice)
mysqli_free_result($retNews);

// close connection
mysqli_close($conn);
