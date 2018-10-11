window.onload = function() {

    // A continuación usamos la función querySelectorAll,
    // que a diferencia de la función querySelector, en lugar
    // de devolvernos 1 sólo elemento nos devuelve un Array
    // de todos los elementos que en el HTML coinciden con el
    // selector
    var enlaces = document.querySelectorAll('.btn-link');

    // como la variable 'enlaces' lo que contiene es un array
    // de objetos de tipo Element, vamos a recorrerlo con un forEach
    // el forEach recibe por parámetro una función anónima, y ésta
    // tiene un parámetro de entrada, que le he pues por nombre
    // 'enlace' y que en cada iteración del bucle, contiene el elemento
    // que estamos recorriendo en esa iteración.

    enlaces.forEach(function(enlace) {
        // asociamos a cada enlace el evento click
        enlace.onclick = function() {
            alert('Enlace');
        }
    });
}