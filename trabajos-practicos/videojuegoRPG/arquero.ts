import { Personaje } from "./personaje";

//El arquero tiene un 30% de probabilidades de esquivar el daño enemigo gracias a su propiedad unica "agilidad".

export class Arquero extends Personaje {
  protected agilidad: number;

  constructor(nombre: string) {
    super(nombre);
    this.agilidad = 0.3;
  }

  recibirDaño(daño: number): void {
    if(this.isEstaVivo() == false){
      console.log(`${this.getNombre()} no puede ser atacado porque ya esta muerto`);
      return;
    }

    let dañoTotal: number;

    const randomNum = Math.random();
    // Si el número es menor o igual a 0.3 (30% de probabilidad) esquiva el ataque.
    if (randomNum <= this.agilidad) {
      console.log(`${this.getNombre()} ha esquivado el ataque!`);
      return;
    }

    dañoTotal = daño;

    //Se formatea el resultado para mayor legibilidad. Ejemplo: "1.8" en vez de "1.7999999"
    dañoTotal = parseFloat(dañoTotal.toFixed(1));

    //Se calcula la nueva vida que tendra el objetivo luego de recibir el daño.
    let vidaNueva = this.getPuntosDeVida() - dañoTotal;
    vidaNueva = parseFloat(vidaNueva.toFixed(1));

    console.log(
      `${this.getNombre()} recibe ${dañoTotal} de daño. Le quedan ${vidaNueva} puntos de vida`
    );

    //Se actualizan los puntos de vida calculados anteriormente.
    this.setPuntosDeVida(vidaNueva);
  }
}
