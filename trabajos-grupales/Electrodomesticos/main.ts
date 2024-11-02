
import { Refrigerador } from "./Refrigerador";
import { Lavarropas } from "./Lavarropas";
import { Microondas } from "./Microondas";
import { MicroondasPlus } from "./MicroondasPlus";

let refri=new Refrigerador();
let lavar=new Lavarropas();
let micro=new Microondas();
let microPlus=new MicroondasPlus();


refri.presentacion();
lavar.presentacion();
micro.presentacion();
console.log("");

refri.encender();
refri.funcion();
refri.apagar();
console.log("");
lavar.encender();
lavar.funcion();
lavar.apagar();
console.log("");
micro.encender();
micro.funcion();
micro.wifi();
micro.actualizacion();
micro.apagar();
console.log("");

micro=new MicroondasPlus();
microPlus.presentacion();
console.log("");
microPlus.encender();
microPlus.funcion1();
microPlus.funcion2();
microPlus.apagar();
console.log("");


