import { Persona } from './persona';

export class Usuario implements Persona{
    /*nombre: string;
    apellidos: string;
    edad: number;

    constructor(nombre: string, apellidos: string, edad: number, opcional?:any){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        console.log(opcional);
    }*/

    constructor(
        public nombre: string, 
        public apellidos: string, 
        public edad: number, 
        public opcional?:any){
    }

    hablar(frase: string): void{
        console.log(frase);
    }

    andar(velocidad: number): void{
        console.log(`Estoy andando a ${velocidad}`);
    }
}