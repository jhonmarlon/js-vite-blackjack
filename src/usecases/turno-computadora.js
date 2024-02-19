import { creaCartaHTML, pedirCarta, sumaPuntosJugador } from "./";

export const turnoComputadora = ( deck, puntosHTML, divCartasHTML ) => {

    let puntosJugador = localStorage.getItem('puntosJugador0');
    let puntosComputadora = localStorage.getItem('puntosJugador1');

    do {

        const carta = pedirCarta( deck );

        puntosComputadora = sumaPuntosJugador( carta, puntosComputadora );
        localStorage.setItem('puntosJugador1', puntosComputadora);

        creaCartaHTML({tipoJugador: 1, carta, puntosHTML, divCartasHTML});

        if( puntosJugador > 21 ) {
            // console.warn('Te ha ganado la computadora!')
            break;
        }

    } while ((puntosComputadora < puntosJugador) && (puntosJugador <= 21));

    setTimeout(() => {
        if ( puntosJugador === 21 ){
            alert('Jugador gana');
        } else if( puntosComputadora === puntosJugador ) {
            alert('Nadie gana :(');
        } else if( puntosJugador > 21 ) {
            alert('Computadora gana');
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else if(puntosJugador < puntosComputadora && puntosComputadora <= 21) {
            alert('Computadora gana');
        }
    }, 100);

}  