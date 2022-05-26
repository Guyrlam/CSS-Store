// CARROSSEL
let ulsElis = document.querySelectorAll('ul li')

let lista1 = document.querySelectorAll('#lista li')

function show(indice, indiceLista) {

    let listaUl = document.querySelector('#lista')

    let mover  = 295.73
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        //console.log('Mover para direita')
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        //console.log('Mover para esquerda')
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }

}

