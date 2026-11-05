
/* =====================================
   CONFIGURACIÓN DEL ENLACE FINAL
===================================== */

const ENLACE_FINAL = "https://o.uvixs.com//click/SEHdPXo2";


/* =====================================
   PREGUNTAS
===================================== */

const questions = [
  {
    title: "¿Cuál es tu rango de edad?",
    options: [
      "18 - 24 años",
      "25 - 34 años",
      "35 - 44 años",
      "45 años o más"
    ]
  },
  {
    title: "¿Qué idiomas hablas con fluidez?",
    options: [
      "Español",
      "Inglés",
      "Ambos (español e inglés)"
    ]
  },
  {
    title: "¿En qué horario prefieres realizar tareas?",
    options: [
      "🌅 Mañana (6h - 12h)",
      "☀️ Tarde (12h - 18h)",
      "🌙 Noche (18h - 24h)"
    ]
  }
];


/* =====================================
   VARIABLES
===================================== */

let currentStep = 0;

const answers = [null, null, null];

const welcomeScreen =
  document.getElementById("welcomeScreen");

const quizScreen =
  document.getElementById("quizScreen");

const continueButton =
  document.getElementById("continueButton");

const quizForm =
  document.getElementById("quizForm");

const questionTitle =
  document.getElementById("questionTitle");

const questionHint =
  document.getElementById("questionHint");

const optionsBox =
  document.getElementById("options");

const stepLabel =
  document.getElementById("stepLabel");

const nextButton =
  document.getElementById("nextButton");

const backButton =
  document.getElementById("backButton");

const quizError =
  document.getElementById("quizError");

const loader =
  document.getElementById("loader");

const resultModal =
  document.getElementById("resultModal");


/* =====================================
   ANIMACIÓN DE CARGA
===================================== */

function loading(callback) {

  loader.classList.add("visible");

  loader.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  setTimeout(() => {

    loader.classList.remove("visible");

    loader.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    callback();

  }, 850);

}


/* =====================================
   BOTÓN CONTINUAR
===================================== */

continueButton.addEventListener("click", () => {

  loading(() => {

    welcomeScreen.hidden = true;

    quizScreen.hidden = false;

    currentStep = 0;

    renderStep();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});


/* =====================================
   MOSTRAR PREGUNTAS
===================================== */

function renderStep() {

  const question = questions[currentStep];

  questionTitle.textContent = question.title;

  questionHint.textContent =
    "Selecciona una de las siguientes opciones.";

  stepLabel.textContent =
    `PASO ${currentStep + 1} DE 3`;

  optionsBox.innerHTML = "";

  question.options.forEach(option => {

    const label = document.createElement("label");

    label.className = "option";

    if (answers[currentStep] === option) {
      label.classList.add("selected");
    }

    const radio = document.createElement("input");

    radio.type = "radio";

    radio.name = "answer";

    radio.value = option;

    radio.checked = answers[currentStep] === option;

    const text = document.createElement("span");

    text.textContent = option;

    radio.addEventListener("change", () => {

      answers[currentStep] = option;

      optionsBox.querySelectorAll(".option").forEach(item => {

        item.classList.remove("selected");

      });

      label.classList.add("selected");

      nextButton.disabled = false;

      quizError.textContent = "";

    });

    label.appendChild(radio);

    label.appendChild(text);

    optionsBox.appendChild(label);

  });


  /* BARRA DE PROGRESO */

  document.querySelectorAll(".progress-step").forEach((bar, index) => {

    bar.classList.remove("done", "active");

    if (index < currentStep) {

      bar.classList.add("done");

    } else if (index === currentStep) {

      bar.classList.add("active");

    }

  });


  /* BOTONES */

  backButton.hidden = currentStep === 0;

  nextButton.textContent =
    currentStep === 2
      ? "VER MI RESULTADO →"
      : "SIGUIENTE →";

  nextButton.disabled = !answers[currentStep];

  quizError.textContent = "";

}


/* =====================================
   SIGUIENTE PASO
===================================== */

quizForm.addEventListener("submit", event => {

  event.preventDefault();

  if (!answers[currentStep]) {

    quizError.textContent =
      "Selecciona una respuesta para continuar.";

    return;

  }

  loading(() => {

    if (currentStep < 2) {

      currentStep++;

      renderStep();

      document.querySelector(".quiz-card").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else {

      showResult();

    }

  });

});


/* =====================================
   VOLVER AL PASO ANTERIOR
===================================== */

backButton.addEventListener("click", () => {

  if (currentStep > 0) {

    currentStep--;

    renderStep();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

});


/* =====================================
   RESULTADO FINAL
===================================== */

function showResult() {

  resultModal.classList.add("visible");

  resultModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


/* =====================================
   BOTÓN FINAL: ABRIR TU ENLACE
===================================== */

document
  .getElementById("finalButton")
  .addEventListener("click", () => {

    const destination = ENLACE_FINAL.trim();

    if (
      !destination ||
      destination === "PEGA_AQUI_TU_ENLACE"
    ) {

      alert("Primero debes colocar tu enlace en script.js.");

      return;

    }

    try {

      const url = new URL(destination);

      if (!["https:", "http:"].includes(url.protocol)) {

        alert("Introduce un enlace válido.");

        return;

      }

      window.location.assign(url.href);

    } catch (error) {

      alert("El enlace introducido no es válido.");

    }

  });


/* =====================================
   INICIAR
===================================== */

renderStep();

}
// NOMBRES Y TIEMPOS DE EJEMPLO
const actividadEjemplo = [
  { nombre: "Ana", tiempo: "15 min" },
  { nombre: "Diana", tiempo: "8 min" },
  { nombre: "Vanessa", tiempo: "22 min" },
  { nombre: "Karol", tiempo: "5 min" },
  { nombre: "Miguel", tiempo: "1 hora" },
  { nombre: "Juan José", tiempo: "30 min" },
  { nombre: "Viviana", tiempo: "12 min" },
  { nombre: "Jenifer", tiempo: "2 horas" },
  { nombre: "Sergio", tiempo: "18 min" }
];

const nombreElemento = document.getElementById("activityName");
const tiempoElemento = document.getElementById("activityTime");

if (nombreElemento && tiempoElemento) {

  let indice = 0;

  setInterval(() => {

    nombreElemento.style.opacity = "0";
    tiempoElemento.style.opacity = "0";

    setTimeout(() => {

      indice = (indice + 1) % actividadEjemplo.length;

      nombreElemento.textContent =
        actividadEjemplo[indice].nombre;

      tiempoElemento.textContent =
        actividadEjemplo[indice].tiempo;

      nombreElemento.style.opacity = "1";
      tiempoElemento.style.opacity = "1";

    }, 300);

  }, 4000);
}