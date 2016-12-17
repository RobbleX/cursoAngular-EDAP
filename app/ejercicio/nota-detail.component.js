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
var router_1 = require('@angular/router');
var nota_list_service_1 = require('./nota-list.service');
var NotaDetailComponent = (function () {
    function NotaDetailComponent(_route, //Este Servicio nos permitirá acceder y operar sobre la ruta activa
        _router, // Este Servicio nos permite navegar
        _notaListService) {
        this._route = _route;
        this._router = _router;
        this._notaListService = _notaListService;
    }
    NotaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params_sub = this._route.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.loadNota(id);
        });
    };
    NotaDetailComponent.prototype.loadNota = function (id) {
        this.nota = this._notaListService.getNota(id);
    };
    NotaDetailComponent = __decorate([
        core_1.Component({
            selector: 'nota-detail',
            templateUrl: '/app/ejercicio/templates/nota-detail.component.html',
            providers: [nota_list_service_1.NotaListService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, nota_list_service_1.NotaListService])
    ], NotaDetailComponent);
    return NotaDetailComponent;
}());
exports.NotaDetailComponent = NotaDetailComponent;
//# sourceMappingURL=nota-detail.component.js.map