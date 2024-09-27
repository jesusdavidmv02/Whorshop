import { Direccion } from "./Direccion";
import { Persona } from "./Persona";
import { Proyecto } from "./Proyecto";

export class Empleado extends Persona{
    
    salario : number = 0; 

    constructor(nombre:string, edad : number, direccion : Direccion, salario : number )  {
        super(nombre, edad ,direccion);
        this.salario = salario;     
    }

    trabajar(){
        let hrTrabajo = 8 ;
        console.log("Hoy trabajo : " + hrTrabajo + "horas ");
    }

  saludar(): string {
    const direc = JSON.stringify(this.direccion) 
    
    let mensaje = "Empleado : Hola  " + this.nombre + "\n" ;
    mensaje += "Tu edad es : " + this.getEdad()  + "\n" ;
    mensaje += "El salario es : " + this.salario +  "\n";
    mensaje += "La dirrecion es  : " + direc.replace(/["{}\[\]]/g, ' ');

    return mensaje;
  }

}