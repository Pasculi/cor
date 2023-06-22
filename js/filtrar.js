document.addEventListener('DOMContentLoaded', () => {
  mostrarCanales(canales)
  filtrarCanal()
  limpiarHtml()
  noResultado()
});

const [nombre, channel, adsl, fca, mpeg4, criticidad] = canales;

const buscarCanal = document.querySelector(".form__input");
const resultados = document.querySelector(".resultado");

function mostrarCanales(canales) {
  canales.forEach((canal) => {
    resultados.innerHTML += `<div class="card">
                  <p class="card__nombre">${canal.nombre}</p>
                  <img
                    src="/images/logo_gtd_tv.png"
                    alt="Logo Canal"
                    class="card__logo"
                  />
                  <div class="card__info">
                    <p class="card__numero">N°${canal.channel}</p>
                    <p class="card__categoria"><strong>${canal.criticidad}</strong></ </p>
                  </div>
`;
  })

}

function filtrarCanal() {

  buscarCanal.addEventListener('input', evt => {
    limpiarHtml();
    const inputText = evt.target.value.toLowerCase().trim();
    console.log(inputText);
    const mostrarFiltrado = canales.filter(canal => canal.nombre.toLowerCase().includes(inputText) || canal.channel.startsWith(inputText));
    if (mostrarFiltrado.length > 0) {
      mostrarCanales(mostrarFiltrado);
    }
    else if (mostrarFiltrado.length === 0) {
      noResultado();

    }

  });
}

function noResultado() {
  const noResultado = document.createElement('div');
  noResultado.innerHTML = `<h2>No hay resultados para tu búsqueda...</h2>`;
  resultados.appendChild(noResultado);

};
function limpiarHtml() {
  while (resultados.firstChild) {
    resultados.removeChild(resultados.firstChild);
  }
}