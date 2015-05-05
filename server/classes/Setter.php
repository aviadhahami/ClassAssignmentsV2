<?php

require_once 'Fetcher.php';

class Setter {

  private $fileName = "";
  private $path = "";
  private $inputJSON = "";

  public function __construct($path, $fileName, $inputJSON) {

    $this->path = $path;
    $this->fileName = $fileName;
    $this->inputJSON = json_decode($inputJSON);
    //        var_dump($inputJSON);
    //        echo "<br />";
    //        var_dump(json_encode($inputJSON));
    //         echo "<br />";
    //        var_dump(json_decode($inputJSON));
  }

  public function injectDataAsJSON() {
    echo "injecting....<br />";
    $fetcher = new Fetcher($this->path, $this->fileName);

    $originJSON = $fetcher->getFileAsJSON(); //post json Decode
    $mutableJsonData = $originJSON->records;

    if ($this->inputJSON == null) {
      echo "input was null for some reason, didn't inject";
    }else{
      array_push($mutableJsonData, $this->inputJSON);
      $jsonData = (array('records' => $mutableJsonData));
      var_dump($jsonData);
      //echo $this->path . $this->fileName . '.json';
      file_put_contents($this->path . $this->fileName . '.json', json_encode($jsonData));
    }

  }

  public function sayHi() {
    echo "path: " . $this->path . "<br />";
    echo 'fName: ' . $this->fileName;
    echo 'inputJSON: ' . $this->inputJSON;
  }

}

?>
