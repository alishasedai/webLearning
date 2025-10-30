<?php
require_once 'db.php';
$sql = "SELECT * FROM student";
$result = mysqli_query($conn, $sql) or die(" Query Unsucessfull");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reading Data</title>
</head>

<body>
    <?php
    if (mysqli_num_rows($result) > 0) {
    ?>
        <table border="1" cellspacing="1" cellpadding="40" align="center">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <?php
                while ($row = mysqli_fetch_assoc($result)) {


                ?>
                    <tr>
                        <td><?php echo $row['id'] ?> </td>
                        <td><?php echo $row['name'] ?></td>
                        <td><?php echo $row['address'] ?></td>
                        <td>edit</td>
                        <td>delete</td>
                    </tr>
            </tbody>
        <?php } ?>
        </table>
    <?php } ?>
</body>

</html>