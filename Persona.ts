import { Direccion } from "./Direccion";
import { EstadoCivil } from "./EstadoCivil";
import { Carro, Moto, Vehiculo } from "./Vehiculo";

export class Persona {
    
    nombre: string = "";
    private edad: number = 0;
    direccion: Direccion | undefined ;
    vehiculo?: Vehiculo | Moto |Carro [] = [] ;
    estadoCivil?: EstadoCivil ;
 
    constructor(nombre : string, edad : number, direccion : Direccion,  estadoCivil? : EstadoCivil,  vehiculo?: Vehiculo | Moto | Carro []  )  {
        this.nombre = nombre;
        this.edad= edad;
        this.direccion = direccion;
        this.estadoCivil = estadoCivil;
        this.vehiculo = vehiculo;
    }

    getEdad(): number {
        return this.edad;
    }
    
    saludar(): void{
        console.log("\nMi nombre es : " + this.nombre +  " \nEdad es  : " + this.getEdad() +  " años" );
        console.log("Su estado civil es : " + this.estadoCivil);
        console.log("La direccion es : " );
        console.log(this.direccion);
        console.log("_____________________________");
    }   
    
}