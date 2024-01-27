// Import our custom CSS
import '../scss/main.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

//Al abrir la pagina se muestre el video
document.addEventListener('DOMContentLoaded', function () {
    // Verifica si ya se ha mostrado el modal en esta sesión
    var isModalShown = sessionStorage.getItem('isModalShown');

    if (!isModalShown) {
        // Muestra el modal automáticamente al cargar la página
        var myModal = new bootstrap.Modal(document.getElementById('videoModal'), {});
        myModal.show();

        // Marca que el modal ha sido mostrado en esta sesión
        sessionStorage.setItem('isModalShown', 'true');
    }
});
//Toast
document.addEventListener('DOMContentLoaded', function () {
    var toastElement = document.getElementById('liveToast');
    var myToast = toastElement ? new bootstrap.Toast(toastElement) : null;

    var toastBtn = document.getElementById('liveToastBtn');
    if (myToast && toastBtn) {
        toastBtn.addEventListener('click', function () {
            myToast.show();
        });
    }
});

//Tooltips
var tooltips = new bootstrap.Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]'
});

//Registro --> Boton confirmar cancelacion
document.addEventListener('DOMContentLoaded', function () {
    const confirmarCancelacionButton = document.querySelector('#confirmarCancelacionButton');

    if (confirmarCancelacionButton) {
        confirmarCancelacionButton.addEventListener('click', function () {
            const registroForm = document.querySelector('#registroForm');
            if (registroForm) {
                registroForm.reset();
            }
        });
    }
});

//Paginacion

/** 
//no permite seleccionar fechas futuras ni fechas anteriores a una cierta edad (18 años atrás desde la fecha actual)
// Obtén la fecha actual
const fechaActual = new Date();

// Calcula la fecha mínima (hace 18 años a partir de la fecha actual)
const fechaMinima = new Date(fechaActual);
fechaMinima.setFullYear(fechaMinima.getFullYear() - 18);

// Formatea la fecha mínima en el formato necesario para el campo de fecha
const dia = fechaMinima.getDate().toString().padStart(2, '0');
const mes = (fechaMinima.getMonth() + 1).toString().padStart(2, '0'); // Suma 1 porque enero es 0
const anio = fechaMinima.getFullYear();

const fechaMinimaFormateada = `${anio}-${mes}-${dia}`;

const fechaNacimientoInput = document.getElementById("fecha-nacimiento");
fechaNacimientoInput.max = fechaMinimaFormateada;
*/