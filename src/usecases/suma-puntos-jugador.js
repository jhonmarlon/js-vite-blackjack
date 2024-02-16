import { valorCarta } from "./valor-carta";

export const sumaPuntosJugador = (carta, puntosJugador) => {

    const valorcarta = valorCarta( carta );

    return puntosJugador += valorcarta;
}