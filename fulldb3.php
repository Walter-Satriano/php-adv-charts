<?php

  header('Content-type: application/json');

  include "database3.php";

  $level = $_GET["level"];

  $result = [];

  if ($level == "guest") {
    $result[] = $data["fatturato"];

  } else if ($level == "employee") {
    $result[] = $data["fatturato"];
    $result[] = $data["fatturato_by_agent"];

  } else if ($level == "clevel") {
    $result[] = $data["fatturato"];
    $result[] = $data["fatturato_by_agent"];
    $result[] = $data["team_efficiency"];
  }

  echo json_encode($result);

?>
