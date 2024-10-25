const patronDetectarPalabras =   /(\w+|\w+([\s+]|[\t+]))/g;
// \S tambien vale como patron
const cadena = prompt('Introduce palabras');
let longitudCadena = 0;
if(patronDetectarPalabras.test(cadena)){
    console.log(cadena.match(patronDetectarPalabras))
    longitudCadena = cadena.match(patronDetectarPalabras).length
    alert(`Tu cadena tiene: ${longitudCadena}`)
}else{
    alert('Tu cadena no tiene palabras')
}