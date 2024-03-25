export const channel = [
  {
    fullName: "Mega",
    shortName: "Mega",
    numero: "26",
    multicast: [
      { adslInput: "239.2.5.109 ", adslOutput: "239.255.2.77 ", encoder: "172.19.14.127" },
      { fcaInput: "231.0.2.31", fcaOutput: "239.255.3.77", encoder: "172.19.14.119" },
      { mpeg4Input: "231.0.2.31", mpeg4Output: "239.255.2.145", encoder: "172.19.14.116" },

    ],
    criticidad: "Severidad: 1",
    bw: "3.5",
    src: "https://brandemia.org/sites/default/files/sites/default/files/logo_mega-despues.jpg",
    proveedor: "Mega Media",
    categoria: "Nacional",
    contacto: [
      {
        contacto: "Joaquin Rafael Phoenix",
        correo: "jphoenix@gmail.com",
        fono: "988773456"
      },
      {
        contacto: "Heath Ledger",
        correo: "hledger@gmail.com",
        fono: "911998877"
      }
    ],
    satelite: "Hispasat 74W-1 V"

  }
]


const logo = document.querySelector('.header__logo')
const popupChannel = document.querySelector('.popup')
const cerrarPopup = document.querySelector('.popup__card__close');

export const PopupInfo = ()=>{
  logo.addEventListener('click', () =>{
    popupChannel.classList.add('popup-show')
  })
  }



cerrarPopup.addEventListener('click', () =>{
  popupChannel.classList.remove('popup-show')
})
