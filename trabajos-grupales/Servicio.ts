export class Servicio{
    private nombre:string;
    private precio:number;

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }


    constructor(nombre:string ,precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }

    public spa(){};
    public desayuno(){};

}