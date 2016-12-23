import { Component, OnInit } from '@angular/core';
import { Anotable } from './nota.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotaListService } from './nota-list.service';

@Component({
  selector: 'nota-detail',
  template: `
    <h1> {{nota.titulo}} </h1>
    <p> {{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>
    <p> {{nota.conetnido}}</p>
    <nav>
      <h2><a [routerLink]="['notaEdit',nota.id]">Editar </a></h2>
      <h2><a [routerLink]="['*']">Volver </a></h2>
    </nav>
  `,
  providers:[NotaListService]
})

export class NotaDetailComponent implements OnInit{
  private nota: Anotable;
  private id : number;
  private params_sub : any;

  constructor(
    private _route : ActivatedRoute, //Este Servicio nos permitirá acceder y operar sobre la ruta activa
    private _router : Router, // Este Servicio nos permite navegar
    private _notaListService : NotaListService
  ){}

	ngOnInit() {
		this.params_sub = this._route.params.subscribe( params => {
			let id : number = parseInt(params['id']);
			this.loadNota(id);
		});
	}


	loadNota(id:number) {
		this.nota = this._notaListService.getNota(id);
	}
}
