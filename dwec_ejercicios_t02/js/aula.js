function Aula(numeroAlumnosAula, identificadorAula, descripcionAula) {
    this._numeroAlumnosAula = numeroAlumnosAula;

    this._identificadorAula = identificadorAula;

    this._descripcionAula = descripcionAula;

    this._arrayAlumnos = [];

    this._grupos = [];

    /*NOTA */

    this.validarNota = (nota) => {
        if (isNaN(nota) || nota < 0 || nota > 10 || nota == "") return false;
        return true;
    };

    this.pedirNotaAlumnoPrompt = (trimestre) => {
        let nota = "";
        do
            nota = prompt(`Introduce la nota del Trimestre: ${trimestre}, (0 al 10)`);
        while (!this.validarNota(nota));

        return Number.parseFloat(nota).toFixed(2);
    };

    /*DNI */
    this.validarDniAlumno = (cadena) => {
        const patronDNI = /^(\d{8})([A-Z])$/;
        const dniLetrasArr = [
            "T",
            "R",
            "W",
            "A",
            "G",
            "M",
            "Y",
            "F",
            "P",
            "D",
            "X",
            "B",
            "N",
            "J",
            "Z",
            "S",
            "Q",
            "V",
            "H",
            "L",
            "C",
            "K",
            "E",
        ];
        const lastLetter = cadena.charAt(cadena.length - 1).toUpperCase();
        let statusReturn = false;

        if (patronDNI.test(cadena) && dniLetrasArr.includes(lastLetter)) {
            const numberDni = cadena.split(lastLetter)[0];

            const letterDni = lastLetter;

            const rest =
                numberDni % 23 > dniLetrasArr.length - 1 ? null : numberDni % 23;

            const letterCal = rest == null ? null : dniLetrasArr[rest].toUpperCase();

            letterCal == letterDni ? (statusReturn = true) : (statusReturn = false);
        }

        return statusReturn;
    };

    this.pedirDniAlumnoPrompt = () => {
        let dni = "";
        do dni = prompt('Dni Alumno con el formato "00000000L"').trim();
        while (!this.validarDniAlumno(dni));

        return dni;
    };

    /*Nombre alumno */

    this.validarNombreAlumno = (nombre) => {
        return isNaN(nombre) &&
            nombre != null &&
            nombre != undefined &&
            nombre.trim().length > 0
            ? true
            : false;
    };

    this.pedirNombrePrompt = () => {
        let nombre = "";
        do nombre = prompt("Introduce el nombre del alumno:");
        while (!this.validarNombreAlumno(nombre));
        return nombre;
    };

    /*Sexo alumno */

    this.validarSexoAlumno = (sexo) => {
        if (
            sexo.toUpperCase() == "O" ||
            sexo.toUpperCase() == "H" ||
            sexo.toUpperCase() == "M"
        )
            return true;
        else return false;
    };

    this.pedirSexoPrompt = () => {
        let sexo = "";
        do sexo = prompt("Introduce el sexo del alumno (h,m,o): ");
        while (!this.validarSexoAlumno(sexo));
        return sexo.toUpperCase();
    };

    /*Fecha nacimiento alumno */

    this.validarFecha = (fecha) => {
        const fechaObject = new Date(fecha);
        console.log();
        if (
            fechaObject.getFullYear() == fecha.split("-")[0] &&
            fechaObject.getMonth() + 1 == fecha.split("-")[1] &&
            fechaObject.getDate() == fecha.split("-")[2]
        ) {
            return true;
        }

        return false;
    };

    this.pedirFechaPrompt = () => {
        let fecha = "";
        do {
            fecha = prompt("Introduce la fecha YYYY-MM-DD");
        } while (!this.validarFecha(fecha));
        return fecha;
    };

    /* Grupos */
    this.validarGrupo = (grupo) => {
        if (grupo.nombre != null && grupo.nombre.trim() != "") {
            const gruposDuplicados =
                this._grupos.filter(
                    (grupoFilter) => grupoFilter.nombre === grupo.nombre
                ).length > 0
                    ? false
                    : true;
            return gruposDuplicados;
        } else {
            return false;
        }
    };

    this.pedirGruposPrompt = () => {
        let nombre = null;

        const grupo = {
            nombre,
            alumnos: [],
        };

        do {
            nombre = prompt(`Introduce el nombre del nuevo grupo correctamente`);
            grupo.nombre = nombre;
        } while (!this.validarGrupo(grupo));

        return grupo;
    };

    this.crearGruposPrompt = () => {
        let cantidadGrupos = 0;

        do {
            cantidadGrupos = parseInt(
                prompt(
                    `Indica la cantidad de grupos que quieres crear para el aula "${this._identificadorAula}" (introduce un numero)`
                )
            );
        } while (isNaN(cantidadGrupos) || cantidadGrupos < 1);

        for (let index = 0; index < parseFloat(cantidadGrupos); index++) {
            let grupo = this.pedirGruposPrompt();
            this._grupos.push(grupo);
            alert(
                `Has añadido correctamente el grupo "${grupo.nombre}" (${index + 1
                }-${cantidadGrupos}) `
            );
        }
    };

    this.mostrarTodosLosAlumnos = () => {
        return this.mostrarDatos();
    };

    this.mostrarResumenDeGrupo = () => {
        let cadenaDevuelta = "";

        let alumnosConGrupo = [];

        this._grupos.forEach(({ nombre, alumnos }) => {
            cadenaDevuelta += `\n ---------------- ${nombre} ------------------ \n`;

            if (alumnos.length != 0) {
                alumnos.forEach((alumno) => {
                    cadenaDevuelta += `* ${alumno.mostrarInformacion()} \n`;

                    alumnosConGrupo.push(alumno);
                });
            } else {
                cadenaDevuelta += `No hay alumnos en ${nombre}`;
            }
        });

        if (alumnosConGrupo.length != this._arrayAlumnos.length) {
            cadenaDevuelta += `\n ---------------- Alumnos sin asignar ------------------ \n`;

            let alumnosSinGrupos = this._arrayAlumnos.filter(
                (alumno) => !alumnosConGrupo.includes(alumno)
            );

            alumnosSinGrupos.forEach(
                (alumno) => (cadenaDevuelta += `* ${alumno.mostrarInformacion()} \n`)
            );
        }

        return cadenaDevuelta;
    };

    this.mostrarAlumnosPorGrupo = () => {
        let listadoGruposIndicePrompt = `Elige el grupo del que quieres ver los alumnos:`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();

        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoElegido = this._grupos[grupoElegidoIndice - 1];
        let cadenaDevuleta = `Alumnos que pertenecen a ${grupoElegido.nombre}`;

        if (grupoElegido.alumnos.length <= 0) {
            cadenaDevuleta += "\n No hay alumnos";
        } else {
            grupoElegido.alumnos.forEach((alumno) => {
                cadenaDevuleta += `\n ${alumno.nombre}`;
            });
        }

        return cadenaDevuleta;
    };

    this.calcularMediaDeUnGrupo = () => {
        let listadoGruposIndicePrompt = `Elige el grupo del que quieres saber la media:`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();

        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoElegido = this._grupos[grupoElegidoIndice - 1];

        let mediaFinalGrupo = 0;

        if (grupoElegido.alumnos.length <= 0) {
            return "No hay alumnos en este grupo";
        } else {
            grupoElegido.alumnos.forEach((alumno) => {
                mediaFinalGrupo += alumno.notaFinal;
            });
        }

        return `Media del grupo: ${(
            mediaFinalGrupo / grupoElegido.alumnos.length
        ).toFixed(2)}`;
    };

    this.mejorNotaGrupo = () => {
        let listadoGruposIndicePrompt = `Elige el grupo del que quieres saber la nota mas alta`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();

        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoElegido = this._grupos[grupoElegidoIndice - 1];

        if (grupoElegido.alumnos.length <= 0) {
            return "No hay alumnos en este grupo";
        } else {
            let nota = 0;
            let alumnosMejoresNotas = [];
            grupoElegido.alumnos.forEach((alumno) => {
                if (alumno.notaFinal == nota) {
                    alumnosMejoresNotas.push(alumno);
                } else if (alumno.notaFinal > nota) {
                    nota = alumno.notaFinal;
                    alumnosMejoresNotas = [];
                    alumnosMejoresNotas.push(alumno);
                }
            });
            let cadenaDevuelta = 'Mejores notas del grupo: ';

            alumnosMejoresNotas.forEach(alumno => {
                cadenaDevuelta += `\n ${alumno.nombre} - ${alumno.notaFinal} `
            })

            return cadenaDevuelta;
        }
    };

    this.porcentajeSuspensosGrupo = () => {
        let listadoGruposIndicePrompt = `Elige el grupo del que quieres saber el porcentaje de suspensos`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();

        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoElegido = this._grupos[grupoElegidoIndice - 1];


        if (grupoElegido.alumnos.length <= 0) {
            return "No hay alumnos en este grupo";
        } else {
            let numeroSuspensos = 0;

            grupoElegido.alumnos.forEach((alumno) => {
                if (!alumno.estaAprobado()) numeroSuspensos += 1;
            });

            let porcentajeSuspensos = (numeroSuspensos * 100) / this._numeroAlumnosAula;

            return `Porcentaje de suspensos: ${porcentajeSuspensos}`;
        }

    }

    this.listarAlumnosPorIndicePrompt = () => {
        let cadenaDevuelta = "";
        this._arrayAlumnos.forEach((alumno, indice) => {
            cadenaDevuelta += `\n ${indice + 1}) Alumno:${alumno.nombre} Grupo: ${alumno.grupo || "Sin Asignar"
                } `;
        });
        return cadenaDevuelta;
    };

    this.listarGrupoPorIndicePrompt = () => {
        let cadenaDevuelta = "";
        this._grupos.forEach((grupo, indice) => {
            cadenaDevuelta += `\n ${indice + 1}) ${grupo.nombre}`;
        });
        return cadenaDevuelta;
    };

    this.agregarAlumnoGrupo = () => {
        //Seleccion del alumno para cambiar / agregar a grupo
        let listadoAlumnosIndice = `Selecciona el alumno, indicando el numero que tiene a su izquierda`;
        listadoAlumnosIndice += this.listarAlumnosPorIndicePrompt();
        let alumnoElegidoIndice = 0;

        do {
            alumnoElegidoIndice = prompt(listadoAlumnosIndice);
        } while (
            isNaN(alumnoElegidoIndice) ||
            alumnoElegidoIndice <= 0 ||
            alumnoElegidoIndice > this._arrayAlumnos.length
        );

        const alumnoElegido = this._arrayAlumnos[alumnoElegidoIndice - 1];

        //GRUPO DESTINO
        let listadoGruposIndicePrompt = `Introduce el numero del grupo al que quieres mover: ${alumnoElegido.nombre}`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();
        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoDestino = this._grupos[grupoElegidoIndice - 1];

        //Asignacion del grupo
        const cambiarDeGrupo = true;

        if (alumnoElegido.grupo) {
            const mensajeConfirmacion = `El alumno pertenece al grupo: ${alumnoElegido.grupo}, introduce "si" o "no"`;
            confirmancioPrompt = "";
            do {
                confirmancioPrompt = prompt(mensajeConfirmacion);
            } while (
                confirmancioPrompt.toLowerCase() != "si" &&
                confirmancioPrompt.toLowerCase() != "no"
            );
            if (confirmancioPrompt.toLowerCase() == "no") {
                cambiarDeGrupo = false;
            }
        }

        if (cambiarDeGrupo) {
            grupoDestino.alumnos.push(alumnoElegido);
            alumnoElegido.grupo = grupoDestino.nombre;
            alert("Alumno cambiado de grupo");
        } else {
            alert("Se ha cancelado el cambio de grupo");
        }
    };

    this.eliminarGrupo = () => {
        let listadoGruposIndicePrompt = `Introduce el grupo que quieres ELIMINAR (seleccionando el numero de la izquierda), los alumnos que pertenezcan a este grupo, pasaran a tener un grupo sin asignar:`;
        listadoGruposIndicePrompt += this.listarGrupoPorIndicePrompt();

        let grupoElegidoIndice = 0;

        do {
            grupoElegidoIndice = prompt(listadoGruposIndicePrompt);
        } while (
            isNaN(grupoElegidoIndice) ||
            grupoElegidoIndice <= 0 ||
            grupoElegidoIndice > this._grupos.length
        );

        const grupoElegido = this._grupos[grupoElegidoIndice - 1];

        this._arrayAlumnos.forEach((alumno) => {
            if (alumno.grupo == grupoElegido.nombre) {
                alumno.grupo = null;
            }
        });

        this._grupos.splice(grupoElegidoIndice - 1, 1);
        alert("Grupo Eliminado Correctamente");
    };

    /*Funciones aula */

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

        console.log(this._arrayAlumnos);
    };

    this.mostrarDatos = () => {
        let text = "";
        console.log(this._numeroAlumnosAula);
        for (let index = 0; index < this._numeroAlumnosAula; index++) {
            text += this._arrayAlumnos[index].mostrarInformacion() + " ";
        }
        return text;
    };

    this.mediasNotas = () => {
        let media = 0;

        for (let index = 0; index < this._numeroAlumnosAula; index++)
            media += this._arrayAlumnos[index].notaFinal;

        return media / this._numeroAlumnosAula;
    };

    this.mejorNota = () => {
        let nota = 0;
        let alumnosMejoresNotas = [];
        this._arrayAlumnos.forEach((alumno) => {
            if (alumno.notaFinal == nota) {
                alumnosMejoresNotas.push(alumno);
            } else if (alumno.notaFinal > nota) {
                nota = alumno.notaFinal;
                alumnosMejoresNotas = [];
                alumnosMejoresNotas.push(alumno);
            }
        });

        return alumnosMejoresNotas;
    };

    this.porcentajeSuspensos = () => {
        let numeroSuspensos = 0;

        this._arrayAlumnos.forEach((alumno) => {
            if (!alumno.estaAprobado()) numeroSuspensos += 1;
        });

        let porcentajeSuspensos = (numeroSuspensos * 100) / this._numeroAlumnosAula;

        return porcentajeSuspensos;
    };

    this.mostrarSuspensosAprobados = () => {
        let porcentajeSuspensos = this.porcentajeSuspensos();
        let porcentajeAprobados = 100 - porcentajeSuspensos;
        return `Aprobados:  ${porcentajeAprobados}% Suspensos:${porcentajeSuspensos}%`;
    };

    Object.defineProperty(this, "numeroAlumnosAula", {
        get: () => {
            return this._numeroAlumnosAula;
        },
        set: (value) => {
            this._numeroAlumnosAula = value;
        },
    });

    Object.defineProperty(this, "identificadorAula", {
        get: () => {
            return this._identificadorAula;
        },
        set: (value) => {
            this._identificadorAula = value;
        },
    });

    Object.defineProperty(this, "descripcionAula", {
        get: () => {
            return this._descripcionAula;
        },
        set: (value) => {
            this._descripcionAula = value;
        },
    });
}
