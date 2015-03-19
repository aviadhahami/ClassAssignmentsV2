<?php
    
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once '../classes/Fetcher.php';
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
//echo $path. $fname;
$fetcher = new Fetcher($path,$fname);

$JSON_file = $fetcher->getFileAsJSON();
//Strippin one level
//echo $JSON_file;
//echo $get_input->{'path'};
header('Content-Type: application/json');
//var_dump($JSON_file);
echo is_object($JSON_file) ? json_encode($JSON_file->{'records'}): 1;
    
    
?>