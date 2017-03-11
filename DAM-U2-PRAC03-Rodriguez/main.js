"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
//Operaciones
var op = new operaciones_1.Operaciones();
console.log(op.resSum(15, 20));
console.log(op.resFac(8));
console.log(op.resPri(4));
console.log(op.resFac(5));
//Cadenas
var cadPalindroma = new cadena_1.Cadena("oso");
console.log(cadPalindroma.esPalindromo);
var cadNoPalindroma = new cadena_1.Cadena("Rosas");
console.log(cadNoPalindroma.esPalindromo);
var cadena = new cadena_1.Cadena("Estrella estrellada");
console.log(cadena.contarVoc);
console.log(cadena.contarLet);
console.log(cadena.contarPal);
