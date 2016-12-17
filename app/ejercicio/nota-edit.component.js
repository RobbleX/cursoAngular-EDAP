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
var NotaEditComponent = (function () {
    function NotaEditComponent(_notaListService, _router) {
        this._notaListService = _notaListService;
        this._router = _router;
    }
    NotaEditComponent.prototype.ngOnInit = function () {
        this.nota = {
            id: 0,
            titulo: '',
            autor: '',
            fecha: new Date(),
            contenido: ''
        };
    };
    NotaEditComponent.prototype.onSubmitEditor = function () {
        var _this = this;
        this._notaListService
            .updateNota(this.nota)
            .toPromise()
            .then(function (result) {
            console.log('Nueva nota creada');
            console.log(result);
            _this._router.navigate(['/']);
        })
            .catch(function (err) { return console.error(err); });
    };
    NotaEditComponent = __decorate([
        core_1.Component({
            selector: 'nota-edit',
            templateUrl: "./templates/nota-edit.component.html",
            providers: [nota_list_service_1.NotaListService]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [nota_list_service_1.NotaListService, router_1.Router])
    ], NotaEditComponent);
    return NotaEditComponent;
}());
exports.NotaEditComponent = NotaEditComponent;
//# sourceMappingURL=nota-edit.component.js.map