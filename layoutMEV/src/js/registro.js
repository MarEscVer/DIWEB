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