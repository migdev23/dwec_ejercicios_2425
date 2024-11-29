class Utils {    
    static validarCadena = (cadena) => 
        (typeof(cadena) == "string" && cadena.length > 1) ? true : false;

    static validarElementoEnArray = (cadena, array) => 
        (array.includes(cadena)) ? true : false;

    static validarNumeroPositivo = (numero) => 
        (!isNaN(cadena) && numero >= 0) ? true : false;
    
    static validarTitulo = (titulo) => this.validarCadena(titulo);
    
    static validarAutor = (autor) => this.validarCadena(autor);
    
    static validarPrecio = (precio) => this.validarNumeroPositivo(precio);
    
    static validarTamanoArchivo = (tamano) => this.validarNumeroPositivo(tamano);
    
    static validarFormato = (formato) => this.validarElementoEnArray(formato.toLowerCase(), ['pdf','epub','mobi']);
    
    static validarPeso = (peso) => this.validarNumeroPositivo(peso);
    
    static validarDimensiones = (dimensiones) => {
        const partesDimensiones = dimensiones.toLowerCase().split('x').length == 3 ? dimensiones.toLowerCase().split('x') : null;
        
        if(partesDimensiones == null) return false;

        let errors = false;

        for (const element in partesDimensiones) {
            if(!this.validarNumeroPositivo(element)){
                errors = true;
                break;
            }
        }

        return errors;
    }

    static validarNombreEnvio = (nombreEnvio) => this.validarCadena(nombreEnvio);

    static validarStock = (stock) => this.validarNumeroPositivo(stock);
}