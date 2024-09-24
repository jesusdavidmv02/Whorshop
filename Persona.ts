export class Persona {
    
    nombre: string = "";
    private edad: number = 0;
    

    constructor(nombre : string , edad : number)  {
        this.nombre = nombre
        this.edad= edad
    }
    
    getEdad(): number {
        return this.edad;
    }
    
    
    saludar(): void{
        console.log(`Tu nombre es : ${this.nombre}  y tiene : ${this.edad} años`);
    }   
    
}