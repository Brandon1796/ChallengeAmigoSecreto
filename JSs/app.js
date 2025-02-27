// Variables
let limite = 5;
let permitidoAgregar = true;
let nombresAmigoSecreto = [];
let nombresAmigoSecreto2 = [];
let nombresAmigoSecreto3 = [];
condicionesIniciales();

// Función para agregar nombres
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim(); // Obtenemos el valor del input y eliminamos espacios en blanco

    // Verifica si el campo de nombre está vacío
    if (nombre === "") {
        alert("Por favor ingresa un nombre");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Si el nombre ya está en la lista, muestra el alerta
    if (nombresAmigoSecreto.includes(nombre) || nombresAmigoSecreto2.includes(nombre) || nombresAmigoSecreto3.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return; // Detiene la ejecución si el nombre ya está en cualquiera de los arrays
    }

    // Si el límite de nombres en el primer array no se ha alcanzado
    if (nombresAmigoSecreto.length < limite) {
        nombresAmigoSecreto.push(nombre);
        asignarTexto('p', `${nombresAmigoSecreto}`);
        document.getElementById("amigo").value = "";  // Limpia el input
        console.log(nombresAmigoSecreto);
    } 
    // Si el límite en el primer array se ha alcanzado, agrega al segundo array
    else if (nombresAmigoSecreto2.length < limite) {
        nombresAmigoSecreto2.push(nombre);
        asignarTexto('p2', `${nombresAmigoSecreto2}`);
        document.getElementById("amigo").value = "";  // Limpia el input
    } 
    // Si el límite en el segundo array se ha alcanzado, agrega al tercer array
    else if (nombresAmigoSecreto3.length < limite) {
        nombresAmigoSecreto3.push(nombre);
        asignarTexto('p3', `${nombresAmigoSecreto3}`);
        document.getElementById("amigo").value = "";  // Limpia el input
    } 
    // Si los tres arrays están llenos, no permite agregar más nombres
    else {
        alert("Ya no puedes agregar más nombres.");
    }
}

// Función para hacer funcionar los botones
function botones() {
    let botonAgregar = document.getElementById("agregar");
    let botonSortear = document.getElementById("sortear");
    let inputNombre = document.getElementById("amigo");

    if (botonAgregar) {
        botonAgregar.addEventListener("click", agregarAmigo);
    }
    else if (botonSortear) {
        botonSortear.addEventListener("click", sortearAmigo);
    }
    if (inputNombre) { 
        inputNombre.addEventListener("keypress", function(event) {
            if (event.key === "Enter") { 
                agregarAmigo();
            }
        });
    }
}

// Función que pone las condiciones iniciales
function condicionesIniciales() {
    botones();
    let permitidoAgregar = true;
}


// Función para Agragar el texto
function asignarTexto(elemento, texto) {

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
};

function obtenerNombreAleatorio() {
    // Combina los tres arrays en uno solo
    let todosLosNombres = [...nombresAmigoSecreto, ...nombresAmigoSecreto2, ...nombresAmigoSecreto3];

    // Verifica que haya al menos un nombre en los arrays
    if (todosLosNombres.length > 0) {
        // Selecciona un nombre aleatorio del array combinado
        let indiceAleatorio = Math.floor(Math.random() * todosLosNombres.length);
        let nombreSeleccionado = todosLosNombres[indiceAleatorio];
        console.log("Nombre seleccionado:", nombreSeleccionado);

        // Guardar el nombre seleccionado en localStorage 
        localStorage.setItem("nombreSorteado", nombreSeleccionado); 

        return nombreSeleccionado;
    } else {
        console.log("No hay nombres disponibles.");
        return null; // En caso de que no haya nombres
    }
}


// Función para sortear
function sortearAmigo() {
    document.getElementById('Sortear').addEventListener('click', () => {
        obtenerNombreAleatorio(); // Guardar el nombre sorteado
        setTimeout(() => {
            window.location.href = 'amigo.html'; // Redirigir después de un breve retraso
        }, 100); // tiempo de retraso
    });
}

