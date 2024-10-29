import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class HabitacionSuite extends Habitacion{

    

    constructor(numero:number, estado:string, precioBase:number){
        super(numero, estado, precioBase); 
    
    }

    public setPrecioBase(precioBase:number): void {
        this.precioBase = precioBase;
    }

    public calcularCosto(precioBase:number, servicios:Servicio[]) {
        return this.precioBase;
    }


}