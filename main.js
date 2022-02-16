'use static';

const opciones = document.querySelectorAll('.options');

// const opcion = document.getElementsByClassName('options').focus();

const btn = document.querySelector('.boton');

const prueba = document.querySelector('img');

const funcionPrueba = function (item) {
    item.addEventListener("click", function () {
        console.log("tetas")
    })
}


opciones.forEach(opciones =>
    opciones.addEventListener("click", () => btn.classList.add("see"))
)


