export const creaCartaHTML = ({
    tipoJugador, 
    carta,
    puntosHTML, 
    divCartasHTML
}) => {

    const puntosJugador = localStorage.getItem(`puntosJugador${ tipoJugador }`);

    const divCartas = divCartasHTML[ tipoJugador ];

    const cartaJugador = document.createElement('img');
    cartaJugador.src = `./assets/cartas/${ carta }.png`;
    cartaJugador.classList.add('carta');

    divCartas.append( cartaJugador );
    puntosHTML[tipoJugador].innerText = puntosJugador
}
