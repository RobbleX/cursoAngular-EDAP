"use strict";
var Nota = (function () {
    function Nota(id, titulo, autor, fecha, contenido) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.fecha = fecha;
        this.contenido = contenido;
    }
    return Nota;
}());
exports.Nota = Nota;
//# sourceMappingURL=nota.model.js.map