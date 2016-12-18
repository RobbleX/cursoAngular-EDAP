import { Component, OnInit } from '@angular/core';
import { Nota, Anotable } from './nota.model';
import { NotaListService } from './nota-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nota-list',
  template: `
    <span  [ngStyle]="{'font-size': '1.2em'}" >Buscar:</span>
    <input type="text" [(ngModel)]="busqueda" />
    <h1>NOTAS</h1>
    <ul>
     <li *ngFor="let nota of buscar(notas,busqueda)">
      <nav>
        <h2><a [routerLink]="['notaDetail',nota.id]">{{nota.titulo}}</a></h2>
      </nav>
      <p [ngStyle]="{'font-size': '0.8em'}">{{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>
      <p>{{nota.contenido}}</p>
    </li>
    </ul>
    `,
    providers: [NotaListService]
})

export class NotaListComponent implements OnInit{
  notas: Array<Anotable>;
  busqueda: string;
  notaListService: NotaListService;

  constructor(notaListService: NotaListService, private _router: Router){
    this.notaListService = notaListService;
  }

  ngOnInit() {
    this.notas = this.notaListService.getNotas();
  }

   // Determina si se debe mostrar una nota en función de la búsqueda
   mostrarNota( nota, busqueda ){
    if (busqueda !=="" && busqueda != undefined) {
      let busquedaUpper: string = busqueda.toUpperCase();
      return  nota.titulo.toUpperCase().indexOf(busquedaUpper) >= 0 ||
              nota.contenido.toUpperCase().indexOf(busquedaUpper) >= 0;
    }
    return true;
  }

 // Busca las notas que coincidan con la búsqueda
  buscar(notas, busqueda){
    let notasCoincidentes: Array<Anotable> = new Array<Anotable>() ;
    for (let nota of notas){
      if (this.mostrarNota(nota, busqueda)){
        notasCoincidentes.push(nota)
      }
    }
    return notasCoincidentes;
  }
}
