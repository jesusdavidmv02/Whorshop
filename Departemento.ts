import { Empleado } from "./Empleado";

export class Departamento {

    name : string = "";
    listEmpleado : Empleado [] = []; 

    constructor(name : string) {
        this.name = name;
        this.listEmpleado = []
    }
 
    addEmpleadoDpto( empleado : Empleado) :void {
        this.listEmpleado.push(empleado);
    }

    deleteEmpleadoDpto(nombre: string) : Boolean {
        let posicion = -1
        for (let i = 0; i < this.listEmpleado.length; i++) {
            const delEmpleado = this.listEmpleado[i];
            if (delEmpleado.nombre === nombre) {
                posicion = i
            }
        }
        if (posicion === -1) {
            return false;
        }else {
            this.listEmpleado.splice(posicion);
            return true;
        }
    }

   
    listarEmpleadoDpto() {
        console.log("##############  " +this.name + " ################## ");   
        for (let i = 0; i < this.listEmpleado.length; i++) {
            console.log( i + ". " +  this.listEmpleado[i].nombre);
        }
    }



}