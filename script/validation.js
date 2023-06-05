
/* ABRE EL MODAL CORRESPONDIENTE DESDE EL MENU NAV */
const elementNavBar = Array.from(document.querySelectorAll(".nav"));

elementNavBar.forEach((navElement) => {
  navElement.addEventListener("click", (evt) => {
    const modalElement = document.querySelector(`.section__${evt.target.id}`);
    console.log(modalElement);
    modalElement.classList.add('grupo__formulario-show');
  });
});

/* FUNCIONALIDAD DE CERRAR MODAL */
const elementClose = Array.from(document.querySelectorAll('.button__cerrar'));
elementClose.forEach((closeElement)=>{
    closeElement.addEventListener("click", (evt) => {
        console.log(evt.target.id)
    })
})

console.log(elementClose);