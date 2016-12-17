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
var nota_model_1 = require('./nota.model');
var NotaListComponent = (function () {
    function NotaListComponent() {
    }
    NotaListComponent.prototype.ngOnInit = function () {
        var nota1 = new nota_model_1.Nota('Nota 1', "Pepe", new Date(2016, 1, 1, 0, 0, 0, 0), "Primera nota");
        var nota2 = new nota_model_1.Nota("Nota 2", "Juan", new Date(2016, 1, 2, 0, 0, 0, 0), "Segunda nota");
        this.notas = [nota1, nota2];
    };
    // Determina si se debe mostrar una nota en función de la búsqueda
    NotaListComponent.prototype.mostrarNota = function (nota, busqueda) {
        if (busqueda !== "" && busqueda != undefined) {
            var busquedaUpper = busqueda.toUpperCase();
            return nota.titulo.toUpperCase().indexOf(busquedaUpper) >= 0 ||
                nota.contenido.toUpperCase().indexOf(busquedaUpper) >= 0;
        }
        return true;
    };
    // Busca las notas que coincidan con la búsqueda
    NotaListComponent.prototype.buscar = function (notas, busqueda) {
        var notasCoincidentes = new Array();
        for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
            var nota = notas_1[_i];
            if (this.mostrarNota(nota, busqueda)) {
                notasCoincidentes.push(nota);
            }
        }
        return notasCoincidentes;
    };
    NotaListComponent = __decorate([
        core_1.Component({
            selector: 'nota-list',
            template: "\n    <span  [ngStyle]=\"{'font-size': '1.2em'}\" >Buscar:</span>\n    <input type=\"text\" [(ngModel)]=\"busqueda\" />\n    <h1>NOTAS</h1>\n    <ul>\n     <li *ngFor=\"let nota of buscar(notas,busqueda)\">\n      <nav>\n        <h2><a [routerLink]=\"['./notaDetail', nota.id']\">{{nota.titulo}}</a></h2>\n      </nav>\n      <p [ngStyle]=\"{'font-size': '0.8em'}\">{{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>\n      <p>{{nota.contenido}}</p>\n    </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NotaListComponent);
    return NotaListComponent;
}());
exports.NotaListComponent = NotaListComponent;
//# sourceMappingURL=nota-list.component.js.map