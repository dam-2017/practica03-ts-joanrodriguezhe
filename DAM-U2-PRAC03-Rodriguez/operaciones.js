"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.resSum = function (n1, n2) {
        return n1 + n2;
    };
    Operaciones.prototype.resRes = function (n1, n2) {
        return n1 - n2;
    };
    Operaciones.prototype.resFac = function (n1) {
        this.aux = 1;
        for (this.x = 1; this.x <= n1; this.x++) {
            this.aux *= this.x;
        }
        return this.aux;
    };
    Operaciones.prototype.resPri = function (n1) {
        this.aux = 0;
        for (this.x = 1; this.x <= n1; this.x++) {
            if (n1 % this.x == 0) {
                this.aux++;
            }
        }
        if (this.aux > 2) {
            return "El n\u00FAmero " + n1 + " no es primo";
        }
        return "El n\u00FAmero " + n1 + " es primo";
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
