import { Empleado } from "./Empleado";

export class Proyecto {
    
    name : string = ""
    empleado : Empleado [] = [] ;

    constructor(name : string ,empleado : Empleado []) {
        this.name = name; 
        this.empleado  = empleado ;  
    }

    verProyecto(): void{
        
        console.log("EL nombre de Proyecto es : " + this.name );

        if (this.empleado?.length > 1 ){
            console.log("Tiene varios empleado asignado : ");

            for (let i = 0; i < this.empleado?.length; i++) {
                console.log( (i+1) + " . " +this.empleado[i].nombre );
            }

        }else{
            console.log(" 1. " + this.empleado?.[0].nombre );

        }
    }
}