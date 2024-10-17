const validaDNIyCIF = (cadena) => {
    
    const patronDNI = /^(\d{8})([A-Z])$/;
    
    const patronCIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
    
    const dniLetrasArr = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
       

    if(patronDNI.test(cadena) && dniLetrasArr.includes(cadena.charAt(cadena.length-1))){
        return true
    }
    else if(patronCIF.test(cadena)) return true
    return false
}

const cadena = prompt('Introduce un CIF o DNI');

alert(
    validaDNIyCIF(cadena)
    ?
    'DNI O CIF CORRECTO'
    :
    'DNI O CIF INCORRECTO'
);
