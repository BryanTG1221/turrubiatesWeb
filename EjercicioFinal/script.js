window.onload = function () {

    console.log("Se cargo")


    $('#btnConsultar').click(function() {
        let pilotoid=prompt("Teclee el ID a consultar");

        $.post('peticion.php',{id:pilotoid},function(data){
          refrescar(data);
          },'json');
    });

    function refrescar(objeto) {
        console.log(objeto);
        $('#nombre').val(objeto.nombre);
        $('#apellido').val(objeto.apellido);
        $('#dorsal').val(objeto.dorsal);
        $('#escuderia').val(objeto.escuderia);
        $('#edad').val(objeto.edad);
  }


}
