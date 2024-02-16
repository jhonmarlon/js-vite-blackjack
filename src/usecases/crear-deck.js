import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S'],
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'S'],
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for(let i = 2; i <= 10; i++) {
        for(let tipo of tiposDeCarta) {
            deck.push(i + tipo)
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let especial of tiposEspeciales ) {
            deck.push(especial + tipo);
        }
    }

    // barajamos las cartas (elementos del Array deck) con la funcion shuffle de la libreria underscore.js
    deck = _.shuffle( deck );
    return deck;
}



