import { Empleado } from "./Empleado"

export const objEmpledo = (JSON : {nombre : string, edad : number,  direccion : {calle:string , ciudad :string, pais: string} , salario: number}) : Empleado  =>  {

    const empleado = new Empleado(JSON.nombre, JSON.edad ,  JSON.direccion, JSON.salario);
    return empleado 

};

function  debueveJson ( empleado : Empleado) : object {

    const repueta = {
        nombre : empleado.nombre,
        edad : empleado.getEdad(),
        direccion : empleado.direccion ,
        salario : empleado.salario
    }
    return  repueta

} 

const jsonEmpleado = [ 
    { 
        nombre :  "Jesus David --- empleado json",
        edad : 1, 
        direccion : {  calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" },
        salario :  10000  
    } ,
    { 
        nombre :  "Emilio",
        edad : 2, 
        direccion : {  calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" },
        salario :  10000
    } ,
    { 
        nombre :  "Kevin",
        edad : 3, 
        direccion : {  calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" },
        salario :  10000
    } ,

    { 
        nombre :  "Keiner",
        edad : 4, 
        direccion : {  calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" },
        salario :  10000
    } ,    { 
        nombre :  "Rosa",
        edad : 5, 
        direccion : {  calle : "101 a #30-90", ciudad : "Orlado", pais : "Estados Unido" },
        salario :  10000
    } ,    { 
        nombre :  "Ketty",
        edad : 6, 
        direccion : {  calle : "101 a #30-90", ciudad : "Caraca", pais : "Venezuela" },
        salario :  10000
    } ,    { 
        nombre :  "Maria",
        edad : 7, 
        direccion : {  calle : "101 a #30-90", ciudad : "cali", pais : "Colombia" },
        salario :  10000
    } ,    { 
        nombre :  "Camila",
        edad : 8, 
        direccion : {  calle : "101 a #30-90", ciudad : "Barraquilla", pais : "Colombia" },
        salario :  10000
    },
    { 
        nombre :  "Rafael",
        edad : 9, 
        direccion : {  calle : "101 a #30-90", ciudad : "Medellin", pais : "Colombia" },
        salario :  10000
    } ,    { 
        nombre :  "Wendy",
        edad : 10, 
        direccion : {  calle : "101 a #30-90", ciudad : "Medellin", pais : "Colombia" },
        salario :  10000
    } 
];


// console.log(jsonEmpleado);
// jsonEmpleado.forEach((jsonEmpleado) => objEmpledo(jsonEmpleado))

const emp  : Empleado [] = [];

console.log(" \n ___________ En la Clase empleados : __________  \n ");

for (let i = 0; i < jsonEmpleado.length; i++) {
   const aux  = objEmpledo(jsonEmpleado[i]);
   emp.push(aux);
   console.log(aux);
}

console.log(" \n  ______________En json : _______________ \n ");

for (let i = 0; i < emp.length; i++) {
    const aux  = debueveJson(emp[i]);
    console.log(aux);
 }
