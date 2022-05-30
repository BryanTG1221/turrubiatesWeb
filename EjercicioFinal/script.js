window.onload = function () {

    console.log("Se cargo")


    $('#btnBuscar').click(function() {
        let pilotoid=prompt("Teclee el dorsal del piloto a buscar");
        let opcionUser = 'buscar';

        $.post('peticion.php',{id:pilotoid,opcion:opcionUser},function(data){
          refrescar(data);
          },'json');
    });

    $('#btnAgregar').click(function(){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let dorsal = document.getElementById("dorsal").value;
        let escuderia = document.getElementById("escuderia").value;
        let edad = document.getElementById("edad").value;
        let opcionUser = 'agregar';

        $.post('peticion.php',{dorsal:dorsal,opcion:opcionUser,nombreU:nombre,apellidoU:apellido,escuderiaU:escuderia,edadU:edad},function(data){
            alert("Se agrego con exito");
            refrescar(data);
          });
        
    })

    function refrescar(objeto) {
        console.log(objeto);
        $('#nombre').val(objeto.nombre);
        $('#apellido').val(objeto.apellido);
        $('#dorsal').val(objeto.dorsal);
        $('#escuderia').val(objeto.escuderia);
        $('#edad').val(objeto.edad);
  }


}
