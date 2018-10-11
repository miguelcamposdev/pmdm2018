window.onload = function() {
    var enlaces = document.querySelectorAll('.btn-link');

    enlaces.forEach(function(enlace) {
        enlace.onclick = function() {
            alert('Enlace');
        }
    });
}