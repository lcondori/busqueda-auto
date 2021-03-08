// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    // Llenando las opciones de los años
    llenarSelect();
});

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
})


// Funciones
function mostrarAutos(autos){

    limpiarHTML();              // Elimian el HTML previo

    autos.forEach( auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - $${precio} - ${color}
        `;

        // Insertar en el Html
        resultado.appendChild(autoHTML)
    });

    console.log(autos);
}

// Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

// Generar los años del Select
function llenarSelect(){
    for(let i = maxYear; i >= minYear; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);   // Agrega las opciones de año a Select
        // Insertar en el Select
    }
}

// Filtra los Automóviles
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );     // Llamo a una función y para Año soporta encademiento

    mostrarAutos(resultado);
}

function filtrarMarca( auto ){              // Recibo el objeto sobre el cual estoy iterando
    const { marca } = datosBusqueda;
    if( marca ) {                           // Si el 
        return auto.marca === marca;        // Devuelvo el objeto que encuento con igual marca
    }
    return auto;    // Si marca no fue llenado, retorno el objeto con los datos sin filtrar
}

function filtrarYear( auto ){
    const{ year } = datosBusqueda;
    if( year ){
        return auto.year === parseInt(year);
    }
    return auto;
}

function filtrarMinimo( auto ){
    const{ minimo } = datosBusqueda;
    if( minimo ){
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}

function filtrarMaximo( auto ){
    const{ maximo } = datosBusqueda;
    if( maximo ){
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}

function filtrarPuertas( auto ){
    const{ puertas } = datosBusqueda;
    if( puertas ){
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision( auto ){
    const{ transmision } = datosBusqueda;
    if( transmision ){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor( auto ){
    const{ color } = datosBusqueda;
    if( color ){
        return auto.color === color;
    }
    return auto;
}