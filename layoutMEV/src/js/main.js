// Import our custom CSS
import '../scss/main.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import chart.js
import Chart from 'chart.js/auto';

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

// Graficos

//Informe
// Tus datos y configuración de gráfico
const data = {
    labels: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
    datasets: [
        {
            label: '€K VENTAS',
            data: [0.5, 1, 1.2, 0.8, 1.5, 2, 1.8, 2.1, 1.5, 2.1, 2.3, 2.5],
            backgroundColor: '#409097',
            borderColor: '#409097',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 8,
            pointBorderColor: '#409097',
            pointBackgroundColor: '#409097',
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        animation: {
            duration: 500,
        },
        responsive: true,
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
};

// Datos para el Pie Chart
const pieChartData = {
    labels: ['Gel', 'Champú', 'Animales'],
    datasets: [{
        data: [10, 50, 20],
        backgroundColor: ['#409097', '#66c0c9', '#076972'],
    }],
};

// Configuración del Pie Chart
const pieChartConfig = {
    type: 'pie',
    data: pieChartData,
    options: {
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
};



// Datos para el Doughnut Chart
const doughnutChartData = {
    labels: ['España', 'México', 'Argentina'],
    datasets: [{
        data: [15, 4, 20],
        backgroundColor: ['#409097', '#66c0c9', '#076972'],
    }],
};

// Configuración del Doughnut Chart
const doughnutChartConfig = {
    type: 'doughnut',
    data: doughnutChartData,
    options: {
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
};

//Calcular totales
// Calcular y mostrar el total de usuarios
const totalUsuariosDoughnutChartElement = document.getElementById('totalUsuariosDoughnutChart');
const totalUsuarios = doughnutChartData.datasets[0].data.reduce((total, usuarios) => total + usuarios, 0);
totalUsuariosDoughnutChartElement.textContent = totalUsuarios;
// Calcular y mostrar el total de ventas
const totalVentasPieChartElement = document.getElementById('totalVentasPieChart');
const totalVentas = pieChartData.datasets[0].data.reduce((total, venta) => total + venta, 0);
totalVentasPieChartElement.textContent = totalVentas;

//Creación de gráficos
const myChart = new Chart(document.getElementById('myChart'), config);
const pieChartElement = document.getElementById('pieChart');
const pieChart = new Chart(pieChartElement, pieChartConfig);
const doughnutChartElement = document.getElementById('doughnutChart');
const doughnutChart = new Chart(doughnutChartElement, doughnutChartConfig);


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