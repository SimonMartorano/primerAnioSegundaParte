import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { registroAutomotor } from "./registroAutomotor";

//Creamos una instancia de registroAutomotor
const automotor1 = new registroAutomotor("Registro Automotor Olavarria");

//Agregamos algunos autos
automotor1.agregarVehiculo(new Auto("Honda", "Civic", "AAA111", 4));
automotor1.agregarVehiculo(new Auto("Fiat", "Toro", "BBB222", 4));
automotor1.agregarVehiculo(new Auto("Ford", "Ranger", "CCC333", 4));

//Modificamos el auto de la patente especificada
automotor1.modificarVehiculo("BBB222", new Auto("Nissan", "Frontier", "DDD444", 4));

//Eliminamos el auto de la patente especificada
automotor1.darDeBajaVehiculo("CCC333");

//Imprimimos algunos datos
console.log(automotor1.getNombre()); 
console.log(automotor1.getAutos());







