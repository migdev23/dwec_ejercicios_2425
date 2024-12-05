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
        return `${this.#titulo} - ${this.#autor} - ${this.#precio}`;
    }

    cambiarPrecioLibro(precio){
        if(!Utils.validarPrecio(precio)) throw new Error("Error al validar el precio");
        this.#precio = precio
    }

    get titulo(){
        return this.#titulo
    }
    
    set titulo(titulo){
        if(!Utils.validarTitulo(titulo)) throw new Error("Error al validar el nombre");
        this.#titulo = titulo
    }

    get autor(){
        return this.#autor
    }

    set autor(autor){
        if(!Utils.validarAutor(autor)) throw new Error("Error al validar el autor");
        this.#autor = autor
    }

    get precio(){
        return this.#precio;
    }

    set precio(precio){
        if(!Utils.validarPrecio(precio)) throw new Error("Error al validar el precio");
        this.#precio = precio
    }

}