let container = document.querySelector(".container");
let titulo = document.querySelector(".titulo");
let number = document.querySelector(".number");
titulo.innerHTML = 'Bienvenido a javascript';

/*Escucha de evento click*/

let button = document.querySelector(".btn.btn-primary");
let suma = 0;
button.addEventListener("click", function (e) {
  suma += 2;
  console.log(suma);
  number.innerHTML = suma;
  console.log(e)
  e.target.innerHTML = "Dark";
  container.style.backgroundColor ="#6b6868"
  container.style.color ="#fff"
});

/* const input=document.getElementById('input');
input.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    titulo.innerHTML += e.target.value +'</br>';
}) */

let form = document.querySelector('#create-course');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let curso = document.querySelector('#input-form').value;
    let description = document.querySelector('#description-form').value;
    
    console.log(curso);
    console.log(description);
    let detalle = document.querySelector('.cursos-details');
    detalle.innerHTML += curso + " " + description + '</br>';
})
/*Borrar*/
let remove = document.querySelector('.btn.btn-danger');
function borrar(){
    let detalle = document.querySelector('.cursos-details');
    detalle.innerHTML = ' ';

}
remove.addEventListener('click', borrar);
/*Evento Change*/

let checkbox = document.querySelector('#checkbox');
checkbox.addEventListener('change', function(e){
    console.log('Cambio el valor');
    let eleccion = e.target.name;
    if(eleccion === 'premium'){
        alert('Elegiste premium')
    }
})