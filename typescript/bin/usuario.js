"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario = /** @class */ (function () {
    /*nombre: string;
    apellidos: string;
    edad: number;

    constructor(nombre: string, apellidos: string, edad: number, opcional?:any){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        console.log(opcional);
    }*/
    function Usuario(nombre, apellidos, edad, opcional) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.opcional = opcional;
    }
    Usuario.prototype.hablar = function (frase) {
        console.log(frase);
    };
    Usuario.prototype.andar = function (velocidad) {
        console.log("Estoy andando a " + velocidad);
    };
    return Usuario;
}());
exports.Usuario = Usuario;
