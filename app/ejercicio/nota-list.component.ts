import { Component, OnInit } from '@angular/core';
import { Nota } from './nota.model';

@Component({
  selector: 'nota-list',
  template: `
    <span  [ngStyle]="{'font-size': '1.2em'}" >Buscar:</span>
    <input type="text" [(ngModel)]="busqueda" />
    <h1>NOTAS</h1>
    <ul>
     <li *ngFor="let nota of buscar(notas,busqueda)">
      <nav>
        <h2><a [routerLink]="['./notaDetail', nota.id']">{{nota.titulo}}</a></h2>
      </nav>
      <p [ngStyle]="{'font-size': '0.8em'}">{{nota.autor}} {{nota.fecha | date:'(dd/MMM/yyyy)'}} </p>
      <p>{{nota.contenido}}</p>
    </li>
    </ul>
    `
})

export class NotaListComponent implements OnInit{
  notas: Array<Nota>;
  busqueda: string;

  ngOnInit() {
    let nota1 = new Nota('Nota 1',"Pepe",new Date(2016,1,1,0,0,0,0,),"Primera nota") ;
    let nota2 = new Nota("Nota 2" , "Juan", new Date(2016,1,2,0,0,0,0,), "Segunda nota") ;

    this.notas = [nota1, nota2]
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
    let notasCoincidentes: Array<Nota> = new Array<Nota>() ;
    for (let nota of notas){
      if (this.mostrarNota(nota, busqueda)){
        notasCoincidentes.push(nota)
      }
    }
    return notasCoincidentes;
  }
}
