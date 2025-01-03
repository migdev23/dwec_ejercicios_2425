const validaDNIyCIF = (cadena) => {
    
    const patronDNI = /^(\d{8})([A-Z])$/;
    
    const patronCIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-JXP])$/;

    const dniLetrasArr = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    const lastLetter = cadena.charAt(cadena.length-1).toUpperCase();

    let statusReturn = false;
       

    if(patronDNI.test(cadena) && dniLetrasArr.includes(lastLetter)){
        const numberDni = cadena.split(lastLetter)[0];
        
        const letterDni = lastLetter;
        
        const rest = (numberDni%23) > (dniLetrasArr.length-1) ? null : numberDni%23;
        
        const letterCal = rest == null ? null : dniLetrasArr[rest].toUpperCase();
        
        console.log(letterCal, letterDni);


        (letterCal == letterDni) 
        ? statusReturn = true
        : statusReturn = false;

    }
    else if(patronCIF.test(cadena)){
    
        const cif_no_first_last_caracter = cadena.slice(1, cadena.length-1);
        const sumPair = parseInt(cif_no_first_last_caracter[2-1]) + parseInt(cif_no_first_last_caracter[4-1]) + parseInt(cif_no_first_last_caracter[6-1])
        const evenIndex = [1-1,3-1,5-1,7-1];
        const letrasAJ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        let sumEven = 0;

        evenIndex.forEach((element) => {
            const long = ((cif_no_first_last_caracter[element])*2 + "").length;
            if(long == 2) sumEven += parseInt((parseInt(cif_no_first_last_caracter[element])*2 + "")[0]) + parseInt((parseInt(cif_no_first_last_caracter[element])*2 + "")[1])     
            else if(long == 1) sumEven += (cif_no_first_last_caracter[element])*2;
        });

        const sumFinal = sumEven + sumPair;
        const codeControl = (sumFinal + "").length == 2 ? (10 - parseInt((sumFinal + "")[1])) : (10-parseInt((sumFinal + "")[0]));

        if(isNaN(lastLetter) && lastLetter != 'X' && lastLetter != 'P' && (letrasAJ[codeControl-1] == lastLetter)){
             statusReturn = true;
        }else if(!isNaN(lastLetter) && (parseInt(lastLetter) == codeControl)){
            statusReturn = true;
        }else if((codeControl+64) == 88 || (codeControl+64) == 80){
            statusReturn = true;
        }
        
    }

    return statusReturn
}

const cadena = prompt('Introduce un CIF o DNI');

alert(
    validaDNIyCIF(cadena)
    ?
    'DNI O CIF CORRECTO'
    :
    'DNI O CIF INCORRECTO'
);
