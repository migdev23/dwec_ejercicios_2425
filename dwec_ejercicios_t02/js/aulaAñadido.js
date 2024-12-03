Aula.prototype.validarGrupo = function (grupo) {
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

Aula.prototype.pedirGruposPrompt = function () {
    let nombre = null;

    const grupo = {
        nombre,
        alumnos: [],
    };

    do {
        nombre = prompt(`Introduce el nombre del nuevo grupo:`);
        grupo.nombre = nombre;
    } while (!this.validarGrupo(grupo));

    return grupo;
};

Aula.prototype.crearGruposPrompt = function () {
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

Aula.prototype.mostrarTodosLosAlumnos = function () {
    return this.mostrarDatos();
};

Aula.prototype.mostrarResumenDeGrupo = function () {
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

Aula.prototype.mostrarAlumnosPorGrupo = function () {
    const grupoElegido = this.selecionarUnGrupoPrompt(`Elige el grupo del que quieres ver los alumnos:`);
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

Aula.prototype.calcularMediaDeUnGrupo = function () {
    const grupoElegido = this.selecionarUnGrupoPrompt(`Elige el grupo del que quieres saber la media:`);

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

Aula.prototype.mejorNotaGrupo = function () {
    const grupoElegido = this.selecionarUnGrupoPrompt(`Elige el grupo del que quieres saber la nota mas alta`);

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

Aula.prototype.porcentajeSuspensosGrupo = function () {
    const grupoElegido = this.selecionarUnGrupoPrompt(`Elige el grupo del que quieres saber el porcentaje de suspensos:`);
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

Aula.prototype.listarAlumnosPorIndicePrompt = function () {
    let cadenaDevuelta = "";
    this._arrayAlumnos.forEach((alumno, indice) => {
        cadenaDevuelta += `\n ${indice + 1}) Alumno:${alumno.nombre} Grupo: ${alumno.grupo || "Sin Asignar"
            } `;
    });
    return cadenaDevuelta;
};

Aula.prototype.listarGrupoPorIndicePrompt = function () {
    let cadenaDevuelta = "";
    this._grupos.forEach((grupo, indice) => {
        cadenaDevuelta += `\n ${indice + 1}) ${grupo.nombre}`;
    });
    return cadenaDevuelta;
};

Aula.prototype.selecionarUnGrupoPrompt = function (mensajePrompt) {
    let listadoGruposIndicePrompt = mensajePrompt;
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

    return grupoElegido;
}

Aula.prototype.selecionarUnAlumnoPrompt = function (mensajePrompt) {
    let listadoAlumnosIndice = mensajePrompt;
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

    return alumnoElegido;
}


Aula.prototype.agregarAlumnoGrupo = function () {
    //Seleccion del alumno para cambiar / agregar a grupo
    const alumnoElegido = this.selecionarUnAlumnoPrompt('Seleccion un alumno, para cambiar su grupo');

    //GRUPO DESTINO
    const grupoDestino = this.selecionarUnGrupoPrompt(`Introduce el numero del grupo al que quieres mover: ${alumnoElegido.nombre}`);

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

Aula.prototype.eliminarGrupo = function () {
    const grupoElegido = this.selecionarUnGrupoPrompt(`Introduce el grupo que quieres ELIMINAR (seleccionando el numero de la izquierda), los alumnos que pertenezcan a este grupo, pasaran a tener un grupo sin asignar:`);
    if (this._grupos.length == 1) {
        alert('No puedes eliminar todos los grupos');
    } else {
        this._arrayAlumnos.forEach((alumno) => {
            if (alumno.grupo == grupoElegido.nombre) {
                alumno.grupo = null;
            }
        });

        this._grupos = this._grupos.filter((grupo) => grupo != grupoElegido);
        alert("Grupo Eliminado Correctamente");
    }
};