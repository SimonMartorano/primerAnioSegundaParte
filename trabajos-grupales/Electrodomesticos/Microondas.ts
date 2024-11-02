import { Electrodomestico } from "./Electrodomestico";

export class Microondas extends Electrodomestico {
        constructor()
            {super("Microondas");}

public presentacion():void
        {return console.log (this.nombre)}
    
public encender():void
        {return console.log (this.nombre, "Encendido")}
    
public apagar():void
        {return console.log (this.nombre, "Apagado")}
            
public funcion():void
        {return console.log (this.nombre, "Calentienta los alimentos más rápido")}
    
public wifi():void
        {return console.log (this.nombre, "Conectandose a la red")}

public actualizacion():void
{return console.log (this.nombre, "Recibiendo actualización de software mediante wifi")}
  
}