document.addEventListener('DOMContentLoaded', () => {
  /* mostrarCanales(canales); */
  filtrarCanal()
  limpiarHtml()
  noResultado()
});

const [nombre, channel, adsl, fca, mpeg4, criticidad] = canales;

const buscarCanal = document.querySelector(".form__input");
const resultados = document.querySelector(".resultado");


<<<<<<< HEAD
function mostrarCanales(canales) {
  resultados.innerHTML = 'N° - Nombre - Multicast - Severidad'
  canales.forEach((canal) => {
    resultados.innerHTML += `<p>N°${canal.channel}.- ${canal.nombre} (<strong>ADSL:</strong> ${canal.adsl} - <strong>FCA:</strong> ${canal.fca} - <strong>MPEG4:</strong> ${canal.mpeg4}) - <strong>${canal.criticidad}</strong></p>`;
  })
}

=======
>>>>>>> 8536f22294eaa1273bde9233df9702701fb08fef
function filtrarCanal() {

  buscarCanal.addEventListener('input', evt => {
    const inputText = evt.target.value.toLowerCase().trim();

    if (inputText !== '') {
      console.log(inputText);
      const mostrarFiltrado = canales.filter(canal => canal.nombre.toLowerCase().includes(inputText) || canal.channel.startsWith(inputText));
      console.log(mostrarFiltrado)
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
        <p class="card__nombre">${canal.nombre.toLowerCase()}</p>
                      <img
                        src="images/logo_gtd_tv.png"
                        alt="Logo Canal"
                        class="card__logo"
                      />
                      <div class="card__info">
                        <p class="card__numero">N°${canal.channel}</p>
                        <p class="card__categoria"><strong>${canal.criticidad}</strong></ </p>
                      </div>
    `;
  
    })
    
  } else {
    resultados.innerHTML = `<h2>No hay resultados para tu búsqueda...</h2>`;
  }

}

function limpiarHtml() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}