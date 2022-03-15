# Flexbox y sus propiedades padre

| Propiedad      | Que hace?                                                                                   | Valores                                 |
| -----------    | --------------------------------------------------------------------------------------------|-----------------------------------------|
| flex-direction |Logra posicionar los elementos en columna o en fila (Colum, Row)                             |row, row-reverse, column, column-reverse |     
| wrap           |Esta propiedad nos permite modificar si queremos posicionar en linea o como si fuesen blocks |nowrap,wrap y wrap-reverse               |
|flow            |Esta propiedad es un atajo para establecer el direction y el wrap, como si fuese una misma   |row-column(reverse) y wrap,nowrap(reverse)|
|justify-content |Esta posiciona el alineamiento del contenido pudiendo centrar y hacer mas cosas| flex-start,flex-end,center,space-between,space-around, etc| 
|align-items|Esto posiciona la forma de alinear los items de forma vertical a la caja|strech, flex-start,flex-end,center,baseline|
|align-content|Esto logra dar un espacio extra para poder alinear los contenidos es muy similar a justify-content|flex-start,flex-end,center,strech,space-between, space-around|
|gap, row-gap, column-gap|Esta propiedad lo que hace es que da un espacio sobre los items como un contorno entre cada uno de ellos| Se maneja en pixeles|


# Flexbox y sus propiedades hijo

|Propiedades |Que hace? |Valores|
|------------|----------|-------|
|order|Lo que hace esta propiedad es poner los items, en un orden especifico en el cual empiezan a mostrarse|Estos valores son del 0 en adelante |
|flex-grow|Determina qué cantidad de espacio disponible dentro del contenedor debe ocupar el artículo.En pocas palabras acompleta espacios entre items|Tambien se maneja en numeros donde el default es el 0|
|flex-shrink|Esta propiedad determina la capacidad de que un item disminuya su tamaño si es necesario|Se maneja en numeros y su default es 1|
|flex-basis|Esto define el tamaño default del elemento antes del el espacio restante distribuido|Su default esta en auto, pero podemos utilizar numeros|
|flex|Esta propiedad es la combinacion del grow,shrink y basis pudiendo tener la combinacion de las tres anteriores propiedades en una misma|Utiliza las mismas anteriormente dichas|
|align-self|Esto permite poder posicionar un item en especifico o individual en si es lo mismo que align-items pero de forma individual|flex-start,flex-end,center,baseline, etc|
