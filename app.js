// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNomnres = [];


    function agregarAmigo() {
        let nomnbreDeTexto = document.getElementById('amigo');
        let nomnbreDeTextoLista = document.getElementById('listaAmigos');
        
        if (nomnbreDeTexto.value == ""){
            //mensaje de que no se ha insertado nada
                alert("Error, Por favor, inserte un nombre.");
        }
        // puja lo agregado en la caja de texto
        listaNomnres.push(nomnbreDeTexto.value);
        //muestra la lista del array
       
        nomnbreDeTextoLista.innerHTML += `<li>${nomnbreDeTexto.value}</li>`;
 // Limpiar caja de texto al agregar
        limpiarCajadeTexto();
    };

function limpiarCajadeTexto() {
    //funcion de borrar caja de texto
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    
    let resultadoAmigo = document.getElementById('resultado');
    //busca un numero aleatoria en un rango
    let nombreSorteado = Math.floor(Math.random()*listaNomnres.length);
    //elige un nombre sorteado
    let amigoSecreto = listaNomnres[nombreSorteado];    
    //muestra el resultado
    resultadoAmigo.innerHTML = `<li>el ganador es: ${amigoSecreto}</li>`;

    }

    //function reiniciarJuego() {
   //     limpiarCaja();
    //    nomnbreDeTexto = sortearAmigo();
    //    document.getElementById('reiniciar').setAttribute('disabled','true');
    //}