function Aula(numeroAlumnosAula, identificadorAula, descripcionAula) {

    this._numeroAlumnosAula = numeroAlumnosAula;

    this._identificadorAula = identificadorAula;

    this._descripcionAula = descripcionAula;

    this._arrayAlumnos = [];

    this.validarNota = (nota) => {
        if (isNaN(nota) || nota < 0 || nota > 10) return false;
        return true;
    }

    this.pedirNotaAlumnoPrompt = (trimestre) => {
        let nota = "";
        do
            nota = prompt(`Introduce la nota del Trimestre: ${trimestre}, (0 al 10)`);
        while (!this.validarNota(nota));

        return  Number.parseFloat(nota).toFixed(2);
    }


    this.validarDniAlumno = (cadena) => {
        const patronDNI = /^(\d{8})([A-Z])$/;
        const dniLetrasArr = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        const lastLetter = cadena.charAt(cadena.length - 1).toUpperCase();
        let statusReturn = false;

        if (patronDNI.test(cadena) && dniLetrasArr.includes(lastLetter)) {
            const numberDni = cadena.split(lastLetter)[0];

            const letterDni = lastLetter;

            const rest = (numberDni % 23) > (dniLetrasArr.length - 1) ? null : numberDni % 23;

            const letterCal = rest == null ? null : dniLetrasArr[rest].toUpperCase();

            (letterCal == letterDni)
                ? statusReturn = true
                : statusReturn = false;
        }

        return statusReturn;
    }

    this.pedirDniAlumnoPrompt = () => {
        let dni = "";
        do
            dni = prompt('Dni Alumno con el formato "00000000L"').trim();
        while (!this.validarDniAlumno(dni));

        return dni;
    }

    this.validarNombreAlumno = (nombre) => {
        return (isNaN(nombre) && nombre != null && nombre != undefined && nombre.trim().length > 0) ? true : false;
    }

    this.pedirNombrePrompt = () => {
        let nombre = "";
        do
            nombre = prompt('Introduce el nombre del alumno:');
        while (!this.validarNombreAlumno(nombre));
        return nombre;
    }


    this.validarSexoAlumno = (sexo) => {
        if (sexo.toUpperCase() == 'O' || sexo.toUpperCase() == 'H' || sexo.toUpperCase() == 'M') 
            return true;
        else 
            return false;
    }


    this.pedirSexoPrompt = () => {
        let sexo = "";
        do
            sexo = prompt('Introduce el sexo del alumno (h,m,o): ');
        while (!this.validarSexoAlumno(sexo));
        return sexo.toUpperCase();
    }


    this.validarFecha = (fecha) => {
        const fechaObject = new Date(fecha);
        console.log()
        if((fechaObject.getFullYear() == fecha.split('-')[0]) 
            && ((fechaObject.getMonth()+1) == fecha.split('-')[1]) 
            && (fechaObject.getDate() == fecha.split('-')[2])){
                return true;
            }

            return false;
    }

    this.pedirFechaPrompt = () => {
        let fecha = "";
        do {
            fecha = prompt('Introduce la fecha YYYY-MM-DD');
        } while (!this.validarFecha(fecha));
        return fecha;
    }

    this.pedirDatosUnAlumno = () => {

        //TODO: HACER VALIDACIONES Y BUCLE

        const nombre = this.pedirNombrePrompt();
        const dni = this.pedirDniAlumnoPrompt();
        const fechaNac = this.pedirFechaPrompt();
        const notaT1 = this.pedirNotaAlumnoPrompt(1);
        const notaT2 = this.pedirNotaAlumnoPrompt(2);
        const notaT3 = this.pedirNotaAlumnoPrompt(3);
        const sexo = this.pedirSexoPrompt();

        return new Alumno(nombre, fechaNac, dni, notaT1, notaT2, notaT3, sexo);
    };

    this.pedirDatos = () => {
        for (let index = 1; index <= this._numeroAlumnosAula; index++)
            this._arrayAlumnos.push(this.pedirDatosUnAlumno());
    };

    this.mostrarDatos = () => {
        let text = "";
        for (let index = 0; index < this._numeroAlumnosAula; index++)
            text += this._arrayAlumnos[index].mostrarInformacion() + '\n';
        return text;
    }

    this.mediasNotas = () => {
        let media = 0;
        for (let index = 1; index <= this._numeroAlumnosAula; index++)
            media += this._arrayAlumnos[index].notaFinal;

        return media/this._numeroAlumnosAula;
    };


    Object.defineProperty(this, 'numeroAlumnosAula', {
        get: () => { return this._numeroAlumnosAula },
        set: (value) => { this._numeroAlumnosAula = value }
    });

    Object.defineProperty(this, 'identificadorAula', {
        get: () => { return this._identificadorAula },
        set: (value) => { this._identificadorAula = value }
    });


    Object.defineProperty(this, 'descripcionAula', {
        get: () => { return this._descripcionAula },
        set: (value) => { this._descripcionAula = value }
    });

}