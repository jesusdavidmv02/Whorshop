import { Empleado } from "./Empleado";

export class Empresa {
 
    listEmpleado : Array<Empleado> = []; 

    constructor() {
        this.listEmpleado = []
    }
 
    addEmpleado( empleado : Empleado) :void {
        this.listEmpleado.push(empleado);
    }

    deleteEmpleado(nombre: string) : Boolean {
        let posicion = -1
        for (let i = 0; i < this.listEmpleado.length; i++) {
            const delEmpleado = this.listEmpleado[i];
            if (delEmpleado.nombre === nombre) {
                posicion = i
            }
        }
        if (posicion === -1) {
            return false;
            // console.log("El estudiante no existe")
        }else {
            // console.log("Esta en la posicion : " + posicion);
            this.listEmpleado.splice(posicion);
            return true;
        }
    }

    totalSalario(){
        let total = 0  
        for (let i = 0; i < this.listEmpleado.length; i++) {
            total = total + this.listEmpleado[i].salario;     
        }
        console.log("La nomina total de la empresa es :  $ "  + total);
    }

    listarEmpleado() {
        console.log(this.listEmpleado);
    }



}