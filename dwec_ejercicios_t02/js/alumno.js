function Alumno(nombre, fechaNac, dni, notaT1, notaT2, notaT3, sexo){
        
    this._nombre = nombre;
    
    this._dni = dni;

    this._edad = 0;
    
    this._notaT1 = parseFloat(notaT1);
    
    this._notaT2 = parseFloat(notaT2);
    
    this._notaT3 = parseFloat(notaT3); 
    
    this._notaFinal = 0;

    this._sexo = sexo;

    this._fechaNac = fechaNac; 

    this._grupo = null;

    this.calcularNota = () => {
        this._notaFinal = (this._notaT1 + this._notaT2 + this._notaT3)/3;
    }

    this.cambiarNotas = (notaT1, notaT2, notaT3) => {
        this._notaT1 = parseFloat(notaT1.toFixed(2));
        this._notaT2 = parseFloat(notaT2.toFixed(2));
        this._notaT3 = parseFloat(notaT3.toFixed(2));
        this.calcularNota();
    }

    this.calcularEdad = () => {
        const [anio, mes, dia] = this._fechaNac.split('-');
        const anioActual = new Date().getFullYear();
        this._edad = (anioActual - anio);
    }

    this.mostrarInformacion = () => {
        return `
            Nombre: ${this._nombre} 
            Dni: ${this._dni} 
            Nota Trimestre 1: ${this._notaT1}
            Nota Trimestre 2: ${this._notaT2}
            Nota Trimestre 3: ${this._notaT3}
            Nota Final: ${this._notaFinal}
            Edad: ${this._edad}
            Sexo: ${this._sexo}
            Fecha Nacimiento: ${this._fechaNac}
        `
    }

    this.comparar = (alumno) => {
        if(alumno.notaFinal > this._notaFinal){
            return -1
        }else if (alumno.notaFinal < this._notaFinal){
            return 1
        }else{
            return 0
        }
    }

    this.estaAprobado = () => {
        if(this._notaFinal >= 5){
            return true
        }else{
            return false
        }
    }
    
    this.calcularEdad();
    this.calcularNota();

    Object.defineProperty(this, 'nombre', {
        get : ()=>{return this._nombre},
        set : (value)=>{this._nombre = value}
    });

    Object.defineProperty(this, 'grupo', {
        get : ()=>{return this._grupo},
        set : (value)=>{this._grupo = value}
    });


    Object.defineProperty(this, 'dni', {
        get : ()=>{return this._dni},
        set : (value)=>{this._dni = value}
    });

    Object.defineProperty(this, 'edad', {
        get : ()=>{return this._edad},
        set : (value)=>{this._edad = value}
    });
    
    Object.defineProperty(this, 'notaT1', {
        get : ()=>{return this._notaT1},
        set : (value)=>{this._notaT1 = value}
    });

    Object.defineProperty(this, 'notaT2', {
        get : ()=>{return this._notaT2},
        set : (value)=>{this._notaT2 = value}
    });

    Object.defineProperty(this, 'notaT3', {
        get : ()=>{return this._notaT3},
        set : (value)=>{this._notaT3 = value}
    });
    
    Object.defineProperty(this, 'notaFinal', {
        get : ()=>{return this._notaFinal},
        set : (value)=>{this._notaFinal = value}
    });
    
    Object.defineProperty(this, 'sexo', {
        get : ()=>{return this._sexo},
        set : (value)=>{this._sexo = value}
    });
    
    Object.defineProperty(this, 'fechaNac', {
        get : ()=>{return this._fechaNac},
        set : (value)=>{this._fechaNac = value}
    });

}
