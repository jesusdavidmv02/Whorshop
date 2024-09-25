import { Direccion } from "./Direccion";

export class Persona {
    
    nombre: string = "";
    private edad: number = 0;
    direccion: Direccion | undefined ;
    

    constructor(nombre : string , edad : number , direccion : Direccion)  {
        this.nombre = nombre;
        this.edad= edad;
        this.direccion=direccion;
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