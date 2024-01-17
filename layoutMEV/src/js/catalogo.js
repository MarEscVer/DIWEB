var video = document.getElementById("videoPlay");
var btn = document.getElementById("boton");
var iconoBoton = document.getElementById("iconoBoton");
var iconoCerrar = document.getElementById("iconoCerrar");
iconoBoton.addEventListener("click", playAndPauseVideo);
iconoCerrar.addEventListener("click", closeOpenVideo);

// Pause y play del video, cambiando el texto del botón
function playAndPauseVideo() {
  if (video.paused) {
      video.play();
      iconoBoton.classList.remove("fa-play");
      iconoBoton.classList.add("fa-pause");
  } else {
      video.pause();
      iconoBoton.classList.remove("fa-pause");
      iconoBoton.classList.add("fa-play");
  }
}

// Función para cerrar el video y mostrar la página principal
function closeOpenVideo() {
  var computedStyle = window.getComputedStyle(video);

  if (computedStyle.display === "none") {
    video.style.display = "block";
    iconoCerrar.classList.remove("fa-circle-check");
    iconoCerrar.classList.add("fa-circle-xmark");
  } else {
    video.style.display = "none";
    iconoCerrar.classList.remove("fa-circle-xmark");
    iconoCerrar.classList.add("fa-circle-check");
  }
}
