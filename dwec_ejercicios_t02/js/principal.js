const funcion1 = () => {
    // const alumno1 = new Alumno('Juan',"2003-04-26","71368711X",5,3,1,"h");
    // const alumno2 = new Alumno('Maria',"2005-06-10","71368705X",10,4,7,"m");
    // console.log(alumno1.nombre, alumno1.fechaNac, alumno1.dni, alumno1.notaT1, alumno1.notaT2, alumno1.notaT3, alumno1.notaFinal, alumno1.sexo, alumno1.edad);
    // console.log(alumno1.mostrarInformacion());
    // console.log(alumno2.mostrarInformacion());
    // console.log(alumno1.comparar(alumno2));
    // console.log(alumno2.comparar(alumno1));
    // console.log(alumno1.estaAprobado());
    // console.log(alumno2.estaAprobado());
    // alumno2.cambiarNotas(1,1,1)
    // console.log(alumno2.estaAprobado());
}

const funcion2 = () => {
    let numeroAlumnos = 0;

    do {
        numeroAlumnos = prompt('Introduce el numero de alumnos')
    } while (isNaN(numeroAlumnos) || parseFloat(numeroAlumnos) < 1);

    numeroAlumnos = parseFloat(numeroAlumnos);

    const aula1 = new Aula(numeroAlumnos, 8803, 'aula daw');

    let opcionMenu = 0;

    aula1.pedirDatos();

    do {
        opcionMenu = prompt(`Menu para probar los metodos del aula, que contiene dos alumnos:\n
                Opcion (1): Pedir datos de los Alumnos,\n
                Opcion (2): Mostrar Datos de los Alumnos,\n
                Opcion (3): Mostrar las medias de las notas,\n
                Opcion (4): Mostrar Alumno con mejor nota,\n
                Opcion (5): Mostrar Porcentaje de suspensos,\n
                Opcion (6): Mostrar Porcentaje de suspensos y aprobados,\n
                Opcion (7): Salir\n
            `);

        if (isNaN(opcionMenu) || opcionMenu < 1 || opcionMenu > 7) {
            alert('Escoje una opcion valida 1 - 7');
            opcionMenu = 0;
        } else {
            switch (opcionMenu) {
                case "1":
                    aula1.pedirDatos();
                    break;
                case "2":
                    alert(aula1.mostrarDatos());
                    break;
                case "3":
                    alert(aula1.mediasNotas());
                    break;
                case "4":
                    let text = "";
                    aula1.mejorNota().forEach((alumno) => {
                        text += alumno.mostrarInformacion() + ' ';
                    });
                    alert(text);
                    break;
                case "5":
                    alert(aula1.porcentajeSuspensos());
                    break;
                case "6":
                    alert(aula1.mostrarSuspensosAprobados());
                    break;
            }
        }

    } while (opcionMenu != 7);
}

const funcion3 = () => {

    let numeroAlumnos = 2;

    const aula1 = new Aula(numeroAlumnos, 8803, 'aula daw');

    aula1.pedirDatos();

    aula1.crearGruposPrompt();

    do {
        opcionMenu = prompt(`Menu para probar los metodos del aula, que contiene dos alumnos:\n
                Opcion (1): Mostrar todos los alumnos,\n
                Opcion (2): Mostrar alumnos por grupo,\n
                Opcion (3): Agregar alumno a un grupo (si ya pertenece a otro grupo se cambia),\n
                Opcion (4): Eliminar un grupo,\n
                Opcion (5): Mostrar resumen de grupos, \n
                Opcion (6): Calcular media de un grupo,\n
                Opcion (7): Mostrar alumno con mejor nota de un grupo \n
                Opcion (8): Porcentaje de suspensos en un grupo \n
                Opcion (0): Salir\n
            `);

        if (isNaN(opcionMenu) || opcionMenu < 0 || opcionMenu > 8) {
            alert('Escoje una opcion valida 0 - 8');
            opcionMenu = -1;
        } else {
            switch (opcionMenu) {
                case "1":
                    alert(aula1.mostrarTodosLosAlumnos());
                    break;
                case "2":
                    alert(aula1.mostrarAlumnosPorGrupo());
                    break;
                case "3":
                    aula1.agregarAlumnoGrupo();
                    break;
                case "4":
                    aula1.eliminarGrupo();
                    break;
                case "5":
                    alert(aula1.mostrarResumenDeGrupo());
                    break;
                case "6":
                    alert(aula1.calcularMediaDeUnGrupo());
                    break;
                case "7":
                    alert(aula1.mejorNotaGrupo());
                    break;
                case "8":
                    alert(aula1.porcentajeSuspensosGrupo());
                    break;
            }
        }

    } while (opcionMenu != 0);

};

//funcion1();

//funcion2();

funcion3();