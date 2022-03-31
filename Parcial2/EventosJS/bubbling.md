# Blubbling

### Como se produce la captura del evento?

Este proceso tiene 3 fases:
* Capturing 
* Target
* bubbling

Cuando se produce un evento la captura se inicia en el HTML de arriba hacia abajo, buscando el elemento mas profundo en el que se haya producido el event, despues en el evento del DOM donde se producio el event javascript verifica si tiene un listener asociado a ese evento y ya por ultimo se ejecuta la parte del bubbling, donde si en el elemento que tiene el evento tiene un listener, ejecuta lo que necesite ejecutar y despues verifica si en los elementos padre tambien tienen un listener