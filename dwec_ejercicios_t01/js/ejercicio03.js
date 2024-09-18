const pedirNumero = () => {
  let numeroPedido = parseInt(
    prompt("Dime un numero, para indicarte su factorial")
  );
  while (numeroPedido < 0) {
    numeroPedido = parseInt(
      prompt("Dime un numero, que sea mayor que cero para el factorial")
    );
  }
  return numeroPedido;
};

const sacarFactorial = (numero) => {
    let total = 0;
    
    for (let index = numero; index >= 1; index--) {
        console.log(`${index} * ${index-1}`)
        total += (index*(index-1))
    }

    return total
}

let numeroUsuarioRecibido = pedirNumero();

if (numeroUsuarioRecibido == 0) {
  alert("El factorial de 0 es 1");
} else {
    const factorial = sacarFactorial(numeroUsuarioRecibido)
    console.log(factorial)
}
