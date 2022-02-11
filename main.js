const opciones = document.querySelectorAll('.options');

const btn = document.querySelector('.boton');

opciones.forEach(opciones =>
    opciones.addEventListener("click", () => btn.classList.remove("hide"))
)
