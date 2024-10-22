import { Personaje } from "./personaje";

//El guerrero inflige mas daño a sus objetivos gracias a su propiedad unica "fuerza".
//El guerrero reduce el daño recibido gracias a su propiedad unica "armadura".

export class Guerrero extends Personaje {
  private fuerza: number;
  private armadura: number;

  constructor(nombre: string) {
    super(nombre);
    this.fuerza = 1.5;
    this.armadura = 1.3;
  }

  atacar(objetivo: Personaje): void {
    if(this.isEstaVivo() == false || objetivo.isEstaVivo() ==  false){
      console.log("el ataque se cancela, alguno de los personajes ya esta muerto.");
      return;
    }

    const daño = this.getPuntosDeAtaque() + this.fuerza;

    objetivo.recibirDaño(daño);

    if (objetivo.isEstaVivo() == false) {
      this.ganarExperiencia(objetivo.getNivel() * 50);
    }
  }

  recibirDaño(daño: number): void {

    if(this.isEstaVivo() == false){
      console.log(`${this.getNombre()} no puede ser atacado porque ya esta muerto`);
      return;
    }

    let dañoTotal = daño - this.armadura;

    //Se formatea el resultado para mayor legibilidad. Ejemplo: "1.8" en vez de "1.7999999"
    dañoTotal = parseFloat(dañoTotal.toFixed(1));

    //Se calcula la nueva vida que tendra el objetivo luego de recibir el daño.
    let vidaNueva = this.getPuntosDeVida() - dañoTotal;
    vidaNueva = parseFloat(vidaNueva.toFixed(1));

    console.log(
      `${this.getNombre()} recibe ${dañoTotal} de daño (${
        this.armadura
      } de daño reducido por armadura). Le quedan ${vidaNueva} puntos de vida`
    );

    //Se actualizan los puntos de vida calculados anteriormente.
    this.setPuntosDeVida(vidaNueva);
  }
}
