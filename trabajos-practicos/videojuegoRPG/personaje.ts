export class Personaje {
  private nombre: string;
  protected nivel: number;
  private experiencia: number;
  protected vidaMaxima: number = 0;
  protected puntosDeVida: number;
  protected puntosDeAtaque: number = 0;
  private estaVivo: boolean;
  

  constructor(nombre: string) {
    this.nombre = nombre;
    this.nivel = 1;
    this.experiencia = 0;
    this.setVidaMaxima(this.nivel * 4);
    this.puntosDeVida = this.nivel * 4;
    this.setPuntosDeAtaque(this.nivel * 2);
    this.estaVivo = true;
  }

  //METODOS

  atacar(objetivo: Personaje): void {
    if(this.isEstaVivo() == false || objetivo.isEstaVivo() ==  false){
      console.log("el ataque se cancela, alguno de los personajes ya esta muerto.");
      return;
    }

    const daño = this.getPuntosDeAtaque();

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

    //El guerrero reduce el daño recibido gracias a su propiedad unica "armadura".
    let dañoTotal = daño;

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

  protected ganarExperiencia(experiencia: number): void {
    //Aumentar la experiencia actual
    this.experiencia += experiencia;
    console.log(
      `${this.getNombre()} ha ganado ${experiencia} puntos de experiencia!`
    );

    //La experiencia necesaria para subir de nivel es el nivel actual multiplicado por 100.
    const experienciaNecesaria = this.nivel * 100;
    if (this.experiencia >= experienciaNecesaria) {
      //calcular cuantos niveles puede subir
      const nivelesASubir = Math.floor(this.experiencia / experienciaNecesaria);

      // actualizar la experiencia sobrante
      this.experiencia = this.experiencia % experienciaNecesaria;

      // Subir los niveles calculados
      this.subirNivel(nivelesASubir);

      //Aumentar los atributos del personaje, acorde a su nuevo nivel.
      this.setVidaMaxima(this.nivel * 4);
      this.setPuntosDeAtaque(this.nivel * 2);
    }
  }

  private subirNivel(niveles: number): void {
    this.nivel += niveles;
    console.log(`${this.getNombre()} ha subido al nivel ${this.getNivel()} !`);
  }

  public saludar(): void {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }

  //GETTERS

  public getNombre(): string {
    return this.nombre;
  }

  public getNivel(): number {
    return this.nivel;
  }

  public getExperiencia(): number {
    return this.experiencia;
  }

  public getVidaMaxima(): number {
    return this.nivel * 4;
  }

  public getPuntosDeVida(): number {
    return this.puntosDeVida;
  }

  public isEstaVivo(): boolean {
    return this.estaVivo;
  }

  public getPuntosDeAtaque(): number {
    return this.puntosDeAtaque;
  }

  //SETTERS

  public setPuntosDeVida(puntosDeVida: number): void {
    this.puntosDeVida = puntosDeVida;

    if (puntosDeVida <= 0) {
      this.setEstaVivo(false);
      console.log(`El personaje ${this.getNombre()} ha muerto.`);
    }
  }

  protected setPuntosDeAtaque(puntosDeAtaque: number): void {
    this.puntosDeAtaque = puntosDeAtaque;
  }

  protected setVidaMaxima(vidaMaxima: number): void {
    this.vidaMaxima = vidaMaxima;
  }

  protected setEstaVivo(estaVivo: boolean): void {
    this.estaVivo = estaVivo;
  }
}
