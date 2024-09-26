import { Direccion } from "./Direccion";
import { Persona } from "./Persona";

export const JsonPersona = (JSON : {nombre : string, edad : number, direccion : {calle:string , ciudad :string, pais: string}})  =>  {

    const persona = new Persona(JSON.nombre, JSON.edad ,  JSON.direccion );
    persona.saludar();

};

function invoque () : void {
 
   const JsonPerso =  {
        "nombre" : "Jesus David - pureba de JSON",
        "edad" : 10 ,
        "direccion" : {
            "calle" : "101 A # 109",
            "ciudad" : "Cartagena",
            "pais" : "Colombia"
            }
        }
        JsonPersona(JsonPerso);
    }

    invoque();