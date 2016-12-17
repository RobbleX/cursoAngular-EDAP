"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var mock_notas = [
    {
        id: 0,
        titulo: "Nota 1",
        autor: "Pepe",
        fecha: new Date(2016, 1, 12, 0, 0, 0, 0),
        contenido: "En un lugar de La Mancha"
    },
    {
        id: 1,
        titulo: "Nota 2",
        autor: "Juan",
        fecha: new Date(2016, 1, 12, 0, 0, 0, 0),
        contenido: "Cuyo nombre no quiero acordarme"
    },
    {
        id: 2,
        titulo: "Nota 3",
        autor: "Lola",
        fecha: new Date(2016, 2, 12, 0, 0, 0, 0),
        contenido: "No ha mucho tiempo que vivía"
    },
    {
        id: 3,
        titulo: "Nota 4",
        autor: "Fulanico",
        fecha: new Date(2016, 3, 12, 0, 0, 0, 0),
        contenido: "Un hidalgo de los de lanza en astiellero"
    },
    {
        id: 4,
        titulo: "Nota 5",
        autor: "Menganico",
        fecha: new Date(2016, 6, 12, 0, 0, 0, 0),
        contenido: "Rocín flaco, aderga antigua y galgo corredor"
    },
    {
        id: 5,
        titulo: "Nota 6",
        autor: "El del butano",
        fecha: new Date(2016, 3, 12, 0, 0, 0, 0),
        contenido: "Una olla algo más de vaca que de carnero"
    },
    {
        id: 6,
        titulo: "Nota 7",
        autor: "La pescatera",
        fecha: new Date(2016, 5, 12, 0, 0, 0, 0),
        contenido: "Salpicón las más noches"
    },
    {
        id: 7,
        titulo: "Nota 8",
        autor: "La chiquilla de la Juani",
        fecha: new Date(2016, 1, 12, 0, 0, 0, 0),
        contenido: "Duelos y quebrantos los sábados"
    }
];
var NotaListService = (function () {
    function NotaListService(_http) {
        this._http = _http;
        this.url_list_notas = '/notas/';
        this.url_get_nota = '/notas';
        this.url_new_nota = '/notaDetail';
        this.url_update_nota = '/notaDetail';
    }
    NotaListService.prototype.getNotas = function () {
        return mock_notas.concat([]);
    };
    NotaListService.prototype.getNota = function (id) {
        var filtrado = mock_notas.filter(function (n) { return n.id === id; });
        return (filtrado.length && filtrado.pop()) || null;
    };
    NotaListService.prototype.updateNota = function (nota) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url_update_nota, nota, { headers: headers });
    };
    NotaListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotaListService);
    return NotaListService;
}());
exports.NotaListService = NotaListService;
//# sourceMappingURL=nota-list.service.js.map