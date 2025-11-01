<?php 
$con =new mysqli("localhost","root", "apple","crud");

if($con){
   echo "Connected Successfully"; 
}
else{
    die(mysqli_error($con));
}



?>