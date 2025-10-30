<?php
require_once "db.php";
$id = $_GET['editid'];
$sql = "SELECT * FROM student WHERE id = $id";

$result1 = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result1);
$name = $row['name'];
$address = $row['address'];


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $sname = $_POST['sname'];
    $saddress = $_POST['saddress'];

    $sql = "UPDATE student SET  name='$sname', address='$saddress' WHERE id=$id";
    $result = mysqli_query($conn, $sql);

    // header("Location: read.php");
    if ($result) {
        // echo "Updated Successfully";
        header("location:read.php");
    } else {
        die(mysqli_error($conn));
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="" method="post">

        <label for="id">Id</label>
        <label for="name">Name</label>
        <input type="text" name="sname" value="<?php echo $name ?>"><br><br>
        <label for="address">Address</label>
        <input type="text" name="saddress" value="<?php echo $address ?>"><br><br>
        <button value="submit" type="submit">update</button>
    </form>
</body>

</html>