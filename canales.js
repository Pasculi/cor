let lista = document.querySelector('.lista-senales');
let titulo = document.createElement('h1');
let textoTitulo = document.createTextNode ('Bienvenido a Javascript');
titulo.appendChild(textoTitulo);
lista.appendChild(titulo);
let lista2 = lista.cloneNode(true);
lista2.style = 'background-color:red';
lista.insertAdjacentElement('afterbegin', lista2)