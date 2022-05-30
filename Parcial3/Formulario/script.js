
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
        
        document.getElementById("btnPromise").addEventListener("click", function(){

            let promesa = new Promise ((resolve,reject) => {
                const AjaxPeticion = new XMLHttpRequest();
                var url = 'peticion.php';

                AjaxPeticion.onreadystatechange = function () {
                    if (AjaxPeticion.onreadystatechange == 4 && AjaxPeticion.status == 200) {
                        console.log(this.responseText);
                        resolve(AjaxPeticion.responseText);
                    }
                }
                AjaxPeticion.open('GET',url,true);
                AjaxPeticion.send();
            });

            promesa.then(value => {console.log('Llego'); document.getElementById("titulo").innerHTML = value});
            
        });


        document.getElementById("btnSql").addEventListener("click",function () {
            window.prompt("Ingresa el id del piloto a consultar",{id:idJson});
        })



    }

