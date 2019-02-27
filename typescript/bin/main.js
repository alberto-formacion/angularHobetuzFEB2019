"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = require("./usuario");
var usuario = new usuario_1.Usuario('a', 'b', 3);
usuario.hablar('hola');
console.log(usuario.nombre);
