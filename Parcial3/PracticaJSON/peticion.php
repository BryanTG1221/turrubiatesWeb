<?php

$registro['nombre']  ='Charles';
$registro['apellido'] ='Leclerc';
$registro['escuderia'] ='Ferrari';
$registro['dirCliente'] ='Guerrero 2801';
$registro['dorsal'] ='16';
$registro['edad']  ='24';
$registro['poles'] ='19';
$registro['podios'] ='17';
$registro['victorias'] = '6';

$registroJson = json_encode($registro);
echo $registroJson;


?>
