const perfil = document.querySelector('.nav__perfil');
const botonCerrar = document.querySelector('.button__cerrar')

perfil.addEventListener('click', () =>{
    const modalPerfil = document.querySelector('.grupo__formulario-perfil');
    modalPerfil.classList.add('grupo__formulario-show');
})

botonCerrar.addEventListener('click', () =>{
    const modalPerfil = document.querySelector('.grupo__formulario-perfil');
    modalPerfil.classList.remove('grupo__formulario-show')
})