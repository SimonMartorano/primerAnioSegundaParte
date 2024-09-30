export class Auto {
  private marca: string;
  private modelo: string;
  private patente: string = "";

  constructor(marca: string, modelo: string, patente: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.setPatente(patente);
  }

  //Getters

  public getMarca(): string {
    return this.marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getPatente(): string {
    return this.patente;
  }

  public setPatente(patente: string): void {
    const regex = /^[A-Z]{3}[0-9]{3}$/;

    if (!regex.test(patente)) {
      throw new Error("Formato invalido de patente");
    } else {
      this.patente = patente;
    }
  }
}
