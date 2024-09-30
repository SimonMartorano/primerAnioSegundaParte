import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { registroAutomotor } from "./registroAutomotor";

//Creamos una instancia de registroAutomotor
const automotor1 = new registroAutomotor("Registro Automotor Olavarria");

//Agregamos algunos autos
automotor1.agregarAuto(new Auto("Honda", "Civic", "AAA111"));
automotor1.agregarAuto(new Auto("Fiat", "Toro", "BBB222"));
automotor1.agregarAuto(new Auto("Ford", "Ranger", "CCC333"));

//Modificamos el auto de la patente especificada
automotor1.modificarAuto("BBB222", new Auto("Nissan", "Frontier", "DDD444"));

//Eliminamos el auto de la patente especificada
automotor1.darDeBajaAuto("CCC333");

//Imprimimos algunos datos
console.log(automotor1.getNombre()); 
console.log(automotor1.getAutos());







