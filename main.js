'use static';

const opciones = document.querySelectorAll('.options');

// const opcion = document.getElementsByClassName('options').focus();

const btn = document.querySelector('.boton');

const uno = document.querySelector("#uno");

const dos = document.querySelector("#dos");

const tres = document.querySelector("#tres");

const cuatro = document.querySelector("#cuatro");




// const funcionPrueba = function (item) {
//     item.addEventListener("click", function () {
//         console.log("tetas")
//     })
// }


uno.addEventListener("click", function () {
    if (dos.classList.contains("seleccionado") || tres.classList.contains("seleccionado") || cuatro.classList.contains("seleccionado")) {
        uno.classList.add("seleccionado");
        dos.classList.remove("seleccionado");
        tres.classList.remove("seleccionado");
        cuatro.classList.remove("seleccionado");
        btn.classList.add("see");
    }

    if (!dos.classList.contains("seleccionado") || !tres.classList.contains("seleccionado") || !cuatro.classList.contains("seleccionado")) {
        uno.classList.add("seleccionado");
        btn.classList.add("see");
    }
})

dos.addEventListener("click", function () {
    if (uno.classList.contains("seleccionado") || tres.classList.contains("seleccionado") || cuatro.classList.contains("seleccionado")) {
        dos.classList.add("seleccionado");
        uno.classList.remove("seleccionado");
        tres.classList.remove("seleccionado");
        cuatro.classList.remove("seleccionado");
        btn.classList.add("see");
    }

    if (!uno.classList.contains("seleccionado") || !tres.classList.contains("seleccionado") || !cuatro.classList.contains("seleccionado")) {
        dos.classList.add("seleccionado");
        btn.classList.add("see");
    }
})

tres.addEventListener("click", function () {
    if (uno.classList.contains("seleccionado") || dos.classList.contains("seleccionado") || cuatro.classList.contains("seleccionado")) {
        tres.classList.add("seleccionado");
        uno.classList.remove("seleccionado");
        dos.classList.remove("seleccionado");
        cuatro.classList.remove("seleccionado");
        btn.classList.add("see");
    }

    if (!uno.classList.contains("seleccionado") || !dos.classList.contains("seleccionado") || !cuatro.classList.contains("seleccionado")) {
        tres.classList.add("seleccionado");
        btn.classList.add("see");
    }
})

cuatro.addEventListener("click", function () {
    if (uno.classList.contains("seleccionado") || dos.classList.contains("seleccionado") || tres.classList.contains("seleccionado")) {
        cuatro.classList.add("seleccionado");
        uno.classList.remove("seleccionado");
        dos.classList.remove("seleccionado");
        tres.classList.remove("seleccionado");
        btn.classList.add("see");
    }

    if (!uno.classList.contains("seleccionado") || !dos.classList.contains("seleccionado") || !tres.classList.contains("seleccionado")) {
        cuatro.classList.add("seleccionado");
        btn.classList.add("see");
    }
})



btn.addEventListener("click", function () {
    btn.classList.remove("see");
})



// opciones.forEach(opciones =>
//     opciones.addEventListener("click", () => btn.classList.add("see"))
// )


