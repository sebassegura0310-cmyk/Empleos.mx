
const questions = [
  {
    title: "¿Cuál es tu rango de edad?",
    hint: "Selecciona tu rango de edad.",
    options: [
      "18 - 24 años",
      "25 - 34 años",
      "35 - 44 años",
      "45 años o más"
    ]
  },
  {
    title: "¿Qué idiomas hablas con fluidez?",
    hint: "Elige la opción que mejor te describa.",
    options: [
      "Español",
      "Inglés",
      "Ambos (español e inglés)"
    ]
  },
  {
    title: "¿En qué horario prefieres realizar tareas?",
    hint: "Selecciona tu horario preferido.",
    options: [
      "🌅 Mañana (6h - 12h)",
      "☀️ Tarde (12h - 18h)",
      "🌙 Noche (18h - 24h)"
    ]
  }
];

let currentStep = 0;

const answers = [null, null, null];

const quizForm = document.getElementById("quizForm");
const optionsBox = document.getElementById("options");

const questionTitle = document.getElementById("questionTitle");
const questionHint = document.getElementById("questionHint");
const stepLabel = document.getElementById("stepLabel");

const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");

const quizError = document.getElementById("quizError");
const loader = document.getElementById("loader");

const resultModal = document.getElementById("resultModal");
const registrationModal = document.getElementById("registrationModal");


/* MOSTRAR PREGUNTAS */

function renderStep() {

  const question = questions[currentStep];

  questionTitle.textContent = question.title;
  questionHint.textContent = question.hint;

  stepLabel.textContent =
    `PASO ${currentStep + 1} DE ${questions.length}`;

  optionsBox.replaceChildren();

  question.options.forEach((option) => {

    const label = document.createElement("label");

    label.className =
      "option" +
      (answers[currentStep] === option ? " selected" : "");

    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "answer";
    radio.value = option;

    radio.checked = answers[currentStep] === option;

    radio.addEventListener("change", () => {

      answers[currentStep] = option;

      optionsBox.querySelectorAll(".option").forEach(el => {
        el.classList.remove("selected");
      });

      label.classList.add("selected");

      nextButton.disabled = false;

      quizError.textContent = "";

    });

    const text = document.createElement("span");

    text.textContent = option;

    label.append(radio, text);

    optionsBox.append(label);

  });


  /* BARRA DE PROGRESO */

  document.querySelectorAll(".progress-step").forEach((bar, index) => {

    bar.classList.toggle("done", index < currentStep);

    bar.classList.toggle("active", index === currentStep);

  });


  backButton.hidden = currentStep === 0;

  nextButton.textContent =
    currentStep === questions.length - 1
      ? "VER MI RESULTADO →"
      : "SIGUIENTE →";

  nextButton.disabled = !answers[currentStep];

  quizError.textContent = "";

}


/* MOSTRAR VENTANAS */

function showModal(modal) {

  modal.classList.add("visible");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

}


function hideModal(modal) {

  modal.classList.remove("visible");

  modal.setAttribute("aria-hidden", "true");

  if (
    ![resultModal, registrationModal].some(item =>
      item.classList.contains("visible")
    )
  ) {
    document.body.style.overflow = "";
  }

}


/* ANIMACIÓN DE CARGA */

function advanceWithLoader(callback) {

  loader.classList.add("visible");

  loader.setAttribute("aria-hidden", "false");

  window.setTimeout(() => {

    loader.classList.remove("visible");

    loader.setAttribute("aria-hidden", "true");

    callback();

  }, 850);

}


/* BOTÓN SIGUIENTE */

quizForm.addEventListener("submit", (event) => {

  event.preventDefault();

  if (!answers[currentStep]) {

    quizError.textContent =
      "Selecciona una respuesta para continuar.";

    return;

  }

  if (currentStep < questions.length - 1) {

    advanceWithLoader(() => {

      currentStep++;

      renderStep();

      document.querySelector(".quiz-card").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  } else {

    advanceWithLoader(() => {

      showModal(resultModal);

    });

  }

});


/* BOTÓN VOLVER */

backButton.addEventListener("click", () => {

  if (currentStep > 0) {

    currentStep--;

    renderStep();

  }

});


/* CONTINUAR AL REGISTRO */

document
  .getElementById("startRegistration")
  .addEventListener("click", () => {

    hideModal(resultModal);

    showModal(registrationModal);

  });


/* CERRAR VENTANAS */

document.querySelectorAll("[data-close]").forEach(button => {

  button.addEventListener("click", () => {

    hideModal(
      document.getElementById(button.dataset.close)
    );

  });

});


/* CERRAR AL TOCAR FUERA */

document.querySelectorAll(".modal-overlay").forEach(overlay => {

  overlay.addEventListener("click", event => {

    if (event.target === overlay) {

      hideModal(overlay);

    }

  });

});


/* VALIDAR FORMULARIO */

document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const form = event.currentTarget;

    const error =
      document.getElementById("registrationError");

    if (!form.reportValidity()) {
      return;
    }

    if (!document.getElementById("consent").checked) {

      error.textContent =
        "Debes confirmar que deseas continuar.";

      return;

    }

    error.textContent = "";

    document.getElementById("demoNote").textContent =
      "Formulario validado correctamente. No se envió ni guardó información porque aún no está conectado a un servicio de recepción.";

    const submitButton =
      form.querySelector("button[type='submit']");

    submitButton.textContent =
      "FORMULARIO VALIDADO ✓";

    submitButton.disabled = true;

  });


/* INICIAR PÁGINA */

renderStep();
