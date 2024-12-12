class Ebook extends Libro {
    #tamanoArchivo
    
    #formato

    constructor(titulo, autor, precio, tamanoArchivo, formato) {
        if(!Utils.validarTamanoArchivo(tamanoArchivo)) throw new Error("Error en el tamaño del archivo");
        if(!Utils.validarFormato(formato)) throw new Error("Error al validar el formato");
        super(titulo, autor, precio);
        this.#tamanoArchivo = tamanoArchivo;
        this.#formato = formato;
    }

    descargar(){
        return `Descargando ${this.titulo}`;
    }

    convertirFormato(formato){
        if(!Utils.validarFormato(formato)) throw new Error("Error al validar el formato");
        this.#formato = formato;
    }
    
    mostrarDatosLibro() {
        return `${this.mostrarDatosLibro()} - ${this.#tamanoArchivo} - ${this.#formato}`;       
    }

    
    comprobarDisponibilidad(){
        return true;
    }

    get tamanoArchivo (){
        return this.#tamanoArchivo;
    }

    set tamanoArchivo (valor){
        if(!Utils.validarTamanoArchivo(valor)) throw new Error("Error en el tamaño del archivo");
        this.#tamanoArchivo = valor;
    }


    get formato (){
        return this.#formato;
    }

    set formato (valor){
        if(!Utils.validarFormato(valor)) throw new Error("Error al validar el formato");
        this.#formato = valor;
    }
}