import { Servicio } from "./Servicio";
import { Habitacion } from "./Habitacion";
import { HabitacionSuite } from "./HabitacionSuite";


const desayuno:Servicio = new Servicio("desayuno", 500);
const spa:Servicio = new Servicio("spa", 600);
const tv:Servicio = new Servicio("tv", 700);
const wifi = new Servicio("wifi", 600);

const habitacion1 = new HabitacionSuite(1, "disponible", 800);




