<?php
class Fetcher {
    private $fileName = "";
    private $path ="";
        
    public function __construct($path,$fileName) {
       $this->path = $path;
       $this->fileName = $fileName;
           
    }
    public function __destruct() {
        unset($this);
    }
    public function getFileAsJSON(){
        $src = $this->path . $this->fileName . ".json";
        //check file existance, if yes - encode
        if (file_exists($src)){
            $finalIO = file_get_contents($src, "r");
            if ( $finalIO == 1) {
                return 1;
            }else{
                return json_decode($finalIO);
            }
        }else {
            return 1;
            
        }
            
    }
        
    public function sayHi(){
        echo "path: " . $this->path . "<br />";
        echo 'fName: ' . $this->fileName;
    }
        
}
    
    
?>