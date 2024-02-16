export const creaCartaHTML = (
    tipoJugador, 
    carta,
    puntosHTML, 
    divCartasJugador, 
    divCartasComputadora, 
    puntosJugador, 
    puntosComputadora, ) => {

    const cartaJugador = document.createElement('img');
    cartaJugador.src = `./assets/cartas/${ carta }.png`;
    cartaJugador.classList.add('carta');
 
    if(tipoJugador === 0 )
    {
        divCartasJugador.append( cartaJugador )
        puntosHTML[0].innerText = puntosJugador
    }else {
        divCartasComputadora.append( cartaJugador );
        puntosHTML[1].innerText = puntosComputadora;
    }
}
