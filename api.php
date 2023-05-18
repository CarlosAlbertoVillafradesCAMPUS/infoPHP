<?php
header("Content-Type:apñlication/json");

$_DATA = json_decode(file_get_contents("php://input"), true); //traerme el objeto con los datos del formulario
$_METHOD = $_SERVER["REQUEST_METHOD"];
$_HEADER = apache_request_headers();
var_dump($_HEADER)
/* move_uploaded_file($_FILES["archivo"]["tmp_name"], "img/image.png") */
?>