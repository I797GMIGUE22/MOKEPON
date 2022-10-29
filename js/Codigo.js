// Se separan los nombres de las variables no con espacio sino se diferencia por MAYUSCULA
//document = representa el documento.html y tiene varios metodos y propiedades como el .checked que es verificar si una opcion esta seleccionada en tal id si es verdadera o no se le puede agregar un == para que cuando sea true o false haga tal cosa
//o
//window = cuando haga algo la pagina que se ejecute cierta funcion ej: window.addEventListener('load',tal funcion) aqui nos dice que cuando la pagina cargue entonces que pase tal funcion
    //.getElementById('nombre del id') = asigna un id a una variable u obtener un valor de cierta id
// ' teclado al lado del 0
//Las variables tambien tienen sus propios metodos:
    //.addEventListener('evento que queremos escuchar','funcion que queremos ejecutar') = que cuando la variable escuche eso que haga esto o tambien se puede sin una funncion con , () =>{la accion que queremos realizar}
//Separar variables con ,
//.innerHTML = nos permite manipular cierto snap con cierto id de nuestro DOM
    // DOM = (Document Object Model) es la forma en la que se estructura el html para que se pueda manipular por medio de javascript

//Es mejor hacer una variable u otra funcion con un la accion que se quiere realizar en la condicional ej:document.getElementById
//Document.createElement('elemento de html que se quiere crear') = se puede crear contenido desde javascript a html se le agrega info con .innerHtml
//(lugardondesequiereelelemento (generalmente un id)).appendChild(elementoquesecoge) = Coge un elemento de html que hayamos creado y lo inserta en otro elemento del html que queramos insertar

//Se puede buscar la documentacion de un metodo llendo a google y buscando el comando por su nombre y ya

//VARIABLES: NOTA//
    //Se le dice variables globales a las variables que se crean afuera de un bloque de codigo ya que estas se pueden utilizar en distintos lugares de nuestro codigo posteriormente
    // y no es una variable de entorno si se crea dentro de por ejemplo una funcion porque solo existira esa variable dentro de esa funcion
    //En las funciones se puede referenciar a ellas pero se utilizan para cambiar su valor y utilizar el nuevo valor referenciado para darle un nuevo valor a la funcion
    //Se pueden ver los valores de las variables en la consola

let ataqueJugador
let ataqueEnemigo
let anuncio
let permitirMensajes = false

function input(id){
    return document.getElementById(id)
}

//BOTONES//

function funciones(){

    let botonSeleccionMascota = document.getElementById('boton-seleccion')
    botonSeleccionMascota.addEventListener('click', seleccionarMascotaJugador)

    if (permitirMensajes == true){
    let botonFuego = input('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = input('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = input('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    }
}

//ALEATORIEDAD//

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}         

//SELECCIONAR MASCOTA JUGADOR//

function seleccionarMascotaJugador(){
    if(input('Hipodoge').checked) {
        input('mascota-jugador').innerHTML = "Hipodoge🐸"
        seleccionarMascotaEnemigo()
    } else if (input('Capipepo').checked){
        input('mascota-jugador').innerHTML = "Capipepo🐔"
        seleccionarMascotaEnemigo()
    } else if (input('Ratigueya').checked){
        input('mascota-jugador').innerHTML = 'Ratigueya🐀'
        seleccionarMascotaEnemigo()
    } else {
        alert('Por favor selecciona una mascota')
    }
}

//SELECCION MASCOTA ENEMIGO//

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1){
        input('mascota-rival').innerHTML = "Hipodoge🐸"
    } else if (mascotaAleatoria == 2){
        input('mascota-rival').innerHTML = 'Capipepo🐔'
    } else {
        input('mascota-rival').innerHTML = 'Ratigueya🐀'
    }
    permitirMensajes = true
    funciones()
}

//SELECCION ATAQUE RIVAL//

function ataqueRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego🔥"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "Agua💧"
    } else{
        ataqueEnemigo = "Tierra🌱"
    }
    combate()
}

//COMBATE//
//agua>fuego - fuego>tierra - tierra>agua

function combate(){
    if((ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") || (ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱") || (ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💧")){
        anuncio = " Ganaste🥳🎉"
    } else if (ataqueJugador == ataqueEnemigo){
        anuncio = " Empate😐🤨"
    } else {
        anuncio = " Perdiste😭😿"
    }
    crearMensaje()
}

//MENSAJES DEL COMBATE//

function crearMensaje() {
    let sectionMensajes = input('Mensajes') 
    let p = document.createElement('p')
    p.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ", la mascota del rival ataco con " + ataqueEnemigo + "-" + anuncio
    sectionMensajes.appendChild(p)
}

//VARIACIONES ATAQUES JUGADOR//

function ataqueFuego(){
    ataqueJugador = "Fuego🔥"
    ataqueRival()
}
function ataqueAgua(){
    ataqueJugador = "Agua💧"
    ataqueRival()
}
function ataqueTierra(){
    ataqueJugador = "Tierra🌱"
    ataqueRival()
}

//CARQUE PRIMERO LA PAGINA Y LUEGO LA FUNCION: FUNCIONES//

window.addEventListener('load', funciones)