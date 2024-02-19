
import { crearDeck, valorCarta, pedirCarta, creaCartaHTML, sumaPuntosJugador } from "../usecases";
import { turnoComputadora } from "../usecases/turno-computadora";

/**
 *  2C = Two of Clubs (Tréboles)
 *  2D = Two of Diamonds (Diamantes)
 *  2H = Two of Hearts (Corazones)
 *  2S = Two of Swords (Espadas)
 */

(() => {
    localStorage.clear();
})()

let deck = [];
let tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    // puntosComputadora = 0;

// Referencias HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// puntosHTML[0]: usuario,  puntosHTML[1]: computadora
const puntosHTML = document.querySelectorAll('small');
const divCartasHTML = document.querySelectorAll('.cartasHTML');

// Esta funcón crea una nueva baraja
deck = crearDeck( tipos, especiales );

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );

    puntosJugador = sumaPuntosJugador(carta, puntosJugador);
    localStorage.setItem(`puntosJugador0`, puntosJugador);

    const datosCarta = {
        tipoJugador: 0,
        carta,
        puntosHTML,
        divCartasHTML
    }

    creaCartaHTML(datosCarta);
    
    if( puntosJugador > 21 ) {
        // Bloqueamos botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        // Turno de la computadora
        turnoComputadora( deck, puntosHTML, divCartasHTML );

    } else if( puntosJugador === 21 ) {
        // Bloqueamos botones pedir y detener
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        // Turno de la computadora
        turnoComputadora( deck, puntosHTML, divCartasHTML );
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    // Turno de la computadora
    turnoComputadora( deck, puntosHTML, divCartasHTML );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    localStorage.clear();

    //Creamos nuevamente el deck y reseteamos el juego
    deck = crearDeck( tipos, especiales );

    puntosJugador = 0;
    // puntosComputadora = 0;

    puntosHTML.forEach(puntoHTML => puntoHTML.innerText = 0);
    divCartasHTML.forEach(divCartaHTML => divCartaHTML.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
})

