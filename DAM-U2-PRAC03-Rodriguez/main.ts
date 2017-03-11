import {Cadena} from './cadena';
import {Operaciones} from './operaciones';
//Operaciones
let op=new Operaciones() ;
console.log(op.resSum(15,20));
console.log(op.resFac(8));
console.log(op.resPri(4));
console.log(op.resFac(5));
//Cadenas
let cadPalindroma=new Cadena("oso");
console.log(cadPalindroma.esPalindromo);
let cadNoPalindroma=new Cadena("Rosas");
console.log(cadNoPalindroma.esPalindromo);

let cadena=new Cadena("Estrella estrellada")
console.log(cadena.contarVoc);
console.log(cadena.contarLet);
console.log(cadena.contarPal);
