let inputFecha = document.querySelector("input");

let buttonComprobar = document.querySelector("button");

const comprobarMesValido = (numeroMes) => {
  if (!Number.isInteger(Number(numeroMes)) || numeroMes < 1 || numeroMes > 12)
    return false;
  return true;
};

const comprobarDiaValido = (numeroDia, mes) => {
  if (!comprobarMesValido(mes)) return false;

  const arrayMeses = [
    {
      mes: "Enero",
      numeroMes: 1,
      cantidadDias: [31],
    },
    {
      mes: "Febrero",
      numeroMes: 2,
      cantidadDias: [29],
    },
    {
      mes: "Marzo",
      numeroMes: 3,
      cantidadDias: [31],
    },
    {
      mes: "Abril",
      numeroMes: 4,
      cantidadDias: [30],
    },
    {
      mes: "Mayo",
      numeroMes: 5,
      cantidadDias: [31],
    },
    {
      mes: "Junio",
      numeroMes: 6,
      cantidadDias: [30],
    },
    {
      mes: "Julio",
      numeroMes: 7,
      cantidadDias: [31],
    },
    {
      mes: "Agosto",
      numeroMes: 8,
      cantidadDias: [31],
    },
    {
      mes: "Septiembre",
      numeroMes: 9,
      cantidadDias: [30],
    },
    {
      mes: "Octubre",
      numeroMes: 10,
      cantidadDias: [31],
    },
    {
      mes: "Noviembre",
      numeroMes: 11,
      cantidadDias: [30],
    },
    {
      mes: "Diciembre",
      numeroMes: 12,
      cantidadDias: [31],
    },
  ];

  const cantidadDiasMes = arrayMeses.filter(
    (mesArr) => mesArr.numeroMes == Number(mes)
  )[0].cantidadDias[0];

  if (
    !Number.isInteger(Number(numeroDia)) ||
    (Number(numeroDia)) < 1 ||
    (Number(numeroDia)) > cantidadDiasMes
  )
    return false;

  return true;
};

const comprobarAnioValido = (anio) => {
  if (!Number.isInteger(Number(anio)) || anio < 0) return false;
  return true;
};

const comprobarDiaMesAnioFecha = (arrDiasMesAnio) => {
  const [dia, mes, anio] = arrDiasMesAnio;

  if (
    !comprobarMesValido(mes) ||
    !comprobarDiaValido(dia, mes) ||
    !comprobarAnioValido(anio)
  ) return false;

  return true;
};

const contieneFormatoFecha = (cadena) => {

  let arrayDiaMesAnio = [];

  if (cadena.split("/").length == 3) arrayDiaMesAnio = cadena.split("/");
  else if (cadena.split("-").length == 3) arrayDiaMesAnio = cadena.split("-");
  else if (cadena.split(" ").length == 3) arrayDiaMesAnio = cadena.split(" ");
  else return {comprobacionFomatoFecha:false, arrayDiaMesAnio}

  return {comprobacionFomatoFecha:comprobarDiaMesAnioFecha(arrayDiaMesAnio), arrayDiaMesAnio}

};

buttonComprobar.addEventListener("click", () => {
  let inputFechaValor = inputFecha.value.trim();
  const {comprobacionFomatoFecha, arrayDiaMesAnio} = contieneFormatoFecha(inputFechaValor);

  if(comprobacionFomatoFecha){
    const [dia, mes, anio] = arrayDiaMesAnio;
    let fecha = new Date(0);
    fecha.setFullYear(anio,(mes-1),dia);
    console.log('Formato de fecha correcto');
  } else console.log('Formato de fecha incorrecto');

});
