import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class HabitacionSuite extends Habitacion{

    private servicosGratuitos:string[] = ["television", "spa", "wifi", "desayuno"];

    constructor(numero:number, estado:string, precioBase:number){
        super(numero, estado, precioBase); 
    
    }

    public setPrecioBase(precioBase:number): void {
        this.precioBase = precioBase;
    }

    public calcularCosto() {

        let precioTotal:number = 0;

        this.servicios.forEach(servicio => {
            if(!this.servicosGratuitos.includes(servicio.getNombre())){
                precioTotal = precioTotal + servicio.getPrecio();
            }
        });

        return precioTotal + this.precioBase;
    }


}