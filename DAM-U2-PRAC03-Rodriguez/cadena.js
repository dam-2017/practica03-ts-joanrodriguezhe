"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cad = cad;
    }
    Object.defineProperty(Cadena.prototype, "esPalindromo", {
        get: function () {
            var x = (this.cad.toLowerCase()).replace(" ", "");
            var arr = x.split("");
            for (var i = 0, t = arr.length - 1; i < arr.length; i++, t--) {
                if (arr[i] != arr[t]) {
                    return this.cad + " no es palindromo";
                }
            }
            return this.cad + " es palindromo";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contarVoc", {
        get: function () {
            var a;
            var e;
            var i;
            var o;
            var u;
            a = this.cad.toLowerCase().split("a");
            e = this.cad.toLowerCase().split("e");
            i = this.cad.toLowerCase().split("i");
            o = this.cad.toLowerCase().split("o");
            u = this.cad.toLowerCase().split("u");
            return "a=" + (a.length - 1) + "\n e=" + (e.length - 1) + "\n i=" + (i.length - 1) + "\n o=" + (o.length - 1) + "\n u=" + (u.length - 1) + "\n ";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contarLet", {
        get: function () {
            var letras = (this.cad.toLowerCase()).replace(" ", "");
            return letras.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "contarPal", {
        get: function () {
            var ar = this.cad.split(" ");
            return ar.length;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
