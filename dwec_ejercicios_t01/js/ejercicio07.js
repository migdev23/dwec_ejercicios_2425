let arrContendor = [];
//TODO OPTIMIZAR CODIGO (html, js) (ACLARAR VARIBALES, ACLARAR MEJOR LAS ACCIONES DE LAS FUNCIONES, NOMBRES DE LOS ID HTML)
//DOM
let inputCrearCategoria = document.querySelector("#inputFormCategoriaCrear");
let categoriaBtnCrear = document.querySelector("#categoriaBtnCrear");
let formCategorias = document.querySelector("#categoriasFormulario");
let tituloElementosCategoria = document.querySelector('#tituloElementosCategoria')
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
             <fieldset>
            <legend>Añadir a la categoria: ${nombreCategoria}</legend>
           <input type="text" placeholder="Añade un elemento a la categoria: ${nombreCategoria}" />
           <button type="submit">Añadir a la categoria: ${nombreCategoria}</button>
            </fieldset>
           `;
            anadirAcategoriasFormulario.classList = "visible";
        });
};

const funcionalidadBtnListarCategoria = (arrCat, indiceCat) => {
    document.querySelector(`#listarcategoria${indiceCat}`).addEventListener("click", () => {
        const elementosCategoria = arrCat[indiceCat][1];
        const nombreCategoria = arrCat[indiceCat][0];
        tituloElementosCategoria.innerHTML = `Elementos de la categoria: ${nombreCategoria}`
        listadoElementosCategoria.innerHTML = "";

        if (elementosCategoria.length == 0) {
            listadoElementosCategoria.innerHTML = `<li>No hay elementos en ${nombreCategoria}</li>`;
        } else {
            elementosCategoria.forEach((elementoLista, elementoIndexListado) => {
                listadoElementosCategoria.innerHTML += `<li>${elementoLista[0]} - <button id='accionDone${indiceCat}w${elementoIndexListado}'>${elementoLista[1]}</button></li>`;
            });

            anadirFuncionalidadBtnTODO(arrCat, indiceCat)
        }
    });
};

const anadirFuncionalidadBtnTODO = (arrCat,indiceCat)=> {
    const elementosCategoria = arrCat[indiceCat][1];
    elementosCategoria.forEach((elementoLista, elementoIndexListado) => {
         document.querySelector(`#accionDone${indiceCat}w${elementoIndexListado}`).addEventListener('click',(e)=>{
            elementoLista[1] = 'DONE'
            document.querySelector(`#accionDone${indiceCat}w${elementoIndexListado}`).innerHTML = elementoLista[1];
        });
    });   
}


const anadirFuncionalidadBtnCategoria = (arrCat) => {
    for (let index = 0; index < arrCat.length; index++) {
        funcionalidadBtnAnadirCategoria(arrCat, index);
        funcionalidadBtnListarCategoria(arrCat, index);
    }
};

const actualizarListadoDomCategorias = (arrCat, domElement = listadoCategoria) => {
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
