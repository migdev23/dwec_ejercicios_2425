const contieneFormatoHourMinutes = (cadena) => {
    let arrayHourMinutes = [];

    if (cadena.length != 5)
        return { comprobacionFomatoHourMinutes: false, arrayHourMinutes };

    if (cadena.split(":").length == 2 || cadena.split("-").length == 2 || cadena.split(".").length == 2)
        arrayHourMinutes = cadena.split(cadena.charAt(2));
    else 
        return { comprobacionFomatoHourMinutes: false, arrayHourMinutes };

    const [hour, minutes] = arrayHourMinutes;

    if (hour.length != 2 || minutes.length != 2) 
        return { comprobacionFomatoHourMinutes: false, arrayHourMinutes };

    const dateHourMinutes = new Date(0, 0, 0, hour, minutes, 0, 0);

    if (dateHourMinutes.getHours() != hour || dateHourMinutes.getMinutes() != minutes)
        return { comprobacionFomatoHourMinutes: false, arrayHourMinutes };

    return { comprobacionFomatoHourMinutes: true, arrayHourMinutes };
};

const inputHourMinutes = document.querySelector("input");
const buttonCheckHourMinutes = document.querySelector("button");

buttonCheckHourMinutes.addEventListener("click", () => {

    let inputHourMinutesValor = inputHourMinutes.value.trim();

    const { comprobacionFomatoHourMinutes, arrayHourMinutes } = contieneFormatoHourMinutes(inputHourMinutesValor);

    if (comprobacionFomatoHourMinutes) console.log("Formato de hora correcto");
    else console.log("Formato de hora incorrecto");

});