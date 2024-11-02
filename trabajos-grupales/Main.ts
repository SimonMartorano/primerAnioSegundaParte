import { Servicio } from "./Servicio";
import { Habitacion } from "./Habitacion";
import { HabitacionSuite } from "./HabitacionSuite";
import { HabitacionEstandar } from "./HabitacionEstandar";


const desayuno:Servicio = new Servicio("desayuno", 500);
const spa:Servicio = new Servicio("spa", 600);
const television:Servicio = new Servicio("television", 700);
const wifi = new Servicio("wifi", 600);
const cochera = new Servicio("cochera", 400);


const habitacion1 = new HabitacionEstandar(1, "disponible", 1000);
const habitacion2 = new HabitacionSuite(2, "reservada", 1000);


habitacion2.agregarServicio(desayuno);
habitacion2.agregarServicio(spa);
habitacion2.agregarServicio(television);
habitacion2.agregarServicio(wifi);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);
habitacion2.agregarServicio(cochera);



console.log(habitacion2);

console.log(habitacion2.calcularCosto());


habitacion1.agregarServicio(desayuno);
habitacion1.agregarServicio(spa);
habitacion1.agregarServicio(television);
habitacion1.agregarServicio(wifi);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);
habitacion1.agregarServicio(cochera);



console.log(habitacion1);

console.log(habitacion1.calcularCosto());











//