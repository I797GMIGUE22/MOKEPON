// new image(); = para crear una imagen desde js y para poderle poner los atributos de una imagen normal como: src alt...
// document.querySelector(nombre del selector CSS) = obtener un elemento por medio de su selector en nombre como lo haria uno en CSS ej, id="pablo" utilizando esto seria = document.querySelector(#pablo);

//FICHAS Y CONTROL//

let ataqueJugador;
let ataqueEnemigo;
let anuncio;
let vidaJugador = 3;
let vidaRival = 3;
let permitirMensajes = false;

//ABREVIATURAS//

function input(id) {
  return document.getElementById(id);
}

function disabled(boton) {
  let variableInventada = input(boton);
  variableInventada.disabled = true;
}

//ALEATORIEDAD//

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//BOTONES//

function iniciarJuego() {
  let sectionAtaque = input("Seleccionar-Ataque");
  sectionAtaque.style.display = "none";

  let botonReiniciar = input("Reiniciar");
  botonReiniciar.style.display = "none";

  let botonSeleccionMascota = document.getElementById("boton-seleccion");
  botonSeleccionMascota.addEventListener("click", seleccionarMascotaJugador);

  if (permitirMensajes == true) {
    let sectionMascotas = input("Seleccionar-Mascota");
    sectionMascotas.style.display = "none";

    let sectionAtaque = input("Seleccionar-Ataque");
    sectionAtaque.style.display = "flex";

    let botonFuego = input("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);

    let botonAgua = input("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);

    let botonTierra = input("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let spanVidaJugador = input("vida-jugador");
    let spanVidaRival = input("vida-rival");
    
    spanVidaJugador.innerHTML = "♥️♥️♥️";
    spanVidaRival.innerHTML = "♥️♥️♥️";
  }
}

//SELECCIONAR MASCOTA JUGADOR//

function seleccionarMascotaJugador() {
  let cardJugador = document.querySelector(".cardJ");
  let imgJ = input("imageJ");
  let imageJ = new Image();
  if (input("Hipodoge").checked) {
    input("mascota-jugador").innerHTML = "Hipodoge";
    cardJugador.style.backgroundColor = "#3e459c";
    imageJ.src = "../Assets/hipodoge_attack.png";
    imageJ.className = "imageJ";
    imgJ.appendChild(imageJ);
    seleccionarMascotaEnemigo();
  } else if (input("Capipepo").checked) {
    input("mascota-jugador").innerHTML = "Capipepo";
    cardJugador.style.backgroundColor = "#409c3e";
    imageJ.src = "../Assets/capipepo_attack.png";
    imageJ.className = "imageJ";
    imgJ.appendChild(imageJ);
    seleccionarMascotaEnemigo();
  } else if (input("Ratigueya").checked) {
    input("mascota-jugador").innerHTML = "Ratigueya";
    cardJugador.style.backgroundColor = "#a73b3b";
    imageJ.src = "../Assets/ratigueya_attack.png";
    imageJ.className = "imageJ";
    imgJ.appendChild(imageJ);
    seleccionarMascotaEnemigo();
  } else {
    alert("Por favor selecciona una mascota");
  }
}

//SELECCION MASCOTA ENEMIGO//

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let imgR = input("imageR");
  let imageR = new Image();
  let cardRival = document.querySelector(".cardR");
  if (mascotaAleatoria == 1) {
    input("mascota-rival").innerHTML = "Hipodoge";
    cardRival.style.backgroundColor = "#3e459c";
    imageR.src = "../Assets/hipodoge_attack.png";
    imageR.className = "imageR";
    imgR.appendChild(imageR);
  } else if (mascotaAleatoria == 2) {
    input("mascota-rival").innerHTML = "Capipepo";
    cardRival.style.backgroundColor = "#409c3e";
    imageR.src = "../Assets/capipepo_attack.png";
    imageR.className = "imageR";
    imgR.appendChild(imageR);
  } else {
    input("mascota-rival").innerHTML = "Ratigueya";
    cardRival.style.backgroundColor = "#a73b3b";
    imageR.src = "../Assets/ratigueya_attack.png";
    imageR.className = "imageR";
    imgR.appendChild(imageR);
  }
  permitirMensajes = true;
  iniciarJuego();
}

//COMBATE//
//agua>fuego - fuego>tierra - tierra>agua
//VARIACIONES ATAQUES JUGADOR//

function ataqueFuego() {
  ataqueJugador = "Fuego🔥";
  ataqueRival();
}
function ataqueAgua() {
  ataqueJugador = "Agua💧";
  ataqueRival();
}
function ataqueTierra() {
  ataqueJugador = "Tierra🌱";
  ataqueRival();
}
//SELECCION ATAQUE RIVAL//

function ataqueRival() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Agua💧";
  } else {
    ataqueEnemigo = "Tierra🌱";
  }
  combate();
}
//COMBATE//

function combate() {
  let sectionResultado = input("Mensajes");
  let spanVidaJugador = input("vida-jugador");
  let spanVidaRival = input("vida-rival");
  if (
    (ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") ||
    (ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱") ||
    (ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💧")
  ) {
    anuncio = " Ganaste🥳🎉";
    sectionResultado.style.color = "black";
    sectionResultado.style.backgroundColor = "gold";
    vidaRival--;
    if (vidaRival == 2) {
      spanVidaRival.innerHTML = "♥️♥️☠️";
    } else if (vidaRival == 1) {
      spanVidaRival.innerHTML = "♥️☠️☠️";
    } else if (vidaRival == 0) {
      spanVidaRival.innerHTML = "☠️☠️☠️";
    }
  } else if (ataqueJugador == ataqueEnemigo) {
    anuncio = " Empate😐🤨";
    sectionResultado.style.color = "black";
    sectionResultado.style.backgroundColor = "lightslategray";
  } else {
    anuncio = " Perdiste😭😿";
    sectionResultado.style.color = "black";
    sectionResultado.style.backgroundColor = "rgb(100 182 241)";
    vidaJugador--;
    if (vidaJugador == 2) {
      spanVidaJugador.innerHTML = "♥️♥️☠️";
    } else if (vidaJugador == 1) {
      spanVidaJugador.innerHTML = "♥️☠️☠️";
    } else if (vidaJugador == 0) {
      spanVidaJugador.innerHTML = "☠️☠️☠️";
    }
  }
  crearMensaje();
}

//MENSAJES DEL COMBATE//

function crearMensaje() {
  if (permitirMensajes == true) {
    let sectionResultado = input("resultado");
    let ataque_Jugador = input("ataque-jugador");
    let ataque_Enemigo = input("ataque-enemigo");
    let ataqueE = document.createElement("p");
    let ataqueJ = document.createElement("p");
    ataqueJ.innerHTML = ataqueJugador;
    ataqueE.innerHTML = ataqueEnemigo;
    sectionResultado.innerHTML = anuncio;
    ataque_Jugador.appendChild(ataqueJ);
    ataque_Enemigo.appendChild(ataqueE);
    crearResultado();
  } else {
    disabled("boton-fuego");
    disabled("boton-tierra");
    disabled("boton-agua");
    botonReiniciar();
  }
}

/*CREAR MENSAJE FINAL*/

function crearResultado() {
  let sectionResultado = input("resultado");
  let sectionMensajes = input("Mensajes");
  if (vidaJugador == 0) {
    permitirMensajes = false;
    sectionMensajes.style.marginBottom = "76px";
    sectionResultado.innerHTML = "Lastima, perdiste 😔";
    crearMensaje();
  } else if (vidaRival == 0) {
    permitirMensajes = false;
    sectionMensajes.style.marginBottom = "76px";
    sectionResultado.innerHTML = "FELICIDADES HAS GANADO!  🏆";
    crearMensaje();
  }
}

//REINICIAR//

function botonReiniciar() {
  let boton = input("Reiniciar");
  boton.style.display = "flex";
  boton.addEventListener("click", reiniciarJuego);
}
function reiniciarJuego() {
  location.reload();
}

//CARQUE PRIMERO LA PAGINA Y LUEGO LA FUNCION: FUNCIONES//

window.addEventListener("load", iniciarJuego);
