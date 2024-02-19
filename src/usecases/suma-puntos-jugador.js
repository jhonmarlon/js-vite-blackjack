import { valorCarta } from "./valor-carta";

export const sumaPuntosJugador = (carta, puntosJugador) => {
    
    console.log('valor carta', carta)
    const valorcarta = valorCarta( carta );

    return puntosJugador += valorcarta;
}