import { Arquero } from "./arquero";
import { Personaje } from "./personaje";

//Evolucion de la clase arquero, con estadisticas mejoradas, y con una nueva propiedad "posibilidadDeCritico";

export class ArqueroDeElite extends Arquero{
    private posibilidadDeCritico:number;

    constructor(nombre:string){
        super(nombre);
        this.agilidad = 0.4;
        this.posibilidadDeCritico = 0.5;
        this.setVidaMaxima(this.nivel * 6);
        this.puntosDeVida = this.nivel * 6;
        this.setPuntosDeAtaque(this.nivel * 4);
    }

    atacar(objetivo: Personaje): void {
        if(this.isEstaVivo() == false || objetivo.isEstaVivo() ==  false){
            console.log("el ataque se cancela, alguno de los personajes ya esta muerto.");
            return;
          }

        let daño:number = this.getPuntosDeAtaque();

        const randomNum = Math.random();
        // Si el número es menor o igual a 0.5 (50% de probabilidad) hace mas daño;
        if (randomNum <= this.posibilidadDeCritico) {
          daño = daño * 1.8;
          console.log(`El personaje ${this.getNombre()} se prepara para realizar un golpe critico`);
        }
    
        objetivo.recibirDaño(daño);
    
        if (objetivo.isEstaVivo() == false) {
          this.ganarExperiencia(objetivo.getNivel() * 50);
        }
      }
}