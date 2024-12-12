class pedido {

    #librosPedido
    
    #tipoEnvioPedido

    #precioTotalSinEnvio

    #precioTotalConEnvio

    #descuento

    constructor() {
        this.#librosPedido = [];
        this.#tipoEnvioPedido = null;
        this.#precioTotalSinEnvio = 0;
        this.#precioTotalConEnvio = 0;
        this.#descuento = 0;
    }

    hayLibros(){
        return this.#librosPedido.length > 0;
    }

    mostrarDatosPedido(){
        let cadenaDatosLibro = `Numero de libros:${this.#librosPedido.length}, Tipo envio:${this.#tipoEnvioPedido?.mostrarTipoEnvio()}, Precio Total:${this.#precioTotalConEnvio}, Precio Total sin Envio:${this.#precioTotalSinEnvio}, Precio Total descuento:${this.#descuento}`;
        cadenaDatosLibro += '################## Informacion libros ####################';
        this.#librosPedido.forEach((libro, index) => cadenaDatosLibro += ` ${index}: ${libro.mostrarDatosLibro()}`);
        return cadenaDatosLibro;
    }

    anadirLibro(libro){
        if(libro instanceof LibroPapel)
            return libro.stock > 0;
        else if (libro instanceof Ebook)
            return true;
    }

    establecerTipoEnvio(tipoEnvio){
        if(tipoEnvio instanceof tipoEnvio)
            this.#tipoEnvioPedido = tipoEnvio;
    }

    calcularTotal(){
        for (const libro in this.#librosPedido)
            if (libro instanceof LibroPapel) return this.#tipoEnvioPedido.precio; 
        
        return 0;
    }

    aplicarDescuento(porcentaje){

    }

}