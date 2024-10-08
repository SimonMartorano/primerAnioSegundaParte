import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
  private capacidadDeCarga: number;

  constructor(
    marca: string,
    modelo: string,
    patente: string,
    capacidadDeCarga: number
  ) {
    super(marca, modelo, patente);
    this.capacidadDeCarga = capacidadDeCarga;
  }

  public getCapacidadDeCarga(): number {
    return this.capacidadDeCarga;
  }

  public setCapacidadDeCarga(capacidadDeCarga: number): void {
    this.capacidadDeCarga = capacidadDeCarga;
  }
}