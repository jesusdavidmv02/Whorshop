import { Persona } from "./Persona";
import { Empleado } from "./Empleado";
import { Direccion } from "./Direccion";

// la clase persona 
const persona : Persona [] = [
    new Persona("Jesus David",24, {calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" }, []  ),
    new Persona("Emilo jose",24, {calle : "9" , ciudad : "new york" , pais : "Estado Unidos" } ),
    new Persona("Keiner figeroa",21 , {calle : "10-27" , ciudad : "Barraquila" , pais : "Colombia" }, []),
    new Persona("Wendy",21 , {calle : "avenida 5" , ciudad : "Medellin" , pais : "Colombia" }),
    new Persona("Maria Camila",19 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Colombia"} , [] ),
    new Persona("Ketty ",15 ,  {calle: "101 a #30-99 " , ciudad : "Cartagena" , pais : "Colombia"}),
    new Persona("Kevin",27 ,  {calle: "L 1 # 38 " , ciudad : "Barraquilla" , pais : "Colombia"}),
    new Persona("Eliecer",38 , {calle: "L 1 # 38 " , ciudad : "Medellin" , pais : "Colombia"}),
    new Persona("Rosa",60 , {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"} ),
    new Persona("Karen",45 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"} , [])
];


persona.forEach((persona) => persona.saludar());
 
 const empleado : Empleado[] = [ 
    new Empleado("Jesus David",24, {calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" }, 1000000 ),
    new Empleado("Emilo jose",24, {calle : "9" , ciudad : "new york" , pais : "Estado Unidos" } , 1000000),
    new Empleado("Keiner figeroa",21 , {calle : "10-27" , ciudad : "Barraquila" , pais : "Colombia" }, 1000000),
    new Empleado("Wendy",21 , {calle : "avenida 5" , ciudad : "Medellin" , pais : "Colombia" }, 1000000 ),
    new Empleado("Maria Camila",19 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Colombia"},10000 ),
    new Empleado("Ketty ",15 ,  {calle: "101 a #30-99 " , ciudad : "Cartagena" , pais : "Colombia"}, 100000),
    new Empleado("Kevin",27 ,  {calle: "L 1 # 38 " , ciudad : "Barraquilla" , pais : "Colombia"} , 10000),
    new Empleado("Eliecer",38 , {calle: "L 1 # 38 " , ciudad : "Medellin" , pais : "Colombia"} , 10000),
    new Empleado("Rosa",60 , {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"}, 100000 ),
    new Empleado("Karen",45 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"} , 1000)
 ];

empleado.forEach((empleado) => {
    console.log("_______________________");
    console.log(empleado.saludar());
    console.log("_______________________");
});


