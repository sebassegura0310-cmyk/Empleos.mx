// ==========================================
// CONFIGURACIÓN
// ==========================================

// IMPORTANTE:
// Escribe tu número de WhatsApp con código de país.
// Colombia = 57
//
// Ejemplo:
// 573001234567

const NUMERO_WHATSAPP = "573001234567";


// ==========================================
// MENÚ MÓVIL
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// ==========================================
// BOTÓN WHATSAPP
// ==========================================

const whatsappBtn =
    document.getElementById("whatsappBtn");

const mensajeInicial =
    "Hola, quiero recibir información sobre las oportunidades disponibles.";

whatsappBtn.href =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensajeInicial)}`;


// ==========================================
// POSTULARSE A EMPLEO
// ==========================================

function postularEmpleo() {

    const mensaje =
        "Hola, estoy interesado/a en la oportunidad de empleo. Quiero conocer los requisitos y cómo puedo postularme.";

    abrirWhatsApp(mensaje);
}


// ==========================================
// SOLICITAR PRÉSTAMO
// ==========================================

function solicitarPrestamo(monto) {

    const mensaje =
        `Hola, estoy interesado/a en consultar un préstamo de ${monto}. Quiero conocer los requisitos, condiciones y disponibilidad.`;

    abrirWhatsApp(mensaje);
}


// ==========================================
// ABRIR WHATSAPP
// ==========================================

function abrirWhatsApp(mensaje) {

    const url =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}


// ==========================================
// FORMULARIO
// ==========================================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const interes =
        document.getElementById("interes").value;

    const mensaje =
        document.getElementById("mensaje").value.trim();


    let textoInteres = "";

    if (interes === "empleo") {

        textoInteres = "una oportunidad de empleo";

    } else if (interes === "prestamo") {

        textoInteres = "un préstamo";

    } else {

        textoInteres =
            "una oportunidad de empleo y un préstamo";

    }


    const texto = `
Hola, mi nombre es ${nombre}.

Estoy interesado/a en ${textoInteres}.

Mi número de contacto es:
${telefono}

Mensaje:
${mensaje || "Sin mensaje adicional."}
    `;


    abrirWhatsApp(texto);

});
