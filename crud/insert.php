<?php
require_once "db.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sid = $_POST['sid'];
    $sname = $_POST['sname'];
    $saddress = $_POST['saddress'];

    $sql = "INSERT INTO student (id,name, address) VALUES ('{$sid}', '{$sname}', '{$saddress}')";
    $result = mysqli_query($conn, $sql);

    header("Location: read.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert page</title>
</head>

<body>
    <form action="" method="post">

        <label for="id">Id</label>
        <input type="text" name="sid"><br><br>
        <label for="name">Name</label>
        <input type="text" name="sname"><br><br>
        <label for="address">Address</label>
        <input type="text" name="saddress"><br><br>
        <button value="submit" type="submit">Submit</button>
    </form>
</body>

</html>