<?php
class FileManipulator {
  private $fileName = "";
  private $path ="";
  private $openFilePointer = null;

  public function __construct($path,$fileName) {

    $this->path = $path;
    $this->fileName = $fileName;

  }

  public function __destruct() {
    unset($this);
  }

  public function openFile(){
    $this->openFilePointer = fopen($this->path . $this->fileName . ".json", "rw");
  }
  public function writeToFile($inputData){
    if ($this->openFilePointer != null){
      fwrite($this->openFilePointer, $inputData);
    }else{
      echo "File need to be opened first!";
    }

  }

  public function seekAndDestroy($requiredObject){

    var_dump($requiredObject);
    //method to remove from array
    // $x = array(5, 6);
    // unset($x[0]);


  }

  public function closeFile(){

  }

  public function sayHi(){
    echo "path: " . $this->path . "<br />";
    echo 'fName: ' . $this->fileName;
  }

}


?>
