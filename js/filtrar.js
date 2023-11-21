document.addEventListener('DOMContentLoaded', () => {
  /* mostrarCanales(canales); */
  filtrarCanal()
  limpiarHtml()
  noResultado()
});

const [nombre, channel, adsl, fca, mpeg4, criticidad] = canales;

const buscarCanal = document.querySelector(".form__input");
const resultados = document.querySelector(".resultado");


function mostrarCanales(canales) {
  resultados.innerHTML = 'N° - Nombre - Multicast - Severidad'
  canales.forEach((canal) => {
    resultados.innerHTML += `<p>N°${canal.channel}.- ${canal.nombre} (<strong>ADSL:</strong> ${canal.adsl} - <strong>FCA:</strong> ${canal.fca} - <strong>MPEG4:</strong> ${canal.mpeg4}) - <strong>${canal.criticidad}</strong></p>`;
  })
}

function filtrarCanal() {

  buscarCanal.addEventListener('input', evt => {
    const inputText = evt.target.value.toLowerCase().trim();

    if (inputText !== '') {
      const mostrarFiltrado = canales.filter(canal => canal.nombre.toLowerCase().includes(inputText) || canal.channel.startsWith(inputText));
      limpiarHtml();
      mostrarCanales(mostrarFiltrado);
    } else if (inputText === '') {
      resultados.innerHTML = `<h2>Ingrese una búsqueda...</h2>`;
    }

  });
}

function noResultado() {
  const noResultado = document.createElement('div');
  noResultado.innerHTML = `<h2>Ingrese una búsqueda válida...</h2>`;
  resultados.appendChild(noResultado);

};

function mostrarCanales(canales) {

  if (canales.length !== 0) {
    canales.map((canal) => {
      resultados.innerHTML += `
      <div class="card">
      <p class="card__nombre">${canal.nombre.toUpperCase()}</p>
      <img
      src="${canal.src}"
      alt=${canal.nombre}
      class="card__logo"
      />
      <div class="card__info">
      <p class="card__numero">${canal.channel}</p>
      <p class="card__categoria">${canal.criticidad}</p>
      </div>
      `;


    })

  } else {
    resultados.innerHTML = `<h2 class="error">No hay resultados para tu búsqueda...</h2>`;
  }
}

function limpiarHtml() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}

const resultado = document.querySelector('.resultado')
console.log("🚀 ~ file: filtrar.js:77 ~ card:", resultado)

resultado.addEventListener("click", (evt)=>{
  console.log(evt.target.parentElement)
})