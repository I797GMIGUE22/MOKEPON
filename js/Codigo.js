// Se separan los nombres de las variables no con espacio sino se diferencia por MAYUSCULA
//document = representa el documento.html y tiene varios metodos y propiedades como el .checked que es verificar si una opcion esta seleccionada en tal id si es verdadera o no se le puede agregar un == para que cuando sea true o false haga tal cosa
//o
//window = cuando haga algo la pagina que se ejecute cierta funcion
    //.getElementById('nombre del id') = asigna un id a una variable
// ' teclado al lado del 0
//Las variables tambien tienen sus propios metodos:
    //.addEventListener('evento que queremos escuchar','funcion que queremos ejecutar') = que cuando la variable escuche eso que haga esto o tambien se puede sin una funncion con , () =>{la accion que queremos realizar}
//Separar variables con ,
//.innerHTML = nos permite manipular cierto snap con cierto id de nuestro DOM
    // DOM = (Document Object Model) es la forma en la que se estructura el html para que se pueda manipular por medio de javascript

//Es mejor hacer una variable u otra funcion con un la accion que se quiere realizar en la condicional ej:document.getElementById

//Se puede buscar la documentacion de un metodo llendo a google y buscando


function iniciarjuego(){

    let botonSeleccionMascota = document.getElementById('boton-seleccion')
    botonSeleccionMascota.addEventListener('click', seleccionarMascotaJugador)

}

let id = ''
function input(id){
    return document.getElementById(id)
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
}

window.addEventListener('load', iniciarjuego)