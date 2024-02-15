/**
 * Esta función retorna una carta
 * @param {Array<String>} deck Ejemplo: ['2A', '3A', '4A', '5A' .....],
 * @returns {String} retorna una carta
 */
export const pedirCarta = ( deck ) => {

    if( !deck ) 
        throw new Error('deck es obligatorio como un arreglo de string');

    if(deck.length === 0) {
        throw 'No hay cartas en el Deck';
    }

    const carta = deck.pop();
    return carta;
}