import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
  private cilindrada: number;

  constructor(
    marca: string,
    modelo: string,
    patente: string,
    cilindrada: number
  ) {
    super(marca, modelo, patente);
    this.cilindrada = cilindrada;
  }

  public getCilindrada(): number {
    return this.cilindrada;
  }

  public setCilindrada(cilindrada: number): void {
    this.cilindrada = cilindrada;
  }
}