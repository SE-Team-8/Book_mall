 <?php
  session_start();
  
  $db = new mysqli("%","root", ,"signup");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>
