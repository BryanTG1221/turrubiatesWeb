<?php

$opcionUser = $_POST['opcion'];


$hostname='localhost';
$database='w19100793';
$username='root';
$password='';
$port='3306';

try {
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

if ($opcionUser == 'buscar') {

    try {
    
    $dorsalU = $_POST['dorsal'];

    $consultaSql = "select * from formulario where dorsal=".$dorsalU;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();
    
    } catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();
    }
    
    echo json_encode($resultado);
    
}
else if ($opcionUser == 'agregar') {

    try {

        $nombreU = $_POST['nombreU'];
        $apellidoU = $_POST['apellidoU'];
        $dorsalU = $_POST['dorsal'];
        $escuderiaU = $_POST['escuderiaU'];
        $edadU = $_POST['edadU'];

        $consultaSql = "INSERT INTO formulario(id,nombre,apellido,dorsal,escuderia,edad) VALUES ('','$nombreU','$apellidoU','$dorsalU','$escuderiaU','$edadU')";
        $consulta = $con -> prepare($consultaSql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
        
        } catch(PDOException $e) {
            echo "Error de consulta a la base de datos";
            echo $e->getMessage();
        }
        
        echo "Se hizo con exito";
}
else if ($opcionUser == 'eliminar') {

    try {

        $eliminadoU = $_POST['eliminado'];

        $consultaSql = "DELETE FROM formulario WHERE dorsal = '$eliminadoU'";
        $consulta = $con -> prepare($consultaSql);
        $consulta -> execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        $consulta->closeCursor();
        
        } catch(PDOException $e) {
            echo "Error de consulta a la base de datos";
            echo $e->getMessage();
        }
        
        echo "Se hizo con exito";
}
   

?>