//ARCHIVO FINAL - RANKING

const top10 = document.querySelector('.top10');
const volver = document.querySelector('.button')


//recuperar variable del ranking:
let ranking = sessionStorage.getItem('ranking')



top10.onload = imprimirResultado();

function imprimirResultado(){
    top10.innerText = ranking;
}

