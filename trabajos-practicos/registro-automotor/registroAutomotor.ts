import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

export class registroAutomotor {
  private nombre: string;
  private autos: Auto[];
  private camiones: Camion[];
  private motos: Moto[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.autos = [];
    this.motos = [];
    this.camiones = [];
  }

  //Setters

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  //Getters

  public getNombre(): string {
    return this.nombre;
  }

  public getAutos(): Auto[] {

    //Devuelve una copia del arreglo de autos.
    const copiaAutos: Auto[] = this.autos.map((auto) => ({ ...auto } as Auto));
    return copiaAutos;
  }

  public getMotos(): Moto[] {
    
    const copiaMotos: Moto[] = this.motos.map((moto) => ({ ...moto } as Moto));
    return copiaMotos;

  }

  public getCamiones(): Camion[] {
    
    const copiaCamiones: Camion[] = this.camiones.map((camion) => ({ ...camion } as Camion));
    return copiaCamiones;

  }

  //Metodos para administrar vehiculos

  /* ------------------------------------------- AUTOS ---------------------------------------------------*/

  public agregarAuto(auto: Auto): void {
    //Si el parametro ingresado no es indefinido y el auto ingresado no existe ya en el arreglo, agregarlo.
    if (auto != undefined && !this.autos.includes(auto)) {
      this.autos.push(auto);
    }
  }

  public modificarAuto(patente: string, auto: Auto): void {
    //Recorre los autos basandose en la patente, al encontrarla reemplaza ese auto por el ingresado por parametro.
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].getPatente() === patente) {
        this.autos[i] = auto;
      }
    }
  }

  public darDeBajaAuto(patente: string): void {
    this.autos = this.autos.filter((auto) => auto.getPatente() != patente);
  }
  

  /* ------------------------------------------- MOTOS ---------------------------------------------------*/

  public agregarMoto(moto: Moto): void {
    
    if (moto != undefined && !this.motos.includes(moto)) {
      this.motos.push(moto);
    }
  }

  public modificarMoto(patente: string, moto: Moto): void {
    
    for (let i = 0; i < this.motos.length; i++) {
      if (this.motos[i].getPatente() === patente) {
        this.motos[i] = moto;
      }
    }
  }

  public darDeBajaMoto(patente: string): void {
    this.motos = this.motos.filter((moto) => moto.getPatente() != patente);
  }

  /* ------------------------------------------- CAMIONES ---------------------------------------------------*/

  public agregarCamion(camion: Camion): void {
    //Si el parametro ingresado no es indefinido y el camión ingresado no existe ya en el arreglo, agregarlo.
    if (camion != undefined && !this.camiones.includes(camion)) {
      this.camiones.push(camion);
    }
  }

  public modificarCamion(patente: string, camion: Camion): void {
    //Recorre los camiones basandose en la patente, al encontrarla reemplaza ese camión por el ingresado por parametro.
    for (let i = 0; i < this.camiones.length; i++) {
      if (this.camiones[i].getPatente() === patente) {
        this.camiones[i] = camion;
      }
    }
  }

  public darDeBajaCamion(patente: string): void {
    this.camiones = this.camiones.filter((camion) => camion.getPatente() != patente);
  }


}
