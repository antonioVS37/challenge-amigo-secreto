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
        
        let listaAmigos = document.getElementById('listaAmigos');
        let li = document.createElement('li');
        li.textContent = nomnbreDeTexto;
        listaAmigos.appendChild(li);
        
        limpiarCajadeTexto();
    }

function limpiarCajadeTexto() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let resultadoAmigo = document.getElementById('resultado');

    let nombreSorteado = Math.floor(Math.random()*listaNomnres.length);

    let amigoSecreto = listaNomnres[nombreSorteado];    
    resultadoAmigo.innerHTML = `<li>el ganador es: ${amigoSecreto}</li>`;

    }

