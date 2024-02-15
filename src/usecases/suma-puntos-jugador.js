import { valorCarta } from "./valor-carta";

export const sumaPuntosJugador = ( tipoJugador, carta ) => {
    const valorcarta = valorCarta( carta );

    tipoJugador === 0 
        ? (puntosJugador += valorcarta) 
        : (puntosComputadora += valorcarta); 

    tipoJugador === 0 
        ? (puntosHTML[0].innerText = puntosJugador)
        : (puntosHTML[1].innerText = puntosComputadora)
}