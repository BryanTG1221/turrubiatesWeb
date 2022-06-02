window.onload = function () {

    console.log("Se cargo")
    document.querySelector('#btnEliminar').style.display='none'
    document.querySelector('#btnEditar').style.display='none'


    $('#btnBuscar').click(function() {
        let opcionUser = 'buscar';

        document.querySelector('.modalBox').style.display = 'flex'
        console.log('si');

        /*$.post('peticion.php',{dorsal:dorsal,opcion:opcionUser},function(data){
          refrescar(data);
          },'json');*/
    });

    $('#btnAgregar').click(function(){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let dorsal = document.getElementById("dorsal").value;
        let escuderia = document.getElementById("escuderia").value;
        let edad = document.getElementById("edad").value;
        let victorias = document.getElementById("victorias").value;
        let podios = document.getElementById("podios").value;
        let opcionUser = 'agregar';

        $.post('peticion.php',{dorsal:dorsal,opcion:opcionUser,nombreU:nombre,apellidoU:apellido,escuderiaU:escuderia,edadU:edad,victoriasU:victorias,podiosU:podios},function(data){
            document.querySelector('.modalBoxNotification').style.display = 'flex'
            refrescar(data);
          });
        
    })

    $('#btnEliminar').click(function(){
      let Eliminado = document.getElementById("dorsal").value;
      let opcionUser = 'eliminar';

      $.post('peticion.php',{eliminado:Eliminado,opcion:opcionUser},function(){
        document.querySelector('.modalBoxNotification').style.display = 'flex'  
        refrescar(objeto);
      });


  })

    $('#btnEditar').click(function(){
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let dorsal = document.getElementById("dorsal").value;
        let escuderia = document.getElementById("escuderia").value;
        let edad = document.getElementById("edad").value;
        let victorias = document.getElementById("victorias").value;
        let podios = document.getElementById("podios").value;
        let opcionUser = 'editar';


        $.post('peticion.php',{dorsal:dorsal,opcion:opcionUser,nombreU:nombre,apellidoU:apellido,escuderiaU:escuderia,edadU:edad,victoriasU:victorias,podiosU:podios},function(data){
          document.querySelector('.modalBoxNotification').style.display = 'flex'
          refrescar(objeto);
        });


    })

    function refrescar(objeto) {
        console.log(objeto);
        $('#nombre').val(objeto.nombre);
        $('#apellido').val(objeto.apellido);
        $('#dorsal').val(objeto.dorsal);
        $('#escuderia').val(objeto.escuderia);
        $('#edad').val(objeto.edad);
        $('#victorias').val(objeto.victorias);
        $('#podios').val(objeto.podios);
        
  }

  function limpiar () {
      $('#nombre').val = ''
      $('#apellido').val = ''
      $('#dorsal').val = ''
      $('#escuderia').val = ''
      $('#edad').val = ''
      $('#victorias').val = ''
      $('#podios').val = ''
  }

  document.querySelector('#btn-Modal-Cerrar').addEventListener("click", function() {
      document.querySelector('.modalBox').style.display = 'none';
      console.log('Si');
  })

  document.querySelector('#btn-Modal-CerrarNotification').addEventListener("click", function() {
      document.querySelector('.modalBoxNotification').style.display = 'none';
      console.log('Si');  
  })

  document.querySelector('#btn-Modal-Buscar').addEventListener("click",function (){
    let dorsal = document.getElementById("input-modal-numero").value
    console.log('Entre');
    let opcionUser = 'buscar';
    $.post('peticion.php',{dorsal:dorsal,opcion:opcionUser},function(data){
      refrescar(data);
      },'json');
      document.querySelector('.modalBox').style.display = 'none';
      document.querySelector('#btnEliminar').style.display = 'flex';
      document.querySelector('#btnEditar').style.display='flex'

  })


}
