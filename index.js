//PAGINA INDEX PASAPALABRA


//selectors
const nombre = document.querySelector('#nombre');
const start = document.querySelector('#start');


//Variables
let nombreJugador = '';


let clasificacion = [
    { nombre: 'Marcela', aciertos: 21, errores: 6, data: '8/31/2021' },
    { nombre: 'Agnés', aciertos: 25, errores: 2, data: '8/26/2021' },
    { nombre: 'Laia', aciertos: 14, errores: 13, data: '8/30/2021' },
    { nombre: 'Esteve', aciertos: 8, errores: 19, data: '8/27/2021' },
    { nombre: 'Mar', aciertos: 26, errores: 1, data: '9/1/2021' },
    { nombre: 'Toro', aciertos: 22, errores: 5, data: '8/30/2021' },
    { nombre: 'Geronimo', aciertos: 21, errores: 6, data: '8/31/2021' },
];



//Listeners:
nombre.addEventListener('input', function(e){
    nombreJugador = e.target.value;
    habilitar();
    return nombreJugador;
});

start.addEventListener('click', usuario)
start.disabled = true;

//habilitar botó start:
function habilitar(){
    if (nombreJugador ===""){
        start.disabled = true;
    } else{
        start.classList.remove('deshabilitar')
        start.disabled = false;
    }
}

// Habilitar intro:
function presionarTecla (e){
    let teclaIntro = e.keyCode;

    if(teclaIntro == 13){
        if (nombreJugador ===""){
            nombreJugador='Melon'
            usuario()
        } else{
            usuario()
        }
    }
}    
window.onkeydown = presionarTecla;



// començar:
function usuario (){
    sessionStorage.setItem ('nombre', nombreJugador);
    sessionStorage.setItem ('clasificacion', JSON.stringify(clasificacion))
    window.open('https://pedantic-goodall-faf5fb.netlify.app/html/pasapalabra.html?','_self')
}

