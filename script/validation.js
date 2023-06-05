const perfil = document.querySelector('.nav__perfil');
const botonCerrar = document.querySelector('.button__cerrar')



function showModal() {
    const modalLists = Array.from(document.querySelectorAll('.section__form'));
    console.log(modalLists)
    modalLists.forEach((modalList) => {
        modalList.classList.add('grupo__formulario-show');
        console.log(modalList)
    })
}


function closeModal() {
    const modalLists = Array.from(document.querySelectorAll('.section__form'));
    modalLists.forEach((modalList) => {
        modalList.classList.remove('grupo__formulario-show');
        console.log(modalList)
    })
}
closeModal()

function setEventListeners() {
    const inputLists = Array.from(document.querySelectorAll('.form__input'));
    inputLists.forEach((inputList) => {
        inputList.addEventListener('input',(evt) => {
            console.log(evt.target.value)
        })
    })

}

setEventListeners()
perfil.addEventListener('click', showModal)

botonCerrar.addEventListener('click', closeModal)