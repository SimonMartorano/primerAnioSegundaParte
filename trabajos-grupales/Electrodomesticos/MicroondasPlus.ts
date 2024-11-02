import { Microondas } from "./Microondas";

export class MicroondasPlus extends Microondas {
        constructor()
            {super();}

public presentacion():void
        {return console.log (this.nombre,"Plus")}
    
public encender():void
        {return console.log (this.nombre,"Plus", "Se a Encendido de manera correcta, Bienvenido")}
    
public apagar():void
        {return console.log (this.nombre,"Plus", "Se a Apagado de manera correcta, Hasta luego")}
            
public funcion1():void
        {return console.log (this.nombre,"Plus", "Esta descongelando los alimentos")}

 public funcion2():void
        {return console.log (this.nombre,"Plus", "Esta calentando los alimentos")}

  
}