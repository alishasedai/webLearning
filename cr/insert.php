<?php
require_once "db.php";

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $address = $_POST['address'];

    $sql = "INSERT INTO student (name,address) VALUES ('$name','$address')";
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo "Inserted successfully";
    } else {
        die(mysqli_error($con));
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert</title>
</head>

<body>
    <h3>Fill your Details</h3>

    <form action="" method="POST">
        <Label>Name</Label><br><br> <input type="text" name="name">
        Address: <input type="text" name="address">
        <button type="submit" value="submit">Submit</button>
    </form>
</body>

</html>