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

    //var_dump($requiredObject);
    //method to remove from array
    // $x = array(5, 6);
    // unset($x[0]);
    $JSON_fromInput = $requiredObject;//json_decode($requiredObject);

    //var_dump($JSON_fromInput);
    for ($i=0; $i <sizeof($JSON_fromInput) ; $i++) {
      //echo $JSON_fromInput[$i]->subject;
      if ($JSON_fromInput[$i]->subject == 'Macro') {
        echo 'found macro';
        unset($JSON_fromInput[$i]);
      }
    }
    echo '<br />';
    //normalize the array
    $JSON_fromInput = array_values($JSON_fromInput);

    for ($i=0; $i <sizeof($JSON_fromInput) ; $i++) {
      //var_dump($JSON_fromInput[$i]);
      if ($JSON_fromInput[$i]->subject == 'Macro') {
        echo 'found macro again';
      }
      echo '<br />';
    }
  }

  public function closeFile(){

  }

  public function sayHi(){
    echo "path: " . $this->path . "<br />";
    echo 'fName: ' . $this->fileName;
  }

}


?>
