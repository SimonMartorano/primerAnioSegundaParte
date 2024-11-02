export class Electrodomestico{
    protected nombre:string; 

    constructor (nombre:string) 
        {this.nombre=nombre;}

    public presentacion():void
    {return console.log ("Electrodomestico");}

    public encender():void
    {return console.log ("Electrodomestico encendido");}

    public apagar():void
    {return console.log ("Electrodomestico apagado");}

}
