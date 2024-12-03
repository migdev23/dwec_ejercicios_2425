class Libro {

    #titulo

    #autor

    #precio

    constructor(titulo, autor, precio) {
        
        if(!Utils.validarTitulo(titulo)) throw new Error("Error al validar el nombre");
        
        if(!Utils.validarAutor(autor))   throw new Error("Error al validar el autor");
        
        if(!Utils.validarPrecio(precio)) throw new Error("Error al validar el precio");

        this.#titulo = titulo;

        this.#autor = autor;

        this.#precio = precio;
    
    }

    mostrarDatosLibro(){

    }

    cambiarPrecioLibro(){

    }

}