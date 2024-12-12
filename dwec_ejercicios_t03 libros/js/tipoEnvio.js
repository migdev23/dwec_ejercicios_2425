class tipoEnvio {

    #nombre
    
    #precio

    constructor(nombre, precio) {
        if(!Utils.validarCadena(nombre)) throw new Error("Hubo un error al validar el nombre");
        if(!Utils.validarPrecio(precio)) throw new Error("Hubo un error al validar el precio");
        this.#nombre = nombre;
        this.#precio = precio;
    }

    mostrarTipoEnvio(){
        return `Envio: ${nombre}, precio: ${$precio}`
    }
    
    get nombre () {
        return this.#nombre;
    }

    set nombre (valor) {
        if(!Utils.validarCadena(nombre)) throw new Error("Hubo un error al validar el nombre");
        this.#nombre = valor;
    }

    get precio () {
        return this.#precio;
    }

    set precio (valor) {
        if(!Utils.validarPrecio(valor)) throw new Error("Hubo un error al validar el precio");
        this.#precio = valor;
    }

}