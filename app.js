// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigo.length)
    if (amigo.length != 0){
        amigos.push(amigo)
        console.log(amigos);
    }else{
        alert('Por favor, inserte un nombre.');

    }
    limpiarCaja();
    agregarAmigosHTML(amigos);

    return;
}
function agregarAmigosHTML(amigos){
    let ListaAmigos = amigos;
    // obtener elemento de la lista
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista existente
    lista.innerHTML = '';
    // Iterar sobre el arreglo
    ListaAmigos.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        lista.appendChild(li);
    });
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
    return;
}

function sortearAmigo(){
    // Validar que haya amigos disponibles: 
    if (amigos.length == 0){
        alert('Aún no ha agregado ningún nombre');
    }else{
        // Generar un índice aleatorio:
        let indice = parseInt(Math.floor(Math.random()*amigos.length))
        console.log(indice)
        // Obtener el nombre sorteado:
        let nombreSorteado = amigos[indice];
        // Mostrar el resultado:
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto sorteado es:${nombreSorteado}`;
    }
    return;
}