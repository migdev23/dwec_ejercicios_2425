function Alumno(nombre, fechaNac, dni, notaT1, notaT2, notaT3){
    
    this._nombre = nombre;
    
    this._dni = dni;
    
    this._notaT1 = 0;
    
    this._notaT2 = 0;
    
    this._notaT3 = 0;

    this.calcularNota = () => {
        return ((this.notaT1 + this.notaT2 + this.notaT3)/3);
    }

    this.cambiarNotas = (notaT1, notaT2, notaT3) => {
        this._notaT1 = notaT1;
        this.notaT2 = notaT2;
        this.notaT3 = notaT3;
        return this.calcularNota();
    }
    

    this._notaFinal = this.cambiarNotas();

    this.calcularEdad = (fechaNac) => {
        /*Calcular */
        return fechaNac;
    }
    
    this._edad = this.calcularEdad(fechaNac);

    this.mostrarInformacion = () => {
        return '';
    }

    this.comparar = () => {
        return '';
    }

    this.estaAprobado = () => {
        return '';
    }

    Object.defineProperty(this, 'edad', {
        get : ()=>{return this._edad},
        set : (value)=>{this._edad = value}
    })

    Object.defineProperty(this, 'nombre', {
        get : ()=>{return this._nombre},
        set : (value)=>{this._nombre = value}
    })

}
