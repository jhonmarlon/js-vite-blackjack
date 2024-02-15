import { crearDeck, valorCarta, pedirCarta } from "../usecases";

/**
 *  2C = Two of Clubs (Tréboles)
 *  2D = Two of Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Swords (Espadas)
 */

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;


// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// puntosHTML[0]: usuario,  puntosHTML[1]: computadora
const puntosHTML = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

// Esta funcón crea una nueva baraja
deck = crearDeck( tipos, especiales );

// Turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
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

// tipoJugador 0: usuario ó tipoJugador 1: computadora
const sumaPuntosJugador = (tipoJugador, carta) => {
    const valorcarta = valorCarta( carta );

    tipoJugador === 0 
        ? (puntosJugador += valorcarta) 
        : (puntosComputadora += valorcarta); 

    tipoJugador === 0 
        ? (puntosHTML[0].innerText = puntosJugador)
        : (puntosHTML[1].innerText = puntosComputadora)
}

// tipoJugador 0: usuario ó tipoJugador 1: computadora
const creaCartaHTML = (tipoJugador, carta) => {
    const cartaJugador = document.createElement('img');
    cartaJugador.src = `./assets/cartas/${ carta }.png`;
    cartaJugador.classList.add('carta');
 
    tipoJugador === 0 
        ? divCartasJugador.append( cartaJugador )
        : divCartasComputadora.append( cartaJugador );
}


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    sumaPuntosJugador(0, carta);
    creaCartaHTML(0, carta);
    

    if( puntosJugador > 21 ) {
        //console.warn('Lo siento mucho, perdiste');
        // Bloqueamos botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );
    } else if( puntosJugador === 21 ) {
        //console.warn('21, Genial');
        // Bloqueamos botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora( puntosJugador );
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {

    console.clear();

    //Creamos nuevamente el deck y reseteamos el juego
    // deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML.forEach(puntoHTML => puntoHTML.innerText = 0);

    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
})

