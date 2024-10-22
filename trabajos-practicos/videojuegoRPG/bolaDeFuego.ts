import {Habilidad} from "./habilidad";
import { Personaje } from "./personaje";

export class BolaDeFuego extends Habilidad {

    constructor(){
        super("BOLA DE FUEGO", 5);
    }

    usar(objetivo:Personaje):void{
        objetivo.recibirDaño(this.valorDeEfecto);
    }
}