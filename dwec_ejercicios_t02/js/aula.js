function Aula(numeroAlumnosAula, identificadorAula, descripcionAula) {
    
    this._numeroAlumnosAula = numeroAlumnosAula;
    
    this._identificadorAula = identificadorAula;
    
    this._descripcionAula = descripcionAula;
    
    this._arrayAlumnos = [];

    this.validarNota = (nota) => {
        if(isNaN(nota) || nota < 0 || nota > 10) return false;
        return true;
    }

    this.pedirNotaPrompt = (trimestre) => {
        let nota = "";
        do 
            nota = prompt(`Introduce la nota del Trimestre: ${trimestre}, (0 al 10)`);
        while (!this.validarNota(nota));
    }

    this.pedirDatosUnAlumno = () => {       
        
        //TODO: HACER VALIDACIONES Y BUCLE
        
        const nombre = prompt('Introduce el nombre del alumno:');
        const dni = prompt('Introduce el dni del alumno');
        const fechaNac = prompt('Introduce la fecha de nacimiento:');
        const notaT1 = this.pedirNotaPrompt(1);
        const notaT2 = this.pedirNotaPrompt(2);
        const notaT3 = this.pedirNotaPrompt(3);
        const sexo = prompt('Introduce el sexo del alumno (h,m,o): ');

        return new Alumno(nombre, fechaNac, dni, notaT1, notaT2, notaT3, sexo);

    };

    this.pedirDatos = () => {
        for (let index = 1; index <= this._arrayAlumnos; index++) 
            this._arrayAlumnos.push(this.pedirDatosUnAlumno());
    };

    Object.defineProperty(this, 'numeroAlumnosAula', {
        get : ()=>{return this._numeroAlumnosAula},
        set : (value)=>{this._numeroAlumnosAula = value}
    });

    Object.defineProperty(this, 'identificadorAula', {
        get : ()=>{return this._identificadorAula},
        set : (value)=>{this._identificadorAula = value}
    });


    Object.defineProperty(this, 'descripcionAula', {
        get : ()=>{return this._descripcionAula},
        set : (value)=>{this._descripcionAula = value}
    });

}