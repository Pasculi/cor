// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

function enableValidation(params) {
    console.log(params);
}

enableValidation({
    formSelector: ".section__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".button__submit",
    inactiveButtonClass: "button_inactive",
    inputErrorClass: "formulario__input-error",
    errorClass: "formulario__input-error-visible",
    closeButtonClass: ".button__cerrar",
    modalShowClass: "grupo__formulario-show"
});



/* ABRE EL MODAL CORRESPONDIENTE DESDE EL MENU NAV */

    const elementNavBar = Array.from(document.querySelectorAll(".nav"));
    elementNavBar.forEach((navElement) => {
      navElement.addEventListener("click", (evt) => {
        const modalElement = document.querySelector(`.section__${evt.target.id}`);
          modalElement.classList.add('grupo__formulario-show');
      });
    });


/* FUNCIONALIDAD DE CERRAR MODAL */

const elementClose = Array.from(document.querySelectorAll(".button__cerrar"));
    elementClose.forEach((closeElement) => {
        closeElement.addEventListener("click", (evt) => {
            const modalElement = document.querySelector(`.section__${evt.target.id}`);
            modalElement.classList.remove('grupo__formulario-show');
        })
    })
    

/* CAPTURA LOS QUE SE ESCRIBE EN LOS INPUTS */
    const listInputs = Array.from(document.querySelectorAll('.form__input'));
    console.log(listInputs)
    listInputs.forEach((listInput) => {
        listInput.addEventListener('input', (evt) => {
            console.log(evt.target.value);
        })
    })


