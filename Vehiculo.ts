export abstract class Vehiculo {
    arrancar():void{

    }
}

export class Moto extends Vehiculo {

    arrancar():void{
        console.log("Esta arancado la Moto " );
    }
    
}

export class Carro extends Vehiculo {

    arrancar():void{
        console.log("Esta arancado la Carro " );
    }
    
}

