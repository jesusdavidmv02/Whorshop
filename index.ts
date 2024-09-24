import { Persona } from "./Persona";
import { Empleado } from "./Empleado";


// la clase persona 
const persona : Persona [] = [
    new Persona("Jesus David",24),
    new Persona("Emilo jose",24),
    new Persona("Keiner figeroa",21),
    new Persona("Wendy",21),
    new Persona("Maria Camila",19),
    new Persona("Ketty ",15),
    new Persona("Kevin",27),
    new Persona("Eliecer",38),
    new Persona("Rosa",60),
    new Persona("Karen",45),
];


persona.forEach((persona) => persona.saludar());

// la clase empleado : 
const empleado : Empleado[] = [ 
    new Empleado("Jesus David",24, 10000),
    new Empleado("Keiner figeroa",21, 800000),
    new Empleado("Wendy",21 , 800000),
    new Empleado("Maria Camila",19, 200000),
    new Empleado("Ketty ",15, 300000),
    new Empleado("Kevin",27, 4000000),
    new Empleado("Eliecer",38, 700000),
    new Empleado("Rosa",60, 800000),
    new Empleado("Karen",45, 999000)
];

empleado.forEach((empleado) => console.log(empleado.saludar()));
