import { Personaje } from "./personaje";
import { Guerrero } from "./guerrero";
import { Habilidad } from "./habilidad";
import { BolaDeFuego } from "./bolaDeFuego";
import { Curacion } from "./curacion";
import { Arquero } from "./arquero";
import { Mago } from "./mago";
import { ArqueroDeElite } from "./arqueroDeElite";

//Creamos algunos personajes.
const aresElGuerrero = new Guerrero("Ares el guerrero");
const kratosElGuerrero = new Guerrero("Kratos el guerrero");
const circeElMago = new Mago("Circe el mago");
const merlinElMago = new Mago("Merlin el mago");
let odiseoElArquero = new Arquero("Odiseo el arquero");


//Simulacion de una batalla, lo mas variada posible.

aresElGuerrero.atacar(odiseoElArquero);

aresElGuerrero.atacar(circeElMago);
circeElMago.aprenderHabilidad(new Curacion);
circeElMago.aprenderHabilidad(new Curacion);
circeElMago.usarHabilidad(new BolaDeFuego, aresElGuerrero);
circeElMago.usarHabilidad(new Curacion, circeElMago);
aresElGuerrero.atacar(circeElMago);
aresElGuerrero.atacar(circeElMago);

odiseoElArquero.atacar(aresElGuerrero);
odiseoElArquero.atacar(aresElGuerrero);
odiseoElArquero.atacar(aresElGuerrero);
odiseoElArquero.atacar(aresElGuerrero);
odiseoElArquero.atacar(aresElGuerrero);
odiseoElArquero.atacar(aresElGuerrero);

odiseoElArquero.atacar(merlinElMago);
odiseoElArquero.atacar(merlinElMago);


console.log(odiseoElArquero);
odiseoElArquero = new ArqueroDeElite("Odiseo Arquero de Elite");;
console.log(odiseoElArquero);

odiseoElArquero.atacar(kratosElGuerrero);
odiseoElArquero.atacar(kratosElGuerrero);













