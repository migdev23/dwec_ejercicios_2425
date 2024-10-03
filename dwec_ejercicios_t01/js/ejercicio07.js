//VARIABLES DOM
let inputCrearCategoriaDOM = document.querySelector("#inputFormCategoriaCrear");
let btnCrearCategoriaDOM = document.querySelector("#btnCrearCategoria");
let formCrearCategoriasDOM = document.querySelector("#formCrearCategorias");
let h2ElementosCategoriaDOM = document.querySelector('#h2ElementosCategoria')
let formCrearElementoCategoriasDOM = document.querySelector("#formCrearElementoCategorias");
let ulListarCategoriaDOM = document.querySelector("#ulListarCategoria");
let ulListarElementosCategoriaDOM = document.querySelector("#ulListarElementosCategoria");

let sectionListarCategoriasDOM = document.querySelector("#sectionListarCategorias");
let sectionListarElementosCategoriaDOM = document.querySelector("#sectionListarElementosCategoria");

//VARIABLES GLOBALES
let indiceActualCategoria = 0;
let arrContendor = [];


//FUNCIONES
const funcionalidadBtnAnadirCategoria = (arrCat, indiceCat) => {
    document.querySelector(`#anadircategoria${indiceCat}`).addEventListener("click", () => {
            const nombreCategoria = arrCat[indiceCat][0];
            indiceActualCategoria = indiceCat;
            formCrearElementoCategoriasDOM.innerHTML = `
            <fieldset>
                <legend>Añadir a la categoria: ${nombreCategoria}</legend>
                <input type="text" placeholder="Añade un elemento a la categoria: ${nombreCategoria}" />
                <button type="submit">Añadir a la categoria: ${nombreCategoria}</button>
            </fieldset>
            `;
            formCrearElementoCategoriasDOM.classList = "visible";
        });
};

const funcionalidadBtnListarCategoria = (arrCat, indiceCat, domElementListarElementosCategoria = ulListarElementosCategoriaDOM) => {
    document.querySelector(`#listarcategoria${indiceCat}`).addEventListener("click", () => {
        const elementosCategoria = arrCat[indiceCat][1];
        const nombreCategoria = arrCat[indiceCat][0];
        h2ElementosCategoriaDOM.innerHTML = `Elementos de la categoria: ${nombreCategoria}`
        domElementListarElementosCategoria.innerHTML = "";
        visualizarSection(true, sectionListarElementosCategoriaDOM)
        if (elementosCategoria.length == 0) {
            domElementListarElementosCategoria.innerHTML = `<li>No hay elementos en ${nombreCategoria}</li>`;
        } else {
            elementosCategoria.forEach((elementoLista, elementoIndexListado) => {
                domElementListarElementosCategoria.innerHTML += `<li>${elementoLista[0]} - <button id='accionDone${indiceCat}w${elementoIndexListado}'>${elementoLista[1]}</button></li>`;
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

const actualizarListadoDomCategorias = (arrCat, domElementListarCategorias = ulListarCategoriaDOM) => {
    domElementListarCategorias.innerHTML = "";
    indiceActualCategoria = 0;

    arrCat.forEach((cat, index) => {
        domElementListarCategorias.innerHTML += `<li>${cat[0]} <button id='anadircategoria${index}'>añadir elementos categoria</button> <button id='listarcategoria${index}'>listar elementos categoria</button></li>`;
    });

    anadirFuncionalidadBtnCategoria(arrCat);
};

const visualizarSection = (visible = true, domElementSection) => {
    if(visible) domElementSection.classList = "visible"
    else domElementSection.classList = "oculto"
}
 

//FORMULARIOS EVENTOS SUBMITS
formCrearCategoriasDOM.addEventListener("submit", (e) => {
    e.preventDefault();
    let err = 0;
    const nombreCategoria = inputCrearCategoriaDOM.value;
    if (nombreCategoria == "" || nombreCategoria == undefined) err++;
    if (err == 0) {
        arrContendor.push([nombreCategoria, []]);
        actualizarListadoDomCategorias(arrContendor);
    }

    visualizarSection(true, sectionListarCategoriasDOM)
});

formCrearElementoCategoriasDOM.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValorFormCrearElementosCategoriasDOM = formCrearElementoCategoriasDOM.querySelector("input").value;
    arrContendor[indiceActualCategoria][1].push([inputValorFormCrearElementosCategoriasDOM, "TODO"]);
    formCrearElementoCategoriasDOM.classList = "oculto";
});
