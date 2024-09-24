import { Persona } from "./Persona";

class Empleado extends Persona{
    
    salario : number = 0; 

    constructor(nombre:string, edad : number , salario : number) {
        super(nombre, edad);
        this.salario = salario;        
    }

    trabajar(){
        let hrTrabajo = 8 ;
        console.log("Hoy trabajo : " + hrTrabajo + "horas ");
    }

    saludar(): void {
        console.log(`Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y el salario es de ${this.salario}`);
    }

}