<?php

  header('Content-type: application/json');

  include "database3.php";

  // $level = $_GET["level"];
  //
  // $result = [];
  //
  // if ($level == "guest" && $data["access"] == "guest") {
  //   $result[] = $data["fatturato"];
  // }
  //
  // if ($level == "employee" && $data["access"] == "employee") {
  //   $result[] = $data["fatturato"];
  //   $result[] = $data["fatturato_by_agent"];
  // }
  //
  // if ($level[] == "clevel" && $data["access"] == "clevel") {
  //   $result[] = $data;
  // }



  echo json_encode($data);


?>
