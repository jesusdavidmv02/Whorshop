import { Persona } from "./Persona";
import { Empleado } from "./Empleado";
import { Direccion } from "./Direccion";
import { EstadoCivil } from "./EstadoCivil";
import { Empresa } from "./Empresa";
import { Proyecto } from "./Proyecto";

// la clase persona 
const persona : Persona [] = [
    new Persona("Jesus David",24, {calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" }, EstadoCivil.SOLTERO , [] ),
    new Persona("Emilo jose",24, {calle : "9" , ciudad : "new york" , pais : "Estado Unidos" } ,EstadoCivil.CASADO  , [] ),
    new Persona("Keiner figeroa",21 , {calle : "10-27" , ciudad : "Barraquila" , pais : "Colombia" }, EstadoCivil.DIVORCIADO , [] ),
    new Persona("Wendy",21 , {calle : "avenida 5" , ciudad : "Medellin" , pais : "Colombia" } , EstadoCivil.CASADO ),
    new Persona("Maria Camila",19 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Colombia"} , EstadoCivil.DIVORCIADO , [] ),
    new Persona("Ketty ",15 ,  {calle: "101 a #30-99 " , ciudad : "Cartagena" , pais : "Colombia"}, EstadoCivil.SOLTERO),
    new Persona("Kevin",27 ,  {calle: "L 1 # 38 " , ciudad : "Barraquilla" , pais : "Colombia"} , EstadoCivil.SOLTERO ),
    new Persona("Eliecer",38 , {calle: "L 1 # 38 " , ciudad : "Medellin" , pais : "Colombia"} , EstadoCivil.DIVORCIADO ),
    new Persona("Rosa",60 , {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"}, EstadoCivil.DIVORCIADO ),
    new Persona("Karen",45 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"} ,  EstadoCivil.DIVORCIADO  ,[])
];

console.log(" \n \n____________________Imprime persona __________________")
persona.forEach((persona) => persona.saludar());
 
// la clase empleado 
 const empleado : Empleado[] = [ 
    new Empleado("Jesus David",24, {calle : "101 a #30-90", ciudad : "Cartagena", pais : "Colombia" }, 2000000 ),
    new Empleado("Emilo jose",24, {calle : "9" , ciudad : "new york" , pais : "Estado Unidos" } , 2000000),
    new Empleado("Keiner figeroa",21 , {calle : "10-27" , ciudad : "Barraquila" , pais : "Colombia" }, 2000000),
    new Empleado("Wendy",21 , {calle : "avenida 5" , ciudad : "Medellin" , pais : "Colombia" }, 2000000 ),
    new Empleado("Maria Camila",19 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Colombia"},2000000 ),
    new Empleado("Ketty ",15 ,  {calle: "101 a #30-99 " , ciudad : "Cartagena" , pais : "Colombia"}, 1000000),
    new Empleado("Kevin",27 ,  {calle: "L 1 # 38 " , ciudad : "Barraquilla" , pais : "Colombia"} , 1000000),
    new Empleado("Eliecer",38 , {calle: "L 1 # 38 " , ciudad : "Medellin" , pais : "Colombia"} , 2000000),
    new Empleado("Rosa",60 , {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"}, 2000000 ),
    new Empleado("Karen",45 ,  {calle: "L 1 # 38 " , ciudad : "Cartagena" , pais : "Estado Unidos"} , 2000000)
 ];

console.log("\n \n \n__________________Imprime Empleado _____________________\n ");
for (let i = 0; i < empleado.length; i++) {
    console.log(empleado[i].saludar());
    console.log("_______________________");
    console.log(" ")
}

//  Punto 15  Empresa que tenga la lista de empleado 
const empresa = new Empresa ();
const empleado_01 = new Empleado("JD -> prueba externa", 24 , {calle : "101", ciudad : "pasto", pais : "Col" },  777 ); // el empleado exteno del array 
empresa.addEmpleado(empleado_01);

for (let i = 6 ; i < empleado.length; i++) { // va  a recorer el array desde la [6] en adelante  
    empresa.addEmpleado(empleado[i]);
}

console.log("\n \n__________________Imprime los metodos de la clase Empresa _________________\n \n ");
empresa.listarEmpleado(); // imprime la lista de empleado 
console.log("\n____________ total de la nomina es : __________\n");
empresa.totalSalario(); // imprime el total de la nomina de la empresa 

// Se prueba la eliminacion de algunos datos 
const datoDelete = "Karen"; 
const datoDelete_01 = "Rosa"; 
const datoDelete_02 = "Eliecer"; 
const datoDelete_03 = "Kevin"; 

console.log("\nlos datos a eliminar son :  \n"  +  
    "1 : " + datoDelete     + " \n"  +
    "2 : " + datoDelete_01  + " \n"  +
    "3 : " + datoDelete_02  + " \n"  +
    "4 : " + datoDelete_03  + " \n"     );

    const re1 = empresa.deleteEmpleado(datoDelete);    // elimina un empleado de la clase --> empresa 
    const re2 = empresa.deleteEmpleado(datoDelete_01); // elimina un empleado de la clase --> empresa 
    const re3 = empresa.deleteEmpleado(datoDelete_02); // elimina un empleado de la clase --> empresa 
    const re4 = empresa.deleteEmpleado(datoDelete_03); // elimina un empleado de la clase --> empresa }

    if (re1 || re2 || re3 || re4) {
        empresa.listarEmpleado();  // -> solo va a imprimir el JD -> El empleado exteno del array  
    } else {
        console.log("######################  [Niguno se ecuentra en la lista ] #############################");
    }

    console.log("\n \n ___Total de la nueva nominada __________\n ");
    empresa.totalSalario(); // imprime el total de la nomina de la empresa 
    console.log("");

    //La clase proyecto   

    console.log("\n_______________clase Proyecto _____________")

   const proyecto_01 = new Proyecto("Aplicaciones Moviles  ", [empleado_01] ); // -> proyecto externo 
   const proyecto_02 = new Proyecto("Desarrollo - Back End", [ empleado[2], empleado[3] , empleado[8] ]) ;
    
   proyecto_01.verProyecto();
   console.log("_____________________________");
   proyecto_02.verProyecto();

   console.log("\n \n");

