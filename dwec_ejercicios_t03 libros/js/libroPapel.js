class LibroPapel extends Libro {

    #peso

    #dimensiones

    #stock

    constructor(titulo, autor, precio, peso, dimensiones, stock) {
        if(!Utils.validarPeso(peso)) throw new Error("Error al validar el peso");
        if(!Utils.validarDimensiones(dimensiones)) throw new Error("Error al validar las dimensiones");
        if(!Utils.validarStock(stock)) throw new Error("Error al validar el stock");
        super(titulo, autor, precio);
        this.#peso = peso;
        this.#dimensiones = dimensiones;
        this.#stock = stock;
    }
    
    embalar(){
        return `Embalando libro ${this.titulo}`
    }

    reducirStock(){
        if(this.#stock > 0) this.#stock -= 1;
    }

    amplicarStock(stock){
        if(!Utils.validarStock(stock)) throw new Error("Error al validar el stock");
        this.#stock = stock;
    }

    mostrarDatosLibro() {
        return `${this.mostrarDatosLibro()} - ${this.#peso} - ${this.#dimensiones}`;       
    }

    comprobarDisponibilidad(){
        return (this.#stock > 0);
    }

    get peso (){
        return this.#peso;
    }

    set peso (valor){
        if(!Utils.validarPeso(valor)) throw new Error("Error al validar el peso");
        this.#peso = valor;
    }

    get stock (){
        return this.#stock;
    }

    set stock (valor){
        if(!Utils.validarPeso(valor)) throw new Error("Error al validar el peso");
        this.#stock = valor;
    }

    get dimensiones (){
        return this.#dimensiones;
    }

    set dimensiones (valor){
        if(!Utils.validarDimensiones(valor)) throw new Error("Error al validar las dimensiones");
        this.#dimensiones = valor;
    }

}