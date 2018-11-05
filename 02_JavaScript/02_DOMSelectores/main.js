
window.onload = function() {
    var el = document.querySelector(".descripcion");
    console.log(el);

    var inputNombre = document.querySelector("#nombre");
    console.log(inputNombre);

    // Asocio el inputNombre el evento click
    // Para ello le asigno al método onclick
    // una función anónima que recibe por parámetro
    // las propiedades el evento
    var btnEnvio = document.querySelector("#botonEnvio");
    btnEnvio.onclick = function(event) { 
        console.log(event);
        alert('El usuario ha escrito:' + inputNombre.value);
    }


    // Selecciono todos los párrafos
    var parrafos = document.querySelector("#parrafo1");
    // Modifico el texto del párrafo seleccionado
    parrafos.textContent = 'Texto modificado';
    
    
}