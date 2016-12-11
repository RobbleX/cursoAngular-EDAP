"use strict";
var Nota = (function () {
    function Nota(titulo, autor, fecha, contenido) {
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
        this.contenido = contenido;
    }
    Nota.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Nota.prototype.getTitulo = function () {
        return this.titulo;
    };
    Nota.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Nota.prototype.getFecha = function () {
        return this.fecha;
    };
    Nota.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Nota.prototype.getAutor = function () {
        return this.autor;
    };
    Nota.prototype.setContenido = function (contenido) {
        this.contenido = contenido;
    };
    Nota.prototype.getContenido = function () {
        return this.contenido;
    };
    return Nota;
}());
exports.Nota = Nota;
//# sourceMappingURL=nota.model.js.map