window.onload = function () {

    document.getElementById("contenedor").addEventListener("click",function(evento){
        console.log(evento.target.id);

        document.getElementById(evento.target.id).classList.toggle("box__target");
    })
}

$(document).ready(function(){
    $('#contenedor').click(function(e){
        console.log("click");
        $(e.target).toggleClass('box__target');
    })
})