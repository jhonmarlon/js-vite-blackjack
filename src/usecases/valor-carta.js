/**
 * Esta función retorna el valor numérico de la carta
 * @param {String} carta Ejemplo: 10H
 * @returns {Number} retorna valor numérico de la carta
 */
export const valorCarta = ( carta ) => {

    if( !carta || (typeof carta !== 'string')) throw new Error('carta es obligatorio como un string');
    
    const valor = carta.substring(0, carta.length - 1);
 
    return ( isNaN(valor) ) ? 
                (( valor === 'A' ) ? 11 : 10) 
                : (valor * 1);
                
}
