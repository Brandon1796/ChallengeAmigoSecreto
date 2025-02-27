
// Funcion para asignar texto
function asignarTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

// Recuperar el nombre sorteado desde localStorage y devolverlo
function recuperarNombreSorteado() {
    let nombreSorteado = localStorage.getItem("nombreSorteado");
    if (nombreSorteado) {
        console.log("Nombre sorteado recuperado:", nombreSorteado);
        return nombreSorteado; // Devolvemos el nombre
    } else {
        console.log("No hay nombre sorteado almacenado.");
        return "No se ha sorteado un nombre."; // Si no hay nombre, devolvemos un mensaje alternativo
    }
}

// Asignar el nombre sorteado al elemento
asignarTexto("p", recuperarNombreSorteado());

function NuevoAmigo (){
    
    document.getElementById('Intentarlo').addEventListener('click', () => {
            window.location.href = 'index.html';
    });
}
