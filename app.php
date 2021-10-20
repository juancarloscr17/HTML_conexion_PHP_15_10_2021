<?php
    header("Access.control-Allow-Origin: *");
    header("Content-type: application/json");
    $NOMBRE = (array)[
        "Nombres"=> (string)"Juan Carlos",
        "Apellido"=> (string)"Coronel Rodriguez",
        "Edad"=> (integer) 35,
        "Direccion"=> (string)"Carrera 17b",
        "Grupo sanguineo"=> (string)"O+",
        "Ocupacion"=> (string)"estudiante" 

    ];
    echo <<<PLANTILLA
    ${!${''}= json_encode($NOMBRE, JSON_PRETTY_PRINT)}
    PLANTILLA;
    
?>