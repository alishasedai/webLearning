<?php
include "db.php";

if (isset($_GET['deleteid'])) {
    $id = $_GET['deleteid'];

    $sql = "DELETE FROM student where id=$id";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        // echo "Deleted successfully";
        header("location:read.php");
    } else {
        die(mysqli_error($conn));
    }
}
