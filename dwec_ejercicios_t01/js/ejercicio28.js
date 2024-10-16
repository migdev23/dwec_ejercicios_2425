const inputDateBirth = document.querySelector('input');

const buttonCheckBirthday = document.querySelector('button');

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
  


const checkDaysForBirthDay = (dateBirthDay) => {
    const dateNow = new Date();

    if(dateNow < dateBirthDay)
        alert('No puedes nacer despues de la fecha actual');
    else if(dateNow.getDate() == dateBirthDay.getDate() && dateNow.getMonth() == dateBirthDay.getMonth())
        alert('Es tu cumpleaños');
    else{
        if( dateNow.getMonth() > dateBirthDay.getMonth() || (dateNow.getMonth() == dateBirthDay.getMonth() && dateNow.getDate() > dateBirthDay.getDate())){
            //CUMPLEAÑOS YA PASO ESTE AÑO
            let dateYearMore = new Date(0);
            dateYearMore.setFullYear(dateNow.getFullYear()+1,dateBirthDay.getMonth(),dateBirthDay.getDate());
            const restDates = (dateYearMore - dateNow);

            const daysRestForBirthDay = Math.round((restDates/(1000*60*60*24)));
                                        //(1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días
            alert(`Faltan ${daysRestForBirthDay} dias para tu cumpleaños`);
        }else{
            //CUMPLEAÑOS AUN NO FUE
            let dateNewYearAdjust = new Date(0);
            
            dateNewYearAdjust.setFullYear(dateNow.getFullYear(),dateBirthDay.getMonth(),dateBirthDay.getDate());

            const restDates = (dateNewYearAdjust - dateNow);
            
            const daysRestForBirthDay = Math.round((restDates/(1000*60*60*24)));
            
            alert(daysRestForBirthDay)
        
        }
    };
}


buttonCheckBirthday.addEventListener('click', () => {
    if(inputDateBirth.type == 'text'){
        const checkFormatDate = contieneFormatoFecha(inputDateBirth.value);

        if(checkFormatDate.comprobacionFomatoFecha){
            const [day, month, year] = checkFormatDate.arrayDiaMesAnio;
            checkDaysForBirthDay(new Date(year,month-1,day));
        }
    
    }else if(inputDateBirth.type == 'date'){
        checkDaysForBirthDay(new Date(inputDateBirth.value));
    }
});