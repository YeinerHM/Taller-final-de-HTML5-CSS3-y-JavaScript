//boton formulario
function formu() {
    user = document.getElementById("user").value;
    email = document.getElementById("email").value;
    affair = document.getElementById("affair").value;
    message = document.getElementById("message").value;

    let dato = "";
    if (user == "") {
        dato += " Nombre,";
    }
    if (email == "") {
        dato += " Correo,";
    }
    if (affair == "") {
        dato += " Asunto,";
    }
    if (message == "") {
        dato += " Mensaje,";
    }
    if (dato != "") {
        alert("Completa estos campos :\n" + dato);
    } else {
        alert("Formulario Correctamente Enviado");
        document.getElementById("form").reset();
        console.log("Nombre: " + user + "\nEmail: " + email + "\nAsunto: " + affair + "\nMensaje: " + message);
    }
}

function reset() {
    document.getElementById("form").reset();
}