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
    return;
}
function agregarAmigosHTML(ListaAmigos){

}
function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
    return;
}
