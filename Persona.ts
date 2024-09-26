import { Direccion } from "./Direccion";
import { Carro, Moto, Vehiculo } from "./Vehiculo";

export class Persona {
    
    nombre: string = "";
    private edad: number = 0;
    direccion: Direccion | undefined ;
    vehiculo?: Vehiculo | Moto |Carro [] = [] ;
 
    constructor(nombre : string , edad : number , direccion : Direccion  , vehiculo?: Vehiculo | Moto | Carro [] )  {
        this.nombre = nombre;
        this.edad= edad;
        this.direccion = direccion;
        this.vehiculo = vehiculo;
    }

    getEdad(): number {
        return this.edad;
    }
    
    saludar(): void{
        console.log("\nMi nombre es : " + this.nombre +  " \nEdad es  : " + this.getEdad() +  " años" );
        console.log("La direccion es : " );
        console.log(this.direccion);
        console.log("_____________________________");
    }   
    
}