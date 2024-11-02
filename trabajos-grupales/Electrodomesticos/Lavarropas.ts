import { Electrodomestico } from "./Electrodomestico";

export class Lavarropas extends Electrodomestico {
        constructor()
            {super("Lavarropas");}

public presentacion():void
        {return console.log (this.nombre)}

public encender():void
        {return console.log (this.nombre, "Encendido")}

public apagar():void
        {return console.log (this.nombre, "Apagado")}
        
public funcion():void
        {return console.log (this.nombre, "Limpia la ropa de forma automática")}
  
}