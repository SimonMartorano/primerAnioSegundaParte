import { Servicio } from "./Servicio";

export abstract class Habitacion{
    protected numero:number;
    protected estado:string;
    protected precioBase:number;
    protected servicios:Servicio[] = [];

    constructor(numero:number, estado:string, precioBase:number){

        this.numero = numero;
        this.estado = estado;
        this.precioBase = precioBase;

    }

    public getPrecioBase():number{
        return this.precioBase;
    }

    public setPrecioBase(precioBase:number):void{
        this.precioBase = precioBase;
    }


    public reservar(numero:number):void{
        if(this.estado == "disponible"){
            this.estado = "reservada";
            console.log(`Habitacion ${numero} ha sido reservada`);
        }else{
            console.log("La habitacion no esta disponible");
        }
    }

    public liberar(numero:number){
        if(this.estado == "reservada"){
            this.estado = "liberar";
            console.log(`Habitacion ${numero} liberada`);
        }
    }

    abstract calcularCosto():void;

    public agregarServicio(servicio:Servicio):void{
        //Logica (que no haya servicios repetidos)
        if(!this.servicios.includes(servicio)){
            this.servicios.push(servicio);
        }
    }
}