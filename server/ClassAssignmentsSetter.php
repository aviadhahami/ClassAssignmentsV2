<?php

/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
include_once'classes/Setter.php';
// include_once '../classes/Fetcher.php';
//Test of input


$filter = isset($_GET['path']) ? strip_tags($_GET['path']) : "1";
if ($filter == 1 || is_null($filter)) {
  echo "path is not set";
  return 1;
}
$path = $filter;
$filter = isset($_GET['fname']) ? strip_tags($_GET['fname']) : "1";
if ($filter == 1 || is_null($filter)) {
  echo "fname is not set";
  return 1;
}
$fname=$filter;
$filter = isset($_GET['data']) ? strip_tags($_GET['data']) : "1";
if ($filter == 1 || is_null($filter)) {
  echo "data is not set";
  return 1;
}
$data=$filter;

$setter = new Setter($path,$fname,$data);

echo $setter->injectDataAsJSON();

//echo $setter::sayHi();


?>
