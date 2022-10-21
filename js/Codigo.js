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
//Document.createElement() = se puede crear contenido desde javascript a html

//Se puede buscar la documentacion de un metodo llendo a google y buscando el comando por su nombre y ya

//VARIABLES: NOTA//
    //Se le dice variables globales a las variables que se crean afuera de un bloque de codigo ya que estas se pueden utilizar en distintos lugares de nuestro codigo posteriormente
    // y no es una variable de entorno si se crea dentro de por ejemplo una funcion porque solo existira esa variable dentro de esa funcion
    //En las funciones se puede referenciar a ellas pero se utilizan para cambiar su valor y utilizar el nuevo valor referenciado para darle un nuevo valor a la funcion
    //Se pueden ver los valores de las variables en la consola

let ataqueJugador
let ataqueEnemigo

function input(id){
    return document.getElementById(id)
}

function funciones(){

    let botonSeleccionMascota = document.getElementById('boton-seleccion')
    botonSeleccionMascota.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = input('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = input('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = input('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function aleatorio (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}         

function seleccionarMascotaJugador(){
    if(input('Hipodoge').checked) {
        input('mascota-jugador').innerHTML = "Hipodoge"
    
    } else if (input('Capipepo').checked){
        input('mascota-jugador').innerHTML = "Capipepo"
   
    } else if (input('Ratigueya').checked){
        input('mascota-jugador').innerHTML = 'Ratigueya'
   
    } else {
        alert('Por favor selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1){
        input('mascota-rival').innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2){
        input('mascota-rival').innerHTML = 'Capipepo'
    } else {
        input('mascota-rival').innerHTML = 'Ratigueya'
    }
}

function ataqueRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego"
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = "Agua"
    } else{
        ataqueEnemigo = "Tierra"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueRival()
    alert("TU:  - "+ ataqueJugador + " vs " + ataqueEnemigo + " -  :RIVAL")
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueRival()
}
function ataqueTierra(){
    ataqueJugador = "Tierra"
    ataqueRival()
}

window.addEventListener('load', funciones)