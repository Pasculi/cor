//Seleccionamos nuestro elemento y le asignamos una variable
let container = document.querySelector(".container");
//Seleccionamos el elemento con la clase .songs-container y se lo asignamos a variable con mismo nombre
let songsContainer = container.querySelector(".songs-container");

//Seleccionamos también el botón con la clase .form__submit-btn_action_add
let addButton = container.querySelector(".form__submit-btn_action_add");
//Seleccionamos también el botón con la clase .form__submit-btn_action_reset
let resetButton = container.querySelector(".form__submit-btn_action_reset");

//Aqui se crea la función para mostrar si estara activo o desactivado el botón Reset. En primer lugar selecciona el elemento que en realidad es un arreglo en primera instancia vacio con la clase .song y el contenedor con la clase .no-songs. La función pregunta si el arreglo esta vacio, si es asi al boton resetButton lo mantenemos desactivado, y de no ser asi se le entregan las clases para que se muestre el botón.-
function renderAdded(){
    let songs = songsContainer.querySelectorAll(".song");
    let noSongsElement = container.querySelector(".no-songs");

    if (songs.length === 0) {
      resetButton.setAttribute("disabled", true);
      resetButton.classList.add("form__submit-btn_disabled");
      noSongsElement.classList.remove("no-songs_hidden");


    } else {
      resetButton.removeAttribute("disabled", false);
      resetButton.classList.remove("form__submit-btn_disabled");
      noSongsElement.classList.add("no-songs_hidden");

    }
}
//Aqui se crea la función para borrar lista de canciónes, en este momento se muestra una plantilla determinada
function addSong() {
  songsContainer.innerHTML += `
    <div class="song">
          <h4 class="song__artist">The Cars</h4>
          <p class="song__title">Drive</p>
          <button class="song__like"></button>
        </div>
    `;
    renderAdded();//Se vuelve a renderizar si hay o no elementos
}
addButton.addEventListener("click", addSong);
renderAdded();

function removeSongs(){
  songsContainer.innerHTML = ``;
  renderAdded();
}
resetButton.addEventListener('click', removeSongs);