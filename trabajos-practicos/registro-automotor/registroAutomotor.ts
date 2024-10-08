import { Vehiculo } from "./Vehiculo";
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
    const copiaCamiones: Camion[] = this.camiones.map(
      (camion) => ({ ...camion } as Camion)
    );
    return copiaCamiones;
  }

  //Metodos para administrar vehiculos

  public agregarVehiculo(vehiculo: Vehiculo): void {
    if (vehiculo != undefined) {
      //Se verifica de que tipo de vehiculo se trata y si no existe ya su patente en el arreglo correspondiente.
      if (
        vehiculo instanceof Auto &&
        !this.autos.some((a) => a.getPatente() === vehiculo.getPatente())
      ) {
        this.autos.push(vehiculo);
      } else if (
        vehiculo instanceof Moto &&
        !this.motos.some((m) => m.getPatente() === vehiculo.getPatente())
      ) {
        this.motos.push(vehiculo);
      } else if (
        vehiculo instanceof Camion &&
        !this.camiones.some((c) => c.getPatente() === vehiculo.getPatente())
      ) {
        this.camiones.push(vehiculo);
      }
    }
  }

  public modificarVehiculo(patente: string, vehiculo: Vehiculo): void {
    if (vehiculo instanceof Auto) {
      for (let i = 0; i < this.autos.length; i++) {
        if (this.autos[i].getPatente() === patente) {
          this.autos[i] = vehiculo;
        }
      }
    } else if (vehiculo instanceof Moto) {
      for (let i = 0; i < this.motos.length; i++) {
        if (this.motos[i].getPatente() === patente) {
          this.motos[i] = vehiculo;
        }
      }
    } else if (vehiculo instanceof Camion) {
      for (let i = 0; i < this.camiones.length; i++) {
        if (this.camiones[i].getPatente() === patente) {
          this.camiones[i] = vehiculo;
        }
      }
    }
  }

  public darDeBajaVehiculo(patente: string): void {
    this.autos = this.autos.filter((auto) => auto.getPatente() != patente);
    this.motos = this.motos.filter((moto) => moto.getPatente() != patente);
    this.camiones = this.camiones.filter(
      (camiones) => camiones.getPatente() != patente
    );
  }
}
