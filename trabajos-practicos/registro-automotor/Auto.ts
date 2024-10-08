import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
  private cantidadPuertas: number;

  constructor(
    marca: string,
    modelo: string,
    patente: string,
    cantidadPuertas: number
  ) {
    super(marca, modelo, patente);
    this.cantidadPuertas = cantidadPuertas;
  }

  public getCantidadPuertas(): number {
    return this.cantidadPuertas;
  }

  public setCantidadPuertas(cantidadPuertas: number): void {
    this.cantidadPuertas = cantidadPuertas;
  }
}
