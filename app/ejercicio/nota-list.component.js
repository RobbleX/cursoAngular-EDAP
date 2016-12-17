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
var nota_list_service_1 = require('./nota-list.service');
var router_1 = require('@angular/router');
var NotaListComponent = (function () {
    function NotaListComponent(notaListService, _router) {
        this._router = _router;
        this.notaListService = notaListService;
    }
    NotaListComponent.prototype.ngOnInit = function () {
        this.notas = this.notaListService.getNotas();
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
            template: "\n    <span  [ngStyle]=\"{'font-size': '1.2em'}\" >Buscar:</span>\n    <input type=\"text\" [(ngModel)]=\"busqueda\" />\n    <h1>NOTAS</h1>\n    <ul>\n     <li *ngFor=\"let nota of buscar(notas,busqueda)\">\n      <nav>\n        <h2><a [routerLink]=\"['notaDetail',nota.id]\">{{nota.titulo}}</a></h2>\n      </nav>\n      <p [ngStyle]=\"{'font-size': '0.8em'}\">{{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>\n      <p>{{nota.contenido}}</p>\n    </li>\n    </ul>\n    ",
            providers: [nota_list_service_1.NotaListService]
        }), 
        __metadata('design:paramtypes', [nota_list_service_1.NotaListService, router_1.Router])
    ], NotaListComponent);
    return NotaListComponent;
}());
exports.NotaListComponent = NotaListComponent;
//# sourceMappingURL=nota-list.component.js.map