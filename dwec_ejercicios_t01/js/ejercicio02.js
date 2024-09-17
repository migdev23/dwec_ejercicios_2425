const pedirYear = () =>{
  let year = parseInt(prompt("Introduce el año para comprobar si es bisiesto"))
  
  if(year < 0 || year > new Date().getFullYear()){
    return null
  }

  return year

}

const comprobarBisiesto = (year) =>{
  if( ((year%4 == 0) && (year%100 != 0)) || (year%400 == 0)){
    alert("Bisiesto")
  }else{
    alert("No Bisiesto")
  }
}

let year = pedirYear()
comprobarBisiesto()
/*
if(year !== null){
  if(comprobarBisiesto()){
    alert("Bisiesto")
  }else{
    alert("No Bisiesto")
  }
}*/
