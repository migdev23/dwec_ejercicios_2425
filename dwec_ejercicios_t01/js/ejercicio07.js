let ArrContenedor = [];

//DOM
let inputCrearCategoria = document.querySelector('#inputFormCategoriaCrear');
let categoriaBtnCrear = document.querySelector('#categoriaBtnCrear');
let formCategorias = document.querySelector('#categoriasFormulario');
let formAnadirElementoCategorias = document.querySelector('#anadirAcategoriasFormulario')
let listadoCategoria = document.querySelector('#listadoCategorias ul');
let anadirAcategoriasFormulario = document.querySelector('#anadirAcategoriasFormulario');
let listadoElementosCategoria = document.querySelector('#listadoElementosCategoria ul')
let indice_actual = 0;

const actualizarListadoDomCategorias = (arr, domElement) => {
    domElement.innerHTML = '';
    indice_actual = 0;
    arr.forEach((element,index) => {
         const categoria = element[0];
         domElement.innerHTML += `<li>${categoria} <button id='anadircategoria${index}'>añadir elementos categoria</button> <button id='listarcategoria${index}'>listar elementos categoria</button></li>`
    });
    
    for (let index = 0; index < arr.length; index++) {
        document.querySelector(`#anadircategoria${index}`).addEventListener('click',()=>{
            const categoria = arr[index][0];
            indice_actual = index;
            anadirAcategoriasFormulario.innerHTML = `
             <input type="text" placeholder="Añade un elemento a la categoria: ${categoria}" />
             <button type="submit">Añadir a la categoria: ${categoria}</button>
            `
            anadirAcategoriasFormulario.classList = 'visible';
        })
        
        document.querySelector(`#listarcategoria${index}`).addEventListener('click',()=>{
            const elementosCategoria = arr[index][1];
            const elementosCategoriaLongitud = arr[index][1].length;
            listadoElementosCategoria.innerHTML = '';
            elementosCategoria.forEach((element, indexListadoCategoria)=>{
                listadoElementosCategoria.innerHTML += `<li>${element[0]} - <button id='accionDone${index}w${indexListadoCategoria}'>${element[1]}</button></li>`;
            })


            for (let indexCategoria = 0; indexCategoria < arr.length; indexCategoria++) {
                for (let indexElementoCategoria = 0; indexElementoCategoria < elementosCategoriaLongitud; indexElementoCategoria++) {
                    document.querySelector(`#accionDone${indexCategoria}w${indexElementoCategoria}`).addEventListener('click',(e)=>{
                       const arrElemento = elementosCategoria[indexElementoCategoria];
                       const estado = arrElemento[1];
                       const valor = arrElemento[0];
                       if(estado == 'TODO'){
                         arrElemento[1] = 'DONE'
                       }
                    });
                }
            }
            

        })
    }
 
  

}

formCategorias.addEventListener('submit',(e)=>{
    e.preventDefault();

    let err = 0;

    const nombreCategoria = inputCrearCategoria.value;

    if(nombreCategoria == '' || nombreCategoria == undefined) err++

    if(err == 0){
        ArrContenedor.push([nombreCategoria,[]])
        actualizarListadoDomCategorias(ArrContenedor, listadoCategoria)
    }

})


formAnadirElementoCategorias.addEventListener('submit', (e) => {
    e.preventDefault();
    const arr_a_anadir = ArrContenedor[indice_actual][1];
    let valor_a_anadir = formAnadirElementoCategorias.querySelector('input').value
    arr_a_anadir.push([valor_a_anadir,'TODO'])
    anadirAcategoriasFormulario.classList = 'oculto';
})









