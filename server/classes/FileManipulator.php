<?php
class FileManipulator {
    private $fileName = "";
    private $path ="";
    private $openFilePointer;
        
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
        fwrite($this->openFilePointer, $inputData);
    }
    public function closeFile(){
        
    }
                
    public function sayHi(){
        echo "path: " . $this->path . "<br />";
        echo 'fName: ' . $this->fileName;
    }
        
}
    
    
?>