/* =========================================
   CONFIGURACIÓN DEL ENLACE FINAL
========================================= */

/*
   CAMBIA SOLAMENTE ESTA DIRECCIÓN.

   Ejemplo:

   const ENLACE_FINAL = "https://ejemplo.com";

   El botón final abrirá esa dirección.
*/

const ENLACE_FINAL = "https://o.uvixs.com//tr?offer_id=1&aff_id=14";


/* =========================================
   CAMBIAR DE PASO
========================================= */

function irAPaso(numero) {

    // Ocultar todas las pantallas
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });


    // Buscar la pantalla correspondiente
    const destino = document.getElementById(
        "paso-" + numero
    );


    // Mostrarla
    if (destino) {

        destino.classList.add("activa");

        // Volver arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================
   FORMULARIO DE DEMOSTRACIÓN
========================================= */

const formulario = document.getElementById("form-demo");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        // Evita que el navegador envíe el formulario
        event.preventDefault();

        // NO se envían los datos a ningún servidor.
        // Solo avanzamos a la siguiente pantalla.

        irAPaso(2);
    });
}


/* =========================================
   BOTÓN FINAL
========================================= */

function abrirEnlaceFinal() {

    if (
        ENLACE_FINAL &&
        ENLACE_FINAL !== "https://example.com"
    ) {

        window.location.href = ENLACE_FINAL;

    } else {

        alert(
            "Configura primero ENLACE_FINAL en el archivo script.js."
        );
    }
}


/* =========================================
   FECHA MÍNIMA
========================================= */

const fecha = document.getElementById("fecha");

if (fecha) {

    const hoy = new Date();

    const año = hoy.getFullYear();

    const mes = String(
        hoy.getMonth() + 1
    ).padStart(2, "0");

    const dia = String(
        hoy.getDate()
    ).padStart(2, "0");

    fecha.min = `${año}-${mes}-${dia}`;
}
