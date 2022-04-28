$(document).ready(function(){
    $("#btn1").click(function(){
        $('#alerta1').show();
    });

    $('#btnclosealert').click(function(){
        $('#alerta1').hide();
    });

    $('#btn2').click(function(){
        $('#modalid').show();
    })

    $('#closemodal').click(function(){
        $('#modalid').hide();
    })
})