const DHCP = [
  {
    id: "01",
    zonal: "Concepción",
    dhcpPrimario: "172.19.23.18",
    dhcpSecundario: "172.19.23.19",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 73000,
  },
  {
    id: "02",
    zonal: "Chillán",
    dhcpPrimario: "172.19.23.21",
    dhcpSecundario: "172.19.23.22",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 24000,
  },
  {
    id: "03",
    zonal: "Temuco",
    dhcpPrimario: "172.19.23.13",
    dhcpSecundario: "172.19.23.14",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 62600,
  },
  {
    id: "04",
    zonal: "Valdivia",
    dhcpPrimario: "172.19.1.18",
    dhcpSecundario: "172.19.1.19",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 56600,
  },
  {
    id: "05",
    zonal: "Osorno",
    dhcpPrimario: "172.19.23.24",
    dhcpSecundario: "172.19.23.25",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 38800,
  },
  {
    id: "06",
    zonal: "Puerto Montt",
    dhcpPrimario: "172.19.23.16",
    dhcpSecundario: "172.19.23.17",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 59500,
  },
  {
    id: "07",
    zonal: "Castro",
    dhcpPrimario: "172.19.23.11",
    dhcpSecundario: "172.19.23.12",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 20800,
  },
  {
    id: "08",
    zonal: "Coyhaique",
    dhcpPrimario: "172.19.23.9",
    dhcpSecundario: "172.19.23.10",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 23300,
  },
  {
    id: "09",
    zonal: "Gnoc_1",
    dhcpPrimario: "192.168.52.5",
    dhcpSecundario: " ",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 377000,
  },
  {
    id: "10",
    zonal: "Gnoc_2",
    dhcpPrimario: "192.168.52.12",
    dhcpSecundario: " ",
    penddingUpdate: 0,
    estado: true,
    licenciasDhcp: 377000,
  },
];

const container = document.querySelector("#tabla_dhcp");
const tabla = document.createElement("table");
tabla.classList.add("dhcps");

container.appendChild(tabla);
tabla.innerHTML = `
<tr>
<th>Zonal</th>
<th>DHCP Primario</th>
<th>Pending Updates</th>
<th>Estado</th>
<th>Licencias DHCP</th>
<th>Licencias usadas</th>
<th>Porcentaje de Uso</th>
</tr>

`;

const tablaDhcp = DHCP.map((data) => {
  let row = document.createElement("tr");
  tabla.appendChild(row);
  let celda1 = document.createElement("td");
  let celda2 = document.createElement("td");
  //--------------------------Creamos el enlace-------------------------------------
  let a = document.createElement("a");
  a.href = `http://${data.dhcpPrimario}:8080/jimc/`;
  a.setAttribute("target", "_blank");
  a.classList.add("enlace");
  let atexto = document.createTextNode(data.dhcpPrimario);
  a.appendChild(atexto);
  celda2.appendChild(a);
  //-----------------------------Fin de enlace----------------------------------------
  let celda3 = document.createElement("td");
  let inputEstado = document.createElement("input");

  inputEstado.setAttribute("id", data.id);
  inputEstado.classList.add("pendding");
  celda3.appendChild(inputEstado);
  celda3.addEventListener("input", valorInputEstado);

  let celda4 = document.createElement("td");
  celda4.classList.add("status");

  //Validar corerectamente el if la entrada de datos

  function valorInputEstado(e) {
    let inputValue = e.target.value;
    if (inputValue < 0 || isNaN(inputValue)) {
      celda4.innerHTML = "Ingrese solo numeros mayor 0 igual a 0";
      celda4.style.color = "red";
    } else if (inputValue == 0) {
      celda4.innerHTML = "Ok";
      celda4.style.color = "black";
    } else {
      celda4.innerHTML = "Se realiza flush";
      celda4.style.color = "black";
    }
  }

  let celda5 = document.createElement("td");

  let celda6 = document.createElement("td");
  let inputLicencias = document.createElement("input");

  inputLicencias.classList.add("licenciasDhcp");
  inputLicencias.classList.add("pendding");
  celda6.appendChild(inputLicencias);
  celda6.addEventListener("input", valorInputLicencias);

  function valorInputLicencias(e) {
    let dato = parseInt(e.target.value);
    console.log(dato);
    let result = (dato * 100) / data.licenciasDhcp;
    celda7.innerHTML = `${result.toPrecision(3)}%`;
    if (isNaN(result)) {
      celda7.innerHTML = "Ingrese un valor numérico";
      celda7.style.color = "red";
    } else {
      celda7.style.color = "black";
    }
    /* console.log(result); */
  }

  let celda7 = document.createElement("td");

  let licenciasDhcp = (document.getElementsByClassName(
    "licenciasDhcp"
  ).innerHTML = "");
  let info = (document.getElementsByClassName("status").innerHTML = "");

  /* console.log(info) */

  let col1 = document.createTextNode(data.zonal);
  let col2 = a;
  let col3 = document.createTextNode(data.penddingUpdate);
  let col4 = document.createTextNode(info);
  let col5 = document.createTextNode(data.licenciasDhcp);
  let col6 = document.createTextNode(0);
  let col7 = document.createTextNode(licenciasDhcp);
  /* console.log(celda4) */
  row.append(celda1, celda2, celda3, celda4, celda5, celda6, celda7);
  celda1.appendChild(col1);
  celda2.appendChild(col2);
  inputEstado.appendChild(col3);
  celda4.appendChild(col4);
  celda5.appendChild(col5);
  inputLicencias.appendChild(col6);
  celda7.appendChild(col7);
});

tabla.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});