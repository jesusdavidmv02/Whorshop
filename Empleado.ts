import { Persona } from "./Persona";

export class Empleado extends Persona{
    
    salario : number = 0; 

    constructor(nombre:string, edad : number , salario : number) {
        super(nombre, edad);
        this.salario = salario;        
    }

    trabajar(){
        let hrTrabajo = 8 ;
        console.log("Hoy trabajo : " + hrTrabajo + "horas ");
    }

  saludar(): string {
    return `Empleado: Hola ${this.nombre}, tu edad es ${this.getEdad()} y el salario es de ${this.salario}.`;
  }
  
}