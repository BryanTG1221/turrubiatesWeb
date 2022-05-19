<?php
    $respuestaJson = file_get_contents('respuesta.json');
    $obj = json_decode($respuestaJson);
    echo $obj;
?>
