let arrContendor = [];

//DOM
let inputCrearCategoria = document.querySelector("#inputFormCategoriaCrear");
let categoriaBtnCrear = document.querySelector("#categoriaBtnCrear");
let formCategorias = document.querySelector("#categoriasFormulario");
let formAnadirElementoCategorias = document.querySelector(
    "#anadirAcategoriasFormulario"
);
let listadoCategoria = document.querySelector("#listadoCategorias ul");
let anadirAcategoriasFormulario = document.querySelector(
    "#anadirAcategoriasFormulario"
);
let listadoElementosCategoria = document.querySelector(
    "#listadoElementosCategoria ul"
);
let indiceActualCategoria = 0;

const funcionalidadBtnAnadirCategoria = (arrCat, indiceCat) => {
    document.querySelector(`#anadircategoria${indiceCat}`).addEventListener("click", () => {
            const nombreCategoria = arrCat[indiceCat][0];
            indiceActualCategoria = indiceCat;
            anadirAcategoriasFormulario.innerHTML = `
           <input type="text" placeholder="Añade un elemento a la categoria: ${nombreCategoria}" />
           <button type="submit">Añadir a la categoria: ${nombreCategoria}</button>
          `;
            anadirAcategoriasFormulario.classList = "visible";
        });
};

const funcionalidadBtnListarCategoria = (arrCat, indiceCat) => {
    document.querySelector(`#listarcategoria${indiceCat}`).addEventListener("click", () => {
        const elementosCategoria = arrCat[indiceCat][1];
        const elementosCategoriaLongitud = arrCat[indiceCat][1].length;
        listadoElementosCategoria.innerHTML = "";

        if (elementosCategoriaLongitud == 0) {
            listadoElementosCategoria.innerHTML =
                "<li>No hay elementos en esta categoria</li>";
        } else {
            elementosCategoria.forEach((elementoLista, elementoIndexListado) => {
                listadoElementosCategoria.innerHTML += `<li>${elementoLista[0]} - <button id='accionDone${indiceCat}w${elementoIndexListado}'>${elementoLista[1]}</button></li>`;
            });
            /*
                  for (let indexCategoria = 0; indexCategoria < arrCat.length; indexCategoria++) {
                    console.log(elementosCategoriaLongitud, indiceCat)
                    if(elementosCategoriaLongitud != 0){
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
                  }
            */
                
        }
    });
};

const anadirFuncionalidadBtnCategoria = (arrCat) => {
    for (let index = 0; index < arrCat.length; index++) {
        funcionalidadBtnAnadirCategoria(arrCat, index);
        funcionalidadBtnListarCategoria(arrCat, index);
    }
};

const actualizarListadoDomCategorias = (arrCat, domElement) => {
    domElement.innerHTML = "";
    indiceActualCategoria = 0;

    arrCat.forEach((cat, index) => {
        domElement.innerHTML += `<li>${cat[0]} <button id='anadircategoria${index}'>añadir elementos categoria</button> <button id='listarcategoria${index}'>listar elementos categoria</button></li>`;
    });

    anadirFuncionalidadBtnCategoria(arrCat);
};

formCategorias.addEventListener("submit", (e) => {
    e.preventDefault();
    let err = 0;
    const nombreCategoria = inputCrearCategoria.value;
    if (nombreCategoria == "" || nombreCategoria == undefined) err++;
    if (err == 0) {
        arrContendor.push([nombreCategoria, []]);
        actualizarListadoDomCategorias(arrContendor, listadoCategoria);
    }
});

formAnadirElementoCategorias.addEventListener("submit", (e) => {
    e.preventDefault();
    const arr_a_anadir = arrContendor[indiceActualCategoria][1];
    let valor_a_anadir = formAnadirElementoCategorias.querySelector("input").value;
    arr_a_anadir.push([valor_a_anadir, "TODO"]);
    anadirAcategoriasFormulario.classList = "oculto";
});
