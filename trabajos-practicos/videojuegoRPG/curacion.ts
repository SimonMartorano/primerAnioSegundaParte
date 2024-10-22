import { Habilidad } from "./habilidad";
import { Personaje } from "./personaje";

export class Curacion extends Habilidad {
  constructor() {
    super("CURACION", 3);
  }

  usar(objetivo: Personaje): void {

    //Se calcula la vida que el personaje tendra luego de ser curado por el echizo curacion.
    const vidaLuegoDeCurar: number = objetivo.getPuntosDeVida() + this.valorDeEfecto;

    //Si los puntos de vida actuales + la cantidad de curacion superan o igualan la vida maxima, curar toda la vida (evitando pasarse de más).
    if (vidaLuegoDeCurar >= objetivo.getVidaMaxima()) {
      objetivo.setPuntosDeVida(objetivo.getVidaMaxima());

      //De lo contrario simplemente subir la vida la cantidad de curacion especifica.
    } else {
      objetivo.setPuntosDeVida(vidaLuegoDeCurar);
    }
  }
}
