import { Persona } from "./Persona";

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