// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNomnres = [];


    function agregarAmigo() {
        let nomnbreDeTexto = document.getElementById('amigo').value;
        let nomnbreDeTextoLista = document.getElementById('listaAmigos').value;
        if (nomnbreDeTexto === ""){
                alert("Error, Por favor, inserte un nombre.")
                return
        }
        listaNomnres.push(nomnbreDeTexto);
        console.log("hola soy toño");
       // limpiarCajadeTexto();
    }
/*
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCajadeTexto() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let nombreSorteado = Math.floor(Math.random()*listaNomnres.length);

//si ya sorteamos todos los numeros
            let (nombreSorteado.length == listaNomnres)
                
            

    }
*/