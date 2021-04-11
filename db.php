 <?php
  session_start();
  
  $db = new mysqli("127.0.0.1","root","FLvguSbVkG6N","SignUp");
  $db->set_charset("utf8");

  function mq($sql){
    global $db;
    return $db->query($sql);
  }

  ?>
