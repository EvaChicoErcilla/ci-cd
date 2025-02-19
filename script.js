const apiUrl = "https://rps101.pythonanywhere.com/api/v1/objects/all";
let ganador;
let emoji;

var objetosArray = []; // Array global donde se almacenan los datos
var nombreObjetoMaquina = "";
var nombreObjetoJugador = undefined;
var imagenUrl;
var imagenUrl2;

let diccionarioSinImagen = {
    "woman": "https://img.icons8.com/ios/50/standing-woman.png",
    "porcupine": "https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-porcupine-autumn-season-justicon-lineal-color-justicon.png",
    "turnip": "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-turnip-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
    "prince": "https://img.icons8.com/emoji/48/prince.png",
    "axe": "https://img.icons8.com/emoji/48/axe-emoji.png",
    "vulture": "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-vulture-in-the-wild-flaticons-flat-flat-icons.png",
    "laser": "https://img.icons8.com/ios/50/laser-beam.png",
    "devil": "https://img.icons8.com/ios/50/hardcore.png",
    "ufo": "https://img.icons8.com/emoji/48/flying-saucer.png",
    "fence": "https://img.icons8.com/officel/80/defensive-wood-wall.png",
    "peace": "https://img.icons8.com/color/48/peace-pigeon.png",
    "whip": "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-whip-circus-flaticons-lineal-color-flat-icons-2.png",
    "blood": "https://img.icons8.com/doodle/48/drop-of-blood--v1.png",
    "noise": "https://img.icons8.com/ios/50/adware-free.png",
    "gold": "https://img.icons8.com/color/48/gold-bars.png",
    "bowl": "https://img.icons8.com/ios-filled/50/bowl-with-spoon.png",
    "airplane": "https://img.icons8.com/emoji/48/airplane-emoji.png",
    "satan": "https://img.icons8.com/color/48/lucifer.png",
    "power": "https://img.icons8.com/ios/50/electricity.png",
    "man": "https://img.icons8.com/emoji/48/man.png",
    "monkey": "https://img.icons8.com/color/48/monkey-with-a-banana.png",
    "wall": "https://img.icons8.com/color/48/brick-wall.png",
    "film": "https://img.icons8.com/ios/50/film-reel--v1.png",
    "sponge": "https://img.icons8.com/ios-filled/50/sponge.png",
    "air": "https://img.icons8.com/ios/50/air-element.png",
    "pit" : "https://img.icons8.com/cotton/64/golden-fever.png",
    "police": "https://img.icons8.com/fluency/48/policeman-male.png",
    "princess": "https://img.icons8.com/emoji/48/princess.png",
    "quicksand": "https://img.icons8.com/fluency/48/desert-landscape.png",
    "platimum": "https://img.icons8.com/external-bearicons-blue-bearicons/64/external-Platinum-periodic-table-bearicons-blue-bearicons.png",
    "cage": "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cage-prehistoric-flaticons-lineal-color-flat-icons.png",
    "video-game": "https://img.icons8.com/external-wanicon-flat-wanicon/64/external-videogame-lifestyle-wanicon-flat-wanicon.png",
    "heart": "https://img.icons8.com/ios/50/like--v1.png",
    "lightning" : "https://img.icons8.com/ios/50/lightning-bolt--v1.png",
    "fire": "https://img.icons8.com/ios/50/fire-element--v1.png",
    "tree" : "https://img.icons8.com/pulsar-color/48/tree.png",
    "medusa" : "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-medusa-ancient-greek-mythology-monsters-and-creatures-flaticons-flat-flat-icons.png",
    "community": "https://img.icons8.com/ios-filled/50/share_2.png",
    "happy": "https://img.icons8.com/emoji/48/partying-face.png",
    "sad": "https://img.icons8.com/emoji/48/disappointed-face.png",
    "draw": "https://img.icons8.com/?size=100&id=LcX8N4kaSwvz&format=png&color=000000",
}


//Cargar objetos antes de ejecutar cualquier acción
async function cargarObjetos() {
    let response = await fetch(apiUrl);
    objetosArray = await response.json(); // Guardamos los datos en el array global
    console.log("Objetos guardados en el array:", objetosArray.length);
}

//Función asíncrona para cargar los objetos antes de generar el número
async function generarNumero() {
    // Esperamos a que se carguen los objetos si aún no están cargados
    if (objetosArray.length === 0) {
        await cargarObjetos();
    }

    let numeroAleatorio = Math.floor(Math.random() * objetosArray.length);
    return numeroAleatorio;
}


//Ahora esta función es asíncrona y espera a que los datos se carguen antes de continuar
async function generarRespuesta() {
    let numero = await generarNumero(); // Esperamos a que se genere un número válido
    let objeto = objetosArray[numero]; // Obtenemos el nombre del objeto

    // Normalizar el nombre del objeto
    let objetoFormateado = objeto.toLowerCase().replace(/\s+/g, "-").replaceAll(".", "").replaceAll(" ", "-");
    nombreObjetoMaquina = objetoFormateado;
    document.getElementById("resultado").innerText = "El objeto contra el que juegas es: " + objeto;

    getImagen(objetoFormateado);

    if(nombreObjetoJugador !== undefined){
        determinarGanador();
    }else{
        alert("debes seleccionar un objeto primero y volver a darle al botón");
    }
}

//funcion para las imagenes de la consola
function getImagen(objetoFormateado){
    if(objetoFormateado in diccionarioSinImagen){
        document.getElementById("imagenObjeto").src = `src/${objetoFormateado}.png`;
        imagenUrl = diccionarioSinImagen[objetoFormateado]; 
        document.getElementById("imagenObjeto").src = imagenUrl;
        }else{
        // Construimos la URL de la imagen
        imagenUrl = `https://img.icons8.com/color/100/${objetoFormateado}.png`;    // Mostramos el resultado en el HTML
        document.getElementById("imagenObjeto").src = imagenUrl;

    }

}



// Función para cargar los objetos antes de generar la tabla
function cargarObjetos() {
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            objetosArray = data; // Guardamos los datos en el array global
            console.log("Objetos guardados en el array:", objetosArray.length);
            generarTabla(); // 
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}

// Función para mostrar la imagen y el nombre en el HTML al hacer clic en un botón
function mostrarObjetoSeleccionado(nombreObjeto) {
    let objetoFormateado = nombreObjeto.toLowerCase().replace(/\s+/g, "-").replaceAll(".", "").replaceAll(" ", "-");

    // Actualizamos el HTML con el nombre y la imagen
    document.getElementById("resultado2").innerText = "Has seleccionado: " + nombreObjeto;
    nombreObjetoJugador = nombreObjeto;

    if(objetoFormateado in diccionarioSinImagen){
        document.getElementById("imagenObjeto2").src = `src/${objetoFormateado}.png`;
        imagenUrl2 = diccionarioSinImagen[objetoFormateado]; 
        document.getElementById("imagenObjeto2").src = imagenUrl2;
    }else{
        // Construimos la URL de la imagen
         imagenUrl2 = `https://img.icons8.com/color/100/${objetoFormateado}.png`;    // Mostramos el resultado en el HTML
        document.getElementById("imagenObjeto2").src = imagenUrl2;

    }
}

// Función para generar la tabla después de que los objetos se hayan cargado
function generarTabla() {
    let tabla = document.getElementById("seleccionObjeto");

    if (!tabla) {
        console.error("Error: No se encontró la tabla con id 'seleccionObjeto'");
        return;
    }

    let totalCeldas = objetosArray.length; 
    let columnas = 10; 
    let filas = Math.ceil(totalCeldas / columnas); // Calculamos cuántas filas se necesitan

    let contador = 0; // 

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr"); // Crea una fila

        for (let j = 0; j < columnas; j++) {
            if (contador >= totalCeldas) break;

            let celda = document.createElement("td");
            celda.innerHTML = `<button onclick="mostrarObjetoSeleccionado('${objetosArray[contador]}')">${objetosArray[contador]}</button>`;
            fila.appendChild(celda);

            contador++; // Incrementar contador
        }

        tabla.appendChild(fila); 
    }
}

// ✅ Esperar a que el DOM esté listo y luego cargar los objetos
document.addEventListener("DOMContentLoaded", function() {
    cargarObjetos(); // 🔥 Llamamos primero a cargarObjetos(), luego se ejecutará generarTabla()
});

async function determinarGanador() {
    const response = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${nombreObjetoMaquina}&object_two=${nombreObjetoJugador}`);
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data = await response.json();

    ganador = data.winner; 

    document.getElementById("ganador").innerText = `${ganador}`; // Mostrar el ganador en pantalla

    if (ganador === "draw") {
        document.getElementById("razon").innerText = `No one wins`; // Mostrar empate
        document.getElementById("emoji").innerHTML = `<img src=${diccionarioSinImagen["draw"]}>`;
    } else if (ganador === nombreObjetoJugador) {
        document.getElementById("razon").innerText = `${nombreObjetoJugador} ${data.outcome} ${nombreObjetoMaquina}`; // Mostrar por qué ha ganado
        document.getElementById("emoji").innerHTML = `<img src=${diccionarioSinImagen["happy"]}>`;
        document.getElementById("imagenGanador").src = imagenUrl2; 
    } else {
        document.getElementById("razon").innerText = `${nombreObjetoMaquina} ${data.outcome} ${nombreObjetoJugador}`; // Mostrar por qué ha ganado
        document.getElementById("emoji").innerHTML = `<img src=${diccionarioSinImagen["sad"]}>`;
        document.getElementById("imagenGanador").src = imagenUrl; 
    }
}
