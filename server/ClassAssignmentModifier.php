<?php

require_once 'classes/FileManipulator.php';

//IO test
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

//$json = '{"records":[{"subject":"Data Structures","due":{"year":2015,"month":"4","day":"12"},"number":"2"},{"subject":"Digital Graphics","due":{"year":2015,"month":"4","day":"26"},"number":"3"},{"subject":"Probability","due":{"year":2015,"month":"4","day":"13"},"number":"3"},{"subject":"Finance","due":{"year":2015,"month":"4","day":"13"},"number":"4"},{"subject":"Operating Systems","due":{"year":2015,"month":4,"day":"15"},"number":"2"},{"subject":"Macro","due":{"year":2015,"month":4,"day":"15"},"number":"4"},{"subject":"C#","due":{"year":2015,"month":4,"day":26},"number":"1"},{"subject":"Introduction to Probability","due":{"year":"2015","month":"04","day":"20"},"number":4},{"subject":"Algorithms B Term","due":{"year":"2015","month":"04","day":"20"},"number":0},{"subject":"Law of Business - B Term","due":{"year":"2015","month":"04","day":"27"},"number":0},{"subject":"Operating Systems","due":{"year":"2015","month":"05","day":"06","hour":23,"minutes":59,"hours":23},"number":3},{"subject":"DS","due":{"year":"2015","month":"05","day":"05","hour":23,"minutes":59},"number":4},{"subject":"Probability","due":{"year":"2015","month":"05","day":"04","hour":19,"minutes":0},"number":6},{"subject":"Fundamentals Of Finance","due":{"year":"2015","month":"05","day":"04","hour":8,"minutes":25},"number":6},{"subject":"Computer Graphics","due":{"year":"2015","month":"05","day":"10","hour":23,"minutes":59},"number":4}]}';

$manip->seekAndDestroy(json_decode($json)->records);

?>
