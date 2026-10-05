/* =====================================
   CONFIGURACIÓN
===================================== */

/*
   CAMBIA ESTA URL POR EL DESTINO
   LEGÍTIMO QUE QUIERAS UTILIZAR.

   Ejemplo:

   const ENLACE_FINAL = "https://ejemplo.com";

*/

const ENLACE_FINAL = "https://example.com";


/* =====================================
   MOSTRAR UNA PANTALLA
===================================== */

function mostrarPaso(numero) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {

        pantalla.classList.remove("activa");

    });


    const siguiente = document.getElementById(
        "paso" + numero
    );


    if (siguiente) {

        siguiente.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================
   BOTÓN DEL FORMULARIO
===================================== */

function continuarFormulario() {

    const nombre =
        document.getElementById("nombre").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const ciudad =
        document.getElementById("ciudad").value.trim();


    /*
       Estos datos solo se utilizan para comprobar
       que los campos no estén vacíos.

       NO se envían a ningún servidor.
    */


    if (nombre === "") {

        alert("Por favor escribe tu nombre.");

        document.getElementById("nombre").focus();

        return;
    }


    if (telefono === "") {

        alert("Por favor escribe tu teléfono.");

        document.getElementById("telefono").focus();

        return;
    }


    if (ciudad === "") {

        alert("Por favor escribe tu ciudad.");

        document.getElementById("ciudad").focus();

        return;
    }


    mostrarPaso(3);
}


/* =====================================
   ENTREVISTA
===================================== */

function continuarEntrevista() {

    const fecha =
        document.getElementById("fecha").value.trim();

    const hora =
        document.getElementById("hora").value.trim();


    if (fecha === "") {

        alert("Por favor indica una fecha.");

        document.getElementById("fecha").focus();

        return;
    }


    if (hora === "") {

        alert("Por favor indica una hora.");

        document.getElementById("hora").focus();

        return;
    }


    mostrarPaso(5);
}


/* =====================================
   BOTÓN DEL ENCABEZADO
===================================== */

function irAlInicio() {

    mostrarPaso(1);

}


/* =====================================
   ENLACE FINAL
===================================== */

function irAlEnlace() {

    /*
       El botón solamente dirige al enlace
       configurado arriba.
    */

    if (
        ENLACE_FINAL === "" ||
        ENLACE_FINAL === "https://example.com"
    ) {

        alert(
            "Configura primero ENLACE_FINAL en script.js."
        );

        return;
    }


    window.location.href = ENLACE_FINAL;

}


/* =====================================
   INICIO
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarPaso(1);

    }
);
