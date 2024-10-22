import { Personaje } from "./personaje";
import { Habilidad } from "./habilidad";

//El mago es el unico personaje que puede aprender y lanzar habilidades.

export class Mago extends Personaje {
  private habilidades: Habilidad[];

  constructor(nombre: string) {
    super(nombre);
    this.habilidades = [];
  }

  public aprenderHabilidad(habilidad: Habilidad): void {
    //Si el personaje NO TIENE la habilidad que se desea APRENDER, aprenderla.
    if (
      !this.habilidades.some((h) => h.getNombre() === habilidad.getNombre())
    ) {
      this.habilidades.push(habilidad);
      console.log(
        `${this.getNombre()} ha aprendido la habilidad ${habilidad.getNombre()}`
      );
    } else {
      console.log(
        `${this.getNombre()} ya posee la habilidad ${habilidad.getNombre()}`
      );
    }
  }

  public usarHabilidad(habilidad: Habilidad, objetivo: Personaje): void {
    //Si el personaje NO TIENE la habilidad que se desea USAR, mostrar error, de lo contrario, usarla.
    if (
      !this.habilidades.some((h) => h.getNombre() === habilidad.getNombre())
    ) {
      console.log(
        `${this.getNombre()} no posee la habilidad ${habilidad.getNombre()}`
      );
    } else {
      habilidad.usar(objetivo);
    }
  }

  public getHabilidades(): Habilidad[] {
    //Devuelve una copia del arreglo de habilidades;
    const copiaHabilidades: Habilidad[] = this.habilidades.map(
      (habilidad) => ({ ...habilidad } as Habilidad)
    );
    return copiaHabilidades;
  }

}
