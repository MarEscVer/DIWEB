// Importa nuestro CSS personalizado
import '../scss/main.scss';
// Importa todo el JS de Bootstrap
import * as bootstrap from 'bootstrap';
// Importa chart.js
import Chart from 'chart.js/auto';

// Al abrir la página, muestra el video
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

// Toast
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

// Tooltips
var tooltips = new bootstrap.Tooltip(document.body, {
    selector: '[data-bs-toggle="tooltip"]'
});

// Registro --> Botón confirmar cancelación
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
// Datos y configuración del gráfico de línea
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

// Datos y configuración del gráfico de pastel (Pie Chart)
const pieChartData = {
    labels: ['Gel', 'Champú', 'Animales'],
    datasets: [{
        data: [10, 50, 20],
        backgroundColor: ['#409097', '#66c0c9', '#076972'],
    }],
};

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

// Datos y configuración del gráfico de rosquilla (Doughnut Chart)
const doughnutChartData = {
    labels: ['España', 'México', 'Argentina'],
    datasets: [{
        data: [15, 4, 20],
        backgroundColor: ['#409097', '#66c0c9', '#076972'],
    }],
};

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

document.addEventListener('DOMContentLoaded', function () {
    // Verifica si estamos en la página de estadísticas
    if (window.location.pathname.includes('estadistica.html')) {
        // Calcular y mostrar el total de usuarios
        const totalUsuariosDoughnutChartElement = document.getElementById('totalUsuariosDoughnutChart');
        const doughnutChartDataset = doughnutChartData.datasets && doughnutChartData.datasets[0];

        if (totalUsuariosDoughnutChartElement && doughnutChartDataset) {
            const totalUsuarios = doughnutChartDataset.data.reduce((total, usuarios) => total + usuarios, 0);
            totalUsuariosDoughnutChartElement.textContent = totalUsuarios;
        }

        // Calcular y mostrar el total de ventas
        const totalVentasPieChartElement = document.getElementById('totalVentasPieChart');
        const pieChartDataset = pieChartData.datasets && pieChartData.datasets[0];

        if (totalVentasPieChartElement && pieChartDataset) {
            const totalVentas = pieChartDataset.data.reduce((total, venta) => total + venta, 0);
            totalVentasPieChartElement.textContent = totalVentas;
        }

        // Creación de gráficos
        const myChart = new Chart(document.getElementById('myChart'), config);
        const pieChartElement = document.getElementById('pieChart');
        const pieChart = new Chart(pieChartElement, pieChartConfig);
        const doughnutChartElement = document.getElementById('doughnutChart');
        const doughnutChart = new Chart(doughnutChartElement, doughnutChartConfig);
    }
});

