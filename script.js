/*
====================================================
CONFIGURACIÓN DEL ENLACE FINAL
====================================================

CAMBIA ESTA DIRECCIÓN POR EL ENLACE LEGÍTIMO
AL QUE QUIERAS DIRIGIR AL USUARIO.

Ejemplo:

const ENLACE_FINAL = "https://tusitio.com/";

*/

const ENLACE_FINAL = "https://example.com/";



/*
====================================================
CONTROL DE PASOS
====================================================
*/

const pasos = document.querySelectorAll(".step");

let pasoActual = 0;



/*
====================================================
MOSTRAR PASO
====================================================
*/

function irAlPaso(numero) {

  if (numero < 0) {
    numero = 0;
  }

  if (numero >= pasos.length) {
    numero = pasos.length - 1;
  }


  pasos.forEach(function(paso, indice) {

    if (indice === numero) {

      paso.classList.add("active");

    } else {

      paso.classList.remove("active");

    }

  });


  pasoActual = numero;


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



/*
====================================================
FORMULARIO
====================================================
*/

function continuarDesdeFormulario() {

  const nombre =
    document.getElementById("nombre").value.trim();

  const telefono =
    document.getElementById("telefono").value.trim();

  const ciudad =
    document.getElementById("ciudad").value.trim();


  if (
    nombre === "" ||
    telefono === "" ||
    ciudad === ""
  ) {

    alert(
      "Completa todos los campos para continuar."
    );

    return;

  }


  /*
  IMPORTANTE:

  Los datos solamente se utilizan
  para validar que los campos no estén vacíos.

  No se envían a ningún servidor.
  */


  irAlPaso(2);

}



/*
====================================================
ENTREVISTA
====================================================
*/

function continuarEntrevista() {

  const fecha =
    document.getElementById("fecha").value;

  const hora =
    document.getElementById("hora").value;


  if (
    fecha === "" ||
    hora === ""
  ) {

    alert(
      "Selecciona una fecha y una hora para continuar."
    );

    return;

  }


  irAlPaso(4);

}



/*
====================================================
CONFIGURAR BOTÓN FINAL
====================================================
*/

const botonFinal =
  document.getElementById("enlaceFinal");


if (botonFinal) {

  botonFinal.href = ENLACE_FINAL;

}



/*
====================================================
BOTÓN SUPERIOR
====================================================
*/

const botonSuperior =
  document.querySelector(".top-btn");


if (botonSuperior) {

  botonSuperior.addEventListener(
    "click",
    function() {

      irAlPaso(1);

    }
  );

}
