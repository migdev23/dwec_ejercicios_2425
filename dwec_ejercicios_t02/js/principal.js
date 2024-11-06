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
    const aula1 = new Aula(2,8803,'aula daw');
    aula1.pedirDatos();
    console.log(aula1.mostrarDatos());
    console.log(aula1.mediasNotas());
}

funcion1();