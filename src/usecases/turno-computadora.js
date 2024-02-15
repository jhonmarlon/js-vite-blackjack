import { pedirCarta } from "./pedir-carta";
import { sumaPuntosJugador } from "./suma-puntos-jugador";

export const turnoComputadora = ( puntosMinimos, puntosComputadora, deck ) => {
    do {

        const carta = pedirCarta( deck );
        sumaPuntosJugador(1, carta);
        creaCartaHTML(1, carta);

        if( puntosMinimos > 21 ) {
            // console.warn('Te ha ganado la computadora!')
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if ( puntosMinimos === 21 ){
            alert('Jugador gana');
        } else if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else if(puntosMinimos < puntosComputadora && puntosComputadora <= 21) {
            alert('Computadora gana');
        }
    }, 100);

}  