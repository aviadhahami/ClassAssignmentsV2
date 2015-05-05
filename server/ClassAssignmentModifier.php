<?
require_once 'classes/FileManipulator.php';



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

$manip = new FileManipulator($path,$fname);

$manip->seekAndDestroy("test");


  ?>
