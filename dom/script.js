let container = document.querySelector('.container');
let h2 = document.createElement('h2');
let titulo = document.createTextNode('Bienvenido al DOM');

container.appendChild(h2);
h2.appendChild(titulo);