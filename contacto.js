function validacion (e){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let comentarios = document.getElementById("coment_input").value;
    let mail = document.getElementById("mail").value;
    let parrafo = document.getElementById("warnings");
    let warnings = ""
    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let valido = expReg.test(mail)
    parrafo.innerHTML == ""

    if (nombre.length == 0 || apellido.length ==0) {
        warnings +="Nombre y Apellido no pueden estar vacíos"}
    else if (mail.length == 0) {
        warnings +="Debe cargar un mail de contacto"}
    else if (valido == false) {
        warnings +="Mail inválido" }
    else if (comentarios.length == 0) {
        warnings += "Olvido cargar su mensaje" }
    
    if (warnings !== "") {
        parrafo.innerHTML = warnings
        e.preventDefault();
    }
}

let Enviar_id = document.getElementById("Enviar_id");
Enviar_id.addEventListener("click", validacion);
    
