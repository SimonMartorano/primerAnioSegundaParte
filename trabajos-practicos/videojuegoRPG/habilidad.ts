import { Personaje } from "./personaje";

export abstract class Habilidad {
    private nombre:string;
    protected valorDeEfecto:number;

    constructor(nombre:string, valorDeEfecto:number){
        this.nombre = nombre;
        this.valorDeEfecto = valorDeEfecto;
    }

    public getNombre(): string {
        return this.nombre;
    }

    abstract usar(objetivo:Personaje):void;

}