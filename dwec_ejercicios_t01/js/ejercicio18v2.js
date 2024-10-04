let inputFecha = document.querySelector("input");

let buttonComprobar = document.querySelector("button");

const contieneFormatoFecha = (cadena) => {

  let arrayDiaMesAnio = [];

  if (cadena.split("/").length == 3) arrayDiaMesAnio = cadena.split("/");
  else if (cadena.split("-").length == 3) arrayDiaMesAnio = cadena.split("-");
  else if (cadena.split(" ").length == 3) arrayDiaMesAnio = cadena.split(" ");
  else return {comprobacionFomatoFecha:false, arrayDiaMesAnio};

  const [dia, mes, anio] = arrayDiaMesAnio

  if (!Number.isInteger(Number(mes))) return {comprobacionFomatoFecha:false, arrayDiaMesAnio};

  if (!Number.isInteger(Number(dia))) return {comprobacionFomatoFecha:false, arrayDiaMesAnio};

  if (!Number.isInteger(Number(anio))) return {comprobacionFomatoFecha:false, arrayDiaMesAnio};

  let fecha = new Date(0);
  fecha.setFullYear(anio,(mes-1),dia);

  if(
    (Number(fecha.getFullYear()) !== Number(anio)) ||
    (Number(fecha.getMonth()) !== Number(mes-1)) ||
    (Number(fecha.getDate()) !== Number(dia))
  ) return {comprobacionFomatoFecha:false, arrayDiaMesAnio};

  return {comprobacionFomatoFecha:true, arrayDiaMesAnio};

};

buttonComprobar.addEventListener("click", () => {

  let inputFechaValor = inputFecha.value.trim();
  
  const {comprobacionFomatoFecha, arrayDiaMesAnio} = contieneFormatoFecha(inputFechaValor);

  if(comprobacionFomatoFecha){
    console.log('Formato de fecha correcto');
  
  } else {
  
    console.log('Formato de fecha incorrecto');
  
  };

});
