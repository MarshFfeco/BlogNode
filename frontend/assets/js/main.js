import "../css/index.css"
import "../css/loading.css"

function carregado(){
    var conteudo = document.getElementsByClassName('content-prin');


    for(let i = 0; i < conteudo.length; i++) {
        conteudo[i].style.display = 'block';
    }

    var load = document.getElementById("load");
    load.style.display = "none"
}

carregado();