import { Electrodomestico } from "./Electrodomestico";

export class Refrigerador extends Electrodomestico {
        constructor()
            {super("Refrigerador");}

public presentacion():void
        {return console.log (this.nombre)}
    
public encender():void
        {return console.log (this.nombre, "Encendido")}
    
public apagar():void
        {return console.log (this.nombre, "Apagado")}
            
public funcion():void
        {return console.log (this.nombre, "Mantiene los alimentos frescos")}
    
}