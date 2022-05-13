
    window.onload = function (){

        var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        var alertTrigger = document.getElementById('btn1')

        function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

        alertPlaceholder.append(wrapper)
        }

        if (alertTrigger) {
        alertTrigger.addEventListener('click', function () {
            alert('Nice, you triggered this alert message!', 'success')
            })
        }

        console.log('Cargo el archivo');
        

        document.getElementById("btn1").addEventListener("click", function(){
            document.getElementById("#btn1").show();
        });
        
        function ajax() {
            
            const AjaxRequest = new XMLHttpRequest();
            var url = 'peticion.php';

            AjaxRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log (this.responseText);
                    document.getElementById("titulo").innerHTML = this.responseText;
                }

            }
            AjaxRequest.open('GET',url,true);
            AjaxRequest.send();
            
            
        }
        
        document.getElementById("botonAjax").addEventListener("click", function(){
            ajax();
        })

        document.getElementById("botonJSON").addEventListener("click",function (){
            refrescarFormulario();
        })


        function refrescarFormulario () {

            const AjaxRequest = new XMLHttpRequest();
            var url = 'peticion.json';

            AjaxRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log (this.responseText);
                    document.getElementById("nombre").innerHTML = this.responseText;
                }

            }
            AjaxRequest.open('POST',url,true,);
            AjaxRequest.setRequestHeader('Content-Type', 'application/json');
            AjaxRequest.send(JSON.stringify(
                document.getElementById("nombre") = nombre
            ));

           
        }

}
