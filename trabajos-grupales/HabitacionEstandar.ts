import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class HabitacionEstandar extends Habitacion{

    

    constructor(numero:number, estado:string, precioBase:number){
        super(numero, estado, precioBase); 
    
    }

    public setPrecioBase(precioBase:number): void {
        this.precioBase = precioBase;
    }

    public calcularCosto(precioBase:number, servicios:Servicio[]) {
        const precioTotal:number = 1000;

        let precioServicios:number = 0;
        for(let servicio of servicios){
            precioServicios += servicio.getPrecio();
        }

       return precioTotal + precioServicios;
    }


}